
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Heart, Users, ShieldCheck, BookOpen, ArrowRight, PhoneCall, Headphones, Search, MessageSquare } from 'lucide-react';

const StudentSupport: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const supportServices = [
    {
      icon: <Heart className="text-secondary" />,
      title: 'Mental Health & Counseling',
      desc: 'Professional psychological support and wellness workshops to help students navigate stress and personal growth.'
    },
    {
      icon: <Users className="text-secondary" />,
      title: 'Career Guidance Cell',
      desc: 'One-on-one mentorship sessions to align academic choices with professional career goals and market trends.'
    },
    {
      icon: <ShieldCheck className="text-secondary" />,
      title: 'Grievance Redressal',
      desc: 'A transparent, safe channel for students to voice concerns regarding any aspect of campus life.'
    },
    {
      icon: <BookOpen className="text-secondary" />,
      title: 'Academic Remediation',
      desc: 'Special bridge courses and peer-tutoring for students needing extra help in core technical subjects.'
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-primary text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="container mx-auto px-6 relative z-10 animate-fade-up">
          <nav className="flex items-center gap-2 text-white/50 text-xs mb-8 uppercase font-black tracking-widest">
            <Link to="/" className="hover:text-secondary">Home</Link> 
            <ChevronRight size={14} /> 
            <span className="text-white opacity-100">Student Support</span>
          </nav>
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">Your Success <br/><span className="text-secondary">Our Responsibility</span></h1>
          <p className="text-xl text-white/70 max-w-2xl leading-relaxed">Beyond academics, we provide a robust framework of emotional, financial, and professional support.</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {supportServices.map((service, i) => (
            <div key={i} className="bg-gray-50 p-12 rounded-[3.5rem] border border-gray-100 hover:shadow-2xl transition-all group">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-2xl font-black text-primary mb-4">{service.title}</h3>
              <p className="text-neutralText text-lg leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Wellness Section */}
      <section className="py-32 bg-primary text-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2">
              <h2 className="text-secondary text-xs font-black uppercase tracking-widest mb-6">Health & Wellness</h2>
              <h3 className="text-4xl md:text-5xl font-black mb-10 leading-tight">A Mindful Campus Environment</h3>
              <p className="text-xl text-white/70 leading-relaxed mb-10">We recognize that a healthy mind is essential for academic excellence. Our campus features a 24/7 dedicated wellness center and regular meditation retreats.</p>
              <div className="space-y-6">
                <div className="flex items-center gap-4 bg-white/10 p-6 rounded-3xl border border-white/10">
                  <PhoneCall className="text-secondary" />
                  <span className="font-bold">24/7 Crisis Helpline: +91 98765 43211</span>
                </div>
                <div className="flex items-center gap-4 bg-white/10 p-6 rounded-3xl border border-white/10">
                  <MessageSquare className="text-secondary" />
                  <span className="font-bold">Anonymous Suggestion Box (Online)</span>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80" className="rounded-[4rem] shadow-2xl" alt="Wellness" />
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-32 text-center container mx-auto px-6">
         <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-black text-primary mb-8">Need Assistance?</h2>
            <p className="text-xl text-neutralText mb-12">Our support staff is ready to help you with any challenge, academic or personal.</p>
            <div className="flex flex-col md:flex-row justify-center gap-6">
               <Link to="/contact" className="bg-primary text-white px-12 py-5 rounded-full font-black text-lg hover:bg-secondary transition-all shadow-2xl flex items-center justify-center gap-3">
                 Talk to a Counselor <ArrowRight />
               </Link>
               <button className="bg-secondary text-white px-12 py-5 rounded-full font-black text-lg hover:bg-primary transition-all shadow-2xl">
                 Download Resource Guide
               </button>
            </div>
         </div>
      </section>
    </div>
  );
};

export default StudentSupport;
