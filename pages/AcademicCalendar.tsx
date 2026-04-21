
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Calendar, Bell, Clock, FileText, Download, Star, Coffee, Award, Search } from 'lucide-react';

const AcademicCalendar: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const semesters = [
    {
      title: 'Odd Semester (Aug - Dec)',
      events: [
        { date: 'Aug 14', title: 'Orientation Day (New Batch)', type: 'Academic' },
        { date: 'Sep 05', title: "Teacher's Day Celebration", type: 'Cultural' },
        { date: 'Oct 20-30', title: 'Internal Assessment - I', type: 'Exam' },
        { date: 'Nov 15', title: 'Annual Sports Meet', type: 'Event' },
        { date: 'Dec 10', title: 'University Exams Begin', type: 'Exam' }
      ]
    },
    {
      title: 'Even Semester (Jan - June)',
      events: [
        { date: 'Jan 10', title: 'Re-opening for Even Sem', type: 'Academic' },
        { date: 'Feb 14-16', title: 'Kalasangama Cultural Fest', type: 'Cultural' },
        { date: 'Mar 25', title: 'Placement Drive Week', type: 'Corporate' },
        { date: 'May 05', title: 'Internal Assessment - II', type: 'Exam' },
        { date: 'June 15', title: 'End Semester Vacation', type: 'Holiday' }
      ]
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-primary text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="container mx-auto px-6 relative z-10 animate-fade-up">
          <nav className="flex items-center gap-2 text-white/50 text-xs mb-8 uppercase font-black tracking-widest">
            <Link to="/" className="hover:text-secondary transition-colors">Home</Link> 
            <ChevronRight size={14} /> 
            <span className="text-white opacity-100">Academic Calendar</span>
          </nav>
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">Master <br/><span className="text-secondary">Schedule 2025</span></h1>
          <p className="text-xl text-white/70 max-w-2xl leading-relaxed">Plan your academic journey with our comprehensive calendar of events, exams, and holidays.</p>
        </div>
      </section>

      {/* Download Bar */}
      <section className="bg-gray-50 border-y border-gray-100 py-6">
         <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-4">
               <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center text-primary"><Calendar /></div>
               <div className="font-bold text-primary">Academic Year 2024-25 (Rev 1.2)</div>
            </div>
            <div className="flex gap-4">
               <button className="bg-white border border-gray-200 px-6 py-3 rounded-xl font-bold flex items-center gap-2 text-sm hover:border-primary transition-all">
                  <Download size={16} /> PDF Version
               </button>
               <button className="bg-primary text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 text-sm hover:bg-secondary transition-all">
                  <Bell size={16} /> Sync to Google Calendar
               </button>
            </div>
         </div>
      </section>

      {/* Calendar Timeline */}
      <section className="py-32 container mx-auto px-6">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {semesters.map((sem, idx) => (
              <div key={idx} className="animate-fade-up" style={{ animationDelay: `${idx * 200}ms` }}>
                 <h2 className="text-3xl font-black text-primary mb-12 border-l-8 border-secondary pl-6">{sem.title}</h2>
                 <div className="space-y-6">
                    {sem.events.map((event, i) => (
                      <div key={i} className="flex gap-8 p-8 bg-white border border-gray-100 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all group">
                         <div className="w-20 h-20 bg-gray-50 rounded-2xl flex flex-col items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
                            <div className="text-xs font-black uppercase opacity-40">{event.date.split(' ')[0]}</div>
                            <div className="text-2xl font-black">{event.date.split(' ')[1]}</div>
                         </div>
                         <div>
                            <div className="text-[10px] font-black uppercase text-secondary tracking-widest mb-1">{event.type}</div>
                            <h4 className="text-xl font-bold text-primary mb-2">{event.title}</h4>
                            <p className="text-sm text-neutralText/60">Venue: Main Campus Auditorium / Respective Labs</p>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>
            ))}
         </div>
      </section>

      {/* Key Dates Highlights */}
      <section className="py-24 bg-primary text-white">
         <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
               <div className="text-center group">
                  <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform">
                     <Star className="text-secondary" size={32} />
                  </div>
                  <h4 className="text-xl font-black mb-4">Cultural Hub</h4>
                  <p className="text-white/60">Annual "Kalasangama" scheduled for the 2nd week of February.</p>
               </div>
               <div className="text-center group">
                  <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform">
                     <Coffee className="text-secondary" size={32} />
                  </div>
                  <h4 className="text-xl font-black mb-4">Mid-Term Breaks</h4>
                  <p className="text-white/60">1-week vacation after Semester-end university examinations.</p>
               </div>
               <div className="text-center group">
                  <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform">
                     <Award className="text-secondary" size={32} />
                  </div>
                  <h4 className="text-xl font-black mb-4">Graduation Day</h4>
                  <p className="text-white/60">Grand Convocation ceremony held in the month of August every year.</p>
               </div>
            </div>
         </div>
      </section>

      {/* Note Section */}
      <section className="py-20 text-center container mx-auto px-6 italic text-neutralText/40 text-sm">
         Note: The dates mentioned above are tentative and subject to change based on University (UOM/VTU) guidelines and Government notifications.
      </section>
    </div>
  );
};

export default AcademicCalendar;
