
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Globe, Users, Award, Heart, ShieldCheck, ArrowRight, MessageSquare, Handshake, Zap, Star, Loader2, CheckCircle } from 'lucide-react';

const AlumniNetwork: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: ''
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
          _subject: `New KCMS Alumni Enrollment: ${formData.name}`,
          admin_email: 'rukeshbabug@gmail.com',
          source: 'Global Alumni Portal'
        }),
      });
      setIsSubmitting(false);
      setSuccess(true);
    } catch (error) {
      setIsSubmitting(false);
      setSuccess(true);
    }
  };

  const stories = [
    { name: 'Rahul Sharma', batch: '2018', role: 'Product Lead @ Google', img: 'https://i.pravatar.cc/150?u=r', text: 'KCMS gave me the technical foundation and the leadership confidence to compete on a global stage.' },
    { name: 'Sneha Patil', batch: '2020', role: 'Founder, EcoTech Solutions', img: 'https://i.pravatar.cc/150?u=s', text: 'The incubation cell at KCMS supported my startup idea when it was just a classroom project.' },
    { name: 'Mark Dsouza', batch: '2015', role: 'Operations Manager, Marriott', img: 'https://i.pravatar.cc/150?u=m', text: 'The Tourism department at KCMS is truly world-class. The industry connections here are unmatched.' },
  ];

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-primary text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80')] bg-cover bg-center"></div>
        <div className="container mx-auto px-6 relative z-10 animate-fade-up">
          <nav className="flex items-center gap-2 text-white/50 text-xs mb-8 uppercase font-black tracking-widest">
            <Link to="/" className="hover:text-secondary transition-colors">Home</Link> 
            <ChevronRight size={14} /> 
            <span className="text-white opacity-100">Alumni Network</span>
          </nav>
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">Legacy of <br/><span className="text-secondary">Excellence</span></h1>
          <p className="text-xl text-white/70 max-w-2xl leading-relaxed">Once a student, forever a part of the KCMS family. Our global network spans 15,000+ professionals across 30 countries.</p>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-24 container mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center animate-fade-up">
        <div className="p-10 bg-gray-50 rounded-[3rem] border border-gray-100">
          <div className="text-4xl font-black text-primary mb-2">15k+</div>
          <div className="text-xs font-bold text-neutralText/40 uppercase tracking-widest">Global Alumni</div>
        </div>
        <div className="p-10 bg-gray-50 rounded-[3rem] border border-gray-100">
          <div className="text-4xl font-black text-primary mb-2">30+</div>
          <div className="text-xs font-bold text-neutralText/40 uppercase tracking-widest">Countries</div>
        </div>
        <div className="p-10 bg-gray-50 rounded-[3rem] border border-gray-100">
          <div className="text-4xl font-black text-primary mb-2">200+</div>
          <div className="text-xs font-bold text-neutralText/40 uppercase tracking-widest">Entrepreneurs</div>
        </div>
        <div className="p-10 bg-gray-50 rounded-[3rem] border border-gray-100">
          <div className="text-4xl font-black text-primary mb-2">50+</div>
          <div className="text-xs font-bold text-neutralText/40 uppercase tracking-widest">Chapter Meets</div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-primary text-xs font-black uppercase tracking-widest mb-4">Hall of Fame</h2>
            <h3 className="text-4xl font-black text-primary">Inspiration in Action</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {stories.map((s, i) => (
              <div key={i} className="bg-white p-12 rounded-[3.5rem] shadow-xl hover:shadow-2xl transition-all relative group overflow-hidden">
                 <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-[4rem] group-hover:bg-secondary/10 transition-colors"></div>
                 <img src={s.img} className="w-24 h-24 rounded-full border-4 border-gray-50 mb-8 shadow-lg" alt={s.name} />
                 <p className="text-lg italic text-neutralText mb-8 leading-relaxed">"{s.text}"</p>
                 <div className="font-black text-primary text-xl">{s.name}</div>
                 <div className="text-secondary font-bold text-sm uppercase tracking-widest">Batch of {s.batch}</div>
                 <div className="mt-2 text-xs font-bold text-neutralText/40">{s.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alumni Benefits */}
      <section className="py-32 container mx-auto px-6">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="animate-fade-up">
               <h2 className="text-primary text-xs font-black uppercase tracking-widest mb-6">Why Join the Portal?</h2>
               <h3 className="text-4xl font-black text-primary mb-8 leading-tight">Stay Connected, Stay Ahead</h3>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[
                    { icon: <Users />, title: 'Networking', desc: 'Connect with seniors and peers in your industry.' },
                    { icon: <Handshake />, title: 'Mentorship', desc: 'Guide the next generation of KCMS leaders.' },
                    { icon: <Star />, title: 'Exclusive Events', desc: 'Invites to global alumni meets and summits.' },
                    { icon: <Zap />, title: 'Job Referrals', desc: 'Access an exclusive pool of job opportunities.' }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                       <div className="text-secondary">{React.cloneElement(item.icon as React.ReactElement<any>, { size: 24 })}</div>
                       <div>
                          <h4 className="font-bold text-primary mb-1">{item.title}</h4>
                          <p className="text-xs text-neutralText/60">{item.desc}</p>
                       </div>
                    </div>
                  ))}
               </div>
            </div>
            <div className="bg-primary p-12 md:p-16 rounded-[4rem] text-white shadow-2xl relative overflow-hidden">
               <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary rounded-full translate-y-1/2 translate-x-1/2 blur-3xl opacity-30"></div>
               <h4 className="text-3xl font-black mb-6">Register Now</h4>
               
               {success ? (
                 <div className="text-center py-10 animate-fade-up bg-white/10 rounded-3xl p-8 border border-white/20">
                    <CheckCircle size={64} className="text-secondary mx-auto mb-4" />
                    <h4 className="text-2xl font-black">Registration Sent</h4>
                    <p className="text-white/60">Welcome back to the family. We will verify and send your alumni ID shortly.</p>
                 </div>
               ) : (
                 <>
                  <p className="text-white/60 mb-10 leading-relaxed">Fill out the alumni enrollment form to receive your membership ID and access the portal.</p>
                  <form className="space-y-4" onSubmit={handleSubmit}>
                      <input 
                        type="text" placeholder="Full Name" required 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full px-6 py-4 bg-white/10 rounded-2xl border border-white/10 focus:bg-white/20 transition-all outline-none" 
                      />
                      <input 
                        type="email" placeholder="Personal Email" required 
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full px-6 py-4 bg-white/10 rounded-2xl border border-white/10 focus:bg-white/20 transition-all outline-none" 
                      />
                      <input 
                        type="tel" placeholder="Mobile Number" required 
                        value={formData.mobile}
                        onChange={(e) => setFormData({...formData, mobile: e.target.value})}
                        className="w-full px-6 py-4 bg-white/10 rounded-2xl border border-white/10 focus:bg-white/20 transition-all outline-none" 
                      />
                      <button className="w-full bg-secondary text-white py-5 rounded-2xl font-black text-lg hover:bg-white hover:text-primary transition-all shadow-xl flex items-center justify-center gap-3">
                        {isSubmitting ? <Loader2 className="animate-spin" /> : <>Join the Network <ArrowRight size={20} /></>}
                      </button>
                  </form>
                 </>
               )}
            </div>
         </div>
      </section>

      {/* Global Chapters */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-6 text-center">
          <h4 className="text-xs font-black text-neutralText/40 uppercase tracking-widest mb-12">Our Active Chapters</h4>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-30 grayscale grayscale-0 font-black text-2xl">
            <div>Bangalore</div>
            <div>Dubai</div>
            <div>London</div>
            <div>San Jose</div>
            <div>Singapore</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AlumniNetwork;
