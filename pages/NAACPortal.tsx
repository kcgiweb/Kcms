
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Award, ShieldCheck, FileText, CheckCircle, ArrowRight, BarChart, History } from 'lucide-react';

const NAACPortal: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const criteria = [
    { id: '01', title: 'Curricular Aspects', desc: 'Syllabus design, feedback systems, and academic flexibility.' },
    { id: '02', title: 'Teaching-Learning', desc: 'Student profile, faculty quality, and evaluation processes.' },
    { id: '03', title: 'Research & Innovation', desc: 'Promoting research culture, consultancy, and extension.' },
    { id: '04', title: 'Infrastructure', desc: 'Learning resources, IT infrastructure, and maintenance.' },
    { id: '05', title: 'Student Support', desc: 'Progression, alumni engagement, and student participation.' },
    { id: '06', title: 'Governance', desc: 'Institutional vision, leadership, and financial management.' },
    { id: '07', title: 'Best Practices', desc: 'Institutional values, distinctiveness, and social responsibility.' }
  ];

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-primary text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="container mx-auto px-6 relative z-10 animate-fade-up text-center lg:text-left">
          <nav className="flex items-center justify-center lg:justify-start gap-2 text-white/50 text-xs mb-8 uppercase font-black tracking-widest">
            <Link to="/" className="hover:text-secondary">Home</Link> 
            <ChevronRight size={14} /> 
            <span className="text-white opacity-100">NAAC Portal</span>
          </nav>
          <div className="flex flex-col lg:flex-row items-center gap-12">
             <div className="lg:w-2/3">
                <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">National <span className="text-secondary">Accreditation</span> Hub</h1>
                <p className="text-xl text-white/70 max-w-2xl leading-relaxed">Centralized repository for NAAC documentation, Self-Study Reports (SSR), and Quality Assessment metrics.</p>
             </div>
             <div className="lg:w-1/3">
                <div className="bg-white p-10 rounded-[3rem] shadow-2xl text-primary transform lg:rotate-3">
                   <Award size={64} className="text-secondary mb-6 mx-auto" />
                   <div className="text-3xl font-black mb-1">Cycle 2</div>
                   <div className="text-xs font-bold uppercase tracking-widest opacity-40">Accreditation Status</div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Criteria Grid */}
      <section className="py-32 container mx-auto px-6">
         <div className="text-center mb-24">
            <h2 className="text-primary text-xs font-black uppercase tracking-widest mb-4">NAAC Framework</h2>
            <h3 className="text-4xl font-black text-primary">The 7 Core Criteria</h3>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {criteria.map((item) => (
              <div key={item.id} className="bg-gray-50 p-10 rounded-[3rem] border border-gray-100 hover:border-primary/20 transition-all group">
                 <div className="text-5xl font-black text-primary/5 mb-6 group-hover:text-secondary/20 transition-colors">{item.id}</div>
                 <h4 className="text-xl font-black text-primary mb-4">{item.title}</h4>
                 <p className="text-neutralText text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
            {/* View Metrics CTA */}
            <div className="bg-primary p-10 rounded-[3rem] text-white flex flex-col justify-center items-center text-center shadow-2xl">
               <BarChart size={48} className="text-secondary mb-6" />
               <h4 className="text-xl font-black mb-4">View Extended Profile</h4>
               <button className="bg-secondary text-white px-6 py-2 rounded-lg text-xs font-black uppercase tracking-widest flex items-center gap-2 hover:bg-white hover:text-primary transition-all">
                  Access Portal <ArrowRight size={14} />
               </button>
            </div>
         </div>
      </section>

      {/* SSR Repository */}
      <section className="py-32 bg-gray-50">
         <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
               <h2 className="text-secondary text-xs font-black uppercase tracking-widest mb-6">Documentation Hub</h2>
               <h3 className="text-4xl font-black text-primary mb-10">Self-Study Reports & Documentation</h3>
               <p className="text-lg text-neutralText leading-relaxed mb-10">
                  Transparency is the hallmark of KCMS. We provide public access to our accreditation documents, including IIQA, SSR, and DVV (Data Validation and Verification) reports.
               </p>
               <div className="space-y-4">
                  {[
                    'Self Study Report (SSR) - 2024',
                    'IIQA Submission Records',
                    'DVV Clarification Log',
                    'Peer Team Visit Reports'
                  ].map((doc, i) => (
                    <div key={i} className="flex items-center justify-between p-6 bg-white rounded-3xl border border-gray-100 group hover:shadow-xl transition-all">
                       <div className="flex items-center gap-4">
                          <FileText className="text-primary" />
                          <span className="font-bold text-primary">{doc}</span>
                       </div>
                       <button className="text-secondary"><ShieldCheck /></button>
                    </div>
                  ))}
               </div>
            </div>
            <div>
               <div className="relative group">
                  <div className="absolute inset-0 bg-primary/10 rounded-[4rem] group-hover:rotate-2 transition-transform"></div>
                  <img src="https://images.unsplash.com/photo-1544640808-32ca72ac7f67?auto=format&fit=crop&q=80" className="rounded-[4rem] shadow-2xl relative z-10" alt="NAAC Documentation" />
               </div>
            </div>
         </div>
      </section>
    </div>
  );
};

export default NAACPortal;
