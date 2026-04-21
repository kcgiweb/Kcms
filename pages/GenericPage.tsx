
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PAGE_DATA } from '../constants';
import { Info, ChevronRight, FileText, Download, Share2, CheckCircle, ArrowRight } from 'lucide-react';

const GenericPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const page = PAGE_DATA[slug || ''] || {
    title: slug?.replace('-', ' ').toUpperCase() || 'Page Not Found',
    subtitle: 'Institutional Resource Document',
    sections: [
      {
        type: 'text',
        title: 'Information Update',
        content: 'This section is currently being updated to reflect the latest 2025 guidelines. Karnataka College of Management & Science (KCMS) maintains strict adherence to university regulations.'
      }
    ]
  };

  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  const renderSection = (section: any, idx: number) => {
    switch (section.type) {
      case 'text':
        return (
          <div key={idx} className="mb-16 animate-fade-up">
            {section.title && <h3 className="text-2xl font-black text-primary mb-6 border-l-4 border-secondary pl-4">{section.title}</h3>}
            <p className="text-xl text-neutralText leading-loose">{section.content}</p>
          </div>
        );
      case 'grid':
        return (
          <div key={idx} className="mb-16 animate-fade-up">
            {section.title && <h3 className="text-2xl font-black text-primary mb-10">{section.title}</h3>}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {section.items.map((item: any, i: number) => (
                <div key={i} className="bg-gray-50 p-8 rounded-[2.5rem] border border-gray-100 hover:border-primary/20 transition-all group">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-secondary mb-6 shadow-sm group-hover:scale-110 transition-transform">
                    {item.icon ? React.cloneElement(item.icon, { size: 28 }) : <CheckCircle size={28} />}
                  </div>
                  <h4 className="text-xl font-bold text-primary mb-3">{item.title}</h4>
                  <p className="text-neutralText/70 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        );
      case 'list':
        return (
          <div key={idx} className="mb-16 animate-fade-up">
            {section.title && <h3 className="text-2xl font-black text-primary mb-8">{section.title}</h3>}
            <ul className="space-y-4">
              {section.items.map((item: string, i: number) => (
                <li key={i} className="flex gap-4 items-start text-lg text-neutralText">
                  <div className="mt-1.5"><CheckCircle className="text-secondary" size={20} /></div>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        );
      case 'timeline':
        return (
          <div key={idx} className="mb-16 animate-fade-up">
            {section.title && <h3 className="text-2xl font-black text-primary mb-12">{section.title}</h3>}
            <div className="relative pl-12 border-l-2 border-gray-100 space-y-12">
              {section.items.map((item: any, i: number) => (
                <div key={i} className="relative">
                  <div className="absolute -left-[54px] top-0 w-4 h-4 rounded-full bg-secondary border-4 border-white shadow-md"></div>
                  <div className="text-secondary font-black text-xl mb-1">{item.year}</div>
                  <h4 className="text-xl font-bold text-primary mb-2">{item.title}</h4>
                  <p className="text-neutralText leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-primary text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container mx-auto px-6 relative z-10 animate-fade-up">
          <nav className="flex items-center gap-2 text-white/50 text-xs mb-6 uppercase font-black tracking-widest">
            <Link to="/" className="hover:text-secondary">Home</Link> 
            <ChevronRight size={14} /> 
            <span className="text-white opacity-100">{page.title}</span>
          </nav>
          <h1 className="text-4xl md:text-6xl font-black mb-4">{page.title}</h1>
          <p className="text-xl text-white/70 max-w-3xl leading-relaxed">{page.subtitle}</p>
        </div>
      </section>

      {/* Content Wrapper */}
      <section className="py-24 container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20">
          {/* Main Column */}
          <div className="lg:w-2/3">
             {page.sections.map((section: any, i: number) => renderSection(section, i))}
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            <div className="sticky top-32 space-y-8 animate-zoom-in">
              <div className="bg-primary p-12 rounded-[3rem] text-white shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform"></div>
                <h4 className="text-2xl font-black mb-6 flex items-center gap-3">
                  <FileText className="text-secondary" /> Resources
                </h4>
                <div className="space-y-4">
                  <button className="w-full bg-white/10 hover:bg-white/20 text-white py-5 rounded-2xl font-bold flex items-center justify-between px-6 border border-white/10 transition-all">
                    Download Handbook <Download size={20} />
                  </button>
                  <button className="w-full bg-white/10 hover:bg-white/20 text-white py-5 rounded-2xl font-bold flex items-center justify-between px-6 border border-white/10 transition-all">
                    Official Notice <Download size={20} />
                  </button>
                </div>
              </div>

              <div className="bg-gray-50 p-12 rounded-[3rem] border border-gray-100">
                <h4 className="text-xl font-black text-primary mb-6">Support Hub</h4>
                <p className="text-neutralText mb-8 text-sm">Need more details about {page.title}? Our administrative counseling team is here to help.</p>
                <Link to="/contact" className="flex items-center justify-center gap-3 bg-secondary text-white py-4 rounded-2xl font-black hover:bg-primary transition-all">
                  Contact Counselor <Share2 size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 container mx-auto px-6">
        <div className="bg-secondary rounded-[4rem] p-16 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <h2 className="text-4xl font-black mb-6 relative z-10">Join the KCMS Community</h2>
          <p className="text-white/70 mb-10 max-w-2xl mx-auto relative z-10">Start your journey toward academic excellence and global opportunities.</p>
          <div className="flex flex-col md:flex-row justify-center gap-6 relative z-10">
            <button 
              onClick={() => window.dispatchEvent(new CustomEvent('open-apply-modal'))}
              className="bg-primary px-12 py-5 rounded-full font-black text-lg hover:scale-105 transition-transform shadow-2xl"
            >
              Apply Online
            </button>
            <Link to="/courses" className="bg-white text-primary px-12 py-5 rounded-full font-black text-lg hover:scale-105 transition-transform shadow-2xl">
              View Programs <ArrowRight className="inline ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GenericPage;
