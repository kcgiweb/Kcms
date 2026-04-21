import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Camera, Music, Trophy, Users, Heart, Zap, ChevronRight, PlayCircle } from 'lucide-react';
import SEO from '../components/SEO';

const StudentLife: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const activities = [
    { icon: <Music />, title: 'Cultural Fest', desc: 'Our annual "Kalasangama" celebrates talent across music, dance, and arts.', color: 'bg-purple-500' },
    { icon: <Trophy />, title: 'Sports Arena', desc: 'From cricket leagues to basketball, we foster a spirit of healthy competition.', color: 'bg-orange-500' },
    { icon: <Users />, title: 'Student Clubs', desc: 'Join coding clubs, debate societies, or photography cells run by students.', color: 'bg-blue-500' },
    { icon: <Heart />, title: 'Social Service', desc: 'NSS and Red Cross volunteers driving blood donation and green drives.', color: 'bg-red-500' },
  ];

  const lifeGallery = [
    { url: 'https://res.cloudinary.com/dejcpd56d/image/upload/v1767690014/download_5_v1xovv.png', label: 'Main Auditorium Events' },
    { url: 'https://res.cloudinary.com/dejcpd56d/image/upload/v1767689980/download_4_gfxni9.png', label: 'Collaborative Study' },
    { url: 'https://res.cloudinary.com/dejcpd56d/image/upload/v1767693347/download_13_pobgl1.png', label: 'Hostel Life' },
    { url: 'https://res.cloudinary.com/dejcpd56d/image/upload/v1767690221/download_10_yezsn9.png', label: 'Sports Excellence' },
    { url: 'https://res.cloudinary.com/dejcpd56d/image/upload/v1767690141/download_8_f7gppy.png', label: 'Interactive Learning' },
    { url: 'https://res.cloudinary.com/dejcpd56d/image/upload/v1767690271/download_11_mu2xxp.png', label: 'Tech Innovation' },
  ];

  return (
    <div className="pt-24 min-h-screen bg-white">
      <SEO 
        title="Student Life at KCMS Bangalore | Campus Experience & Culture"
        description="Experience the vibrant student life at KCMS Bangalore. From cultural fests and sports to technical clubs and social service, discover a holistic learning environment."
        keywords="campus life Bangalore, KCMS student activities, college culture Bangalore, sports and cultural events"
      />
      {/* Hero */}
      <section className="relative h-[500px] flex items-center overflow-hidden bg-primary">
        <div className="absolute inset-0">
          <img 
            src="https://res.cloudinary.com/dejcpd56d/image/upload/v1767690324/download_12_pvx4jx.png" 
            className="w-full h-full object-cover opacity-40 transition-all duration-1000" 
            alt="Vibrant Student Campus Life"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 animate-fade-up">
          <nav className="flex items-center gap-2 text-white/50 text-xs mb-8 uppercase font-black tracking-widest">
            <Link to="/" className="hover:text-secondary transition-colors">Home</Link> 
            <ChevronRight size={14} /> 
            <span className="text-white opacity-100">Campus Life</span>
          </nav>
          <h1 className="text-6xl md:text-8xl font-black text-white mb-6">Live More. <br/> Learn More.</h1>
          <p className="text-xl text-white/70 max-w-2xl leading-relaxed">Beyond the books, discovery happens in the corridors, playgrounds, and clubs of KCMS. Join a community that celebrates growth.</p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="animate-fade-up">
            <h2 className="text-secondary text-xs font-black uppercase tracking-widest mb-6">Student Experience</h2>
            <h3 className="text-4xl md:text-5xl font-black text-primary mb-8 leading-tight">A Vibrant Ecosystem of Growth</h3>
            <p className="text-xl text-neutralText leading-relaxed mb-10">At KCMS, we believe that education is 24/7. Our campus is designed to be a living laboratory where students build friendships, leadership skills, and lifelong memories.</p>
            <div className="flex gap-6">
              <div className="p-8 bg-gray-50 rounded-[2.5rem] border border-gray-100 flex-1 group hover:bg-white hover:shadow-xl transition-all">
                <div className="text-4xl font-black text-primary mb-2 group-hover:text-secondary transition-colors">25+</div>
                <div className="text-xs font-bold text-neutralText/40 uppercase tracking-widest">Active Clubs</div>
              </div>
              <div className="p-8 bg-gray-50 rounded-[2.5rem] border border-gray-100 flex-1 group hover:bg-white hover:shadow-xl transition-all">
                <div className="text-4xl font-black text-primary mb-2 group-hover:text-secondary transition-colors">10+</div>
                <div className="text-xs font-bold text-neutralText/40 uppercase tracking-widest">Sports Events</div>
              </div>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-[3rem] shadow-2xl aspect-video">
            <img 
              src="https://res.cloudinary.com/dejcpd56d/image/upload/v1767690221/download_10_yezsn9.png" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              alt="KCMS Sports and Outdoor Activities"
            />
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <PlayCircle size={80} className="text-white" />
            </div>
          </div>
        </div>
      </section>

      {/* Grid of Activities */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {activities.map((act, i) => (
              <div key={i} className="bg-white/5 p-10 rounded-[3rem] border border-white/10 hover:bg-white hover:text-primary transition-all group">
                <div className={`w-16 h-16 ${act.color} rounded-2xl flex items-center justify-center mb-8 shadow-lg text-white group-hover:scale-110 transition-transform`}>
                  {React.cloneElement(act.icon as React.ReactElement<any>, { size: 30 })}
                </div>
                <h4 className="text-2xl font-black mb-4">{act.title}</h4>
                <p className="opacity-60 group-hover:opacity-100 transition-opacity leading-relaxed">{act.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Gallery */}
      <section className="py-24 container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-black text-primary mb-4 uppercase">Campus Community Glimpses</h2>
          <p className="text-neutralText/60 font-medium">Real moments from the best college experience in Bangalore.</p>
        </div>
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {lifeGallery.map((img, i) => (
            <div key={i} className="relative group rounded-[2.5rem] overflow-hidden shadow-lg animate-fade-up border border-gray-100" style={{ animationDelay: `${i * 100}ms` }}>
              <img 
                src={img.url} 
                className="w-full hover:scale-110 transition-transform duration-700 object-cover" 
                alt={img.label}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                 <div className="text-white font-bold uppercase tracking-widest text-xs flex items-center gap-2">
                   <Camera size={16} className="text-secondary" /> {img.label}
                 </div>
              </div>
              <div className="absolute bottom-4 left-6 group-hover:opacity-0 transition-opacity">
                <span className="text-white/60 text-[10px] font-black uppercase tracking-widest bg-black/40 px-3 py-1 rounded-full backdrop-blur-sm">{img.label}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 container mx-auto px-6">
        <div className="bg-secondary p-16 md:p-24 rounded-[4rem] text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <h2 className="text-4xl md:text-6xl font-black mb-8 relative z-10">Be Part of the KCMS Journey</h2>
          <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto relative z-10">Your seat at Bangalore's most vibrant campus is waiting. Apply for the 2026-27 session now.</p>
          <button 
            onClick={() => window.dispatchEvent(new CustomEvent('open-apply-modal'))}
            className="bg-primary text-white px-12 py-5 rounded-full font-black text-lg inline-flex items-center gap-3 hover:bg-white hover:text-primary transition-all shadow-2xl relative z-10"
          >
            Apply for Admission <Zap size={20} />
          </button>
        </div>
      </section>
    </div>
  );
};

export default StudentLife;
