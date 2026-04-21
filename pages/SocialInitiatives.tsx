
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Heart, Globe, Users, History, ArrowRight, ShieldCheck, Landmark, Handshake } from 'lucide-react';

const SocialInitiatives: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const collaboratorLogos = [
    { name: 'Red Cross', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Red_Cross_icon.svg/1024px-Red_Cross_icon.svg.png' },
    { name: 'WHO', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/WHO_logo.svg/1024px-WHO_logo.svg.png' },
    { name: 'NSS India', url: 'https://upload.wikimedia.org/wikipedia/en/1/1a/NSS-symbol.png' },
    { name: 'UNESCO', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/UNESCO_logo.svg/1024px-UNESCO_logo.svg.png' }
  ];

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-primary text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80')] bg-cover bg-center"></div>
        <div className="container mx-auto px-6 relative z-10 animate-fade-up">
          <nav className="flex items-center gap-2 text-white/50 text-xs mb-8 uppercase font-black tracking-widest">
            <Link to="/" className="hover:text-secondary">Home</Link> 
            <ChevronRight size={14} /> 
            <span className="text-white opacity-100">Social Initiatives</span>
          </nav>
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">Empowering <br/><span className="text-secondary">Communities</span></h1>
          <p className="text-xl text-white/70 max-w-2xl leading-relaxed">Living our motto "Higher Education to All" through active social service and sustainable development projects.</p>
        </div>
      </section>

      {/* The KET Mission */}
      <section className="py-32 container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="animate-fade-up">
            <h2 className="text-primary text-xs font-black uppercase tracking-widest mb-6">The KET Ethos</h2>
            <h3 className="text-4xl font-black text-primary mb-8 leading-tight">Education as a Tool for Social Change</h3>
            <p className="text-xl text-neutralText leading-relaxed mb-10 text-justify">
              At Karnataka College Group, we believe that an institution's value is measured by its impact on the surrounding community. Our social wing works tirelessly to ensure that education and health are accessible to the most remote villages in Karnataka.
            </p>
            <div className="space-y-6">
               <div className="flex items-center gap-6 p-6 bg-gray-50 rounded-3xl border border-gray-100">
                  <Heart className="text-secondary" size={32} />
                  <div>
                     <h4 className="font-black text-primary">Rural Digital Literacy</h4>
                     <p className="text-sm text-neutralText/60">Bridging the digital divide in rural schools.</p>
                  </div>
               </div>
               <div className="flex items-center gap-6 p-6 bg-gray-50 rounded-3xl border border-gray-100">
                  <Globe className="text-secondary" size={32} />
                  <div>
                     <h4 className="font-black text-primary">Eco-Friendly Campus</h4>
                     <p className="text-sm text-neutralText/60">Leading the way in water harvesting and solar energy.</p>
                  </div>
               </div>
            </div>
          </div>
          <div className="relative">
             <img src="https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80" className="rounded-[4rem] shadow-2xl" alt="Social Service" />
             <div className="absolute -bottom-10 -left-10 bg-white p-12 rounded-[3rem] shadow-xl border border-gray-100 hidden md:block">
                <div className="text-5xl font-black text-secondary mb-2">50k+</div>
                <div className="text-xs font-bold text-neutralText/40 uppercase tracking-widest">Lives Impacted</div>
             </div>
          </div>
        </div>
      </section>

      {/* NSS & Volunteering */}
      <section className="py-32 bg-primary text-white">
        <div className="container mx-auto px-6">
           <div className="text-center mb-20">
              <h2 className="text-secondary text-xs font-black uppercase tracking-widest mb-4">Join the Movement</h2>
              <h3 className="text-4xl font-black">NSS Unit: Not Me, But You</h3>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { icon: <Handshake />, title: 'Rural Camps', desc: 'Annual 10-day immersive camps in local villages focusing on sanitation and hygiene.' },
                { icon: <Users />, title: 'Blood Donation', desc: 'Partnering with Red Cross to host quarterly life-saving drives on campus.' },
                { icon: <History />, title: 'Heritage Walks', desc: 'Promoting local culture and history awareness among the urban youth.' }
              ].map((item, i) => (
                <div key={i} className="bg-white/5 p-12 rounded-[3.5rem] border border-white/10 text-center hover:bg-white hover:text-primary transition-all group">
                   <div className="w-16 h-16 bg-secondary text-white rounded-2xl flex items-center justify-center mx-auto mb-10 group-hover:scale-110 transition-transform shadow-xl">
                      {React.cloneElement(item.icon as React.ReactElement<any>, { size: 30 })}
                   </div>
                   <h4 className="text-2xl font-black mb-4">{item.title}</h4>
                   <p className="opacity-60 group-hover:opacity-100 transition-opacity leading-relaxed">{item.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Partnerships - REPLACED TEXT WITH REAL LOGOS */}
      <section className="py-32 container mx-auto px-6 text-center">
         <h2 className="text-primary text-xs font-black uppercase tracking-widest mb-4">Our Collaborators</h2>
         <h3 className="text-4xl font-black text-primary mb-20">Together for Change</h3>
         <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all">
            {collaboratorLogos.map((logo) => (
              <div key={logo.name} className="h-20 w-auto flex flex-col items-center gap-3">
                 <img src={logo.url} alt={logo.name} className="max-h-full w-auto object-contain" />
                 <span className="text-[10px] font-black uppercase tracking-widest text-neutralText/40">{logo.name}</span>
              </div>
            ))}
         </div>
      </section>

      {/* CTA */}
      <section className="py-24 container mx-auto px-6 text-center">
         <h2 className="text-4xl font-black text-primary mb-8">Ready to Make an Impact?</h2>
         <Link to="/contact" className="bg-secondary text-white px-12 py-5 rounded-full font-black text-lg hover:bg-primary transition-all shadow-2xl inline-flex items-center gap-3">
            Volunteer Today <ArrowRight />
         </Link>
      </section>
    </div>
  );
};

export default SocialInitiatives;
