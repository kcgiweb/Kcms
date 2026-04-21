import React, { useEffect } from 'react';
import SEO from '../components/SEO';
import { FileText, Download, ShieldCheck } from 'lucide-react';

const AictePage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const embedUrl = "https://drive.google.com/file/d/1Cegl4-5pFGHmqAa04OXkDSvtP7jlPJcW/preview";

  return (
    <div className="pt-24 min-h-screen bg-gray-50">
      <SEO
        title="Official AICTE Approval & EOA | KCMS Bangalore | Top Management College"
        description="View the official AICTE Extension of Approval (EOA) for Karnataka College of Management & Science (KCMS), a top-ranked college in Bangalore. This document certifies our MBA program's adherence to national standards for technical education."
        keywords="AICTE approval KCMS, AICTE EOA, KCMS Bangalore affiliation, technical education approval, MBA college approval Bangalore, KCMS AICTE status"
      />

      {/* Page Header */}
      <section className="bg-white py-12 text-center border-b border-gray-200">
        <div className="container mx-auto px-6 animate-fade-up">
          <div className="inline-block bg-primary/5 text-primary p-4 rounded-2xl mb-6">
            <ShieldCheck size={40} />
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-primary mb-4">AICTE Approval Documentation</h1>
          <p className="text-lg text-neutralText/70 max-w-3xl mx-auto">
            KCMS is proud to be an AICTE-approved institution, upholding the highest standards of technical and management education in India.
          </p>
        </div>
      </section>

      {/* Iframe Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-6">
          <div className="bg-white p-2 md:p-4 rounded-2xl shadow-2xl border border-gray-100 animate-fade-up">
            <div className="flex justify-between items-center p-4 border-b border-gray-100 mb-2">
              <div className="flex items-center gap-4">
                 <FileText className="text-secondary" />
                 <h2 className="font-bold text-primary">AICTE Extension of Approval (EOA)</h2>
              </div>
              <a 
                href="https://drive.google.com/file/d/1Cegl4-5pFGHmqAa04OXkDSvtP7jlPJcW/view?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-secondary text-white px-4 py-2 rounded-lg text-xs font-bold flex items-center gap-2 hover:bg-primary transition-all"
              >
                <Download size={14} /> Download
              </a>
            </div>
            <iframe
              src={embedUrl}
              className="w-full h-[80vh] md:h-[100vh] border-0 rounded-lg"
              title="AICTE Approval Document for KCMS Bangalore"
              allow="fullscreen"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AictePage;
