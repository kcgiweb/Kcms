import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Microscope, Globe, Award, Mail, Linkedin, GraduationCap, Search, Star, Users } from 'lucide-react';

const FacultyProfile: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const [filter, setFilter] = useState('All');

  const faculty = [
    { name: 'Dr. Ramesh Kumar', role: 'Director - Academics', dept: 'Management', exp: '25+ Yrs', img: 'https://i.pravatar.cc/300?u=a', research: 'Behavioral Finance & Fintech' },
    { name: 'Mohammed Noor Ahmed', role: 'Principal', dept: 'Science', exp: '20+ Yrs', img: 'https://res.cloudinary.com/dejcpd56d/image/upload/v1767688052/IMG_4453-1152x1536_v0b6my.webp', research: 'Advanced Computing & Management' },
    { name: 'Mrs. Geetha Ramanal', role: 'Managing Trustee', dept: 'Administration', exp: '15+ Yrs', img: 'https://i.pravatar.cc/300?u=c', research: 'Institutional Governance' },
    { name: 'Dr. Anil Vishwas', role: 'Dean - Students', dept: 'Management', exp: '20+ Yrs', img: 'https://i.pravatar.cc/300?u=d', research: 'Operations Management' },
    { name: 'Prof. Sarah John', role: 'HOD - BCA', dept: 'Science', exp: '12+ Yrs', img: 'https://i.pravatar.cc/300?u=e', research: 'Full Stack Development' },
    { name: 'Dr. Vijay Bhaskar', role: 'Senior Professor', dept: 'Commerce', exp: '18+ Yrs', img: 'https://i.pravatar.cc/300?u=f', research: 'International Taxation' },
  ];

  const filteredFaculty = filter === 'All' ? faculty : faculty.filter(f => f.dept === filter);

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-primary text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="container mx-auto px-6 relative z-10 animate-fade-up">
          <nav className="flex items-center gap-2 text-white/50 text-xs mb-8 uppercase font-black tracking-widest">
            <Link to="/" className="hover:text-secondary transition-colors">Home</Link> 
            <ChevronRight size={14} /> 
            <span className="text-white opacity-100">Faculty Profiles</span>
          </nav>
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">Expert <br/><span className="text-secondary">Mentorship</span></h1>
          <p className="text-xl text-white/70 max-w-2xl leading-relaxed">Guided by a diverse team of PhD scholars, industry veterans, and passionate educators.</p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 container mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center animate-fade-up">
        <div className="p-10 bg-gray-50 rounded-[3rem] border border-gray-100">
          <div className="text-4xl font-black text-primary mb-2">50+</div>
          <div className="text-xs font-bold text-neutralText/40 uppercase tracking-widest">Total Faculty</div>
        </div>
        <div className="p-10 bg-gray-50 rounded-[3rem] border border-gray-100">
          <div className="text-4xl font-black text-primary mb-2">40%</div>
          <div className="text-xs font-bold text-neutralText/40 uppercase tracking-widest">PhD Holders</div>
        </div>
        <div className="p-10 bg-gray-50 rounded-[3rem] border border-gray-100">
          <div className="text-4xl font-black text-primary mb-2">15 Yrs</div>
          <div className="text-xs font-bold text-neutralText/40 uppercase tracking-widest">Avg Experience</div>
        </div>
        <div className="p-10 bg-gray-50 rounded-[3rem] border border-gray-100">
          <div className="text-4xl font-black text-primary mb-2">500+</div>
          <div className="text-xs font-bold text-neutralText/40 uppercase tracking-widest">Res. Papers</div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="py-12 bg-white sticky top-24 z-40 border-b border-gray-50">
         <div className="container mx-auto px-6 flex flex-wrap gap-4 justify-center">
            {['All', 'Management', 'Science', 'Commerce', 'Administration'].map((d) => (
              <button 
                key={d} 
                onClick={() => setFilter(d)}
                className={`px-8 py-3 rounded-full font-black text-sm uppercase tracking-widest transition-all ${filter === d ? 'bg-primary text-white shadow-xl' : 'bg-gray-50 text-neutralText hover:bg-gray-100'}`}
              >
                {d}
              </button>
            ))}
         </div>
      </section>

      {/* Grid */}
      <section className="py-24 container mx-auto px-6">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {filteredFaculty.map((f, i) => (
              <div key={i} className="group bg-white rounded-[3.5rem] overflow-hidden border border-gray-100 shadow-xl hover:shadow-2xl transition-all animate-fade-up" style={{ animationDelay: `${i*100}ms` }}>
                 <div className="h-80 overflow-hidden relative">
                    <img src={f.img} className="w-full h-full object-cover transition-all duration-700" alt={f.name} />
                    <div className="absolute top-6 right-6 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-white text-[10px] font-black uppercase tracking-widest border border-white/20">{f.exp} EXP</div>
                    <div className="absolute bottom-6 left-6 flex gap-2">
                       <a href="#" className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center text-white shadow-lg"><Linkedin size={18} /></a>
                       <a href="#" className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg"><Mail size={18} /></a>
                    </div>
                 </div>
                 <div className="p-10">
                    <div className="text-secondary font-black uppercase text-[10px] tracking-widest mb-2">{f.dept} Department</div>
                    <h3 className="text-2xl font-black text-accent2 mb-1">{f.name}</h3>
                    <p className="text-neutralText/80 font-bold text-sm mb-6">{f.role}</p>
                    <div className="pt-6 border-t border-gray-100 italic text-neutralText text-sm leading-relaxed">
                       <span className="font-black text-primary not-italic uppercase text-[10px] block mb-2 opacity-40">Research Focus</span>
                       "{f.research}"
                    </div>
                 </div>
              </div>
            ))}
         </div>
      </section>

      {/* Research CTA */}
      <section className="py-24 bg-gray-50">
         <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-black text-primary mb-8">Contributing to Global Knowledge</h2>
            <p className="text-xl text-neutralText mb-12 max-w-2xl mx-auto">Our faculty regularly publish in SCOPUS, IEEE, and UGC Care listed journals. Join a research-first environment at KCMS.</p>
            <div className="flex justify-center gap-8 opacity-20 grayscale">
               <div className="font-black text-4xl">IEEE</div>
               <div className="font-black text-4xl">SCOPUS</div>
               <div className="font-black text-4xl">ELSEVIER</div>
            </div>
         </div>
      </section>
    </div>
  );
};

export default FacultyProfile;
