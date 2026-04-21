import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PAGE_DATA } from '../constants';
import { ChevronRight, FileText, Download, Share2, CheckCircle, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

const FacilityPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const page = PAGE_DATA[slug || ''] || {
    title: slug?.replace('-', ' ').toUpperCase() || 'Facility Not Found',
    subtitle: 'KCMS World-Class Infrastructure',
    heroImage: 'https://res.cloudinary.com/dejcpd56d/image/upload/v1767690141/download_8_f7gppy.png',
    sections: [
      {
        type: 'text',
        title: 'Facility Overview',
        content: 'This facility is currently being upgraded for the 2025-26 academic session. KCMS is committed to providing students with industry-standard environments.'
      }
    ]
  };

  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  const renderSection = (section: any, idx: number) => {
    switch (section.type) {
      case 'text':
        return (
          <div key={idx} className="mb-16 animate-fade-up">
            {section.title && <h3 className="text-3xl font-black text-primary mb-6 border-l-4 border-secondary pl-4">{section.title}</h3>}
            <p className="text-xl text-neutralText leading-loose text-justify">{section.content}</p>
          </div>
        );
      case 'grid':
        return (
          <div key={idx} className="mb-16 animate-fade-up">
            {section.title && <h3 className="text-2xl font-black text-primary mb-10">{section.title}</h3>}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {section.items.map((item: any, i: number) => (
                <div key={i} className="bg-gray-50 p-10 rounded-[3rem] border border-gray-100 hover:border-primary/20 transition-all group shadow-sm">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-secondary mb-6 shadow-sm group-hover:bg-primary group-hover:text-white transition-all">
                    {item.icon ? React.cloneElement(item.icon, { size: 28 }) : <Zap size={28} />}
                  </div>
                  <h4 className="text-2xl font-black text-primary mb-3">{item.title}</h4>
                  <p className="text-neutralText leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        );
      case 'list':
        return (
          <div key={idx} className="mb-16 animate-fade-up">
            {section.title && <h3 className="text-3xl font-black text-primary mb-8">{section.title}</h3>}
            <div className="grid grid-cols-1 gap-4">
              {section.items.map((item: string, i: number) => (
                <div key={i} className="flex gap-4 items-center p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:bg-white transition-all">
                  <CheckCircle className="text-secondary shrink-0" size={24} />
                  <span className="text-lg font-bold text-primary">{item}</span>
                </div>
              ))}
            </div>
          </div>
        );
      case 'table':
        return (
          <div key={idx} className="mb-16 animate-fade-up">
            {section.title && <h3 className="text-3xl font-black text-primary mb-8">{section.title}</h3>}
            <div className="overflow-hidden border border-gray-100 rounded-[2.5rem] shadow-sm">
              <table className="w-full text-left">
                <thead className="bg-gray-50 text-primary font-black uppercase text-xs tracking-widest">
                  <tr>
                    {section.headers.map((h: string, i: number) => (
                      <th key={i} className="px-8 py-6">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {section.rows.map((row: string[], i: number) => (
                    <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                      {row.map((cell, j) => (
                        <td key={j} className={`px-8 py-6 ${j === 0 ? 'font-bold text-primary' : 'text-neutralText'}`}>
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* 1. Hero / Banner */}
      <section className="relative h-[500px] flex items-center bg-primary overflow-hidden">
        <div 
            className="absolute inset-0 bg-cover bg-center opacity-40 transition-all duration-700" 
            style={{ backgroundImage: `url(${page.heroImage})` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent"></div>
        <div className="container mx-auto px-6 relative z-10 animate-fade-up">
          <nav className="flex items-center gap-2 text-white/50 text-xs mb-8 uppercase font-black tracking-widest">
            <Link to="/" className="hover:text-secondary">Home</Link> 
            <ChevronRight size={14} /> 
            <Link to="/p/infrastructure" className="hover:text-secondary">Infrastructure</Link>
            <ChevronRight size={14} />
            <span className="text-white opacity-100">{page.title}</span>
          </nav>
          <h1 className="text-5xl md:text-8xl font-black text-white mb-6 leading-tight">{page.title}</h1>
          <p className="text-2xl text-white/70 max-w-2xl leading-relaxed">{page.subtitle}</p>
        </div>
      </section>

      {/* 2. Content Sections */}
      <section className="py-24 container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-2/3">
             {page.sections.map((section: any, i: number) => renderSection(section, i))}
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            <div className="sticky top-32 space-y-8">
              <div className="bg-primary p-12 rounded-[3rem] text-white shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform"></div>
                <h4 className="text-2xl font-black mb-6 flex items-center gap-3">
                  <ShieldCheck className="text-secondary" /> Institutional Support
                </h4>
                <p className="text-white/60 text-sm mb-8">Access professional resources and virtual tours for this facility.</p>
                <div className="space-y-4">
                  <button className="w-full bg-white/10 hover:bg-white/20 text-white py-5 rounded-2xl font-bold flex items-center justify-between px-6 border border-white/10 transition-all">
                    Virtual Campus Tour <ArrowRight size={20} />
                  </button>
                  <button className="w-full bg-secondary text-white py-5 rounded-2xl font-black flex items-center justify-center gap-3 shadow-xl hover:bg-white hover:text-primary transition-all">
                    Contact Facilities Manager <Share2 size={18} />
                  </button>
                </div>
              </div>

              {/* Facility Navigator */}
              <div className="bg-gray-50 p-12 rounded-[3rem] border border-gray-100">
                <h4 className="text-xl font-black text-primary mb-8">Explore Other Facilities</h4>
                <div className="space-y-4">
                  {[
                    { label: 'Central Library', slug: 'library' },
                    { label: 'High-Tech Labs', slug: 'computer-labs' },
                    { label: 'Hostel System', slug: 'hostel' },
                    { label: 'Sports Arena', slug: 'gym' }
                  ].filter(item => item.slug !== slug).map((item) => (
                    <Link key={item.slug} to={`/p/${item.slug}`} className="flex items-center justify-between p-4 bg-white rounded-2xl font-bold text-primary border border-transparent hover:border-secondary transition-all">
                       {item.label} <ChevronRight size={16} className="text-secondary" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Global CTA */}
      <section className="py-24 container mx-auto px-6">
        <div className="bg-secondary rounded-[4rem] p-16 md:p-24 text-center text-white relative overflow-hidden">
           <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
           <h2 className="text-4xl md:text-6xl font-black mb-10 relative z-10">Experience the KCMS Difference</h2>
           <div className="flex flex-col md:flex-row justify-center gap-6 relative z-10">
              <button 
                onClick={() => window.dispatchEvent(new CustomEvent('open-apply-modal'))}
                className="bg-primary px-12 py-5 rounded-full font-black text-lg hover:scale-105 transition-transform shadow-2xl"
              >
                Apply for 2025 Admissions
              </button>
              <Link to="/contact" className="bg-white text-primary px-12 py-5 rounded-full font-black text-lg hover:scale-105 transition-transform shadow-2xl">
                Visit Campus Today
              </Link>
           </div>
        </div>
      </section>
    </div>
  );
};

export default FacilityPage;
