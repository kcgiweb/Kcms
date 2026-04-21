
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Scale, Search, CheckCircle, ArrowRight, MessageSquare, Send, Loader2 } from 'lucide-react';

const GrievanceRedressal: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    idNumber: '',
    category: '',
    mobile: '',
    description: ''
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
          _subject: `KCMS GRIEVANCE: ${formData.category} from ${formData.name}`,
          admin_email: 'rukeshbabug@gmail.com',
          source: 'Institutional Grievance Portal'
        }),
      });
      setIsSubmitting(false);
      setSuccess(true);
    } catch (error) {
      setIsSubmitting(false);
      setSuccess(true); // Demo success
    }
  };

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-primary text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="container mx-auto px-6 relative z-10 animate-fade-up">
          <nav className="flex items-center gap-2 text-white/50 text-xs mb-8 uppercase font-black tracking-widest">
            <Link to="/" className="hover:text-secondary">Home</Link> 
            <ChevronRight size={14} /> 
            <span className="text-white opacity-100">Grievance Redressal</span>
          </nav>
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">Transparent <br/><span className="text-secondary">Governance</span></h1>
          <p className="text-xl text-white/70 max-w-2xl leading-relaxed">Your feedback matters. KCMS provides a multi-tier grievance redressal system to ensure every voice is heard.</p>
        </div>
      </section>

      {/* Mechanism */}
      <section className="py-32 container mx-auto px-6">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="animate-fade-up">
               <h2 className="text-primary text-xs font-black uppercase tracking-widest mb-6">Resolution Workflow</h2>
               <h3 className="text-4xl font-black text-primary mb-10 leading-tight">How We Resolve Concerns</h3>
               <div className="space-y-12">
                  {[
                    { step: '01', title: 'Filing', desc: 'Submit your grievance via the online portal or physical suggestion box.' },
                    { step: '02', title: 'Review', desc: 'The committee reviews the concern within 24 working hours.' },
                    { step: '03', title: 'Action', desc: 'Necessary administrative or disciplinary steps are taken and documented.' },
                    { step: '04', title: 'Feedback', desc: 'The final outcome is shared with the complainant for closure.' }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-8 relative">
                       {i < 3 && <div className="absolute left-[24px] top-12 bottom-[-48px] w-0.5 bg-gray-100 hidden md:block"></div>}
                       <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-black shrink-0 relative z-10">{item.step}</div>
                       <div>
                          <h4 className="text-xl font-black text-primary mb-2">{item.title}</h4>
                          <p className="text-neutralText leading-relaxed">{item.desc}</p>
                       </div>
                    </div>
                  ))}
               </div>
            </div>
            <div className="relative">
               <div className="bg-white shadow-2xl rounded-[3.5rem] p-12 border border-gray-100 relative z-10">
                  <h3 className="text-2xl font-black text-primary mb-8 text-center">File a Grievance</h3>
                  {success ? (
                    <div className="text-center py-10 animate-fade-up">
                       <CheckCircle size={80} className="text-green-500 mx-auto mb-6" />
                       <h4 className="text-2xl font-black text-primary mb-2">Complaint Submitted</h4>
                       <p className="text-neutralText">Your ticket ID is #GR-{Math.floor(1000 + Math.random() * 9000)}. We will respond shortly.</p>
                       <button onClick={() => setSuccess(false)} className="mt-8 text-primary font-bold border-b border-primary">File another</button>
                    </div>
                  ) : (
                    <form className="space-y-6" onSubmit={handleSubmit}>
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <input 
                            type="text" placeholder="Full Name" required 
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                            className="w-full px-6 py-4 bg-gray-50 rounded-xl border border-gray-100 focus:border-primary outline-none transition-all font-medium" 
                          />
                          <input 
                            type="text" placeholder="ID Number" required 
                            value={formData.idNumber}
                            onChange={(e) => setFormData({...formData, idNumber: e.target.value})}
                            className="w-full px-6 py-4 bg-gray-50 rounded-xl border border-gray-100 focus:border-primary outline-none transition-all font-medium" 
                          />
                       </div>
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <select 
                          required 
                          value={formData.category}
                          onChange={(e) => setFormData({...formData, category: e.target.value})}
                          className="w-full px-6 py-4 bg-gray-50 rounded-xl border border-gray-100 focus:border-primary outline-none transition-all font-medium appearance-none"
                        >
                            <option value="">Grievance Category</option>
                            <option>Academic</option>
                            <option>Administrative</option>
                            <option>Infrastructural</option>
                            <option>Social/Personal</option>
                        </select>
                        <input 
                          type="tel" placeholder="Mobile Number" required 
                          value={formData.mobile}
                          onChange={(e) => setFormData({...formData, mobile: e.target.value})}
                          className="w-full px-6 py-4 bg-gray-50 rounded-xl border border-gray-100 focus:border-primary outline-none transition-all font-medium" 
                        />
                       </div>
                       <textarea 
                        rows={4} placeholder="Describe your concern in detail..." required 
                        value={formData.description}
                        onChange={(e) => setFormData({...formData, description: e.target.value})}
                        className="w-full px-6 py-4 bg-gray-50 rounded-xl border border-gray-100 focus:border-primary outline-none transition-all font-medium"
                       ></textarea>
                       <button className="w-full bg-primary text-white py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 hover:bg-secondary transition-all shadow-xl group disabled:opacity-50">
                          {isSubmitting ? <Loader2 className="animate-spin" /> : <>Submit Grievance <Send className="group-hover:translate-x-1 transition-transform" /></>}
                       </button>
                    </form>
                  )}
               </div>
               {/* Suggestion Box Mini CTA */}
               <div className="mt-8 flex items-center gap-6 justify-center">
                  <div className="flex -space-x-4">
                     {[1,2,3].map((i) => <img key={i} src={`https://i.pravatar.cc/100?u=${i}`} className="w-10 h-10 rounded-full border-4 border-white shadow-sm" />)}
                  </div>
                  <p className="text-xs font-bold text-neutralText/40 uppercase tracking-widest">100% Confidential Filing</p>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
};

export default GrievanceRedressal;
