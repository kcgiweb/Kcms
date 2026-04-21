
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Library, Monitor, GraduationCap, Coffee, Bus, Building2, 
  ChevronRight, Zap, Microscope, Music, Stethoscope, Dumbbell 
} from 'lucide-react';

const Infrastructure: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const facilities = [
    { 
      title: 'Central Library', 
      slug: 'library', 
      icon: <Library />, 
      desc: 'Fully automated knowledge hub with 50,000+ volumes and digital journals.', 
      img: 'https://res.cloudinary.com/dejcpd56d/image/upload/v1767689980/download_4_gfxni9.png' 
    },
    { 
      title: 'Computer Labs', 
      slug: 'computer-labs', 
      icon: <Monitor />, 
      desc: 'High-performance computing center with industry-standard software and gigabit connectivity.', 
      img: 'https://res.cloudinary.com/dejcpd56d/image/upload/v1767690271/download_11_mu2xxp.png' 
    },
    { 
      title: 'Science & Tech Labs', 
      slug: 'science-labs', 
      icon: <Microscope />, 
      desc: 'Advanced research environment for hands-on experimental learning and innovation.', 
      img: 'https://res.cloudinary.com/dejcpd56d/image/upload/v1767690161/download_9_kbciqq.png' 
    },
    { 
      title: 'Smart Classrooms', 
      slug: 'smart-classrooms', 
      icon: <GraduationCap />, 
      desc: 'Digitally enabled lecture halls with interactive 4K smart boards and optimized acoustics.', 
      img: 'https://res.cloudinary.com/dejcpd56d/image/upload/v1767690141/download_8_f7gppy.png' 
    },
    { 
      title: 'Hostel Facility', 
      slug: 'hostel', 
      icon: <Building2 />, 
      desc: 'Safe, secure, and comfortable residential blocks for boys and girls.', 
      img: 'https://res.cloudinary.com/dejcpd56d/image/upload/v1767693347/download_13_pobgl1.png' 
    },
    { 
      title: 'Transport System', 
      slug: 'transport', 
      icon: <Bus />, 
      desc: 'Fleet of GPS-tracked buses connecting major residential areas to the campus.', 
      img: 'https://res.cloudinary.com/dejcpd56d/image/upload/v1767690082/download_6_ealo4h.png' 
    },
    { 
      title: 'Auditorium', 
      slug: 'auditorium', 
      icon: <Music />, 
      desc: 'Modern multi-purpose hall for cultural events, seminars, and academic fests.', 
      img: 'https://res.cloudinary.com/dejcpd56d/image/upload/v1767690014/download_5_v1xovv.png' 
    },
    { 
      title: 'Administrative Block', 
      slug: 'admin', 
      icon: <Stethoscope />, 
      desc: 'Centralized administrative hub for student services and campus governance.', 
      img: 'https://res.cloudinary.com/dejcpd56d/image/upload/v1767690216/download_10_vssrg5.png' 
    },
    { 
      title: 'Sports & Cultural Hub', 
      slug: 'gym', 
      icon: <Dumbbell />, 
      desc: 'Comprehensive facilities for athletic training and holistic student development.', 
      img: 'https://res.cloudinary.com/dejcpd56d/image/upload/v1767690221/download_10_yezsn9.png' 
    },
  ];

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-primary text-white py-24">
        <div className="container mx-auto px-6 text-center animate-fade-up">
          <nav className="flex items-center justify-center gap-2 text-white/50 text-xs mb-8 uppercase font-black tracking-widest">
            <Link to="/" className="hover:text-secondary transition-colors">Home</Link> 
            <ChevronRight size={14} /> 
            <span className="text-white opacity-100">Infrastructure</span>
          </nav>
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">World-Class <br/> Campus</h1>
          <p className="text-xl opacity-70 max-w-2xl mx-auto leading-relaxed">Experience the best infrastructure in Bangalore, designed to foster innovation, comfort, and academic excellence.</p>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {facilities.map((fac, i) => (
              <div key={i} className="group bg-white rounded-[3rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all animate-fade-up" style={{ animationDelay: `${i*100}ms` }}>
                <div className="h-64 overflow-hidden relative">
                  <img src={fac.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={fac.title} />
                  <div className="absolute top-6 right-6 w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-primary shadow-lg">
                    {fac.icon}
                  </div>
                </div>
                <div className="p-10">
                  <h3 className="text-2xl font-black text-primary mb-4">{fac.title}</h3>
                  <p className="text-neutralText leading-relaxed mb-6">{fac.desc}</p>
                  <Link to={`/p/${fac.slug}`} className="text-secondary font-black text-sm uppercase tracking-widest flex items-center gap-2 hover:gap-4 transition-all">
                    Explore Details <ChevronRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Highlights */}
      <section className="py-32 container mx-auto px-6">
        <div className="bg-primary p-16 md:p-24 rounded-[4rem] text-white flex flex-col lg:flex-row items-center gap-20 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
          <div className="lg:w-1/2 relative z-10">
             <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight italic">Digital-First <span className="text-secondary">Campus</span></h2>
             <p className="text-xl text-white/60 leading-relaxed mb-10">KCMS is one of the few institutions in the region to have a 100% fiber-optic connected campus with interactive digital learning ecosystems integrated into every department.</p>
             <div className="flex flex-wrap gap-4">
               {['5G Ready Wi-Fi', 'AI/ML Computing Lab', 'E-Library Access', 'Smart Board Enabled'].map((t) => (
                 <span key={t} className="px-6 py-3 bg-white/10 rounded-full text-sm font-bold border border-white/10">{t}</span>
               ))}
             </div>
          </div>
          <div className="lg:w-1/2 relative z-10">
             <div className="grid grid-cols-2 gap-4">
               <img src="https://res.cloudinary.com/dejcpd56d/image/upload/v1767690271/download_11_mu2xxp.png" className="rounded-3xl shadow-lg aspect-square object-cover" alt="Tech Hub" />
               <img src="https://res.cloudinary.com/dejcpd56d/image/upload/v1767690161/download_9_kbciqq.png" className="rounded-3xl shadow-lg translate-y-8 aspect-square object-cover" alt="Computing Lab" />
             </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <h2 className="text-primary font-black text-4xl mb-8">Want to see the campus in person?</h2>
        <Link to="/contact" className="bg-secondary text-white px-12 py-5 rounded-full font-black text-lg hover:bg-primary transition-all shadow-xl inline-flex items-center gap-3">
          Book a Campus Tour <Zap size={20} />
        </Link>
      </section>
    </div>
  );
};

export default Infrastructure;
