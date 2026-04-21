
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Heart, Zap, ShieldCheck, Users, Headphones, Star, ArrowRight } from 'lucide-react';

const WomensCell: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-accent1 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="container mx-auto px-6 relative z-10 animate-fade-up text-center lg:text-left">
          <nav className="flex items-center justify-center lg:justify-start gap-2 text-white/50 text-xs mb-8 uppercase font-black tracking-widest">
            <Link to="/" className="hover:text-secondary">Home</Link> 
            <ChevronRight size={14} /> 
            <span className="text-white opacity-100">Women's Cell</span>
          </nav>
          <div className="flex flex-col lg:flex-row items-center gap-12">
             <div className="lg:w-2/3">
                <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">Safety, Dignity <br/><span className="text-secondary">& Equality</span></h1>
                <p className="text-xl text-white/70 max-w-2xl leading-relaxed">The Women’s Empowerment Cell at KCMS is dedicated to creating a secure and flourishing environment for all female students and staff.</p>
             </div>
             <div className="lg:w-1/3">
                <div className="bg-white/10 backdrop-blur-xl p-12 rounded-[4rem] border border-white/20 shadow-2xl relative overflow-hidden group">
                   <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl group-hover:scale-150 transition-transform"></div>
                   <Heart size={64} className="text-secondary mb-8" />
                   <h3 className="text-2xl font-black mb-4 italic">"Lead Like a Woman"</h3>
                   <p className="text-sm opacity-60">Empowering the leaders of tomorrow.</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Initiatives */}
      <section className="py-32 container mx-auto px-6">
         <div className="text-center mb-24">
            <h2 className="text-accent1 text-xs font-black uppercase tracking-widest mb-4">Focus Areas</h2>
            <h3 className="text-4xl font-black text-primary">Gender Sensitization & Empowerment</h3>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: <Zap />, title: 'Self-Defense', desc: 'Quarterly martial arts and physical safety workshops for all girl students.' },
              { icon: <Users />, title: 'Leadership Summits', desc: 'Networking opportunities with successful women leaders from the corporate world.' },
              { icon: <ShieldCheck />, title: 'Safe Campus', desc: 'Dedicated CCTV monitoring and female security personnel in all blocks.' }
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 p-12 rounded-[3.5rem] border border-gray-100 hover:shadow-2xl transition-all group">
                 <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-accent1 mb-8 shadow-sm group-hover:bg-accent1 group-hover:text-white transition-all">
                    {React.cloneElement(item.icon as React.ReactElement<any>, { size: 30 })}
                 </div>
                 <h4 className="text-2xl font-black text-primary mb-4">{item.title}</h4>
                 <p className="text-neutralText text-lg leading-relaxed">{item.desc}</p>
              </div>
            ))}
         </div>
      </section>

      {/* Internal Complaints Committee */}
      <section className="py-32 bg-gray-50">
         <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
               <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-accent1/10 rounded-full blur-3xl"></div>
               <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80" className="rounded-[4rem] shadow-2xl relative z-10" alt="Empowerment" />
            </div>
            <div className="animate-fade-up">
               <h3 className="text-4xl font-black text-primary mb-10 leading-tight">Internal Complaints Committee (ICC)</h3>
               <p className="text-lg text-neutralText leading-loose mb-10 text-justify">
                  In compliance with the Sexual Harassment of Women at Workplace Act (2013), KCMS has a robust ICC. Any grievance related to harassment or discrimination is dealt with strict confidentiality and within 48 hours of filing.
               </p>
               <div className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-xl">
                  <div className="flex items-center gap-6 mb-8">
                     <div className="w-16 h-16 bg-accent1 rounded-full flex items-center justify-center text-white"><Headphones /></div>
                     <div>
                        <div className="font-black text-primary text-xl">Confidential Helpline</div>
                        <div className="text-secondary font-bold">Available 24/7</div>
                     </div>
                  </div>
                  <div className="text-3xl font-black text-primary">+91 98765 43213</div>
               </div>
            </div>
         </div>
      </section>

      {/* Awareness Calendar */}
      <section className="py-32 container mx-auto px-6">
         <div className="text-center mb-20">
            <h2 className="text-accent1 text-xs font-black uppercase tracking-widest mb-4">Event Calendar</h2>
            <h3 className="text-4xl font-black text-primary">Celebrate Progress</h3>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-8 items-center p-8 bg-gray-50 rounded-3xl border border-gray-100">
               <div className="text-5xl font-black text-accent1 opacity-20">MAR</div>
               <div>
                  <h4 className="font-black text-primary">International Women's Day</h4>
                  <p className="text-sm text-neutralText/60">Annual gala and award ceremony for female high-achievers.</p>
               </div>
            </div>
            <div className="flex gap-8 items-center p-8 bg-gray-50 rounded-3xl border border-gray-100">
               <div className="text-5xl font-black text-accent1 opacity-20">OCT</div>
               <div>
                  <h4 className="font-black text-primary">Pink Month (Health Awareness)</h4>
                  <p className="text-sm text-neutralText/60">Workshops on breast cancer awareness and health checkups.</p>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
};

export default WomensCell;
