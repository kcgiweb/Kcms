import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Quote, ChevronRight, History, Award, Landmark, Zap, Globe, Heart, ShieldCheck, ArrowRight } from 'lucide-react';

const ChairmanDesk: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* 1. Personality Hero Section */}
      <section className="relative h-[600px] flex items-center bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://res.cloudinary.com/dejcpd56d/image/upload/v1767690216/download_10_vssrg5.png')] bg-cover bg-center"></div>
        <div className="container mx-auto px-6 relative z-10 animate-fade-up">
          <nav className="flex items-center gap-2 text-white/50 text-xs mb-8 uppercase font-black tracking-widest">
            <Link to="/" className="hover:text-secondary">Home</Link> 
            <ChevronRight size={14} /> 
            <span className="text-white">Chairman's Desk</span>
          </nav>
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-2/3">
              <h1 className="text-6xl md:text-8xl font-black text-white mb-6 leading-tight">Visionary <br/><span className="text-secondary">Leadership</span></h1>
              <p className="text-2xl text-white/70 max-w-2xl font-medium leading-relaxed italic">"Transforming society through the power of inclusive, high-quality education."</p>
            </div>
            <div className="lg:w-1/3 text-center hidden lg:block">
               <div className="relative inline-block group">
                  <div className="absolute inset-0 bg-secondary rounded-[3rem] rotate-6 group-hover:rotate-12 transition-transform duration-500"></div>
                  <img 
                    src="https://res.cloudinary.com/dejcpd56d/image/upload/v1767687458/download_1_hopo91.png" 
                    className="relative z-10 rounded-[3rem] w-full shadow-2xl transition-all duration-700" 
                    alt="Chairman Prof. Basavaraj Ramanal" 
                  />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Founder's Profile & Mission */}
      <section className="py-32 container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="animate-fade-up">
             <div className="inline-block bg-primary/5 text-primary px-4 py-2 rounded-full font-black text-xs mb-8 uppercase tracking-widest">Founder & Visionary</div>
             <h2 className="text-4xl md:text-5xl font-black text-accent2 mb-10 leading-tight">Prof. Basavaraj Ramanal</h2>
             <div className="space-y-8 text-xl text-neutralText leading-loose text-justify">
                <p>
                  As the founder of Karnataka Education Trust, my life's mission has been to ensure that financial circumstances never dictate the quality of education a student receives. KCMS was born out of a desire to create a global standard institution right here in Bangalore.
                </p>
                <p>
                  We are not just building a college; we are building a legacy of leaders who will contribute to the growth of this nation and the world. My vision for KCMS is to be at the forefront of the educational revolution, integrating ethics with advanced science.
                </p>
             </div>
             <div className="mt-12 flex gap-10">
                <div className="text-center">
                   <div className="text-4xl font-black text-primary mb-1">2003</div>
                   <div className="text-[10px] font-bold text-neutralText/40 uppercase tracking-widest">Trust Founded</div>
                </div>
                <div className="text-center">
                   <div className="text-4xl font-black text-primary mb-1">50+</div>
                   <div className="text-[10px] font-bold text-neutralText/40 uppercase tracking-widest">Institutions</div>
                </div>
                <div className="text-center">
                   <div className="text-4xl font-black text-primary mb-1">Global</div>
                   <div className="text-[10px] font-bold text-neutralText/40 uppercase tracking-widest">Presence</div>
                </div>
             </div>
          </div>
          <div className="relative">
             <div className="absolute -top-10 -left-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
             <div className="bg-white p-12 rounded-[4rem] shadow-2xl border border-gray-100 relative z-10">
                <Quote size={80} className="text-primary/5 mb-8" />
                <p className="text-2xl font-black text-primary leading-tight mb-8">"Education is the most powerful weapon which you can use to change the world."</p>
                <p className="text-neutralText leading-relaxed italic">My inspiration comes from the belief that every young mind has the potential to innovate if given the right guidance and freedom to explore.</p>
             </div>
          </div>
        </div>
      </section>

      {/* 3. Institutional Values (Grid) */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-primary text-xs font-black uppercase tracking-widest mb-4">Core Philosophy</h2>
            <h3 className="text-4xl font-black text-primary">The Chairman's Guiding Principles</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: <Heart className="text-secondary" />, title: 'Inclusivity', desc: 'Ensuring higher education for all sections of society regardless of background.' },
              { icon: <Zap className="text-secondary" />, title: 'Agility', desc: 'Rapidly adapting our curriculum to meet the demands of the global industry.' },
              { icon: <ShieldCheck className="text-secondary" />, title: 'Integrity', desc: 'Building a culture of transparency, honesty, and moral courage.' },
              { icon: <Globe className="text-secondary" />, title: 'Global Impact', desc: 'Preparing students to be world citizens with a local heart.' },
            ].map((item, i) => (
              <div key={i} className="bg-white p-10 rounded-[3rem] shadow-lg border border-gray-100 hover:shadow-2xl transition-all">
                <div className="mb-6">{item.icon}</div>
                <h4 className="text-xl font-black text-primary mb-4">{item.title}</h4>
                <p className="text-sm text-neutralText leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Social Impact & CSR */}
      <section className="py-32 container mx-auto px-6">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-20">
           <div className="lg:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                 <img src="https://res.cloudinary.com/dejcpd56d/image/upload/v1767690324/download_12_pvx4jx.png" className="rounded-3xl shadow-lg aspect-square object-cover" alt="KCMS Student Success" />
                 <img src="https://res.cloudinary.com/dejcpd56d/image/upload/v1767690014/download_5_v1xovv.png" className="rounded-3xl shadow-lg translate-y-8 aspect-square object-cover" alt="KCMS Auditorium Events" />
              </div>
           </div>
           <div className="lg:w-1/2 animate-fade-up">
              <h2 className="text-primary text-xs font-black uppercase tracking-widest mb-6">Our Responsibility</h2>
              <h3 className="text-4xl font-black text-primary mb-8">Social Empowerment Through KCMS</h3>
              <p className="text-lg text-neutralText leading-relaxed mb-10">
                The Karnataka Education Trust has always been more than just an academic body. We are a social force. Through our various outreach programs, scholarships for the underprivileged, and rural digital literacy drives, we strive to bridge the socio-economic divide.
              </p>
              <div className="space-y-4">
                 <div className="flex items-center gap-4 font-bold text-primary">
                    <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center text-secondary"><Landmark size={20} /></div>
                    Merit & Need-Based Scholarship Programs
                 </div>
                 <div className="flex items-center gap-4 font-bold text-primary">
                    <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center text-secondary"><History size={20} /></div>
                    Rural Outreach & Education Initiatives
                 </div>
                 <div className="flex items-center gap-4 font-bold text-primary">
                    <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center text-secondary"><Award size={20} /></div>
                    Sustainable Green Campus Projects
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 5. Message to Future Students */}
      <section className="py-24 bg-primary text-white text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-6xl font-black mb-10 leading-tight">Believe in Your Potential</h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto mb-16 leading-relaxed">
            I invite every aspiring leader to join our institution. Here, you will find more than just classrooms; you will find a family that supports your highest ambitions and a legacy that empowers your dreams.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-8">
             <button 
              onClick={() => window.dispatchEvent(new CustomEvent('open-apply-modal'))}
              className="bg-secondary text-white px-12 py-5 rounded-full font-black text-lg hover:bg-white hover:text-primary transition-all shadow-2xl flex items-center justify-center gap-3"
             >
               Start Your Journey <ArrowRight />
             </button>
             <Link to="/contact" className="bg-white text-primary px-12 py-5 rounded-full font-black text-lg hover:bg-primary transition-all shadow-2xl">
               Contact Chairman's Office
             </Link>
          </div>
        </div>
      </section>

      {/* 6. Professional Closing */}
      <section className="py-20 container mx-auto px-6 text-center">
        <div className="text-accent2 font-black text-2xl mb-2">Prof. Basavaraj Ramanal</div>
        <div className="text-neutralText/60 text-xs font-bold uppercase tracking-widest">Chairman, Karnataka Education Trust (KET)</div>
      </section>
    </div>
  );
};

export default ChairmanDesk;
