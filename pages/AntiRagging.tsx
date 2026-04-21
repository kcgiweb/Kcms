
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Shield, AlertTriangle, PhoneCall, Scale, Heart, ArrowRight, UserCheck } from 'lucide-react';

const AntiRagging: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-[#B91C1C] text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="container mx-auto px-6 relative z-10 animate-fade-up">
          <nav className="flex items-center gap-2 text-white/50 text-xs mb-8 uppercase font-black tracking-widest">
            <Link to="/" className="hover:text-secondary">Home</Link> 
            <ChevronRight size={14} /> 
            <span className="text-white opacity-100">Anti-Ragging Cell</span>
          </nav>
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">Zero Tolerance <br/><span className="text-secondary">Campus</span></h1>
          <p className="text-xl text-white/70 max-w-2xl leading-relaxed">Strict adherence to UGC and Government of India regulations. Ragging in any form is a punishable offense.</p>
        </div>
      </section>

      {/* Regulations */}
      <section className="py-32 container mx-auto px-6">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="animate-fade-up">
               <h2 className="text-[#B91C1C] text-xs font-black uppercase tracking-widest mb-6">UGC Regulations</h2>
               <h3 className="text-4xl font-black text-primary mb-8 leading-tight">What Constitutes Ragging?</h3>
               <div className="space-y-6 text-lg text-neutralText leading-relaxed">
                  <p>According to the UGC Regulations, ragging includes any act of physical or mental abuse (including bullying and exclusion) targeted at another student (fresher or otherwise).</p>
                  <ul className="space-y-4">
                     {[
                       'Teasing or treating with rudeness.',
                       'Indulging in rowdy or undisciplined activities.',
                       'Any act that prevents a student from attending classes.',
                       'Economic exploitation or extortion.',
                       'Physical abuse or assault in any form.'
                     ].map((item, i) => (
                       <li key={i} className="flex gap-4 items-center font-bold text-primary">
                          <AlertTriangle className="text-secondary" size={20} /> {item}
                       </li>
                     ))}
                  </ul>
               </div>
            </div>
            <div className="bg-gray-50 p-16 rounded-[4rem] border border-gray-100 relative shadow-2xl">
               <Scale size={120} className="text-primary/5 absolute top-10 right-10" />
               <h4 className="text-2xl font-black text-primary mb-8">Disciplinary Actions</h4>
               <p className="text-neutralText mb-10 leading-relaxed">Any student found guilty of ragging will be liable to the following actions as per UGC guidelines:</p>
               <div className="grid grid-cols-1 gap-4">
                  {['Suspension from classes', 'Expulsion from the hostel', 'Rustication from the institution', 'Filing of First Information Report (FIR)'].map((action, i) => (
                    <div key={i} className="p-6 bg-white rounded-3xl border border-gray-100 font-bold text-[#B91C1C] shadow-sm">
                       {i + 1}. {action}
                    </div>
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* Committee & Helpline */}
      <section className="py-32 bg-gray-50">
         <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-white p-12 rounded-[3rem] shadow-xl text-center">
               <PhoneCall size={64} className="text-secondary mx-auto mb-8" />
               <h4 className="text-2xl font-black text-primary mb-4">UGC Helpline</h4>
               <p className="text-neutralText text-sm mb-6">24/7 National Anti-Ragging Helpline Number:</p>
               <div className="text-3xl font-black text-primary">1800-180-5522</div>
            </div>
            <div className="bg-white p-12 rounded-[3rem] shadow-xl text-center">
               <Shield size={64} className="text-secondary mx-auto mb-8" />
               <h4 className="text-2xl font-black text-primary mb-4">KCMS Squad</h4>
               <p className="text-neutralText text-sm mb-6">On-campus Anti-Ragging Squad available 24/7:</p>
               <div className="text-xl font-black text-primary">+91 98765 43212</div>
            </div>
            <div className="bg-white p-12 rounded-[3rem] shadow-xl text-center">
               <UserCheck size={64} className="text-secondary mx-auto mb-8" />
               <h4 className="text-2xl font-black text-primary mb-4">Online Affidavit</h4>
               <p className="text-neutralText text-sm mb-10">Submit your anti-ragging affidavit online via the UGC portal.</p>
               <button className="bg-primary text-white px-8 py-3 rounded-full font-black text-xs uppercase tracking-widest hover:bg-secondary transition-all">
                  Submit Now <ArrowRight size={14} className="inline ml-2" />
               </button>
            </div>
         </div>
      </section>
    </div>
  );
};

export default AntiRagging;
