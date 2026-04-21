import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import VisionMission from './pages/VisionMission';
import Leadership from './pages/Leadership';
import PrincipalMessage from './pages/PrincipalMessage';
import ChairmanDesk from './pages/ChairmanDesk';
import HistoryMilestones from './pages/HistoryMilestones';
import StudentLife from './pages/StudentLife';
import StudentSupport from './pages/StudentSupport';
import ClubsSocieties from './pages/ClubsSocieties';
import SportsCultural from './pages/SportsCultural';
import SocialInitiatives from './pages/SocialInitiatives';
import IQACHub from './pages/IQACHub';
import NAACPortal from './pages/NAACPortal';
import AntiRagging from './pages/AntiRagging';
import WomensCell from './pages/WomensCell';
import GrievanceRedressal from './pages/GrievanceRedressal';
import TeachingMethods from './pages/TeachingMethods';
import SkillDevelopment from './pages/SkillDevelopment';
import AcademicCalendar from './pages/AcademicCalendar';
import FacultyProfile from './pages/FacultyProfile';
import AlumniNetwork from './pages/AlumniNetwork';
import Infrastructure from './pages/Infrastructure';
import FacilityPage from './pages/FacilityPage';
import Courses from './pages/Courses';
import CourseDetail from './pages/CourseDetail';
import Admissions from './pages/Admissions';
import Placements from './pages/Placements';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import GenericPage from './pages/GenericPage';
import AictePage from './pages/AictePage';
import Apply from './pages/Apply';
import AdminDashboard from './pages/AdminDashboard';
import ApplyPopup from './components/ApplyPopup';
import { MessageSquare, ChevronUp } from 'lucide-react';
import InstallPrompt from './components/InstallPrompt';
import { useLocation } from 'react-router-dom';

const AppContent: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const location = useLocation();
  const isAdminPage = location.pathname.startsWith('/admin');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      {!isAdminPage && <Header />}
      
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          
          {/* Institutional Routes */}
          <Route path="/p/vision-mission" element={<VisionMission />} />
          <Route path="/p/leadership" element={<Leadership />} />
          <Route path="/p/principal" element={<PrincipalMessage />} />
          <Route path="/p/chairman" element={<ChairmanDesk />} />
          <Route path="/p/history" element={<HistoryMilestones />} />
          
          {/* Campus Life & Student Support Routes */}
          <Route path="/p/campus-life" element={<StudentLife />} />
          <Route path="/p/clubs" element={<ClubsSocieties />} />
          <Route path="/p/sports" element={<SportsCultural />} />
          <Route path="/p/student-support" element={<StudentSupport />} />
          <Route path="/p/social-initiatives" element={<SocialInitiatives />} />
          
          {/* Compliance & Administration Routes */}
          <Route path="/p/iqac" element={<IQACHub />} />
          <Route path="/p/naac" element={<NAACPortal />} />
          <Route path="/p/anti-ragging" element={<AntiRagging />} />
          <Route path="/p/womens-cell" element={<WomensCell />} />
          <Route path="/p/grievance" element={<GrievanceRedressal />} />
          
          {/* Academic Support Routes */}
          <Route path="/p/teaching" element={<TeachingMethods />} />
          <Route path="/p/skills" element={<SkillDevelopment />} />
          <Route path="/p/calendar" element={<AcademicCalendar />} />
          <Route path="/p/faculty" element={<FacultyProfile />} />
          <Route path="/p/alumni" element={<AlumniNetwork />} />
          
          {/* Infrastructure Routes */}
          <Route path="/p/infrastructure" element={<Infrastructure />} />
          <Route path="/p/:slug" element={<FacilityPage />} />
          
          <Route path="/courses" element={<Courses />} />
          <Route path="/course/:id" element={<CourseDetail />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/placements" element={<Placements />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/aicte" element={<AictePage />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/page/:slug" element={<GenericPage />} />
        </Routes>
      </main>
      
      {!isAdminPage && <Footer />}
      {!isAdminPage && <ApplyPopup />}
      {!isAdminPage && <InstallPrompt />}

      {/* Floating Action Buttons */}
      {!isAdminPage && (
        <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-3">
          <Link 
            to="/apply"
            className="w-12 h-12 bg-secondary text-white rounded-full shadow-2xl flex items-center justify-center transition-all hover:bg-primary"
          >
            <MessageSquare size={24} />
          </Link>
          
          {showScrollTop && (
            <button 
              onClick={scrollToTop}
              className="w-12 h-12 bg-primary text-white rounded-full shadow-2xl flex items-center justify-center animate-fade-in transition-all"
            >
              <ChevronUp size={24} />
            </button>
          )}
        </div>
      )}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;