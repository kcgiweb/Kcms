import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Users, Award, ShieldCheck, GraduationCap, Laptop, Landmark, Plane, Library, Monitor, Users2, Trophy, Image as ImageIcon, CheckCircle, ChevronRight, MessageSquare, Cpu, Microscope, Globe } from 'lucide-react';
import { TESTIMONIALS } from '../constants';
import SEO from '../components/SEO';

const Home: React.FC = () => {
  const [counters, setCounters] = useState({ years: 0, placement: 0, courses: 0, students: 0 });

  const companyLogos = [
    { name: 'Google', url: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
    { name: 'Amazon', url: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
    { name: 'Microsoft', url: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg' },
    { name: 'IBM', url: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg' },
    { name: 'Accenture', url: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg' },
    { name: 'Infosys', url: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg' },
    { name: 'Wipro', url: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg' },
    { name: 'TCS', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Tata_Consultancy_Services_old_logo.svg/1280px-Tata_Consultancy_Services_old_logo.svg.png' },
    { name: 'Capgemini', url: 'https://www.cmaanet.org/sites/default/files/2019-09/deloitte.png' },
    { name: 'Oracle', url: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg' },
    { name: 'Deloitte', url: 'https://upload.wikimedia.org/wikipedia/commons/5/56/Deloitte.svg' },
    { name: 'HP', url: 'https://upload.wikimedia.org/wikipedia/commons/a/ad/HP_logo_2012.svg' },
    { name: 'Dell', url: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Dell_logo_2016.svg' },
    { name: 'Cognizant', url: 'https://upload.wikimedia.org/wikipedia/commons/4/43/Cognizant_logo_2022.svg' },
    { name: 'EY', url: 'https://upload.wikimedia.org/wikipedia/commons/3/34/EY_logo_2019.svg' },
    { name: 'KPMG', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGncmprKJx4GqdC2g3f0aEHkYSOB2T6aufLw&s' },
  ];

  const galleryImages = [
    '/assets/images/SLA_8705_ccmafe.jpg',
    '/assets/images/SLA_8735_uksvsy.jpg',
    '/assets/images/SLA_8834_yhvcvo.jpg',
    '/assets/images/SLA_8937_kxomhs.jpg',
    '/assets/images/SLA_8998_yygnwc.jpg',
    '/assets/images/SLA_8999_m4te5x.jpg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCounters(prev => ({
        years: prev.years < 20 ? prev.years + 1 : 20,
        placement: prev.placement < 100 ? prev.placement + 2 : 100,
        courses: prev.courses < 15 ? prev.courses + 1 : 15,
        students: prev.students < 2500 ? prev.students + 50 : 2500
      }));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col">
      <SEO 
        title="KCMS | Best Management & Science College in Bangalore | Top Rankings 2026"
        description="Karnataka College of Management & Science (KCMS) is the leading college in Bangalore for MBA, BCA, BBA, and B.Com. Ranked among the top colleges in Bangalore with 100% placement record. Apply for 2026 admissions today."
        keywords="KCMS, Karnataka College of Management & Science, best management college in Bangalore, best science college in Bangalore, top colleges in Bangalore, management colleges in Bangalore, science colleges in Bangalore, MBA admission Bangalore 2026, BCA admission Bangalore 2026, Bangalore colleges, Karnataka colleges"
        type="college"
      />
      {/* 1️⃣ Hero Section */}
      <section className="relative h-[70vh] lg:h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source 
              src="/assets/videos/herosection.mp4" 
              type="video/mp4" 
            />
          </video>
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-20 text-white animate-fade-in flex flex-col items-start text-left">
          <h1 className="text-4xl md:text-7xl font-black mb-6 leading-tight">
            Empowering the Next Generation of Leaders
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mb-10 text-white/80">
            Join Bangalore's premier institution for Management & Science. Admissions for the 2026-27 session are now open.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:justify-start">
            <Link 
              to="/apply"
              className="bg-secondary text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-white hover:text-primary transition-all shadow-2xl flex items-center gap-3"
            >
              Apply Now <ArrowRight size={20} />
            </Link>
            <Link 
              to="/courses" 
              className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-white hover:text-primary transition-all shadow-2xl"
            >
              Explore Courses
            </Link>
          </div>
        </div>
      </section>

      {/* 2️⃣ Split About Section */}
      <section className="py-12 md:py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-10 md:gap-16">
            <div className="lg:w-1/2 animate-fade-up">
              <div className="inline-block bg-primary/5 text-primary px-4 py-2 rounded-full font-bold text-xs md:text-sm mb-4 md:mb-6 uppercase tracking-widest">
                Best College in Bangalore
              </div>
              <h2 className="text-primary text-2xl md:text-5xl font-black mb-4 md:mb-8 leading-tight">
                Welcome to KCMS – Top Management & Science College in Bangalore
              </h2>
              <p className="text-neutralText leading-relaxed text-base md:text-lg mb-6 md:mb-10">
                Karnataka College of Management & Science (KCMS Bangalore) was established in 2010 with a vision of providing <strong>Higher Education to All</strong>. As a premier management college in Bangalore, we offer industry-aligned curriculum in BCA, BBA, B.Com, and MBA, making us the top choice for students seeking excellence and high-paying career growth.
              </p>
              <Link 
                to="/about" 
                className="w-full md:w-auto inline-flex items-center justify-center gap-3 bg-primary text-white px-8 md:px-10 py-4 rounded-full font-bold hover:bg-secondary transition-all shadow-xl"
              >
                Learn More About Us <ArrowRight size={20} />
              </Link>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="relative rounded-2xl md:rounded-[2.5rem] overflow-hidden shadow-2xl bg-gray-100 aspect-video group">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                >
                  <source 
                    src="/assets/videos/Welcome-to-Karnataka-College-Group-of-Institutions-_-Where-Education-Meets-Excellence_riipez_lvqzli.mp4" 
                    type="video/mp4" 
                  />
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3️⃣ Our Departments Section */}
      <section className="py-12 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-10 md:mb-20">
            <h2 className="text-primary text-3xl md:text-5xl font-black mb-4 uppercase">Popular Management & Science Programs</h2>
            <p className="text-neutralText/60 font-medium text-sm md:text-base">Top-rated courses at the best college in Bangalore for career excellence</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { name: 'BBA Aviation', label: 'Aviation Management', icon: <Plane className="text-secondary" />, link: '/course/bba-aviation', color: 'bg-blue-50' },
              { name: 'BCA AI & ML', label: 'Artificial Intelligence', icon: <Cpu className="text-secondary" />, link: '/course/bca-ai-ml', color: 'bg-purple-50' },
              { name: 'BSc Criminology', label: 'Forensic Science', icon: <Microscope className="text-secondary" />, link: '/course/bsc-criminology', color: 'bg-red-50' },
              { name: 'MTTM', label: 'Travel & Tourism', icon: <Globe className="text-secondary" />, link: '/course/mttm', color: 'bg-amber-50' },
            ].map((dept, i) => (
              <div key={i} className="bg-white rounded-2xl md:rounded-[2.5rem] p-6 md:p-10 border border-gray-100 hover:border-primary/20 hover:shadow-2xl transition-all group flex flex-col items-center text-center">
                <div className={`w-14 h-14 md:w-20 md:h-20 ${dept.color} rounded-2xl md:rounded-3xl flex items-center justify-center mb-4 md:mb-8 group-hover:scale-110 transition-transform`}>
                  {React.cloneElement(dept.icon as React.ReactElement<any>, { size: 30 })}
                </div>
                <h3 className="text-xl md:text-2xl font-black text-primary mb-1">{dept.name} Admission Bangalore</h3>
                <p className="text-neutralText/50 font-bold text-[10px] md:text-sm mb-6 md:mb-8 uppercase tracking-widest">{dept.label}</p>
                <Link 
                  to={dept.link} 
                  className="mt-auto w-full py-3 md:py-4 rounded-xl md:rounded-2xl border-2 border-primary/10 text-primary font-bold hover:bg-primary hover:text-white transition-all flex items-center justify-center gap-2 group/btn"
                >
                  View Course Details <ChevronRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4️⃣ Key Highlights Section */}
      <section className="py-12 md:py-24 bg-primary text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
            {[
              { value: counters.years, suffix: '+', label: 'Years of Excellence', icon: <Trophy /> },
              { value: counters.placement, suffix: '%', label: 'Placement Record', icon: <Award /> },
              { value: counters.courses, suffix: '+', label: 'Professional Courses', icon: <BookOpen /> },
              { value: counters.students, suffix: '+', label: 'Alumni Network', icon: <Users2 /> }
            ].map((item, i) => (
              <div key={i} className="space-y-2 md:space-y-4 animate-fade-up" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="text-secondary mb-2 md:mb-6 flex justify-center">{React.cloneElement(item.icon as React.ReactElement<any>, { size: 32 })}</div>
                <div className="text-3xl md:text-6xl font-black">{item.value}{item.suffix}</div>
                <div className="text-white/60 font-bold uppercase tracking-widest text-[10px] md:text-sm">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5️⃣ Our Facilities Section */}
      <section className="py-12 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-10 md:mb-16 gap-6 text-center md:text-left">
            <div className="max-w-2xl">
              <h2 className="text-primary text-3xl md:text-5xl font-black mb-4">Best College Infrastructure in Bangalore</h2>
              <p className="text-neutralText/60 text-base md:text-lg">KCMS provides modern campuses with smart classrooms and high-tech labs, making it the best management and science college in Bangalore.</p>
            </div>
            <Link to="/p/infrastructure" className="text-primary font-bold flex items-center gap-2 border-b-2 border-secondary pb-1 hover:gap-4 transition-all">
              Explore Our Campus <ArrowRight size={20} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { title: 'Modern Digital Library', img: '/assets/images/Central Library.webp', icon: <Library /> },
              { title: 'High-Tech IT Labs', img: '/assets/images/Advanced Laboratories.png', icon: <Monitor /> },
              { title: 'Smart Classrooms', img: '/assets/images/download_8_f7gppy_woi5xe.png', icon: <GraduationCap /> }
            ].map((facility, i) => (
              <div key={i} className="group relative h-[350px] md:h-[450px] rounded-2xl md:rounded-[3rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all">
                <img src={facility.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={facility.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 text-white">
                  <div className="w-10 h-10 md:w-14 md:h-14 bg-secondary rounded-xl md:rounded-2xl flex items-center justify-center mb-3 md:mb-4 shadow-lg">{React.cloneElement(facility.icon as React.ReactElement<any>, { size: 20 })}</div>
                  <h3 className="text-xl md:text-2xl font-black">{facility.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6️⃣ Placements Section */}
      <section className="py-12 md:py-24 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-20 mb-10 md:mb-16">
            <div className="lg:w-1/2 text-center lg:text-left">
              <h2 className="text-primary text-3xl md:text-5xl font-black mb-6 md:mb-8 leading-tight">Top Colleges in Bangalore with 100% Placements</h2>
              <p className="text-neutralText text-base md:text-lg mb-8 md:mb-10 leading-relaxed">
                As one of the best colleges in Bangalore with placement support, KCMS ensures students are career-ready through internship opportunities and training with Global Fortune 500 companies.
              </p>
              <div className="grid grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-12">
                <div className="bg-white p-4 md:p-6 rounded-2xl md:rounded-3xl border border-gray-100 shadow-sm">
                  <div className="text-2xl md:text-3xl font-black text-primary mb-1">500+</div>
                  <div className="text-[10px] md:text-xs font-bold text-neutralText/40 uppercase tracking-widest">Hiring Partners</div>
                </div>
                <div className="bg-white p-4 md:p-6 rounded-2xl md:rounded-3xl border border-gray-100 shadow-sm">
                  <div className="text-2xl md:text-3xl font-black text-primary mb-1">12 LPA</div>
                  <div className="text-[10px] md:text-xs font-bold text-neutralText/40 uppercase tracking-widest">Highest Package</div>
                </div>
              </div>
              <Link to="/placements" className="w-full md:w-auto inline-flex justify-center bg-primary text-white px-8 md:px-10 py-4 rounded-full font-black hover:bg-secondary transition-all shadow-xl">
                View Placement Statistics
              </Link>
            </div>

            <div className="lg:w-1/2 w-full">
              <div className="relative overflow-hidden py-6 md:py-10">
                <div className="animate-marquee-scroll gap-6 md:gap-12 items-center">
                  {[...companyLogos, ...companyLogos, ...companyLogos].map((logo, i) => (
                    <div key={i} className="min-w-[120px] md:min-w-[180px] h-20 md:h-28 bg-white p-4 md:p-8 rounded-xl md:rounded-2xl flex items-center justify-center shadow-md border border-gray-100 transition-all hover:scale-105 shrink-0">
                      <img 
                        src={logo.url} 
                        className="max-h-10 md:max-h-14 w-auto object-contain hover:scale-110 transition-all" 
                        alt={logo.name + ' Recruitment partner KCMS'} 
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7️⃣ Campus Gallery Section */}
      <section className="py-12 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-primary text-3xl md:text-4xl font-black mb-2 flex items-center justify-center gap-3">
              <ImageIcon className="text-secondary" /> Vibrant Campus Life at KCMS
            </h2>
            <p className="text-neutralText/60 text-sm md:text-base">Glimpses of the best management college experience in Bangalore.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {galleryImages.map((url, i) => (
              <div key={i} className="relative group aspect-square rounded-2xl md:rounded-3xl overflow-hidden shadow-lg">
                <img src={url} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={`KCMS Gallery Infrastructure ${i + 1}`} />
                <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                   <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center text-primary"><ArrowRight size={20} /></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8️⃣ Admission Process Section */}
      <section className="py-12 md:py-24 bg-primary text-white relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl md:text-5xl font-black mb-4">College Admission 2026 Bangalore</h2>
            <p className="text-white/60 text-sm md:text-base">Join KCMS – the top choice for management and science education in Bangalore</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 relative">
            <div className="hidden md:block absolute top-10 left-0 right-0 h-1 bg-white/10 -z-1" />
            {[
              { title: 'Apply Online', desc: 'Fill the enquiry form for 2026 batch at the best college in Bangalore.', icon: '01' },
              { title: 'Counseling', desc: 'Expert career guidance sessions from top mentors.', icon: '02' },
              { title: 'Verification', desc: 'Original document review by our registrar office.', icon: '03' },
              { title: 'Confirmation', desc: 'Secure your future at KCMS Bangalore.', icon: '04' }
            ].map((step, i) => (
              <div key={i} className="relative text-center group">
                <div className="w-14 h-14 md:w-20 md:h-20 bg-secondary text-primary rounded-full flex items-center justify-center mx-auto mb-6 md:mb-8 font-black text-xl md:text-2xl border-4 md:border-8 border-primary relative z-10 group-hover:scale-110 transition-transform">
                  {step.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-4">{step.title}</h3>
                <p className="text-sm md:text-base text-white/60 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 md:mt-20 text-center">
            <Link 
              to="/apply"
              className="inline-block w-full md:w-auto bg-white text-primary px-8 md:px-12 py-4 md:py-5 rounded-full font-black text-base md:text-lg hover:bg-secondary hover:text-white transition-all shadow-2xl"
            >
              Start Your Application for KCMS
            </Link>
          </div>
        </div>
      </section>

      {/* 9️⃣ Testimonials Section */}
      <section className="py-12 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-primary text-3xl md:text-5xl font-black mb-4">Student Reviews of KCMS Bangalore</h2>
            <p className="text-neutralText/60 text-sm md:text-base">Success stories from the best management and science college in Bangalore.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="bg-white p-6 md:p-10 rounded-2xl md:rounded-[3rem] shadow-xl relative group">
                <div className="absolute top-4 right-4 md:top-10 md:right-10 text-primary/10 group-hover:text-secondary/20 transition-colors">
                  <MessageSquare size={60} />
                </div>
                <p className="text-sm md:text-lg italic text-neutralText mb-6 md:mb-8 relative z-10 leading-relaxed">"{t.text}"</p>
                <div className="flex items-center gap-4 relative z-10">
                  <img src={t.image} className="w-10 h-10 md:w-16 md:h-16 rounded-full border-2 md:border-4 border-gray-50 shadow-md" alt={t.name + ' KCMS Alumnus'} />
                  <div>
                    <div className="font-black text-primary text-sm md:text-base">{t.name}</div>
                    <div className="text-[10px] md:text-xs font-bold text-neutralText/40 uppercase tracking-widest">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick CTA Bottom */}
      <section className="py-10 md:py-16 bg-secondary mb-16 lg:mb-0">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8 text-white">
          <h2 className="text-xl md:text-3xl font-black text-center md:text-left">Apply for Management & Science Admissions Bangalore 2026</h2>
          <Link 
            to="/apply"
            className="w-full md:w-auto bg-primary text-white px-8 md:px-10 py-4 rounded-full font-black text-base md:text-lg hover:bg-white hover:text-primary transition-all shadow-2xl flex items-center justify-center gap-3"
          >
            Apply Online to KCMS <ArrowRight />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
