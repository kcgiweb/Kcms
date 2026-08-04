import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAVIGATION } from '../constants';
import { Menu, X, ChevronDown, Phone, Mail, ArrowRight, ChevronRight } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileSub = (label: string) => {
    setMobileExpanded(mobileExpanded === label ? null : label);
  };

  const showSolidHeader = !isHomePage || scrolled;

  const headerBg = showSolidHeader ? 'bg-white shadow-xl py-2' : 'bg-transparent py-3';
  const topBarBg = showSolidHeader ? 'bg-primary' : 'bg-black/20 backdrop-blur-sm border-b border-white/10';
  const navTextColor = 'text-secondary hover:text-primary';

  return (
    <header className="fixed w-full z-50 transition-all duration-500">
      {/* Top Bar */}
      <div className={`${topBarBg} text-white py-2 text-xs hidden lg:block transition-colors duration-500`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex gap-6">
            <span className="flex items-center gap-2"><Phone size={14} className={showSolidHeader ? 'text-secondary' : 'text-white'} /> +91 98765 43210</span>
            <span className="flex items-center gap-2"><Mail size={14} className={showSolidHeader ? 'text-secondary' : 'text-white'} /> admissions@kcms.edu.in</span>
          </div>
          <div className="flex gap-6">
            <a href="https://admissions.kcgiedu.org/" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors font-medium">Apply Now</a>
            <Link to="/contact" className="hover:text-secondary transition-colors font-medium">Contact Us</Link>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className={`transition-all duration-500 ${headerBg}`}>
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          {/* Official Logo */}
          <Link to="/" className="flex items-center group shrink-0">
            <img 
              src="/assets/images/LOGO.webp" 
              alt="KCMS Logo" 
              className="h-10 lg:h-12 w-auto object-contain transition-all duration-500"
            />
          </Link>

          {/* Desktop Mega Menu */}
          <div className="hidden lg:flex items-center gap-1">
            {NAVIGATION.map((item: any) => (
              <div key={item.label} className="relative mega-menu-trigger group">
                <Link 
                  to={item.href}
                  className={`flex items-center gap-1 font-bold text-sm px-4 py-3 transition-colors duration-300 ${navTextColor}`}
                >
                  {item.label} {item.mega && <ChevronDown size={14} className="opacity-50" />}
                </Link>
                
                {item.mega && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 mega-menu-content animate-fade-in pointer-events-none group-hover:pointer-events-auto">
                    <div className="bg-white shadow-2xl rounded-2xl overflow-hidden border-t-4 border-primary min-w-[750px] xl:min-w-[850px] flex p-6 gap-6">
                      {item.columns.map((col: any, idx: number) => (
                        <div key={idx} className={`${col.highlight ? 'w-1/3' : 'flex-1'}`}>
                          {col.title && (
                            <h5 className="text-primary font-black text-xs uppercase tracking-widest mb-4 pb-2 border-b border-gray-100">
                              {col.title}
                            </h5>
                          )}
                          
                          {col.links && (
                            <ul className="space-y-2">
                              {col.links.map((link: any) => (
                                <li key={link.label}>
                                  <Link 
                                    to={link.href} 
                                    className="text-sm text-black hover:text-primary hover:translate-x-1 transition-all flex items-center gap-2 font-medium"
                                  >
                                    <ChevronRight size={12} className="text-secondary opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                                    {link.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}

                          {col.highlight && (
                            <div className="bg-primary p-5 rounded-xl text-white h-full flex flex-col justify-between shadow-lg">
                              <div>
                                <h6 className="font-bold text-base mb-2 text-secondary">{col.highlight.title}</h6>
                                <p className="text-xs text-white/80 leading-relaxed mb-4">{col.highlight.text}</p>
                              </div>
                              <Link 
                                to={col.highlight.href}
                                className="bg-secondary text-white py-2 px-3 rounded-lg text-xs font-bold flex items-center justify-center gap-2 hover:bg-white hover:text-primary transition-all"
                              >
                                {col.highlight.cta} <ArrowRight size={14} />
                              </Link>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <a 
              href="https://admissions.kcgiedu.org/"
              target="_blank"
              rel="noopener noreferrer"
              className={`ml-4 px-6 py-2 rounded-full font-bold transition-all shadow-lg flex items-center gap-2 text-sm ${showSolidHeader ? 'bg-secondary text-white hover:bg-primary' : 'bg-white text-primary hover:bg-secondary hover:text-white'}`}
            >
              Apply <span className="hidden xl:inline">Online</span> <ArrowRight size={16} />
            </a>
          </div>

          {/* Mobile Toggle */}
          <button className={`lg:hidden p-2 transition-colors duration-500 ${showSolidHeader ? 'text-primary' : 'text-secondary'}`} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div className={`lg:hidden fixed inset-0 z-50 bg-white transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="h-full flex flex-col">
          <div className="p-4 border-b border-gray-100 flex justify-between items-center">
            <Link to="/" onClick={() => setIsOpen(false)}>
              <img 
                src="/assets/images/LOGO.webp" 
                alt="KCMS Logo" 
                className="h-9 w-auto"
              />
            </Link>
            <button onClick={() => setIsOpen(false)} className="text-primary"><X size={28} /></button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 space-y-1">
            {NAVIGATION.map((item: any) => (
              <div key={item.label} className="border-b border-gray-50 pb-1">
                <div className="flex justify-between items-center py-2">
                  <Link 
                    to={item.href} 
                    className="text-base font-bold text-primary"
                    onClick={() => !item.mega && setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.mega && (
                    <button 
                      onClick={() => toggleMobileSub(item.label)}
                      className={`p-2 transition-transform ${mobileExpanded === item.label ? 'rotate-180' : ''}`}
                    >
                      <ChevronDown size={20} className="text-secondary" />
                    </button>
                  )}
                </div>
                
                {item.mega && mobileExpanded === item.label && (
                  <div className="bg-gray-50 rounded-lg p-4 mt-1 space-y-4 animate-fade-in">
                    {item.columns.map((col: any, idx: number) => (
                      <div key={idx}>
                        {col.title && <h6 className="text-xs font-black text-primary uppercase mb-2 opacity-50">{col.title}</h6>}
                        {col.links && (
                          <ul className="space-y-2">
                            {col.links.map((link: any) => (
                              <li key={link.label}>
                                <Link 
                                  to={link.href} 
                                  className="text-sm font-medium text-neutralText/80 block"
                                  onClick={() => setIsOpen(false)}
                                >
                                  {link.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="p-4 bg-gray-50 border-t border-gray-100">
            <a 
              href="https://admissions.kcgiedu.org/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="w-full bg-primary text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2 text-sm"
            >
              Start Admission Process <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
