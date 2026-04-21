import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2, FileText, GraduationCap, PhoneCall, ChevronRight, 
  ArrowRight, Download, ShieldCheck, HelpCircle, Calendar, 
  Award, BookOpen, Clock, Users, ChevronDown, CheckCircle, Mail, Plus, Minus
} from 'lucide-react';
import SEO from '../components/SEO';

const Admissions: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const programs = [
    { 
      name: 'UG Programs', 
      items: [
        { label: 'BBA Aviation Management', id: 'bba-aviation' },
        { label: 'BCA', id: 'bca' },
        { label: 'BCA (AI & ML)', id: 'bca-ai-ml' },
        { label: 'BSc Criminology', id: 'bsc-criminology' },
        { label: 'BTTM', id: 'bttm' }
      ], 
      duration: '3 Years', 
      color: 'bg-blue-50' 
    },
    { 
      name: 'PG Programs', 
      items: [
        { label: 'M.Com', id: 'mcom' },
        { label: 'MTTM', id: 'mttm' }
      ], 
      duration: '2 Years', 
      color: 'bg-purple-50' 
    }
  ];

  const steps = [
    { title: 'Apply Online', desc: 'Fill out the digital inquiry form for admission 2026 Bangalore.', icon: <FileText /> },
    { title: 'Counseling', desc: 'Meet academic experts at the best college in Bangalore.', icon: <Users /> },
    { title: 'Verification', desc: 'Original document review by our registrar office.', icon: <ShieldCheck /> },
    { title: 'Fee Payment', desc: 'Confirm your seat at an affordable MBA college in Bangalore.', icon: <Award /> },
    { title: 'Confirmation', desc: 'Welcome to the KCMS family!', icon: <CheckCircle /> }
  ];

  const faqs = [
    { q: "Is there an entrance exam for PG courses?", a: "Yes, for MBA and MTTM, students must have a valid score in PGCET, KMAT, or CMAT as per university regulations. We also conduct institutional aptitude tests for certain categories." },
    { q: "Do you provide hostel facilities?", a: "Yes, we have separate, high-security hostels for boys and girls. Each hostel features multi-cuisine mess facilities, 24/7 Wi-Fi, and laundry services to ensure a comfortable stay." },
    { q: "Is the fee payable in installments?", a: "KCMS provides flexible installment plans to ease the financial burden on parents. Students can pay their semester fees in two or three installments upon approval from the finance department." },
    { q: "What is the medium of instruction?", a: "The primary medium of instruction for all professional UG and PG courses is English to ensure students are globally competitive." },
    { q: "What are the documents required for admission?", a: "Essential documents include 10th and 12th/PUC marks cards, Transfer Certificate (TC), Migration Certificate (for non-Karnataka students), 6 passport-size photos, and Aadhar card copy." },
    { q: "Does the college provide campus placements?", a: "Absolutely. Our dedicated placement cell ensures 95% placement success with average packages ranging from 6.5 LPA and the highest going up to 12 LPA at companies like Google, Amazon, and Deloitte." }
  ];

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="pt-24 min-h-screen bg-white">
      <SEO 
        title="Admissions 2026 | Apply to Best College in Bangalore | KCMS"
        description="Start your professional journey at KCMS. Online applications open for BCA, BBA, B.Com, and MBA 2026 batch. Check eligibility and scholarship details."
        keywords="MBA admission Bangalore 2026, BCA college Bangalore admission, BBA courses Bangalore, apply to KCMS Bangalore"
      />
      {/* 1. Hero Section */}
      <section className="bg-primary text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="container mx-auto px-6 relative z-10 animate-fade-up">
          <nav className="flex items-center gap-2 text-white/50 text-xs mb-8 uppercase font-black tracking-widest">
            <Link to="/" className="hover:text-secondary">Home</Link> 
            <ChevronRight size={14} /> 
            <span className="text-white opacity-100">Admissions 2026</span>
          </nav>
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">College Admissions <br/><span className="text-secondary">Open Bangalore 2026</span></h1>
          <p className="text-xl text-white/70 max-w-2xl leading-relaxed">Secure your future at the best college in Bangalore. Apply for UG and PG admissions now.</p>
        </div>
      </section>

      {/* 2. Admissions Overview */}
      <section className="py-24 container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="animate-fade-up">
            <h2 className="text-primary text-xs font-black uppercase tracking-widest mb-6">Apply for College in Bangalore</h2>
            <h3 className="text-4xl font-black text-primary mb-8 leading-tight">Join the Best College in Bangalore</h3>
            <p className="text-lg text-neutralText leading-relaxed mb-10 text-justify">
              Admissions at KCMS Bangalore are designed to identify potential and ambition. As the top college in Bangalore South, we offer a seamless application process for the 2026-27 academic session. Whether you seek a BCA, BBA, or B.Com, our doors are open to merit.
            </p>
            <div className="flex gap-6">
               <Link to="/apply" className="bg-primary text-white px-10 py-4 rounded-full font-black hover:bg-secondary transition-all shadow-xl">Start Online Admission</Link>
               <Link to="/contact" className="bg-gray-100 text-primary px-10 py-4 rounded-full font-black hover:bg-gray-200 transition-all">Visit Campus Near Me</Link>
            </div>
          </div>
          <div className="relative group">
             <img src="https://images.unsplash.com/photo-1523050335102-c6744729ea24?auto=format&fit=crop&q=80" className="rounded-[4rem] shadow-2xl transition-transform duration-700 group-hover:scale-105" alt="Admission 2026 Bangalore" />
             <div className="absolute -bottom-10 -left-10 bg-secondary p-10 rounded-[3rem] text-white shadow-2xl hidden md:block">
                <div className="text-4xl font-black mb-1">95%</div>
                <div className="text-xs font-bold uppercase tracking-widest">Placement Rate</div>
             </div>
          </div>
        </div>
      </section>

      {/* 3. Courses Offered */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-primary text-xs font-black uppercase tracking-widest mb-4">UG & PG Admission Bangalore</h2>
            <h3 className="text-4xl font-black text-primary">Explore Programs at Top Colleges in Bangalore</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {programs.map((prog, i) => (
              <div key={i} className={`${prog.color} p-12 rounded-[4rem] border border-gray-100 shadow-lg hover:shadow-2xl transition-all`}>
                <div className="flex justify-between items-center mb-10">
                   <h4 className="text-3xl font-black text-primary">{prog.name}</h4>
                   <div className="bg-white/50 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-widest">{prog.duration}</div>
                </div>
                <div className="grid grid-cols-2 gap-6 mb-12">
                   {prog.items.map(item => (
                     <Link 
                       key={item.id + item.label} 
                       to={`/course/${item.id}`} 
                       className="bg-white p-6 rounded-3xl flex items-center justify-between group hover:bg-primary hover:text-white transition-all shadow-sm"
                     >
                        <span className="font-black">{item.label} Admission</span>
                        <ArrowRight size={18} className="text-secondary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                     </Link>
                   ))}
                </div>
                <Link to="/courses" className="text-primary font-black uppercase text-xs tracking-widest border-b-2 border-secondary pb-1 flex items-center w-fit gap-2">View All Specializations <ChevronRight size={14} /></Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Eligibility Criteria */}
      <section className="py-24 container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-primary text-xs font-black uppercase tracking-widest mb-4">KCMS Eligibility Guidelines</h2>
          <h3 className="text-4xl font-black text-primary">Admission Requirements for Best Colleges</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
           <div className="bg-white p-12 rounded-[3.5rem] border border-gray-100 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-secondary"></div>
              <h4 className="text-2xl font-black text-primary mb-8">UG Course Eligibility</h4>
              <ul className="space-y-6">
                 <li className="flex gap-4 items-start">
                    <CheckCircle2 className="text-secondary shrink-0" />
                    <p className="text-neutralText">Completion of <strong>10+2 / PUC / XII Std</strong> for BCA, BBA, and B.Com admission.</p>
                 </li>
                 <li className="flex gap-4 items-start">
                    <CheckCircle2 className="text-secondary shrink-0" />
                    <p className="text-neutralText">Minimum aggregate marks as per University of Mysore / Bangalore University standards.</p>
                 </li>
              </ul>
           </div>
           <div className="bg-white p-12 rounded-[3.5rem] border border-gray-100 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-primary"></div>
              <h4 className="text-2xl font-black text-primary mb-8">PG Course Eligibility</h4>
              <ul className="space-y-6">
                 <li className="flex gap-4 items-start">
                    <CheckCircle2 className="text-primary shrink-0" />
                    <p className="text-neutralText">Bachelor’s degree from a recognized university for MBA and MTTM admission Bangalore.</p>
                 </li>
                 <li className="flex gap-4 items-start">
                    <CheckCircle2 className="text-primary shrink-0" />
                    <p className="text-neutralText">Valid scorecard in state-level entrance exams like PGCET or KMAT.</p>
                 </li>
              </ul>
           </div>
        </div>
      </section>

      {/* 5. Admission Process */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-secondary text-xs font-black uppercase tracking-widest mb-4">5-Step Process</h2>
            <h3 className="text-4xl font-black">How to Apply for College in Bangalore</h3>
          </div>
          <div className="relative flex flex-col md:flex-row justify-between gap-12">
            <div className="absolute top-10 left-0 right-0 h-0.5 bg-white/10 hidden md:block" />
            {steps.map((step, i) => (
              <div key={i} className="relative z-10 text-center flex-1 group">
                 <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl border-8 border-primary group-hover:scale-110 transition-transform">
                    {React.cloneElement(step.icon as React.ReactElement<any>, { size: 30, className: "text-primary" })}
                 </div>
                 <div className="text-xs font-black text-secondary uppercase tracking-widest mb-2">Step 0{i+1}</div>
                 <h4 className="text-xl font-bold mb-4">{step.title}</h4>
                 <p className="text-sm text-white/50 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FAQ Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-primary text-xs font-black uppercase tracking-widest mb-4">Common Enquiries</h2>
            <h3 className="text-4xl font-black text-primary">Frequently Asked Questions</h3>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <button 
                  onClick={() => toggleFaq(i)}
                  className="w-full flex items-center justify-between p-8 bg-gray-50/50 hover:bg-gray-50 transition-colors text-left"
                >
                  <span className="text-lg font-bold text-primary">{faq.q}</span>
                  <div className={`shrink-0 ml-4 transition-transform duration-300 ${activeFaq === i ? 'rotate-180' : ''}`}>
                    {activeFaq === i ? <Minus size={24} className="text-secondary" /> : <Plus size={24} className="text-primary" />}
                  </div>
                </button>
                {activeFaq === i && (
                  <div className="p-8 bg-white text-neutralText leading-relaxed animate-fade-in border-t border-gray-100">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Documents & 8. Scholarships */}
      <section className="py-24 bg-gray-50 container mx-auto px-6">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
               <h3 className="text-3xl font-black text-primary mb-10 flex items-center gap-4">
                  <Download className="text-secondary" /> Documentation Checklist
               </h3>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    '10th Marks Card', '12th / PUC Marks Card', 'Graduation Degree (For PG)', 'Transfer Certificate', 'Conduct Certificate', 'Migration Certificate', 'ID Proof (Aadhar)', 'Passport Photos'
                  ].map((doc, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 bg-white rounded-2xl font-bold text-sm text-primary border border-gray-100">
                       <CheckCircle size={16} className="text-green-500" /> {doc}
                    </div>
                  ))}
               </div>
            </div>
            <div className="bg-secondary/5 p-12 rounded-[4rem] border border-secondary/10">
               <h3 className="text-3xl font-black text-primary mb-8 flex items-center gap-4">
                  <Award className="text-secondary" /> Scholarship Opportunities
               </h3>
               <p className="text-neutralText leading-relaxed mb-8">KCMS offers academic merit scholarships for students enrolling in the 2026 batch. As an affordable MBA college in Bangalore, we support every bright mind.</p>
               <div className="space-y-4 mb-10">
                  <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
                     <h5 className="font-black text-primary">Merit-Based Support</h5>
                     <p className="text-sm text-neutralText/60">Special fee waivers for 90%+ scorers in PUC/12th.</p>
                  </div>
                  <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
                     <h5 className="font-black text-primary">State Government Schemes</h5>
                     <p className="text-sm text-neutralText/60">Guidance for Post-Matric and Minority Scholarships.</p>
                  </div>
               </div>
               <button className="w-full bg-secondary text-white py-4 rounded-2xl font-black shadow-xl hover:bg-primary transition-all">Check Scholarship Eligibility</button>
            </div>
         </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-primary text-white text-center relative overflow-hidden">
         <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/20 rounded-full translate-y-1/2 translate-x-1/2 blur-3xl"></div>
         <div className="container mx-auto px-6 relative z-10">
            <h2 className="text-4xl md:text-6xl font-black mb-10 leading-tight">Apply Now for 2026 Admissions</h2>
            <div className="flex flex-col md:flex-row justify-center gap-6">
               <Link to="/apply" className="bg-secondary text-white px-12 py-5 rounded-full font-black text-lg hover:bg-white hover:text-primary transition-all shadow-2xl flex items-center justify-center gap-3">
                  Start Online Enrollment <ArrowRight />
               </Link>
               <div className="flex items-center justify-center gap-4 bg-white/10 px-8 py-5 rounded-full border border-white/20">
                  <PhoneCall size={24} className="text-secondary" />
                  <div className="text-left">
                     <div className="text-[10px] font-black opacity-40 uppercase">Admissions Desk</div>
                     <div className="font-bold">+91 98765 43210</div>
                  </div>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
};

export default Admissions;