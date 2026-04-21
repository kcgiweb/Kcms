import React, { useState, useEffect } from 'react';
import { 
  User, Mail, Phone, MapPin, GraduationCap, BookOpen, 
  CheckCircle, ArrowRight, ArrowLeft, CreditCard, ShieldCheck,
  Loader2, Sparkles, Building, Calendar, FileText
} from 'lucide-react';
import SEO from '../components/SEO';

declare global {
  interface Window {
    Razorpay: any;
  }
}

import { supabase } from '../lib/supabase';

const Apply: React.FC = () => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState<'idle' | 'processing' | 'success' | 'failed'>('idle');
  const [applicationFee, setApplicationFee] = useState('1000');

  const [formData, setFormData] = useState({
    // Step 1: Personal
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dob: '',
    gender: '',
    address: '',
    
    // Step 2: Academic
    lastQualification: '',
    institution: '',
    percentage: '',
    yearOfPassing: '',
    
    // Step 3: Course
    appliedCourse: '',
    batch: '2026-27'
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchSettings();
  }, [step]);

  const fetchSettings = async () => {
    const { data: feeData } = await supabase.from('settings').select('*').eq('id', 'application_fee').single();
    if (feeData) setApplicationFee(feeData.value);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  const handlePayment = () => {
    setPaymentStatus('processing');
    
    const options = {
      key: 'rzp_live_SHGESK2InQva5q', // Your Live Razorpay Key
      amount: parseInt(applicationFee) * 100, // Dynamic amount in paise
      currency: 'INR',
      name: 'KCMS Bangalore',
      description: 'Application Fee for Admission',
      image: 'https://res.cloudinary.com/dejcpd56d/image/upload/v1713331200/kcms_logo_placeholder.png',
      handler: async function (response: any) {
        console.log('Payment Successful:', response);
        setPaymentStatus('success');
        await submitToDatabase(response.razorpay_payment_id);
      },
      prefill: {
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        contact: formData.phone
      },
      theme: {
        color: '#002E5B' // Primary color
      },
      modal: {
        ondismiss: function() {
          setPaymentStatus('idle');
        }
      }
    };

    try {
      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error('Razorpay failed to load:', error);
      alert('Razorpay Payment Gateway failed to load. Please check your internet connection.');
      setPaymentStatus('idle');
    }
  };

  const submitToDatabase = async (paymentId: string) => {
    setIsSubmitting(true);
    console.log('Attempting to save to Supabase...', formData);
    
    try {
      const { data, error } = await supabase
        .from('applications')
        .insert([{
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          dob: formData.dob,
          gender: formData.gender,
          address: formData.address,
          last_qualification: formData.lastQualification,
          institution: formData.institution,
          percentage: formData.percentage,
          year_of_passing: formData.yearOfPassing,
          applied_course: formData.appliedCourse,
          batch: formData.batch,
          payment_id: paymentId,
          status: 'Paid',
          amount: `₹${parseInt(applicationFee).toLocaleString()}`
        }])
        .select();

      if (error) {
        console.error('Supabase Insert Error:', error);
        alert(`Database Error: ${error.message}\nDetails: ${error.details}\nHint: ${error.hint}`);
        throw error;
      }
      
      console.log('Save Successful:', data);
      setStep(5); // Success step
    } catch (error: any) {
      console.error('Final Catch Error:', error);
      alert('Application could not be saved to the database. Saving to local storage instead.');
      
      // Fallback
      const newApplication = {
        id: `KCMS-${Date.now()}`,
        ...formData,
        paymentId,
        status: 'Paid',
        date: new Date().toLocaleDateString(),
        amount: `₹${parseInt(applicationFee).toLocaleString()}`
      };
      const existingApps = JSON.parse(localStorage.getItem('kcms_applications') || '[]');
      localStorage.setItem('kcms_applications', JSON.stringify([newApplication, ...existingApps]));
      
      setStep(5);
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStep = () => {
    switch(step) {
      case 1:
        return (
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                <User size={20} />
              </div>
              <h2 className="text-2xl font-black text-primary">Personal Details</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-neutralText/60">First Name</label>
                <input 
                  type="text" name="firstName" required value={formData.firstName} onChange={handleInputChange}
                  placeholder="John" className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-neutralText/60">Last Name</label>
                <input 
                  type="text" name="lastName" required value={formData.lastName} onChange={handleInputChange}
                  placeholder="Doe" className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-neutralText/60">Email Address</label>
                <input 
                  type="email" name="email" required value={formData.email} onChange={handleInputChange}
                  placeholder="john@example.com" className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-neutralText/60">Mobile Number</label>
                <input 
                  type="tel" name="phone" required value={formData.phone} onChange={handleInputChange}
                  placeholder="+91 00000 00000" className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-neutralText/60">Date of Birth</label>
                <input 
                  type="date" name="dob" required value={formData.dob} onChange={handleInputChange}
                  className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-neutralText/60">Gender</label>
                <select 
                  name="gender" required value={formData.gender} onChange={handleInputChange}
                  className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all appearance-none"
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-neutralText/60">Full Address</label>
              <textarea 
                name="address" required value={formData.address} onChange={handleInputChange}
                placeholder="Street, City, State, ZIP" rows={3}
                className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
              />
            </div>
            <button 
              onClick={nextStep}
              className="w-full bg-primary text-white py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 hover:bg-secondary transition-all shadow-xl shadow-primary/20"
            >
              Next Step <ArrowRight size={20} />
            </button>
          </div>
        );
      case 2:
        return (
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                <GraduationCap size={20} />
              </div>
              <h2 className="text-2xl font-black text-primary">Academic Information</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-neutralText/60">Last Qualification</label>
                <input 
                  type="text" name="lastQualification" required value={formData.lastQualification} onChange={handleInputChange}
                  placeholder="e.g. 12th / PUC" className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-neutralText/60">Institution Name</label>
                <input 
                  type="text" name="institution" required value={formData.institution} onChange={handleInputChange}
                  placeholder="e.g. KV School" className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-neutralText/60">Aggregate Percentage / CGPA</label>
                <input 
                  type="text" name="percentage" required value={formData.percentage} onChange={handleInputChange}
                  placeholder="e.g. 85%" className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-neutralText/60">Year of Passing</label>
                <input 
                  type="text" name="yearOfPassing" required value={formData.yearOfPassing} onChange={handleInputChange}
                  placeholder="e.g. 2024" className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                />
              </div>
            </div>
            <div className="flex gap-4 pt-4">
              <button onClick={prevStep} className="flex-1 border border-gray-200 text-primary py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 hover:bg-gray-50 transition-all">
                <ArrowLeft size={20} /> Back
              </button>
              <button onClick={nextStep} className="flex-[2] bg-primary text-white py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 hover:bg-secondary transition-all shadow-xl shadow-primary/20">
                Next Step <ArrowRight size={20} />
              </button>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                <BookOpen size={20} />
              </div>
              <h2 className="text-2xl font-black text-primary">Course Selection</h2>
            </div>
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-neutralText/60">Choose Your Program</label>
                <select 
                  name="appliedCourse" required value={formData.appliedCourse} onChange={handleInputChange}
                  className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all appearance-none"
                >
                  <option value="">Select a Course</option>
                  <optgroup label="Undergraduate (UG)">
                    <option>BBA – Aviation Management</option>
                    <option>BCA (General)</option>
                    <option>BCA (AI & ML)</option>
                    <option>BSc – Criminology and Forensic Science</option>
                    <option>BTTM</option>
                  </optgroup>
                  <optgroup label="Postgraduate (PG)">
                    <option>M.Com</option>
                    <option>MTTM</option>
                  </optgroup>
                </select>
              </div>
              <div className="bg-primary/5 p-6 rounded-3xl border border-primary/10 flex items-start gap-4">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-primary">
                  <Calendar size={20} />
                </div>
                <div>
                  <h4 className="font-black text-primary">Academic Session</h4>
                  <p className="text-sm text-neutralText/60">You are applying for the <span className="font-bold text-primary">2026-27</span> academic batch.</p>
                </div>
              </div>
              <div className="bg-secondary/5 p-6 rounded-3xl border border-secondary/10 flex items-start gap-4">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-secondary">
                  <FileText size={20} />
                </div>
                <div>
                  <h4 className="font-black text-primary">Application Fee</h4>
                  <p className="text-sm text-neutralText/60">A non-refundable fee of <span className="font-bold text-secondary">₹{parseInt(applicationFee).toLocaleString()}</span> is required to process your application.</p>
                </div>
              </div>
            </div>
            <div className="flex gap-4 pt-4">
              <button onClick={prevStep} className="flex-1 border border-gray-200 text-primary py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 hover:bg-gray-50 transition-all">
                <ArrowLeft size={20} /> Back
              </button>
              <button onClick={nextStep} className="flex-[2] bg-primary text-white py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 hover:bg-secondary transition-all shadow-xl shadow-primary/20">
                Proceed to Payment <CreditCard size={20} />
              </button>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-8 animate-fade-in text-center py-8">
            <div className="w-24 h-24 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <ShieldCheck size={48} />
            </div>
            <div>
              <h2 className="text-3xl font-black text-primary mb-2">Secure Payment</h2>
              <p className="text-neutralText/60">Finalize your application by completing the payment.</p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-[2.5rem] border border-gray-100 max-w-sm mx-auto">
              <div className="flex justify-between items-center mb-6">
                <span className="text-neutralText/60 font-bold uppercase text-xs tracking-widest">Amount Payable</span>
                <span className="text-2xl font-black text-primary">₹{parseInt(applicationFee).toLocaleString()}</span>
              </div>
              <div className="space-y-3 mb-8">
                <div className="flex justify-between text-sm">
                  <span className="text-neutralText/40">Student</span>
                  <span className="font-bold text-primary">{formData.firstName} {formData.lastName}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-neutralText/40">Course</span>
                  <span className="font-bold text-primary">{formData.appliedCourse}</span>
                </div>
              </div>
              <button 
                onClick={handlePayment}
                disabled={paymentStatus === 'processing'}
                className="w-full bg-secondary text-white py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 hover:bg-primary transition-all shadow-xl shadow-secondary/20 disabled:opacity-50"
              >
                {paymentStatus === 'processing' ? (
                  <><Loader2 className="animate-spin" /> Processing...</>
                ) : (
                  <>Pay with Razorpay <ArrowRight size={20} /></>
                )}
              </button>
            </div>
            
            <div className="flex items-center justify-center gap-6 opacity-40">
              <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Razorpay_logo.svg" alt="Razorpay" className="h-4" />
              <div className="w-px h-4 bg-gray-300"></div>
              <span className="text-[10px] font-black uppercase tracking-widest">PCI DSS Compliant</span>
            </div>
            
            <button onClick={prevStep} className="text-primary font-black uppercase text-xs tracking-widest border-b-2 border-secondary pb-1">
              Edit Details
            </button>
          </div>
        );
      case 5:
        return (
          <div className="text-center py-16 animate-fade-up">
            <div className="w-32 h-32 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-10 relative">
              <CheckCircle size={64} />
              <div className="absolute -top-4 -right-4 animate-bounce">
                <Sparkles className="text-secondary" size={32} />
              </div>
            </div>
            <h2 className="text-4xl font-black text-primary mb-4">Application Submitted!</h2>
            <p className="text-xl text-neutralText/60 max-w-md mx-auto mb-10 leading-relaxed">
              Congratulations {formData.firstName}! Your application for <span className="font-bold text-primary">{formData.appliedCourse}</span> has been successfully received.
            </p>
            <div className="bg-gray-50 p-8 rounded-[3rem] border border-gray-100 max-w-md mx-auto mb-12">
              <div className="text-left space-y-4">
                <div className="flex justify-between">
                  <span className="text-neutralText/40 text-sm">Application ID</span>
                  <span className="font-black text-primary uppercase">KCMS2026-{(Math.random()*10000).toFixed(0)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutralText/40 text-sm">Payment Status</span>
                  <span className="text-green-600 font-bold flex items-center gap-1"><CheckCircle size={14} /> Paid ₹{parseInt(applicationFee).toLocaleString()}</span>
                </div>
              </div>
            </div>
            <button 
              onClick={() => window.location.href = '/'}
              className="bg-primary text-white px-12 py-5 rounded-full font-black text-lg hover:bg-secondary transition-all shadow-2xl"
            >
              Back to Home
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-gray-50/50">
      <SEO 
        title="Apply Online 2026 | KCMS Bangalore Admissions"
        description="Secure your seat at the best college in Bangalore. Start your online application for BCA, BBA, B.Com, and MBA 2026 batch."
      />
      
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-black text-primary mb-4 leading-tight">Apply for <br/><span className="text-secondary">Admission 2026</span></h1>
            <p className="text-neutralText/60 max-w-lg mx-auto">Fill the form below to start your professional journey at KCMS Bangalore.</p>
          </div>

          {/* Stepper */}
          {step < 5 && (
            <div className="flex justify-between items-center mb-12 max-w-2xl mx-auto relative px-4">
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -translate-y-1/2 -z-10 mx-10" />
              {[1, 2, 3, 4].map(s => (
                <div 
                  key={s} 
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-black transition-all duration-500 ${
                    step >= s ? 'bg-primary text-white scale-110 shadow-lg shadow-primary/20' : 'bg-white text-gray-400 border border-gray-200'
                  }`}
                >
                  {step > s ? <CheckCircle size={20} /> : s}
                </div>
              ))}
            </div>
          )}

          {/* Form Card */}
          <div className="bg-white p-8 md:p-12 rounded-[4rem] shadow-2xl shadow-primary/5 border border-white relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl -z-10"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl -z-10"></div>
            
            {renderStep()}
          </div>
          
          {/* Support Footer */}
          {step < 5 && (
            <div className="mt-12 text-center text-neutralText/40 text-xs flex flex-col md:flex-row items-center justify-center gap-6">
              <div className="flex items-center gap-2">
                <ShieldCheck size={16} /> <span>Secure SSL Encrypted Connection</span>
              </div>
              <div className="w-1 h-1 bg-gray-300 rounded-full hidden md:block"></div>
              <div className="flex items-center gap-2">
                <Phone size={16} /> <span>Admission Helpline: +91 98765 43210</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Apply;
