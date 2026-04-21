
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Target, ShieldCheck, FileText, Users, Award, ArrowRight, CheckCircle } from 'lucide-react';

const IQACHub: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-primary text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="container mx-auto px-6 relative z-10 animate-fade-up">
          <nav className="flex items-center gap-2 text-white/50 text-xs mb-8 uppercase font-black tracking-widest">
            <Link to="/" className="hover:text-secondary">Home</Link> 
            <ChevronRight size={14} /> 
            <span className="text-white opacity-100">IQAC Hub</span>
          </nav>
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">Internal Quality <br/><span className="text-secondary">Assurance Cell</span></h1>
          <p className="text-xl text-white/70 max-w-2xl leading-relaxed">Systematizing quality enhancement to achieve institutional excellence through continuous self-evaluation.</p>
        </div>
      </section>

      {/* Quality Policy */}
      <section className="py-32 container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="animate-fade-up">
            <h2 className="text-primary text-xs font-black uppercase tracking-widest mb-6">Quality Statement</h2>
            <h3 className="text-4xl font-black text-primary mb-8 leading-tight italic">"Excellence is not an act, but a habit."</h3>
            <p className="text-lg text-neutralText leading-loose text-justify mb-8">
              The IQAC at KCMS was established as a post-accreditation quality sustenance measure. Since its inception, the cell has been the driving force behind the modernization of our pedagogy, the integration of research into the curriculum, and the complete digitization of administrative processes.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               {['Student-Centric Learning', 'Performance Appraisal', 'Skill Enhancement', 'Institutional Transparency'].map((item, i) => (
                 <div key={i} className="flex items-center gap-3 font-bold text-primary">
                    <CheckCircle className="text-secondary" size={18} /> {item}
                 </div>
               ))}
            </div>
          </div>
          <div className="bg-gray-50 p-12 rounded-[4rem] border border-gray-100 relative">
             <Target size={120} className="text-primary/5 absolute top-10 right-10" />
             <h4 className="text-2xl font-black text-primary mb-8">Key Objectives</h4>
             <ul className="space-y-6">
                <li className="flex gap-4 items-start">
                   <div className="w-8 h-8 bg-primary text-white rounded-lg flex items-center justify-center shrink-0 font-black">1</div>
                   <p className="text-neutralText">Developing quality benchmarks for various academic and administrative activities.</p>
                </li>
                <li className="flex gap-4 items-start">
                   <div className="w-8 h-8 bg-primary text-white rounded-lg flex items-center justify-center shrink-0 font-black">2</div>
                   <p className="text-neutralText">Promoting a learner-centric environment conducive to high-quality education.</p>
                </li>
                <li className="flex gap-4 items-start">
                   <div className="w-8 h-8 bg-primary text-white rounded-lg flex items-center justify-center shrink-0 font-black">3</div>
                   <p className="text-neutralText">Arranging for feedback from students, parents, and alumni on quality-related processes.</p>
                </li>
             </ul>
          </div>
        </div>
      </section>

      {/* AQAR Repository */}
      <section className="py-32 bg-gray-50">
         <div className="container mx-auto px-6">
            <div className="text-center mb-20">
               <h2 className="text-primary text-xs font-black uppercase tracking-widest mb-4">Documentation</h2>
               <h3 className="text-4xl font-black text-primary">AQAR & Quality Reports</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {[2023, 2022, 2021].map((year) => (
                 <div key={year} className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-lg hover:shadow-2xl transition-all flex flex-col items-center text-center group">
                    <FileText size={48} className="text-secondary mb-6 group-hover:scale-110 transition-transform" />
                    <h4 className="text-xl font-black text-primary mb-2">AQAR Report {year}</h4>
                    <p className="text-sm text-neutralText/60 mb-8">Annual Quality Assurance Report submitted to NAAC for the academic year {year}.</p>
                    <button className="w-full bg-primary text-white py-4 rounded-xl font-black text-sm uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-secondary transition-all">
                       Download PDF <ChevronRight size={16} />
                    </button>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Composition */}
      <section className="py-32 container mx-auto px-6">
         <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/3">
               <div className="bg-primary p-12 rounded-[3rem] text-white shadow-2xl">
                  <Users size={48} className="text-secondary mb-8" />
                  <h3 className="text-3xl font-black mb-6">IQAC Committee</h3>
                  <p className="text-white/60 leading-relaxed mb-8">Composed of senior faculty, management representatives, and industry experts.</p>
                  <Link to="/contact" className="text-secondary font-black uppercase text-xs tracking-widest border-b-2 border-secondary pb-1">Contact Coordinator</Link>
               </div>
            </div>
            <div className="lg:w-2/3">
               <div className="overflow-hidden border border-gray-100 rounded-[3rem] shadow-sm">
                  <table className="w-full text-left">
                     <thead className="bg-gray-50 text-primary font-black uppercase text-xs tracking-widest">
                        <tr>
                           <th className="px-8 py-6">Member Category</th>
                           <th className="px-8 py-6">Designation</th>
                        </tr>
                     </thead>
                     <tbody className="divide-y divide-gray-100">
                        <tr>
                           <td className="px-8 py-6 font-bold text-primary">Chairperson</td>
                           <td className="px-8 py-6 text-neutralText">Principal, KCMS</td>
                        </tr>
                        <tr>
                           <td className="px-8 py-6 font-bold text-primary">Coordinator</td>
                           <td className="px-8 py-6 text-neutralText">Senior Academic Dean</td>
                        </tr>
                        <tr>
                           <td className="px-8 py-6 font-bold text-primary">Industry Nominee</td>
                           <td className="px-8 py-6 text-neutralText">Managing Director, Tech Partner</td>
                        </tr>
                     </tbody>
                  </table>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
};

export default IQACHub;
