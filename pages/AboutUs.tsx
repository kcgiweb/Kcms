import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Target, History, Award, CheckCircle, ChevronRight, Users, Landmark, Zap, BookOpen, Plus, Minus, HelpCircle } from 'lucide-react';
import SEO from '../components/SEO';

const AboutUs: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const milestones = [
    { year: '2003', title: 'Karnataka Education Trust', desc: 'The foundation of our vision was laid with the establishment of the trust.' },
    { year: '2010', title: 'Birth of KCMS', desc: 'Inauguration of the Management & Science college with prime UG courses.' },
    { year: '2015', title: 'NAAC Recognition', desc: 'Achieved significant accreditation milestones for quality education.' },
    { year: '2018', title: 'PG Department Expansion', desc: 'Launched MBA and MTTM programs to foster advanced leadership.' },
    { year: '2023', title: 'Digital Transformation', desc: 'Complete integration of smart classrooms and AI-driven labs.' },
  ];

  const affiliations = [
    { name: 'UGC', url: 'https://upload.wikimedia.org/wikipedia/en/9/91/University_Grants_Commission_India_logo.png' },
    { name: 'NAAC', url: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/07/NAAC_Logo.png/220px-NAAC_Logo.png' },
    { name: 'University of Mysore', url: 'https://upload.wikimedia.org/wikipedia/en/f/f6/University_of_Mysore_logo.png' },
    { name: 'AIU', url: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/53/Association_of_Indian_Universities_logo.png/220px-Association_of_Indian_Universities_logo.png' }
  ];

  const faqs = [
    {
      q: "When was KCMS established and what is its heritage?",
      a: "Karnataka College of Management & Science (KCMS) was established in 2010. It operates under the aegis of the Karnataka Education Trust, which was founded in 2003 by the renowned educationist Prof. Basavaraj Ramanal to bring professional education to the masses."
    },
    {
      q: "What does the motto 'Higher Education to All' signify?",
      a: "Our mission is inclusivity. We believe that quality management and science education should not be a privilege of the few. We strive to provide world-class infrastructure and expert mentorship at an accessible cost to students from all socio-economic backgrounds."
    },
    {
      q: "How does the institution's vision align with modern industry needs?",
      a: "KCMS envisions being a globally recognized center of excellence. We achieve this by constantly updating our curriculum in collaboration with industry experts, integrating emerging technologies like AI and Data Science into management studies, and focusing on research-driven pedagogy."
    },
    {
      q: "What is the core philosophy behind the teaching at KCMS?",
      a: "We follow a student-centric participatory learning model. Our philosophy combines the discipline of traditional values with the agility of modern corporate requirements, focusing on character building alongside academic brilliance."
    },
    {
      q: "What are the long-term goals for the Karnataka Education Trust?",
      a: "The Trust aims to expand its global footprint by establishing international academic partnerships, fostering a robust startup incubation ecosystem on campus, and continuing its commitment to rural digital literacy and social empowerment across Karnataka."
    }
  ];

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="pt-24 min-h-screen bg-white">
      <SEO 
        title="About KCMS Bangalore | Top Educational Institution since 2010"
        description="Discover the legacy of Karnataka College of Management & Science. Learn about our mission, vision, and the leadership of Prof. Basavaraj Ramanal."
        keywords="about KCMS Bangalore, Karnataka Education Trust, Prof. Basavaraj Ramanal, history of KCMS"
      />
      {/* 1. Hero Banner */}
      <section className="relative h-[400px] flex items-center bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://res.cloudinary.com/dejcpd56d/image/upload/v1767690141/download_8_f7gppy.png')] bg-cover bg-center"></div>
        <div className="container mx-auto px-6 relative z-10 animate-fade-up">
          <nav className="flex items-center gap-2 text-white/50 text-xs mb-6 uppercase font-black tracking-widest">
            <Link to="/" className="hover:text-secondary">Home</Link> 
            <ChevronRight size={14} /> 
            <span className="text-white">About Us</span>
          </nav>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-4">Our Legacy</h1>
          <p className="text-xl text-white/70 max-w-2xl">Building a global community of innovators since 2010.</p>
        </div>
      </section>

      {/* 2. Detailed About Section */}
      <section className="py-24 container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="animate-fade-up">
            <div className="inline-block bg-secondary/10 text-secondary px-4 py-2 rounded-full font-black text-sm mb-6 uppercase tracking-widest">The KCMS Story</div>
            <h2 className="text-4xl md:text-5xl font-black text-primary mb-8 leading-tight">Empowering Minds, Shaping Global Futures</h2>
            <div className="space-y-6 text-lg text-neutralText leading-relaxed">
              <p>The Karnataka College of Management & Science was established in the year 2010 under the aegis of Karnataka Education Trust which was founded by an educationist Prof. Basavaraj Ramanal in the year 2003.</p>
              <p>With a mission to provide "Higher Education to All", we have grown from a small academic initiative into a powerhouse of technical and management excellence. Our campus serves as a melting pot of cultures, ideas, and aspirations.</p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl -z-1"></div>
            <img src="https://res.cloudinary.com/dejcpd56d/image/upload/v1767690324/download_12_pvx4jx.png" alt="Campus Life" className="rounded-[3rem] shadow-2xl w-full" />
            <div className="absolute -bottom-8 -right-8 bg-primary p-10 rounded-[2.5rem] text-white shadow-xl hidden md:block">
              <div className="text-4xl font-black mb-1">15+</div>
              <div className="text-xs uppercase font-bold opacity-60">Years of Growth</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Founder Profile */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/3">
              <div className="relative group">
                <div className="absolute inset-0 bg-primary rounded-[3rem] rotate-3 group-hover:rotate-6 transition-transform"></div>
                <img 
                  src="https://res.cloudinary.com/dejcpd56d/image/upload/v1767687458/download_1_hopo91.png" 
                  alt="Prof. Basavaraj Ramanal" 
                  className="relative z-10 rounded-[3rem] w-full shadow-2xl transition-all duration-700"
                />
              </div>
            </div>
            <div className="lg:w-2/3 animate-fade-up">
              <h4 className="text-secondary font-black uppercase tracking-widest mb-4">The Visionary</h4>
              <h2 className="text-4xl md:text-5xl font-black text-accent2 mb-8">Prof. Basavaraj Ramanal</h2>
              <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-gray-100 relative italic text-neutralText text-xl leading-relaxed mb-8">
                <span className="text-6xl text-primary/10 absolute -top-4 -left-4">"</span>
                Education is not the learning of facts, but the training of the mind to think. At KCMS, we don't just teach syllabus; we build characters and ignite curiosity. Our goal is to make every student a leader in their own right.
              </div>
              <div className="font-bold text-neutralText/80">Founder & Chairman, Karnataka Education Trust</div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Timeline */}
      <section className="py-24 container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-primary mb-4">Our Milestones</h2>
          <p className="text-neutralText/60 max-w-2xl mx-auto">A journey marked by excellence, innovation, and social impact.</p>
        </div>
        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-gray-100 hidden md:block"></div>
          <div className="space-y-12">
            {milestones.map((m, i) => (
              <div key={i} className={`flex flex-col md:flex-row items-center gap-8 ${i % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                <div className="md:w-1/2 text-center md:text-right px-8">
                  <div className={`flex flex-col ${i % 2 === 0 ? 'md:items-end' : 'md:items-start'}`}>
                    <div className="text-4xl font-black text-secondary mb-2">{m.year}</div>
                    <h3 className="text-2xl font-bold text-primary mb-4">{m.title}</h3>
                    <p className="text-neutralText leading-relaxed">{m.desc}</p>
                  </div>
                </div>
                <div className="w-10 h-10 bg-white border-4 border-primary rounded-full relative z-10 hidden md:block"></div>
                <div className="md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Why Choose Us */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Why Choose KCMS?</h2>
            <p className="text-white/60">What sets us apart in the global educational landscape.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Landmark />, title: 'UGC Recognized', desc: 'Fully compliant and recognized by top educational governing bodies.' },
              { icon: <Award />, title: 'NAAC Accredited', desc: 'Commitment to maintaining the highest quality of education.' },
              { icon: <Zap />, title: 'Innovation First', desc: 'Curriculum integrated with AI, Data Science, and Modern Tech.' },
              { icon: <Users />, title: 'Expert Faculty', desc: 'Mentorship from industry veterans and PhD scholars.' },
              { icon: <BookOpen />, title: 'Holistic Dev', desc: 'Equal focus on sports, arts, and character building.' },
              { icon: <History />, title: '100% Placements', desc: 'Dedicated cell ensuring every student gets their dream career.' },
            ].map((item, i) => (
              <div key={i} className="bg-white/5 p-10 rounded-[2.5rem] border border-white/10 hover:bg-white hover:text-primary transition-all group">
                <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mb-8 shadow-lg text-white group-hover:scale-110 transition-transform">
                  {React.cloneElement(item.icon as React.ReactElement<any>, { size: 30 })}
                </div>
                <h3 className="text-2xl font-black mb-4">{item.title}</h3>
                <p className="opacity-60 group-hover:opacity-100 transition-opacity leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Institutional FAQs */}
      <section className="py-32 container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-20">
          <h2 className="text-primary text-xs font-black uppercase tracking-widest mb-4">Common Questions</h2>
          <h3 className="text-4xl md:text-5xl font-black text-primary">Institutional Heritage & Purpose</h3>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-gray-100 rounded-[2rem] overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <button 
                onClick={() => toggleFaq(i)}
                className="w-full flex items-center justify-between p-8 bg-gray-50/30 hover:bg-gray-50 transition-colors text-left"
              >
                <span className="text-lg font-bold text-primary flex items-center gap-4">
                  <HelpCircle className="text-secondary shrink-0" size={20} />
                  {faq.q}
                </span>
                <div className={`shrink-0 ml-4 transition-transform duration-300 ${activeFaq === i ? 'rotate-180' : ''}`}>
                  {activeFaq === i ? <Minus size={24} className="text-secondary" /> : <Plus size={24} className="text-primary" />}
                </div>
              </button>
              {activeFaq === i && (
                <div className="p-8 bg-white text-neutralText leading-relaxed animate-fade-in border-t border-gray-100">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 7. Accreditations */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-6 text-center">
          <h4 className="text-xs font-black text-neutralText/40 uppercase tracking-widest mb-12">Affiliations & Accreditations</h4>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-80 transition-all">
            {affiliations.map((aff) => (
              <div key={aff.name} className="h-16 md:h-24 w-auto flex items-center justify-center grayscale hover:grayscale-0 transition-all cursor-pointer">
                 <img src={aff.url} alt={aff.name} className="max-h-full w-auto object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Bottom CTA */}
      <section className="py-24 container mx-auto px-6">
        <div className="bg-secondary rounded-[3rem] p-12 md:p-24 text-white text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <h2 className="text-4xl md:text-6xl font-black mb-8 relative z-10">Start Your Journey Today</h2>
          <div className="flex flex-col md:flex-row justify-center gap-6 relative z-10">
            <button 
              onClick={() => window.dispatchEvent(new CustomEvent('open-apply-modal'))}
              className="bg-primary px-12 py-5 rounded-full font-black text-lg hover:scale-105 transition-transform shadow-2xl"
            >
              Apply Online Now
            </button>
            <Link to="/contact" className="bg-white text-primary px-12 py-5 rounded-full font-black text-lg hover:scale-105 transition-transform shadow-2xl">
              Visit Campus
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
