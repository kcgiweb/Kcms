
import React, { useEffect } from 'react';
import { Target, Shield, Heart, Lightbulb, Users, Globe, ChevronRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const VisionMission: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-primary text-white py-24 text-center">
        <div className="container mx-auto px-6 animate-fade-up">
          <nav className="flex items-center justify-center gap-2 text-white/50 text-xs mb-8 uppercase font-black tracking-widest">
            <Link to="/" className="hover:text-secondary">Home</Link> 
            <ChevronRight size={14} /> 
            <span className="text-white">Vision & Mission</span>
          </nav>
          <h1 className="text-5xl md:text-7xl font-black mb-6">Our Purpose</h1>
          <p className="text-xl opacity-70 max-w-2xl mx-auto">Defining our path towards educational excellence and social responsibility.</p>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="py-32 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto animate-fade-up">
          <Target size={80} className="text-secondary mx-auto mb-12" />
          <h2 className="text-primary text-xs font-black uppercase tracking-widest mb-6">Our Vision</h2>
          <blockquote className="text-3xl md:text-5xl font-black text-primary leading-tight italic">
            "To be a globally recognized center of excellence in management and science education, creating leaders who are ethically sound and socially responsible."
          </blockquote>
        </div>
      </section>

      {/* Mission Cards */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-primary text-xs font-black uppercase tracking-widest mb-4">Our Mission</h2>
            <p className="text-3xl md:text-4xl font-black text-primary">How we achieve our vision every day.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'Quality Education', desc: 'To provide high-quality education accessible to all sections of society.' },
              { title: 'Innovation Hub', desc: 'To foster an environment of research, innovation, and industry alignment.' },
              { title: 'Ethics & Values', desc: 'To instill strong ethical values and social responsibility in our students.' },
              { title: 'Global Outlook', desc: 'To create global citizens with local impact through diverse perspectives.' },
            ].map((item, i) => (
              <div key={i} className="bg-white p-12 rounded-[3rem] shadow-xl hover:shadow-2xl transition-all border border-gray-100 flex gap-8 items-start">
                <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center text-primary shrink-0">
                  <Shield size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-primary mb-4">{item.title}</h3>
                  <p className="text-lg text-neutralText leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-32 container mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-primary text-xs font-black uppercase tracking-widest mb-4">Core Values</h2>
          <p className="text-3xl md:text-4xl font-black text-primary">The pillars that hold our institution together.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 text-center">
          {[
            { icon: <Heart />, label: 'Integrity' },
            { icon: <Lightbulb />, label: 'Innovation' },
            { icon: <Users />, label: 'Inclusivity' },
            { icon: <Shield />, label: 'Excellence' },
            { icon: <Globe />, label: 'Responsibility' },
            { icon: <Target />, label: 'Dedication' },
          ].map((item, i) => (
            <div key={i} className="animate-fade-up" style={{ animationDelay: `${i * 100}ms` }}>
              <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center text-secondary mx-auto mb-6 hover:scale-110 transition-transform">
                {React.cloneElement(item.icon as React.ReactElement<any>, { size: 32 })}
              </div>
              <div className="font-black text-primary uppercase text-sm tracking-widest">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-32 bg-primary text-white">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-secondary font-black uppercase tracking-widest mb-6 text-xs">Educational Philosophy</h2>
            <h3 className="text-4xl md:text-5xl font-black mb-10 leading-tight">Higher Education to All.</h3>
            <p className="text-xl text-white/70 leading-relaxed mb-8">
              We believe that financial barriers should never stop a bright mind from achieving its potential. Our philosophy is rooted in the "Gurukul" tradition blended with modern "Silicon Valley" technology.
            </p>
            <div className="space-y-4">
              {/* Fix: Added missing CheckCircle import from lucide-react */}
              {['Industry-Ready Skillsets', 'Value-Based Leadership', 'Lifelong Learning Commitment'].map((text, i) => (
                <div key={i} className="flex items-center gap-4 text-lg font-bold">
                  <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center text-white"><CheckCircle size={14} /></div>
                  {text}
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white/5 p-16 rounded-[4rem] border border-white/10 backdrop-blur-xl">
             <div className="text-6xl font-black text-secondary mb-8">98%</div>
             <p className="text-2xl font-bold mb-10">Our student satisfaction rate reflects our commitment to individual growth and mental well-being.</p>
             <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-primary px-10 py-4 rounded-full font-black hover:bg-secondary hover:text-white transition-all">
               Speak to our Mentors <ChevronRight size={20} />
             </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VisionMission;
