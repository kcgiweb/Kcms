import React, { useEffect } from 'react';
import { COURSES_DATA } from '../constants';
import { ArrowRight, Laptop } from 'lucide-react';
import { Link } from 'react-router-dom';

const Courses: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="pt-24 min-h-screen bg-gray-50">
      <section className="bg-primary text-white py-24">
        <div className="container mx-auto px-6 text-center animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-black mb-6">Our Academic Programs</h1>
          <p className="text-xl opacity-70">Find the right path for your future career goals.</p>
        </div>
      </section>

      <section className="py-24 container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.values(COURSES_DATA).map((course, i) => (
            <div key={course.id} className="bg-white rounded-[2.5rem] p-10 border border-gray-100 hover:shadow-2xl transition-all group flex flex-col animate-fade-up" style={{ animationDelay: `${i * 100}ms` }}>
              <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                 {course.icon ? React.cloneElement(course.icon, { className: "text-primary", size: 32 }) : <Laptop className="text-primary" size={32} />}
              </div>
              <span className="text-xs font-black text-secondary uppercase tracking-widest mb-4">{course.category} Program</span>
              <h3 className="text-2xl font-black text-primary mb-4 leading-tight">{course.name}</h3>
              <p className="text-neutralText mb-8 flex-grow">{course.shortDesc}</p>
              <Link 
                to={`/course/${course.id}`}
                className="w-full py-4 rounded-xl border-2 border-primary/10 text-primary font-bold hover:bg-primary hover:text-white transition-all flex items-center justify-center gap-2"
              >
                View Details <ArrowRight size={18} />
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Courses;