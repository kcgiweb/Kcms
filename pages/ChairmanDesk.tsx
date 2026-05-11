import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Quote, ChevronRight, History, Award, Landmark, Zap, Globe, Heart, ShieldCheck, ArrowRight } from 'lucide-react';

const ChairmanDesk: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* 1. Hero Banner */}
      <section className="bg-primary text-white py-20 relative">
        <div className="absolute inset-0 opacity-10 bg-[url('/assets/images/SLA_9114_ebbrop.jpg')] bg-cover bg-center"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <nav className="flex items-center justify-center gap-2 text-white/50 text-xs mb-6 uppercase font-bold tracking-widest">
            <Link to="/" className="hover:text-secondary">Home</Link> 
            <ChevronRight size={14} /> 
            <span className="text-white">Chairman's Desk</span>
          </nav>
          <h1 className="text-4xl md:text-6xl font-black mb-4">Chairman's Desk</h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">Founding Vision of Karnataka Education Trust.</p>
        </div>
      </section>

      {/* 2. Message Section */}
      <section className="py-20 container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 md:gap-20">
          {/* Left: Chairman Info */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden sticky top-32">
              <img 
                src="/assets/images/Chairman_dml3ot.png" 
                alt="Prof. Basavaraj Ramanal" 
                className="w-full aspect-[4/5] object-cover"
              />
              <div className="p-8 text-center">
                <h2 className="text-2xl font-black text-primary mb-1">Prof. Basavaraj Ramanal</h2>
                <p className="text-secondary font-bold uppercase tracking-widest text-xs mb-4">Founder & Chairman, KET</p>
                <div className="w-12 h-1 bg-secondary mx-auto"></div>
              </div>
            </div>
          </div>

          {/* Right: The Message */}
          <div className="lg:w-2/3">
            <div className="relative">
              <Quote size={80} className="text-primary/5 absolute -top-8 -left-8" />
              <h3 className="text-3xl font-black text-primary mb-8 relative z-10 leading-tight">Empowering Minds, Shaping Global Futures</h3>
              <div className="space-y-8 text-lg md:text-xl text-neutralText leading-relaxed text-justify">
                <p>
                  The Karnataka College of Management & Science was established in the year 2010 under the aegis of Karnataka Education Trust which was founded by me in the year 2003. My life's mission has been to ensure that financial circumstances never dictate the quality of education a student receives.
                </p>
                <p>
                  With a mission to provide "Higher Education to All", we have grown from a small academic initiative into a powerhouse of technical and management excellence. Our campus serves as a melting pot of cultures, ideas, and aspirations.
                </p>
                <p>
                  We are not just building a college; we are building a legacy of leaders who will contribute to the growth of this nation and the world. My vision for KCMS is to be at the forefront of the educational revolution, integrating ethics with advanced science.
                </p>
                <div className="bg-primary/5 p-8 rounded-3xl border border-primary/10 italic">
                  "Education is the most powerful weapon which you can use to change the world. At KCMS, we don't just teach syllabus; we build characters and ignite curiosity."
                </div>
                <p>
                  I invite every aspiring leader to join our institution. Here, you will find more than just classrooms; you will find a family that supports your highest ambitions and a legacy that empowers your dreams.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Professional Closing */}
      <section className="py-20 border-t border-gray-100 container mx-auto px-6 text-center">
        <div className="text-accent2 font-black text-xl mb-2 italic">Prof. Basavaraj Ramanal</div>
        <div className="text-neutralText/60 text-xs font-bold uppercase tracking-widest">Chairman, Karnataka Education Trust (KET)</div>
      </section>
    </div>
  );
};

export default ChairmanDesk;
