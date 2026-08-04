import React, { useState, useEffect } from 'react';
import { MessageSquare, X, Loader2, Sparkles, GraduationCap } from 'lucide-react';

const WIDGET_ID = '91d4384119c7df02dd58b03283ed6f37';
const IFRAME_SRC = `https://widgets.in4.nopaperforms.com/register?&r=&q=&w=${WIDGET_ID}&m=&cu=`;

export const openNpfPopup = () => {
  window.dispatchEvent(new CustomEvent('open-apply-modal'));
};

export const closeNpfPopup = () => {
  window.dispatchEvent(new CustomEvent('close-apply-modal'));
};

const ApplyPopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);

    window.addEventListener('open-apply-modal', handleOpen);
    window.addEventListener('close-apply-modal', handleClose);

    // Global click listener for any elements with NPF widget classes
    const handleDocClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest(`.npfWidget-${WIDGET_ID}, .npfWidgetButton`);
      if (target) {
        e.preventDefault();
        setIsOpen(true);
      }
    };
    document.addEventListener('click', handleDocClick);

    // Auto-popup after 2.5 seconds on page load
    const autoTimer = setTimeout(() => {
      setIsOpen(true);
    }, 2500);

    return () => {
      window.removeEventListener('open-apply-modal', handleOpen);
      window.removeEventListener('close-apply-modal', handleClose);
      document.removeEventListener('click', handleDocClick);
      clearTimeout(autoTimer);
    };
  }, []);

  return (
    <>
      {/* Floating Enquire Now Button on Right Side */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40">
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="bg-secondary hover:bg-primary text-white font-black text-xs uppercase tracking-widest px-3.5 py-4 rounded-l-2xl shadow-2xl transition-all flex items-center gap-2 transform origin-right hover:-translate-x-1 cursor-pointer border-y border-l border-white/20"
          style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
          title="Admission Enquiry 2026-27"
        >
          <MessageSquare size={16} className="rotate-90 inline text-white" />
          Enquire Now
        </button>
      </div>

      {/* Modern React Modal with Preloaded / Instant Iframe */}
      {isOpen && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop Blur */}
          <div
            className="fixed inset-0 bg-black/65 backdrop-blur-md transition-opacity animate-fade-in"
            onClick={() => setIsOpen(false)}
          />

          {/* Modal Container */}
          <div className="relative w-full max-w-lg bg-white rounded-[2rem] shadow-2xl border-t-8 border-primary overflow-hidden z-10 animate-zoom-in my-auto max-h-[94vh] flex flex-col">
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 pt-5 pb-3 border-b border-gray-100 bg-gradient-to-r from-gray-50 via-white to-orange-50/30 shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <GraduationCap size={22} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-black text-primary leading-none">Admissions 2026-27</h3>
                    <span className="bg-secondary/15 text-secondary text-[10px] font-black uppercase px-2 py-0.5 rounded-full flex items-center gap-1">
                      <Sparkles size={10} /> KCMS
                    </span>
                  </div>
                  <p className="text-xs text-neutralText/70 font-medium mt-1">
                    Apply for BCA, BBA, B.Com, MBA & MTTM
                  </p>
                </div>
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="w-9 h-9 rounded-full bg-gray-100 hover:bg-red-50 hover:text-red-600 text-gray-500 flex items-center justify-center transition-all cursor-pointer shrink-0"
                aria-label="Close form"
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Content / Iframe */}
            <div className="relative p-2 sm:p-4 overflow-y-auto flex-1 bg-white" style={{ minHeight: '520px' }}>
              {loading && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/95 z-20">
                  <Loader2 className="w-10 h-10 text-primary animate-spin mb-3" />
                  <span className="text-sm font-bold text-primary">Loading Enquiry Form...</span>
                  <span className="text-xs text-neutralText/60 mt-1">Connecting to KCMS Admissions Desk</span>
                </div>
              )}
              <iframe
                src={IFRAME_SRC}
                width="100%"
                height="520px"
                onLoad={() => setLoading(false)}
                className="w-full border-none rounded-xl"
                title="KCMS Admission Enquiry Form"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ApplyPopup;