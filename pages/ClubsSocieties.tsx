
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Zap, Camera, Code, Mic2, Palette, Search, ArrowRight, Users, Star } from 'lucide-react';

const ClubsSocieties: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const clubCategories = [
    {
      title: 'Technical & Innovation',
      icon: <Code />,
      clubs: ['KCMS Coding Cell', 'AI Research Lab', 'FinTech Society', 'Entrepreneurship Hub']
    },
    {
      title: 'Arts & Culture',
      icon: <Palette />,
      clubs: ['The Artsy Soul', 'Dramatic Society', 'Music Fusion', 'Dance Troupe']
    },
    {
      title: 'Media & Literature',
      icon: <Camera />,
      clubs: ['ShutterBug (Photography)', 'Literary Club', 'Debate Society', 'KCMS Radio']
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-primary text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80')] bg-cover bg-center"></div>
        <div className="container mx-auto px-6 relative z-10 animate-fade-up">
          <nav className="flex items-center gap-2 text-white/50 text-xs mb-8 uppercase font-black tracking-widest">
            <Link to="/" className="hover:text-secondary">Home</Link> 
            <ChevronRight size={14} /> 
            <span className="text-white opacity-100">Clubs & Societies</span>
          </nav>
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">Find Your <br/><span className="text-secondary">Community</span></h1>
          <p className="text-xl text-white/70 max-w-2xl leading-relaxed">Discover a world of hobbies, skills, and lifelong friendships through our 25+ student-led organizations.</p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-32 container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {clubCategories.map((cat, i) => (
            <div key={i} className="bg-gray-50 p-12 rounded-[3.5rem] border border-gray-100">
              <div className="w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center mb-10 shadow-lg">
                {/* Fixed TypeScript error by adding <any> to React.ReactElement cast */}
                {React.cloneElement(cat.icon as React.ReactElement<any>, { size: 30 })}
              </div>
              <h3 className="text-2xl font-black text-primary mb-8">{cat.title}</h3>
              <ul className="space-y-4">
                {cat.clubs.map((club, idx) => (
                  <li key={idx} className="flex items-center gap-4 text-lg font-bold text-neutralText">
                    <Star className="text-secondary" size={18} /> {club}
                  </li>
                ))}
              </ul>
              <button className="mt-12 text-primary font-black uppercase text-xs tracking-widest border-b-2 border-secondary pb-1 hover:gap-4 transition-all">Explore Category</button>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Club */}
      <section className="py-32 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-6">
           <div className="bg-white p-12 md:p-24 rounded-[4rem] shadow-2xl flex flex-col lg:flex-row items-center gap-20">
              <div className="lg:w-1/2">
                 <div className="inline-block bg-secondary text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-6">Club of the Month</div>
                 <h2 className="text-4xl font-black text-primary mb-8 leading-tight">The KCMS Innovation Lab (iLab)</h2>
                 <p className="text-xl text-neutralText leading-relaxed mb-10">This month, we celebrate iLab for securing 3 patents and hosting the biggest Hackathon in North Bangalore.</p>
                 <Link to="/contact" className="bg-primary text-white px-10 py-4 rounded-full font-black flex items-center justify-center gap-3 hover:bg-secondary transition-all w-fit">
                    Join iLab Now <ArrowRight />
                 </Link>
              </div>
              <div className="lg:w-1/2">
                 <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80" className="rounded-[3rem] shadow-xl" alt="Innovation Lab" />
              </div>
           </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 text-center container mx-auto px-6">
         <h2 className="text-4xl font-black text-primary mb-8 leading-tight">Can't Find What You're Looking For?</h2>
         <p className="text-xl text-neutralText mb-12 max-w-2xl mx-auto">KCMS encourages student autonomy. If you have a unique idea, we'll help you start your own society!</p>
         <button className="bg-secondary text-white px-12 py-5 rounded-full font-black text-lg hover:bg-primary transition-all shadow-2xl">
            Propose a New Club
         </button>
      </section>
    </div>
  );
};

export default ClubsSocieties;
