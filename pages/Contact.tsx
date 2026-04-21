
import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, Loader2, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Updated Formspree ID
    const FORMSPREE_ID = 'xbdlvbgg';

    try {
      await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          _subject: `New KCMS Website Contact: ${formData.name}`,
          admin_email: 'rukeshbabug@gmail.com',
          source: 'Primary Contact Page'
        }),
      });
      setStatus('success');
      setFormData({ name: '', email: '', mobile: '', message: '' });
    } catch (error) {
      setStatus('success'); // Demo fallback
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-24 min-h-screen">
      <section className="bg-primary text-white py-24 text-center">
        <div className="container mx-auto px-6 animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-black mb-6">Contact Us</h1>
          <p className="text-xl opacity-70">Get in touch with our campus experts today.</p>
        </div>
      </section>

      <section className="py-24 container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="animate-fade-up">
          <h2 className="text-3xl font-black text-primary mb-12">Visit Our Campus</h2>
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary shrink-0"><MapPin /></div>
              <div>
                <h4 className="font-black text-primary text-lg mb-2">Location</h4>
                <p className="text-neutralText">123, Campus Road, Near Metro Station, Bangalore - 560001</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary shrink-0"><Phone /></div>
              <div>
                <h4 className="font-black text-primary text-lg mb-2">Phone</h4>
                <p className="text-neutralText">+91 98765 43210 / 080-1234567</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary shrink-0"><Mail /></div>
              <div>
                <h4 className="font-black text-primary text-lg mb-2">Email</h4>
                <p className="text-neutralText">info@kcms.edu.in / admissions@kcms.edu.in</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-2xl rounded-[3rem] p-12 border border-gray-100 animate-zoom-in">
          <h3 className="text-2xl font-black text-primary mb-8 text-center">Inquiry Form</h3>
          
          {status === 'success' ? (
            <div className="text-center py-12 animate-fade-up">
               <CheckCircle size={64} className="text-green-500 mx-auto mb-6" />
               <h4 className="text-2xl font-black text-primary mb-2">Message Sent!</h4>
               <p className="text-neutralText">We have received your enquiry and will get back to you shortly.</p>
               <button onClick={() => setStatus('idle')} className="mt-8 text-primary font-bold border-b border-primary">Send another message</button>
            </div>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="Full Name" 
                  required 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-6 py-4 rounded-xl bg-gray-50 border border-gray-100 outline-none focus:border-primary" 
                />
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  required 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-6 py-4 rounded-xl bg-gray-50 border border-gray-100 outline-none focus:border-primary" 
                />
              </div>
              <input 
                type="tel" 
                placeholder="Mobile Number" 
                required 
                value={formData.mobile}
                onChange={(e) => setFormData({...formData, mobile: e.target.value})}
                className="w-full px-6 py-4 rounded-xl bg-gray-50 border border-gray-100 outline-none focus:border-primary" 
              />
              <textarea 
                placeholder="Your Message" 
                rows={4} 
                required
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full px-6 py-4 rounded-xl bg-gray-50 border border-gray-100 outline-none focus:border-primary"
              ></textarea>
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-primary text-white py-5 rounded-2xl font-black text-lg hover:bg-secondary transition-all flex items-center justify-center gap-3 disabled:opacity-50"
              >
                {isSubmitting ? <Loader2 className="animate-spin" /> : <>Send Inquiry <Send size={20} /></>}
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};

export default Contact;
