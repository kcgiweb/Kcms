
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, History, Award, Landmark, Globe, Rocket, ShieldCheck, ArrowRight, BookOpen, Star, Zap, Heart } from 'lucide-react';

const HistoryMilestones: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const timelineItems = [
    {
      year: '2003',
      title: 'The Inception of KET',
      desc: 'The Karnataka Education Trust (KET) was founded by Prof. Basavaraj Ramanal with a singular mission: "Higher Education to All". Starting with basic vocational training centers.',
      icon: <Landmark className="text-secondary" />
    },
    {
      year: '2010',
      title: 'Foundation of KCMS',
      desc: 'Karnataka College was established in Bangalore, launching with undergraduate programs in BCA, BBA, and B.Com.',
      icon: <History className="text-secondary" />
    },
    {
      year: '2015',
      title: 'NAAC Accreditation Cycle 1',
      desc: 'Achieved significant national recognition for academic standards and infrastructure quality, marking our entry into top-tier educational institutions.',
      icon: <ShieldCheck className="text-secondary" />
    },
    {
      year: '2018',
      title: 'Post-Graduate Expansion',
      desc: 'Launched the MBA and MTTM departments, introducing advanced research and global tourism studies to our curriculum.',
      icon: <Rocket className="text-secondary" />
    },
    {
      year: '2021',
      title: 'Digital & Global Transformation',
      desc: 'Complete modernization of labs with AI and Cloud tech, and established international MOUs with universities in Dubai and the UK.',
      icon: <Globe className="text-secondary" />
    },
    {
      year: '2024',
      title: 'Industry 4.0 Hub',
      desc: 'Inauguration of the on-campus Innovation and Incubation Cell, supporting 10+ student-led startups and high-end research projects.',
      icon: <Zap className="text-secondary" />
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-primary text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="container mx-auto px-6 relative z-10 animate-fade-up">
          <nav className="flex items-center gap-2 text-white/50 text-xs mb-8 uppercase font-black tracking-widest">
            <Link to="/" className="hover:text-secondary">Home</Link> 
            <ChevronRight size={14} /> 
            <Link to="/about" className="hover:text-secondary">About</Link>
            <ChevronRight size={14} />
            <span className="text-white opacity-100">History & Milestones</span>
          </nav>
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">Legacy of <br/><span className="text-secondary">Two Decades</span></h1>
          <p className="text-xl text-white/70 max-w-2xl leading-relaxed">Since 2003, we have been building a bridge between youthful aspiration and global professional success.</p>
        </div>
      </section>

      {/* The Trust Foundation */}
      <section className="py-32 container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/2">
            <div className="relative group">
               <div className="absolute inset-0 bg-primary/10 rounded-[4rem] group-hover:rotate-2 transition-transform"></div>
               <img 
                src="https://images.unsplash.com/photo-1525921429624-479b6c294a48?auto=format&fit=crop&q=80" 
                alt="Founding Principles" 
                className="rounded-[4rem] shadow-2xl relative z-10 w-full"
               />
            </div>
          </div>
          <div className="lg:w-1/2 animate-fade-up">
            <h2 className="text-primary text-xs font-black uppercase tracking-widest mb-6">The KET Foundation</h2>
            <h3 className="text-4xl font-black text-primary mb-8 leading-tight">Born from a Vision of Inclusivity</h3>
            <div className="space-y-6 text-lg text-neutralText leading-relaxed">
              <p>The journey of Karnataka College Group began not as a commercial venture, but as a social mission. Our founder, <strong>Prof. Basavaraj Ramanal</strong>, recognized a critical gap in the higher education landscape of Karnataka: the lack of accessible, high-quality professional training for students from diverse economic backgrounds.</p>
              <p>The Karnataka Education Trust was founded in 2003 with the principle that academic excellence should be a right, not a privilege. This ethos remains at the heart of KCMS today, driving every decision from fee structures to faculty recruitment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-32 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-primary text-xs font-black uppercase tracking-widest mb-4">The Growth Map</h2>
            <h3 className="text-4xl md:text-5xl font-black text-primary">Evolutionary Milestones</h3>
          </div>
          
          <div className="relative">
            {/* Center Line */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-primary/10 hidden md:block"></div>
            
            <div className="space-y-24 relative z-10">
              {timelineItems.map((item, i) => (
                <div key={i} className={`flex flex-col md:flex-row items-center gap-12 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className={`md:w-1/2 flex flex-col ${i % 2 === 0 ? 'md:items-end md:text-right' : 'md:items-start md:text-left'}`}>
                    <div className="text-5xl font-black text-secondary mb-4 opacity-50">{item.year}</div>
                    <h4 className="text-2xl font-black text-primary mb-4">{item.title}</h4>
                    <p className="text-neutralText text-lg leading-relaxed max-w-md">{item.desc}</p>
                  </div>
                  
                  {/* Dot */}
                  <div className="w-16 h-16 bg-white border-4 border-primary rounded-full flex items-center justify-center shrink-0 z-20 shadow-xl group hover:scale-110 transition-transform">
                     {/* FIX: Use React.ReactElement<any> to satisfy TypeScript about the 'size' property */}
                     {React.cloneElement(item.icon as React.ReactElement<any>, { size: 24 })}
                  </div>
                  
                  <div className="md:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Institutional Impact */}
      <section className="py-32 container mx-auto px-6">
         <div className="bg-primary text-white p-16 md:p-24 rounded-[4rem] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
               <div>
                  <h2 className="text-4xl font-black mb-8 leading-tight">Impact in Numbers</h2>
                  <p className="text-xl text-white/60 mb-12">Two decades of dedication has resulted in more than just a college—it has built a global community of professionals.</p>
                  <div className="grid grid-cols-2 gap-8">
                     <div>
                        <div className="text-5xl font-black text-secondary mb-2">15k+</div>
                        <div className="text-xs font-bold uppercase tracking-widest opacity-40">Alumni Worldwide</div>
                     </div>
                     <div>
                        <div className="text-5xl font-black text-secondary mb-2">200+</div>
                        <div className="text-xs font-bold uppercase tracking-widest opacity-40">Hiring Partners</div>
                     </div>
                     <div>
                        <div className="text-5xl font-black text-secondary mb-2">50+</div>
                        <div className="text-xs font-bold uppercase tracking-widest opacity-40">PhDs Graduated</div>
                     </div>
                     <div>
                        <div className="text-5xl font-black text-secondary mb-2">03</div>
                        <div className="text-xs font-bold uppercase tracking-widest opacity-40">Specialized Campuses</div>
                     </div>
                  </div>
               </div>
               <div className="grid grid-cols-1 gap-6">
                  {[
                    { title: 'Excellence in Teaching', icon: <BookOpen /> },
                    { title: 'Best ROI Award 2023', icon: <Award /> },
                    { title: 'Social Responsibility Win', icon: <Heart /> }
                  ].map((award, i) => (
                    <div key={i} className="bg-white/10 p-8 rounded-3xl border border-white/10 flex items-center gap-6 hover:bg-white/20 transition-all">
                       <div className="text-secondary">{award.icon}</div>
                       <div className="font-bold text-lg">{award.title}</div>
                    </div>
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* Future Vision CTA */}
      <section className="py-32 text-center container mx-auto px-6">
         <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-primary mb-8">Write the Next Chapter with Us</h2>
            <p className="text-xl text-neutralText mb-12">Our history is solid, but our future is even brighter. Be part of the legacy at Karnataka College.</p>
            <div className="flex flex-col md:flex-row justify-center gap-6">
               <button 
                onClick={() => window.dispatchEvent(new CustomEvent('open-apply-modal'))}
                className="bg-primary text-white px-12 py-5 rounded-full font-black text-lg hover:bg-secondary transition-all shadow-2xl flex items-center justify-center gap-3"
               >
                 Join the 2026 Batch <ArrowRight />
               </button>
               <Link to="/contact" className="bg-secondary text-white px-12 py-5 rounded-full font-black text-lg hover:bg-primary transition-all shadow-2xl">
                 Contact Admission Hub
               </Link>
            </div>
         </div>
      </section>

      {/* Footer Mark */}
      <section className="py-20 border-t border-gray-100 container mx-auto px-6 text-center opacity-40">
        <div className="text-primary font-black text-xl mb-1 italic">KCMS Legacy Hub</div>
        <div className="text-xs font-bold uppercase tracking-widest">Since 2003 | Karnataka Education Trust</div>
      </section>
    </div>
  );
};

export default HistoryMilestones;
