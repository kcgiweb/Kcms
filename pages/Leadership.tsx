import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Quote, ChevronRight, Award, BookOpen, Users, Globe, ArrowRight } from 'lucide-react';

const Leadership: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const boardMembers = [
    { 
      name: 'SMT. SUVARNA BASAVARAJ RAMNAL', 
      role: 'Chairperson', 
      tag: 'Karnataka Education Trust', 
      img: 'https://res.cloudinary.com/dejcpd56d/image/upload/v1767687764/download_3_gzxfum.png' 
    },
    { 
      name: 'Mr. Pradeep Ramnal', 
      role: 'CEO', 
      tag: 'Karnataka college Group of Institutions', 
      img: 'https://res.cloudinary.com/dejcpd56d/image/upload/v1767687679/download_2_cbxmzc.png' 
    },
    { 
      name: 'Mohammed Noor Ahmed', 
      role: 'Principal', 
      tag: 'Karnataka College of Management and Science', 
      img: 'https://res.cloudinary.com/dejcpd56d/image/upload/v1767688052/IMG_4453-1152x1536_v0b6my.webp' 
    },
  ];

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-primary text-white py-24">
        <div className="container mx-auto px-6 text-center animate-fade-up">
          <nav className="flex items-center justify-center gap-2 text-white/50 text-xs mb-8 uppercase font-black tracking-widest">
            <Link to="/" className="hover:text-secondary">Home</Link> 
            <ChevronRight size={14} /> 
            <span className="text-white opacity-100">Leadership</span>
          </nav>
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">Minds Behind <br/> The Excellence</h1>
          <p className="text-xl opacity-70 max-w-2xl mx-auto">Governed by a legacy of visionaries committed to "Higher Education to All".</p>
        </div>
      </section>

      {/* Chairman Section */}
      <section id="chairman" className="py-32 container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2 relative">
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -z-1"></div>
            <img 
              src="https://res.cloudinary.com/dejcpd56d/image/upload/v1767687458/download_1_hopo91.png" 
              alt="Chairman" 
              className="rounded-[4rem] shadow-2xl transition-all duration-700 w-full object-cover aspect-[4/5]" 
            />
            <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-3xl shadow-xl border border-gray-100 hidden md:block">
              <div className="text-accent2 font-black text-2xl">Prof. Basavaraj Ramanal</div>
              <div className="text-neutralText/80 font-bold text-sm uppercase tracking-widest">Chairman, KET</div>
            </div>
          </div>
          <div className="lg:w-1/2 animate-fade-up">
            <h2 className="text-primary text-xs font-black uppercase tracking-widest mb-6">Chairman's Desk</h2>
            <h3 className="text-4xl md:text-5xl font-black text-primary mb-10 leading-tight">Visionary Leadership for Global Impact</h3>
            <div className="relative mb-12">
               <Quote size={80} className="text-primary/5 absolute -top-10 -left-6" />
               <p className="text-xl text-neutralText leading-relaxed italic relative z-10">
                 "Our journey began with a simple belief: that quality education is the birthright of every aspiring mind. At KCMS, we don't just grant degrees; we build the moral and intellectual framework that supports a lifetime of leadership."
               </p>
            </div>
            <p className="text-lg text-neutralText mb-10 leading-relaxed">The Karnataka Education Trust has always prioritized accessibility and excellence. Our infrastructure and curriculum are designed to meet the demands of the 4th industrial revolution while staying rooted in our cultural values.</p>
            <Link to="/admissions" className="bg-primary text-white px-10 py-4 rounded-full font-black hover:bg-secondary transition-all shadow-lg inline-flex items-center gap-3">
              Join Our Vision <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Administrative Board Grid */}
      <section className="py-32 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-primary font-black text-4xl mb-4">The Administrative Board</h2>
            <p className="text-neutralText/60">Expert governance driving institutional success and global standards.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto">
            {boardMembers.map((member, i) => (
              <div key={i} className="group bg-white p-8 rounded-[3rem] border border-gray-100 hover:shadow-2xl transition-all text-center flex flex-col">
                <div className="relative mb-10 inline-block mx-auto">
                  <div className="absolute inset-0 bg-secondary/10 rounded-full blur-2xl group-hover:scale-125 transition-transform"></div>
                  <img 
                    src={member.img} 
                    className="w-48 h-48 rounded-full mx-auto relative z-10 border-4 border-white shadow-xl object-cover transition-all duration-500" 
                    alt={member.name} 
                  />
                </div>
                <div className="flex-grow flex flex-col justify-center">
                  <h4 className="text-2xl font-black text-accent2 mb-2 leading-tight">{member.name}</h4>
                  <div className="text-secondary font-black text-lg uppercase tracking-wider mb-2">{member.role}</div>
                  <p className="text-neutralText/60 font-bold text-sm leading-relaxed">
                    {member.tag}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Principal Section */}
      <section id="principal" className="py-32 container mx-auto px-6">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-20">
          <div className="lg:w-1/2 animate-fade-up">
            <h2 className="text-secondary text-xs font-black uppercase tracking-widest mb-6">Principal's Message</h2>
            <h3 className="text-4xl md:text-5xl font-black text-primary mb-10">Fostering Academic Brilliance</h3>
            <p className="text-xl text-neutralText leading-relaxed mb-8">Welcome to the hub of innovation. As the Principal of KCMS, my focus is on holistic development. We blend rigorous academics with real-world industry immersions.</p>
            <div className="grid grid-cols-2 gap-6 mb-12">
              <div className="flex items-center gap-4 text-primary font-bold">
                <Award className="text-secondary" /> Research Driven
              </div>
              <div className="flex items-center gap-4 text-primary font-bold">
                <BookOpen className="text-secondary" /> Student Centric
              </div>
              <div className="flex items-center gap-4 text-primary font-bold">
                <Users className="text-secondary" /> Diverse Faculty
              </div>
              <div className="flex items-center gap-4 text-primary font-bold">
                <Globe className="text-secondary" /> Global Tie-ups
              </div>
            </div>
            <div className="font-black text-accent2 text-2xl">Mohammed Noor Ahmed</div>
            <div className="text-neutralText/80 font-bold uppercase tracking-widest text-xs">Principal, KCMS</div>
          </div>
          <div className="lg:w-1/2 relative group">
            <div className="absolute inset-0 bg-primary/10 rounded-[4rem] group-hover:rotate-3 transition-transform"></div>
            <img 
              src="https://res.cloudinary.com/dejcpd56d/image/upload/v1767688052/IMG_4453-1152x1536_v0b6my.webp" 
              alt="Principal" 
              className="rounded-[4rem] shadow-2xl relative z-10 transition-all duration-700 w-full aspect-video object-cover" 
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Leadership;
