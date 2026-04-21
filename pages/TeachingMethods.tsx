
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, BookOpen, Presentation, Users, Briefcase, Zap, Globe, ArrowRight, Lightbulb, Microscope } from 'lucide-react';

const TeachingMethods: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const methods = [
    {
      icon: <Presentation className="text-secondary" />,
      title: 'Case-Based Learning',
      desc: 'Real-world business scenarios from Harvard and IIM repositories are analyzed to develop strategic decision-making skills.'
    },
    {
      icon: <Microscope className="text-secondary" />,
      title: 'Experimental Pedagogy',
      desc: 'Moving beyond theory with hands-on laboratory sessions and research-driven assignments in every semester.'
    },
    {
      icon: <Globe className="text-secondary" />,
      title: 'Industry Immersions',
      desc: 'Regular field visits and "Industry in the Classroom" sessions where corporate leaders co-teach technical modules.'
    },
    {
      icon: <Lightbulb className="text-secondary" />,
      title: 'Design Thinking',
      desc: 'Workshops focused on creative problem solving and human-centric innovation for the tech and management sectors.'
    }
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
            <span className="text-white opacity-100">Teaching Methods</span>
          </nav>
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">Beyond the <br/><span className="text-secondary">Blackboard</span></h1>
          <p className="text-xl text-white/70 max-w-2xl leading-relaxed">Innovative, immersive, and industry-aligned pedagogy designed to create leaders for the 4th industrial revolution.</p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-32 container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="animate-fade-up">
            <h2 className="text-primary text-xs font-black uppercase tracking-widest mb-6 text-secondary">Our Philosophy</h2>
            <h3 className="text-4xl font-black text-primary mb-8 leading-tight">Student-Centric Participatory Learning</h3>
            <p className="text-lg text-neutralText leading-loose text-justify mb-8">
              At KCMS, we have abandoned the traditional "Sage on the Stage" model in favor of a collaborative learning environment. Our faculty act as mentors and facilitators, encouraging students to challenge assumptions and build solutions. We integrate digital tools, interactive simulations, and peer-to-peer learning to ensure high retention and engagement.
            </p>
            <div className="flex gap-6">
               <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 flex-1">
                  <div className="text-4xl font-black text-primary mb-2">70/30</div>
                  <div className="text-xs font-bold text-neutralText/40 uppercase tracking-widest">Practical to Theory Ratio</div>
               </div>
               <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 flex-1">
                  <div className="text-4xl font-black text-primary mb-2">AI</div>
                  <div className="text-xs font-bold text-neutralText/40 uppercase tracking-widest">Driven Assessments</div>
               </div>
            </div>
          </div>
          <div className="relative">
             <div className="absolute -top-10 -right-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
             <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80" className="rounded-[4rem] shadow-2xl relative z-10 w-full" alt="Collaborative Learning" />
          </div>
        </div>
      </section>

      {/* Methods Grid */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-primary text-xs font-black uppercase tracking-widest mb-4">Core Methodologies</h2>
            <h3 className="text-4xl font-black text-primary">How We Teach</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {methods.map((method, i) => (
              <div key={i} className="bg-white p-12 rounded-[3.5rem] shadow-xl hover:shadow-2xl transition-all group flex flex-col md:flex-row gap-8 items-start">
                <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
                   {React.cloneElement(method.icon as React.ReactElement<any>, { size: 32 })}
                </div>
                <div>
                   <h4 className="text-2xl font-black text-primary mb-4">{method.title}</h4>
                   <p className="text-neutralText leading-relaxed">{method.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Learning */}
      <section className="py-32 container mx-auto px-6">
         <div className="bg-primary text-white p-16 md:p-24 rounded-[4rem] shadow-2xl flex flex-col lg:flex-row items-center gap-20 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
            <div className="lg:w-1/2">
               <h2 className="text-4xl font-black mb-8 leading-tight">Flipped Classroom & <span className="text-secondary">E-Learning Hub</span></h2>
               <p className="text-xl text-white/70 leading-relaxed mb-10">
                  All KCMS students get lifetime access to our proprietary Learning Management System (LMS), featuring pre-recorded lectures, interactive quizzes, and a global digital library.
               </p>
               <button className="bg-secondary text-white px-10 py-4 rounded-full font-black flex items-center gap-3 hover:bg-white hover:text-primary transition-all shadow-xl">
                  Explore LMS Portal <ArrowRight />
               </button>
            </div>
            <div className="lg:w-1/2 relative group">
               <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80" className="rounded-[3rem] shadow-2xl transform group-hover:scale-105 transition-transform duration-700" alt="E-Learning" />
            </div>
         </div>
      </section>
    </div>
  );
};

export default TeachingMethods;
