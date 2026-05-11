import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Quote, ChevronRight, Award, BookOpen, Users, Globe, ArrowRight, Heart, ShieldCheck, Zap, Star, CheckCircle } from 'lucide-react';

const PrincipalMessage: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* 1. Hero Banner */}
      <section className="bg-primary text-white py-20 relative">
        <div className="absolute inset-0 opacity-10 bg-[url('/assets/images/SLA_9006_itrogh.jpg')] bg-cover bg-center"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <nav className="flex items-center justify-center gap-2 text-white/50 text-xs mb-6 uppercase font-bold tracking-widest">
            <Link to="/" className="hover:text-secondary">Home</Link> 
            <ChevronRight size={14} /> 
            <span className="text-white">Principal's Message</span>
          </nav>
          <h1 className="text-4xl md:text-6xl font-black mb-4">Principal's Message</h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">Welcome to the Karnataka College of Management & Science.</p>
        </div>
      </section>

      {/* 2. Message Section */}
      <section className="py-20 container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 md:gap-20">
          {/* Left: Principal Info */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
              <img 
                src="/assets/images/IMG_4453-1152x1536_v0b6my_xvgjru.webp" 
                alt="Dr. Mohd. Noor Ahmed" 
                className="w-full aspect-[4/5] object-cover"
              />
              <div className="p-8 text-center">
                <h2 className="text-2xl font-black text-primary mb-1">Dr. Mohd. Noor Ahmed</h2>
                <p className="text-secondary font-bold uppercase tracking-widest text-xs mb-4">Ph.D., Principal</p>
                <div className="w-12 h-1 bg-secondary mx-auto"></div>
              </div>
            </div>
          </div>

          {/* Right: The Message */}
          <div className="lg:w-2/3">
            <div className="relative">
              <Quote size={80} className="text-primary/5 absolute -top-8 -left-8" />
              <h3 className="text-3xl font-black text-primary mb-8 relative z-10 leading-tight">Empowering the Next Generation of Leaders</h3>
              <div className="space-y-6 text-lg text-neutralText leading-relaxed text-justify">
                <p>
                  As the Principal of Karnataka College of Management & Science (KCMS), it is my distinct pleasure to welcome you to our academic community. We stand at a pivotal moment in history where technology and management are converging at an unprecedented pace.
                </p>
                <p>
                  Our institution is not just a place of learning; it is an ecosystem designed to prepare you for this dynamic reality. We believe that every student possesses a unique spark of genius, and our role as educators is to provide the environment, tools, and mentorship required to fan that spark into a flame of professional brilliance.
                </p>
                <p>
                  We blend the traditional values of discipline and integrity with the modern requirements of agility and technical proficiency. At KCMS, we encourage our students to question, to research, and to innovate. Our faculty members are not just teachers; they are active researchers and industry consultants who bring the latest market trends directly to the classroom.
                </p>
                <p>
                  I invite you to join us on this journey of discovery and excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Educational Beliefs (Grid) */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-secondary text-xs font-black uppercase tracking-widest mb-4">Our Methodology</h2>
            <h3 className="text-4xl font-black text-primary">The KCMS Academic Pillars</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Award className="text-secondary" />, title: 'Curricular Rigor', desc: 'A syllabus that challenges the intellect and meets global university standards.' },
              { icon: <Zap className="text-secondary" />, title: 'Practical Immersions', desc: 'Moving beyond textbooks into real-world projects, labs, and industry internships.' },
              { icon: <Users className="text-secondary" />, title: 'Character Building', desc: 'Focusing on ethics, communication, and emotional intelligence for leadership.' },
            ].map((pillar, i) => (
              <div key={i} className="bg-white p-12 rounded-[3rem] shadow-xl hover:-translate-y-2 transition-all border border-gray-100">
                <div className="mb-8">{pillar.icon}</div>
                <h4 className="text-2xl font-black text-primary mb-4">{pillar.title}</h4>
                <p className="text-neutralText leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Commitment to Excellence */}
      <section className="py-32 container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2">
            <img 
              src="/assets/images/download_8_f7gppy_woi5xe.png" 
              className="rounded-[4rem] shadow-2xl w-full aspect-video object-cover" 
              alt="KCMS Interactive Smart Classrooms" 
            />
          </div>
          <div className="lg:w-1/2 animate-fade-up">
            <h3 className="text-3xl font-black text-primary mb-8">Fostering a Research-First Mindset</h3>
            <p className="text-lg text-neutralText leading-relaxed mb-8">
              In the 21st century, information is abundant, but insights are rare. At KCMS, we encourage our students to question, to research, and to innovate. Our faculty members are not just teachers; they are active researchers and industry consultants who bring the latest market trends directly to the classroom.
            </p>
            <ul className="space-y-4">
              {[
                'Interdisciplinary approach to management and science.',
                'State-of-the-art incubation cell for student entrepreneurs.',
                'Regular guest lectures from global CXOs and thought leaders.',
                'Mandatory industry certification programs (SAP, AI, Analytics).'
              ].map((item, i) => (
                <li key={i} className="flex gap-4 items-center font-bold text-primary">
                  <CheckCircle className="text-secondary" size={20} /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 5. Holistic Development Section */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-secondary text-xs font-black uppercase tracking-widest mb-6">Beyond the Classroom</h2>
            <h3 className="text-4xl font-black mb-10 leading-tight">Shaping the All-Round Professional</h3>
            <p className="text-xl text-white/70 leading-relaxed mb-10">
              We understand that success in the professional world requires more than just high marks. Our campus life is vibrant with sports, cultural fests, and social responsibility initiatives that build resilience and empathy.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-secondary"><Star /></div>
                <span className="font-bold">Cultural Hub</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-secondary"><Globe /></div>
                <span className="font-bold">Global Tours</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-secondary"><Heart /></div>
                <span className="font-bold">Social Impact</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-secondary"><ShieldCheck /></div>
                <span className="font-bold">Wellness Cell</span>
              </div>
            </div>
          </div>
          <div className="bg-white p-12 rounded-[4rem] text-primary">
            <h4 className="text-2xl font-black mb-6">Principal's Advice to Aspirants</h4>
            <div className="space-y-6 italic text-neutralText leading-relaxed">
              <p>"Stay curious. The world rewards those who never stop asking 'Why?'. Your time at KCMS will be what you make of it. Seize every opportunity, use every lab, and talk to every professor."</p>
              <div className="font-black text-secondary not-italic mt-10">— Mohammed Noor Ahmed</div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Message to Parents */}
      <section className="py-32 container mx-auto px-6">
        <div className="bg-gray-50 p-16 md:p-24 rounded-[4rem] flex flex-col lg:flex-row items-center gap-20">
           <div className="lg:w-2/3">
              <h3 className="text-3xl font-black text-primary mb-6">A Partnership of Trust</h3>
              <p className="text-lg text-neutralText leading-relaxed mb-10">
                To the parents, I thank you for entrusting us with your child's future. We take this responsibility with the utmost seriousness. Our "Open Door" policy ensures that we are always available to discuss the progress and well-being of our students. We don't just teach students; we nurture the pride of families.
              </p>
              <div className="flex gap-10">
                 <div>
                    <div className="text-4xl font-black text-primary mb-1">100%</div>
                    <div className="text-xs font-bold text-neutralText/40 uppercase tracking-widest">Transparency</div>
                 </div>
                 <div>
                    <div className="text-4xl font-black text-primary mb-1">24/7</div>
                    <div className="text-xs font-bold text-neutralText/40 uppercase tracking-widest">Counseling</div>
                 </div>
              </div>
           </div>
           <div className="lg:w-1/3">
              <div className="bg-white p-10 rounded-[3rem] shadow-xl border border-gray-100 text-center">
                 <Users className="text-secondary mx-auto mb-6" size={48} />
                 <h4 className="font-black text-primary mb-4">Parent-Teacher Council</h4>
                 <p className="text-sm text-neutralText/60 mb-8">Quarterly meets to ensure collaborative growth and student success.</p>
                 <Link to="/contact" className="text-primary font-black uppercase text-xs tracking-widest border-b-2 border-secondary pb-1">Learn More</Link>
              </div>
           </div>
        </div>
      </section>

      {/* 7. Future Ready Call to Action */}
      <section className="py-24 text-center container mx-auto px-6">
        <div className="max-w-3xl mx-auto animate-fade-up">
           <h2 className="text-4xl md:text-5xl font-black text-primary mb-8 leading-tight">Your Future Begins with a Single Decision</h2>
           <p className="text-xl text-neutralText mb-12">I invite you to visit our campus, interact with our faculty, and see first-hand the transformation that awaits you at KCMS.</p>
           <div className="flex flex-col md:flex-row justify-center gap-6">
              <button 
                onClick={() => window.dispatchEvent(new CustomEvent('open-apply-modal'))}
                className="bg-primary text-white px-12 py-5 rounded-full font-black text-lg hover:bg-secondary transition-all shadow-2xl flex items-center justify-center gap-3"
              >
                Apply for Admission <ArrowRight />
              </button>
              <Link to="/contact" className="bg-secondary text-white px-12 py-5 rounded-full font-black text-lg hover:bg-primary transition-all shadow-2xl flex items-center justify-center gap-3">
                Talk to a Counselor <Users size={20} />
              </Link>
           </div>
        </div>
      </section>

      {/* 8. Signature Closing */}
      <section className="py-20 border-t border-gray-100 container mx-auto px-6 text-center">
        <div className="text-accent2 font-black text-xl mb-2 italic">Mohammed Noor Ahmed</div>
        <div className="text-neutralText/60 text-xs font-bold uppercase tracking-widest">Principal, Karnataka College of Management & Science</div>
      </section>
    </div>
  );
};

export default PrincipalMessage;
