
import React, { useEffect } from 'react';
import { ImageIcon, Maximize2, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Gallery: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const images = [
    { title: 'Interactive Smart Classroom', category: 'Infrastructure', url: 'https://res.cloudinary.com/dejcpd56d/image/upload/v1767690141/download_8_f7gppy.png' },
    { title: 'Advanced Computer Laboratory', category: 'Academic', url: 'https://res.cloudinary.com/dejcpd56d/image/upload/v1767690271/download_11_mu2xxp.png' },
    { title: 'Modern Science & Tech Lab', category: 'Academic', url: 'https://res.cloudinary.com/dejcpd56d/image/upload/v1767690161/download_9_kbciqq.png' },
    { title: 'Fully Automated Central Library', category: 'Infrastructure', url: 'https://res.cloudinary.com/dejcpd56d/image/upload/v1767689980/download_4_gfxni9.png' },
    { title: 'Premium Hostel Residential Block', category: 'Amenities', url: 'https://res.cloudinary.com/dejcpd56d/image/upload/v1767693347/download_13_pobgl1.png' },
    { title: 'Administrative & Admissions Block', category: 'Campus', url: 'https://res.cloudinary.com/dejcpd56d/image/upload/v1767690216/download_10_vssrg5.png' },
    { title: 'KCMS Transport Fleet', category: 'Infrastructure', url: 'https://res.cloudinary.com/dejcpd56d/image/upload/v1767690082/download_6_ealo4h.png' },
    { title: 'Main Campus Auditorium', category: 'Events', url: 'https://res.cloudinary.com/dejcpd56d/image/upload/v1767690014/download_5_v1xovv.png' },
    { title: 'Outdoor Sports & Athletics Arena', category: 'Amenities', url: 'https://res.cloudinary.com/dejcpd56d/image/upload/v1767690221/download_10_yezsn9.png' },
    { title: 'Vibrant Student Campus Life', category: 'Events', url: 'https://res.cloudinary.com/dejcpd56d/image/upload/v1767690324/download_12_pvx4jx.png' },
    { title: 'Faculty & Academic Leadership', category: 'Leadership', url: 'https://res.cloudinary.com/dejcpd56d/image/upload/v1767688052/IMG_4453-1152x1536_v0b6my.webp' },
    { title: 'Founder & Visionary Chairman', category: 'Leadership', url: 'https://res.cloudinary.com/dejcpd56d/image/upload/v1767687458/download_1_hopo91.png' },
  ];

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-primary text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="container mx-auto px-6 relative z-10 animate-fade-up text-center">
          <nav className="flex items-center justify-center gap-2 text-white/50 text-xs mb-8 uppercase font-black tracking-widest">
            <Link to="/" className="hover:text-secondary transition-colors">Home</Link> 
            <ChevronRight size={14} /> 
            <span className="text-white opacity-100">Gallery</span>
          </nav>
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">Campus <span className="text-secondary">Glimpses</span></h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">A visual journey through the world-class infrastructure and vibrant life at Karnataka College.</p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-24 container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((img, i) => (
            <div 
              key={i} 
              className="group relative h-[400px] rounded-[3rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all animate-fade-up border border-gray-100"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <img 
                src={img.url} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
                alt={img.title} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-10">
                <span className="text-secondary text-xs font-black uppercase tracking-widest mb-3">{img.category}</span>
                <h3 className="text-white text-2xl font-black leading-tight mb-6">{img.title}</h3>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-white border border-white/20">
                    <Maximize2 size={20} />
                  </div>
                </div>
              </div>
              {/* Default overlay for better visual structure */}
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/60 to-transparent group-hover:opacity-0 transition-opacity duration-500">
                <div className="text-white/50 text-[10px] font-black uppercase tracking-widest mb-1">{img.category}</div>
                <div className="text-white font-bold">{img.title}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Video Highlights Section */}
      <section className="py-32 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-6">
           <div className="flex flex-col lg:flex-row items-center gap-20">
              <div className="lg:w-1/2">
                 <h2 className="text-primary text-xs font-black uppercase tracking-widest mb-6">Visual Storytelling</h2>
                 <h3 className="text-4xl md:text-5xl font-black text-primary mb-8 leading-tight">Experience Campus in Motion</h3>
                 <p className="text-xl text-neutralText leading-relaxed mb-10">Beyond photos, our video tours give you a real-time feel of the energy and innovation that defines KCMS Bangalore.</p>
                 <Link to="/contact" className="bg-primary text-white px-10 py-4 rounded-full font-black flex items-center justify-center gap-3 hover:bg-secondary transition-all w-fit shadow-xl">
                    Request a Virtual Tour <Maximize2 size={18} />
                 </Link>
              </div>
              <div className="lg:w-1/2">
                 <div className="relative group rounded-[4rem] overflow-hidden shadow-2xl aspect-video bg-black">
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-1000"
                    >
                        <source 
                            src="https://res.cloudinary.com/dejcpd56d/video/upload/v1767590647/Welcome-to-Karnataka-College-Group-of-Institutions-_-Where-Education-Meets-Excellence_riipez.mp4" 
                            type="video/mp4" 
                        />
                    </video>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 bg-secondary text-white rounded-full flex items-center justify-center shadow-2xl animate-pulse">
                            <ImageIcon size={32} />
                        </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 container mx-auto px-6 text-center">
         <div className="bg-secondary p-16 md:p-24 rounded-[4rem] text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
            <h2 className="text-4xl md:text-6xl font-black mb-10 relative z-10">See It For Yourself</h2>
            <div className="flex flex-col md:flex-row justify-center gap-6 relative z-10">
               <Link to="/contact" className="bg-primary px-12 py-5 rounded-full font-black text-lg hover:scale-105 transition-transform shadow-2xl">
                  Book a Campus Visit
               </Link>
               <button 
                  onClick={() => window.dispatchEvent(new CustomEvent('open-apply-modal'))}
                  className="bg-white text-primary px-12 py-5 rounded-full font-black text-lg hover:scale-105 transition-transform shadow-2xl"
                >
                  Start Your Journey
               </button>
            </div>
         </div>
      </section>
    </div>
  );
};

export default Gallery;
