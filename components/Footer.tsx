import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* About */}
        <div>
          <Link to="/">
            <img 
              src="https://res.cloudinary.com/dwoh8qevy/image/upload/v1772447926/Logo-New-1024x222_etmqyk_qeqbhi.webp" 
              alt="KCMS Official Logo" 
              className="h-10 w-auto mb-6 brightness-0 invert" 
            />
          </Link>
          <p className="text-white/80 leading-relaxed mb-6 text-sm">
            Karnataka College is a premier institution dedicated to excellence in education, research, and holistic development.
          </p>
          <div className="flex gap-4">
            <a href="https://www.facebook.com/profile.php?id=61567119833724&sk=following" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-full hover:bg-secondary transition-colors"><Facebook size={18} /></a>
            <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-secondary transition-colors"><Twitter size={18} /></a>
            <a href="https://www.instagram.com/kcmsedu/" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-full hover:bg-secondary transition-colors"><Instagram size={18} /></a>
            <a href="https://in.linkedin.com/company/karnataka-college-of-management-science" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-full hover:bg-secondary transition-colors"><Linkedin size={18} /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-base font-bold mb-6 border-b border-white/20 pb-2">Quick Links</h4>
          <ul className="space-y-3 text-sm text-white/80">
            <li><Link to="/about" className="hover:text-secondary transition-colors">About KCMS</Link></li>
            <li><Link to="/admissions" className="hover:text-secondary transition-colors">Admissions</Link></li>
            <li><Link to="/courses" className="hover:text-secondary transition-colors">Programs Offered</Link></li>
            <li><Link to="/placements" className="hover:text-secondary transition-colors">Placement Cell</Link></li>
            <li><Link to="/gallery" className="hover:text-secondary transition-colors">Campus Gallery</Link></li>
            <li><Link to="/admin" className="text-white/20 hover:text-white transition-colors">Admin Dashboard</Link></li>
          </ul>
        </div>

        {/* Course Links */}
        <div>
          <h4 className="text-base font-bold mb-6 border-b border-white/20 pb-2">Programs</h4>
          <ul className="space-y-3 text-sm text-white/80">
            <li><Link to="/course/bba-aviation" className="hover:text-secondary transition-colors">BBA Aviation</Link></li>
            <li><Link to="/course/bca-ai-ml" className="hover:text-secondary transition-colors">BCA (AI & ML)</Link></li>
            <li><Link to="/course/bsc-criminology" className="hover:text-secondary transition-colors">BSc Criminology</Link></li>
            <li><Link to="/course/mcom" className="hover:text-secondary transition-colors">M.Com (Commerce)</Link></li>
            <li><Link to="/course/mttm" className="hover:text-secondary transition-colors">MTTM (Tourism)</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-base font-bold mb-6 border-b border-white/20 pb-2">Contact Us</h4>
          <ul className="space-y-4 text-white/80">
            <li className="flex gap-3">
              <MapPin className="text-secondary shrink-0" size={18} />
              <span className="text-sm">123, Campus Road, Near Metro Station, Bangalore, Karnataka - 560001</span>
            </li>
            <li className="flex gap-3">
              <Phone className="text-secondary shrink-0" size={18} />
              <span className="text-sm">+91 80 1234 5678 / 98765 43210</span>
            </li>
            <li className="flex gap-3">
              <Mail className="text-secondary shrink-0" size={18} />
              <span className="text-sm">info@kcms.edu.in</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="container mx-auto px-6 mt-12 pt-6 border-t border-white/10 text-center text-xs text-white/40">
        <p>© {new Date().getFullYear()} Karnataka College. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
