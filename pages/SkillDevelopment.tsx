
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Award, Zap, Laptop, Users, Briefcase, TrendingUp, CheckCircle, ShieldCheck, Target, ArrowRight } from 'lucide-react';

const SkillDevelopment: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const certificationPaths = [
    { title: 'ERP & SAP Training', tech: 'Management', icon: <Briefcase /> },
    { title: 'Full Stack Dev', tech: 'Technical', icon: <Laptop /> },
    { title: 'Data Analytics', tech: 'Emerging', icon: <TrendingUp /> },
    { title: 'FinTech Hub', tech: 'Specialized', icon: <Zap /> },
  ];

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-primary text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="container mx-auto px-6 relative z-10 animate-fade-up">
          <nav className="flex items-center gap-2 text-white/50 text-xs mb-8 uppercase font-black tracking-widest">
            <Link to="/" className="hover:text-secondary transition-colors">Home</Link> 
            <ChevronRight size={14} /> 
            <span className="text-white opacity-100">Skill Development</span>
          </nav>
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">Future-Proof <br/><span className="text-secondary">Your Career</span></h1>
          <p className="text-xl text-white/70 max-w-2xl leading-relaxed">Bridge the gap between campus and corporate with our 360-degree professional training programs.</p>
        </div>
      </section>

      {/* CCD Center */}
      <section className="py-32 container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-secondary/10 rounded-[4rem] group-hover:rotate-3 transition-transform"></div>
            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80" className="rounded-[4rem] shadow-2xl relative z-10 w-full" alt="CCD Center" />
          </div>
          <div className="animate-fade-up">
            <h2 className="text-primary text-xs font-black uppercase tracking-widest mb-6">Center for Career Development</h2>
            <h3 className="text-4xl font-black text-primary mb-8 leading-tight">The CCD Edge</h3>
            <p className="text-lg text-neutralText leading-relaxed mb-10 text-justify">
              Our dedicated Skill Development Cell (CCD) works tirelessly to ensure students are not just degree holders, but industry assets. We focus on the "Triple Threat" of modern hiring: Technical Depth, Soft Skill Agility, and Ethical Leadership.
            </p>
            <div className="space-y-4">
              {['Soft Skills & EQ Workshops', 'Quantitative Aptitude & Reasoning', 'Mock Interviews with CXOs', 'Personality Grooming'].map((item, i) => (
                <div key={i} className="flex items-center gap-4 font-bold text-primary">
                  <CheckCircle className="text-secondary" size={22} /> {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-32 bg-gray-50">
         <div className="container mx-auto px-6">
            <div className="text-center mb-20">
               <h2 className="text-primary text-xs font-black uppercase tracking-widest mb-4">Value Added Courses</h2>
               <h3 className="text-4xl font-black text-primary">Integrated Certifications</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
               {certificationPaths.map((path, i) => (
                 <div key={i} className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-lg hover:shadow-2xl transition-all group text-center">
                    <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:bg-secondary group-hover:text-white transition-all">
                       {React.cloneElement(path.icon as React.ReactElement<any>, { size: 28 })}
                    </div>
                    <div className="text-xs font-black text-secondary uppercase mb-2 tracking-widest">{path.tech}</div>
                    <h4 className="text-xl font-black text-primary mb-6">{path.title}</h4>
                    <button className="text-primary font-black uppercase text-[10px] tracking-widest border-b-2 border-secondary pb-1">View Curriculum</button>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Placement Training */}
      <section className="py-32 container mx-auto px-6">
         <div className="bg-primary text-white p-12 md:p-20 rounded-[4rem] flex flex-col md:flex-row items-center gap-16 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-32 h-32 bg-secondary rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl opacity-40"></div>
            <div className="md:w-2/3">
               <h3 className="text-4xl font-black mb-6 italic">Guaranteed Career Trajectory</h3>
               <p className="text-xl text-white/60 mb-10 leading-relaxed">Our 3-stage placement readiness program starts from Semester 1, ensuring you are corporate-ready well before graduation.</p>
               <div className="grid grid-cols-3 gap-6">
                  <div>
                     <div className="text-3xl font-black text-secondary mb-1">95%</div>
                     <div className="text-[10px] uppercase font-bold opacity-40">Success Rate</div>
                  </div>
                  <div>
                     <div className="text-3xl font-black text-secondary mb-1">500+</div>
                     <div className="text-[10px] uppercase font-bold opacity-40">Recruiters</div>
                  </div>
                  <div>
                     <div className="text-3xl font-black text-secondary mb-1">12 LPA</div>
                     <div className="text-[10px] uppercase font-bold opacity-40">Highest Pkg</div>
                  </div>
               </div>
            </div>
            <div className="md:w-1/3">
               <button onClick={() => window.dispatchEvent(new CustomEvent('open-apply-modal'))} className="w-full bg-secondary text-white py-6 rounded-2xl font-black text-lg hover:bg-white hover:text-primary transition-all shadow-xl flex items-center justify-center gap-3">
                  Enroll in CCD <ArrowRight />
               </button>
            </div>
         </div>
      </section>
    </div>
  );
};

export default SkillDevelopment;
