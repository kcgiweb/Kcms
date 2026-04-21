
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { COURSES_DATA } from '../constants';
import { Book, CheckCircle, Briefcase, GraduationCap, Loader2, Check, Target, Trophy, Building2, Users, ArrowRight, ShieldCheck, Star } from 'lucide-react';
import SEO from '../components/SEO';

const CourseDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dept = COURSES_DATA[id || ''];
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({ name: '', email: '', mobile: '' });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const handleSidebarSubmit = async (e: React.FormEvent) => {
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
          _subject: `Course Interest: ${id?.toUpperCase()} - ${formData.name}`,
          department: id,
          admin_target: 'rukeshbabug@gmail.com',
          source: 'Departmental Sidebar Form'
        }),
      });
      setStatus('success');
      setFormData({ name: '', email: '', mobile: '' });
    } catch (error) {
      setStatus('success');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!dept) {
    return <div className="py-40 text-center text-2xl font-bold text-primary">Department Information Not Found</div>;
  }

  return (
    <div className="pt-24 min-h-screen bg-white">
      <SEO 
        title={`${dept.name} in Bangalore | Admissions 2026 | KCMS`}
        description={`Enroll in ${dept.name} at KCMS Bangalore. Industry-integrated curriculum, high-tech labs, and expert faculty. ${dept.shortDesc}`}
        keywords={`${dept.id} admission Bangalore, best ${dept.id} college, KCMS Bangalore courses`}
      />
      {/* 1. Hero / Banner */}
      <section className="bg-primary text-white py-24 relative overflow-hidden">
        <div className="absolute right-0 bottom-0 opacity-10 font-black text-9xl -mb-10 pointer-events-none uppercase">
          {dept.id}
        </div>
        <div className="container mx-auto px-6 relative z-10 animate-fade-up">
          <div className="inline-block bg-secondary text-white px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-6 shadow-lg">
            {dept.category} Excellence
          </div>
          <h1 className="text-4xl md:text-7xl font-black mb-6 leading-tight max-w-4xl">{dept.name}</h1>
          <p className="text-xl text-white/70 max-w-2xl leading-relaxed">{dept.shortDesc}</p>
        </div>
      </section>

      <div className="container mx-auto px-6 py-24 flex flex-col lg:flex-row gap-20">
        {/* Main Column */}
        <div className="lg:w-2/3 space-y-24">
          
          {/* Overview */}
          <section className="animate-fade-up">
            <h2 className="text-3xl font-black text-primary mb-8 flex items-center gap-4">
              <Book className="text-secondary" /> Departmental Overview
            </h2>
            <p className="text-xl text-neutralText leading-loose text-justify">
              {dept.fullDesc}
            </p>
          </section>

          {/* Objectives */}
          <section className="animate-fade-up">
            <h2 className="text-3xl font-black text-primary mb-10 flex items-center gap-4">
              <Target className="text-secondary" /> Program Objectives
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {dept.objectives.map((obj: string, i: number) => (
                <div key={i} className="flex gap-4 p-6 bg-gray-50 rounded-3xl border border-gray-100 hover:border-primary/20 transition-all">
                  <div className="w-10 h-10 bg-primary text-white rounded-xl flex items-center justify-center font-black shrink-0">{i + 1}</div>
                  <p className="text-neutralText font-medium">{obj}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Curriculum */}
          <section className="animate-fade-up">
            <h2 className="text-3xl font-black text-primary mb-10 flex items-center gap-4">
              <GraduationCap className="text-secondary" /> Curriculum Framework
            </h2>
            <div className="overflow-hidden border border-gray-100 rounded-[2.5rem] shadow-sm">
              <table className="w-full text-left">
                <thead className="bg-gray-50 text-primary font-black uppercase text-xs tracking-widest">
                  <tr>
                    <th className="px-8 py-6">Focus Area</th>
                    <th className="px-8 py-6">Key Learning Outcomes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {dept.curriculum.map((row: any, i: number) => (
                    <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                      <td className="px-8 py-6 font-bold text-primary">{row.sem}</td>
                      <td className="px-8 py-6 text-neutralText">{row.focus}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Faculty & Research */}
          <section className="animate-fade-up">
             <div className="bg-primary text-white p-12 rounded-[3.5rem] flex flex-col md:flex-row justify-between items-center gap-12 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <div className="max-w-md">
                   <h2 className="text-3xl font-black mb-4">Faculty Strength</h2>
                   <p className="text-white/60 mb-8 italic">"Mentorship is at the core of our department. We don't just teach; we guide."</p>
                   <Link to="/p/faculty" className="inline-flex items-center gap-2 text-secondary font-black uppercase tracking-widest text-sm hover:gap-4 transition-all">
                     View All Faculty <ArrowRight size={16} />
                   </Link>
                </div>
                <div className="grid grid-cols-2 gap-8 shrink-0">
                   <div className="text-center">
                      <div className="text-4xl font-black text-secondary mb-1">{dept.facultyStats.phd}</div>
                      <div className="text-[10px] font-bold uppercase tracking-widest opacity-40">PhD Holders</div>
                   </div>
                   <div className="text-center">
                      <div className="text-4xl font-black text-secondary mb-1">{dept.facultyStats.experience}</div>
                      <div className="text-[10px] font-bold uppercase tracking-widest opacity-40">Avg Experience</div>
                   </div>
                </div>
             </div>
          </section>

          {/* Infrastructure */}
          <section className="animate-fade-up">
            <h2 className="text-3xl font-black text-primary mb-10 flex items-center gap-4">
              <Building2 className="text-secondary" /> Departmental Labs & Infrastructure
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {dept.labInfo.map((lab: any, i: number) => (
                <div key={i} className="group p-10 bg-white border border-gray-100 rounded-[3rem] shadow-sm hover:shadow-xl transition-all">
                  <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all">
                    {React.cloneElement(lab.icon, { size: 28 })}
                  </div>
                  <h4 className="text-2xl font-black text-primary mb-4">{lab.title}</h4>
                  <p className="text-neutralText leading-relaxed">{lab.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Career Opportunities */}
          <section className="animate-fade-up">
            <h2 className="text-3xl font-black text-primary mb-10 flex items-center gap-4">
              <Briefcase className="text-secondary" /> Career Opportunities
            </h2>
            <div className="flex flex-wrap gap-4">
              {dept.opportunities.map((opt: string, i: number) => (
                <div key={i} className="px-8 py-4 bg-gray-50 border border-gray-100 rounded-2xl flex items-center gap-3 font-bold text-primary shadow-sm hover:bg-white transition-all">
                   <CheckCircle className="text-secondary" size={18} /> {opt}
                </div>
              ))}
            </div>
          </section>

          {/* Student Achievements */}
          <section className="animate-fade-up">
            <h2 className="text-3xl font-black text-primary mb-10 flex items-center gap-4">
              <Star className="text-secondary" /> Recent Achievements
            </h2>
            <div className="space-y-6">
              {dept.achievements.map((ach: string, i: number) => (
                <div key={i} className="p-8 border border-gray-100 rounded-3xl flex items-center gap-8 group hover:bg-gray-50 transition-all">
                   <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-full flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <Trophy size={20} />
                   </div>
                   <p className="text-lg font-medium text-neutralText">{ach}</p>
                </div>
              ))}
            </div>
          </section>

        </div>

        {/* Sidebar */}
        <div className="lg:w-1/3">
          <div className="sticky top-32 space-y-10">
            
            {/* Admission Form */}
            <div className="bg-primary p-12 rounded-[3.5rem] text-white shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
               <h3 className="text-2xl font-black mb-2">Apply to {id?.toUpperCase()}</h3>
               <p className="text-white/50 text-xs mb-10 font-bold uppercase tracking-widest">Admissions for 2026 Now Open</p>
               
               {status === 'success' ? (
                 <div className="bg-white/10 p-8 rounded-3xl text-center border border-white/20 animate-fade-in">
                    <CheckCircle className="mx-auto mb-4 text-secondary" size={40} />
                    <p className="font-bold text-lg">Inquiry Sent!</p>
                    <p className="text-xs text-white/50 mt-2">A departmental counselor will reach out shortly to {formData.mobile || 'your mobile'}.</p>
                 </div>
               ) : (
                 <form className="space-y-4" onSubmit={handleSidebarSubmit}>
                   <input 
                     type="text" 
                     placeholder="Full Name" 
                     required
                     value={formData.name}
                     onChange={(e) => setFormData({...formData, name: e.target.value})}
                     className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-2xl outline-none focus:bg-white/20 transition-all placeholder:text-white/40 font-medium" 
                   />
                   <input 
                     type="email" 
                     placeholder="Email Address" 
                     required
                     value={formData.email}
                     onChange={(e) => setFormData({...formData, email: e.target.value})}
                     className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-2xl outline-none focus:bg-white/20 transition-all placeholder:text-white/40 font-medium" 
                   />
                   <input 
                     type="tel" 
                     placeholder="Mobile Number" 
                     required
                     value={formData.mobile}
                     onChange={(e) => setFormData({...formData, mobile: e.target.value})}
                     className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-2xl outline-none focus:bg-white/20 transition-all placeholder:text-white/40 font-medium" 
                   />
                   <button className="w-full bg-secondary text-white py-5 rounded-2xl font-black text-lg hover:bg-white hover:text-primary transition-all shadow-xl flex items-center justify-center gap-2 disabled:opacity-50">
                     {isSubmitting ? <Loader2 className="animate-spin" /> : <>Get Details <ArrowRight size={20} /></>}
                   </button>
                 </form>
               )}
            </div>

            {/* Resources */}
            <div className="bg-gray-50 p-12 rounded-[3.5rem] border border-gray-100">
               <h4 className="text-xl font-black text-primary mb-8">Department Resources</h4>
               <ul className="space-y-6">
                 <li>
                    <Link to="/p/brochure" className="flex items-center justify-between text-neutralText hover:text-secondary font-bold transition-all group">
                       Program Brochure <ShieldCheck className="opacity-0 group-hover:opacity-100 transition-opacity" size={18} />
                    </Link>
                 </li>
                 <li>
                    <Link to="/p/eligibility" className="flex items-center justify-between text-neutralText hover:text-secondary font-bold transition-all group">
                       Eligibility Criteria <ShieldCheck className="opacity-0 group-hover:opacity-100 transition-opacity" size={18} />
                    </Link>
                 </li>
                 <li>
                    <Link to="/p/placement-stats" className="flex items-center justify-between text-neutralText hover:text-secondary font-bold transition-all group">
                       Placement Records <ShieldCheck className="opacity-0 group-hover:opacity-100 transition-opacity" size={18} />
                    </Link>
                 </li>
               </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA Banner */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
           <div className="bg-secondary p-16 md:p-24 rounded-[4rem] text-center text-white relative overflow-hidden">
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-y-1/2 translate-x-1/2 blur-3xl"></div>
              <h2 className="text-4xl md:text-6xl font-black mb-8 relative z-10">Elevate Your Career Path</h2>
              <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto relative z-10">Join {dept.name} and become part of a legacy of excellence and innovation.</p>
              <div className="flex flex-col md:flex-row justify-center gap-6 relative z-10">
                 <button 
                  onClick={() => window.dispatchEvent(new CustomEvent('open-apply-modal'))}
                  className="bg-primary px-12 py-5 rounded-full font-black text-lg hover:scale-105 transition-transform shadow-2xl"
                 >
                   Apply Online Now
                 </button>
                 <Link to="/contact" className="bg-white text-primary px-12 py-5 rounded-full font-black text-lg hover:scale-105 transition-transform shadow-2xl">
                   Talk to an Expert
                 </Link>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default CourseDetail;
