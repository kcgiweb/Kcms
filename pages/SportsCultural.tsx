
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Trophy, Music, Zap, Activity, Users, ArrowRight, Play, Star } from 'lucide-react';

const SportsCultural: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-primary text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80')] bg-cover bg-center"></div>
        <div className="container mx-auto px-6 relative z-10 animate-fade-up">
          <nav className="flex items-center gap-2 text-white/50 text-xs mb-8 uppercase font-black tracking-widest">
            <Link to="/" className="hover:text-secondary">Home</Link> 
            <ChevronRight size={14} /> 
            <span className="text-white opacity-100">Sports & Cultural</span>
          </nav>
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">Celebrate <br/><span className="text-secondary">Human Spirit</span></h1>
          <p className="text-xl text-white/70 max-w-2xl leading-relaxed">Where athleticism meets artistry. Experience the pulse of KCMS through our annual fests and sports meets.</p>
        </div>
      </section>

      {/* Kalasangama Section */}
      <section className="py-32 container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2 animate-fade-up">
            <div className="inline-block bg-primary/5 text-primary px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-6">Annual Extravaganza</div>
            <h2 className="text-4xl md:text-5xl font-black text-primary mb-10 leading-tight italic">Kalasangama: The Great Confluence</h2>
            <p className="text-xl text-neutralText leading-loose text-justify mb-10">
              Kalasangama is not just a fest; it is an emotion. For three days, our campus transforms into a kaleidoscope of music, dance, theater, and fine arts. It is the stage where the next generation of performers is born.
            </p>
            <div className="grid grid-cols-2 gap-8">
               <div className="flex items-center gap-4 font-bold text-primary">
                  <Music className="text-secondary" /> 50+ Events
               </div>
               <div className="flex items-center gap-4 font-bold text-primary">
                  <Users className="text-secondary" /> 5000+ Attendees
               </div>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
             <img src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80" className="rounded-[4rem] shadow-2xl" alt="Cultural Fest" />
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center text-white shadow-2xl animate-pulse">
                   <Play fill="currentColor" />
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Sports Infrastructure */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-6">
           <div className="text-center mb-20">
              <h2 className="text-primary text-xs font-black uppercase tracking-widest mb-4">The Sports Arena</h2>
              <h3 className="text-4xl font-black text-primary">State-of-the-Art Athletic Facilities</h3>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { title: 'Olympic Size Turf', desc: 'Dedicated space for Football, Cricket, and Athletics meets.' },
                { title: 'Indoor Sports Complex', desc: 'Badminton courts, Table Tennis, and a Chess academy.' },
                { title: 'Pro-Gym & Yoga', desc: 'Modern equipment and professional trainers for physical fitness.' }
              ].map((item, i) => (
                <div key={i} className="bg-white p-12 rounded-[3.5rem] shadow-lg border border-gray-100 hover:-translate-y-2 transition-all">
                   <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center text-primary mb-8">
                      <Zap size={30} />
                   </div>
                   <h4 className="text-2xl font-black text-primary mb-4">{item.title}</h4>
                   <p className="text-neutralText leading-relaxed">{item.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Hall of Fame */}
      <section className="py-32 container mx-auto px-6">
         <div className="text-center mb-20">
            <h2 className="text-primary text-xs font-black uppercase tracking-widest mb-4">Institutional Pride</h2>
            <h3 className="text-4xl font-black text-primary">Hall of Fame</h3>
         </div>
         <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { year: '2023', event: 'VTU Cricket Winners', icon: <Trophy /> },
              { year: '2022', event: 'Best Dance Troupe (National)', icon: <Star /> },
              { year: '2023', event: 'Inter-College Chess Cup', icon: <Trophy /> },
              { year: '2024', event: 'Regional Athletic Champs', icon: <Zap /> }
            ].map((item, i) => (
              <div key={i} className="text-center group">
                 <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center text-secondary mx-auto mb-6 group-hover:scale-110 transition-transform">
                    {/* Fixed TypeScript error by adding <any> to React.ReactElement cast */}
                    {React.cloneElement(item.icon as React.ReactElement<any>, { size: 32 })}
                 </div>
                 <div className="text-sm font-black text-primary mb-1">{item.year}</div>
                 <div className="text-xs font-bold text-neutralText/40 uppercase tracking-widest">{item.event}</div>
              </div>
            ))}
         </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-white text-center">
         <h2 className="text-4xl font-black mb-10">Unleash Your Potential</h2>
         <Link to="/contact" className="bg-secondary text-white px-12 py-5 rounded-full font-black text-lg hover:bg-white hover:text-primary transition-all shadow-2xl inline-flex items-center gap-3">
            Join the Sports Cell <ArrowRight />
         </Link>
      </section>
    </div>
  );
};

export default SportsCultural;
