import React, { useState, useEffect } from 'react';
import { 
  Users, CreditCard, Search, Filter, Download, 
  ExternalLink, CheckCircle, Clock, Trash2, 
  BarChart3, LayoutDashboard, Settings, LogOut,
  Mail, Phone, GraduationCap, Calendar, 
  ArrowUpRight, MoreVertical, Eye, FileText,
  TrendingUp, PieChart as PieChartIcon
} from 'lucide-react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, 
  Tooltip, ResponsiveContainer, PieChart, Pie, Cell 
} from 'recharts';
import SEO from '../components/SEO';
import { supabase } from '../lib/supabase';

interface Application {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  applied_course: string;
  payment_id: string;
  status: string;
  created_at: string;
  amount: string;
  gender: string;
  address: string;
}

const AdminDashboard: React.FC = () => {
  const [applications, setApplications] = useState<Application[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [selectedApp, setSelectedApp] = useState<Application | null>(null);
  const [currentView, setCurrentView] = useState<'overview' | 'leads' | 'transactions' | 'reporting' | 'settings'>('overview');
  const [applicationFee, setApplicationFee] = useState('1000');
  const [isLive, setIsLive] = useState(false);
  const [isSavingSettings, setIsSavingSettings] = useState(false);

  useEffect(() => {
    fetchApplications();
    fetchSettings();
    
    // Improved Realtime Subscription
    const channel = supabase
      .channel('schema-db-changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'applications',
        },
        (payload) => {
          console.log('Realtime Update Received:', payload);
          fetchApplications();
        }
      )
      .subscribe((status) => {
        console.log('Subscription Status:', status);
        if (status === 'SUBSCRIBED') setIsLive(true);
        else setIsLive(false);
      });

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const fetchSettings = async () => {
    const { data: feeData } = await supabase.from('settings').select('*').eq('id', 'application_fee').single();
    if (feeData) setApplicationFee(feeData.value);
  };

  const updateSettings = async () => {
    setIsSavingSettings(true);
    const { error: feeErr } = await supabase.from('settings').upsert({ id: 'application_fee', value: applicationFee });
    
    if (feeErr) {
      alert('Error updating settings');
    } else {
      alert('Application fee updated successfully!');
    }
    setIsSavingSettings(false);
  };

  const fetchApplications = async () => {
    setIsLoading(true);
    const { data, error } = await supabase
      .from('applications')
      .select('*')
      .order('created_at', { ascending: false });

    if (!error) setApplications(data || []);
    setIsLoading(false);
  };

  const filteredApps = applications.filter(app => 
    `${app.first_name} ${app.last_name}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
    app.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Dynamic Chart Data preparation
  const getChartData = () => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const last7Days = Array.from({length: 7}, (_, i) => {
      const d = new Date();
      d.setDate(d.getDate() - (6 - i));
      return {
        fullDate: d.toDateString(),
        name: days[d.getDay()],
        apps: 0
      };
    });

    applications.forEach(app => {
      const appDate = new Date(app.created_at).toDateString();
      const chartDay = last7Days.find(d => d.fullDate === appDate);
      if (chartDay) chartDay.apps++;
    });

    return last7Days;
  };

  const chartData = getChartData();

  const courseData = [
    { name: 'BCA', value: applications.filter(a => a.applied_course?.includes('BCA')).length },
    { name: 'BBA', value: applications.filter(a => a.applied_course?.includes('BBA')).length },
    { name: 'BSc', value: applications.filter(a => a.applied_course?.includes('BSc')).length },
    { name: 'PG', value: applications.filter(a => a.applied_course?.includes('M.Com') || a.applied_course?.includes('MTTM')).length },
  ].filter(d => d.value > 0);

  const COLORS = ['#002E5B', '#FFD700', '#4CAF50', '#FF5722'];

  const deleteApp = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this application?')) {
      const { error } = await supabase.from('applications').delete().eq('id', id);
      if (!error) fetchApplications();
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex font-sans">
      <SEO title="Elite Admin | KCMS Bangalore" description="Premium Admission Management Dashboard" />
      
      {/* Sidebar */}
      <aside className="w-72 bg-white border-r border-gray-100 hidden xl:flex flex-col fixed inset-y-0 z-50">
        <div className="p-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-secondary shadow-lg shadow-primary/20">
              <GraduationCap size={24} />
            </div>
            <h1 className="text-2xl font-black text-primary tracking-tighter">KCMS<span className="text-secondary">.</span></h1>
          </div>
          <p className="text-[10px] font-black text-neutralText/30 uppercase tracking-[0.2em] ml-1">Administration</p>
        </div>
        
        <nav className="flex-1 px-4 py-4 space-y-1">
          <NavItem icon={<LayoutDashboard size={20} />} label="Overview" active={currentView === 'overview'} onClick={() => setCurrentView('overview')} />
          <NavItem icon={<Users size={20} />} label="Student Leads" active={currentView === 'leads'} onClick={() => setCurrentView('leads')} />
          <NavItem icon={<CreditCard size={20} />} label="Transactions" active={currentView === 'transactions'} onClick={() => setCurrentView('transactions')} />
          <NavItem icon={<PieChartIcon size={20} />} label="Reporting" active={currentView === 'reporting'} onClick={() => setCurrentView('reporting')} />
          <div className="pt-8 pb-4 px-4 text-[10px] font-black text-neutralText/20 uppercase tracking-widest">Support</div>
          <NavItem icon={<Settings size={20} />} label="Portal Settings" active={currentView === 'settings'} onClick={() => setCurrentView('settings')} />
          <NavItem icon={<Phone size={20} />} label="Help Center" />
        </nav>
        
        <div className="p-6">
          <div className="bg-primary/5 rounded-3xl p-6 border border-primary/5">
            <h4 className="font-black text-primary text-sm mb-1">Weekly Report</h4>
            <p className="text-xs text-neutralText/50 mb-4">Admissions are up by 24% this week.</p>
            <button className="w-full bg-primary text-white py-3 rounded-2xl text-xs font-bold hover:bg-secondary transition-all">View Details</button>
          </div>
          <button onClick={() => window.location.href = '/'} className="mt-6 w-full flex items-center justify-center gap-2 text-red-400 hover:text-red-500 font-bold text-sm py-2">
            <LogOut size={18} /> Sign Out
          </button>
        </div>
      </aside>

      {/* Main Dashboard */}
      <main className="flex-1 xl:ml-72 min-h-screen pb-12">
        {/* Navbar */}
        <header className="h-20 bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-40 px-8 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h2 className="text-xl font-black text-primary capitalize">{currentView} Overview</h2>
            <div className={`flex items-center gap-1.5 px-2 py-1 rounded-full ${isLive ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'} text-[10px] font-black uppercase tracking-wider transition-colors`}>
              <div className={`w-1.5 h-1.5 rounded-full ${isLive ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`}></div>
              {isLive ? 'Live' : 'Offline'}
            </div>
            <div className="h-4 w-px bg-gray-200 hidden md:block"></div>
            <span className="text-xs font-bold text-neutralText/40 hidden md:block">{new Date().toDateString()}</span>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="relative hidden md:block">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-neutralText/30" size={16} />
              <input 
                type="text" 
                placeholder="Find application..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-11 pr-6 py-2.5 rounded-full bg-gray-50 border-none focus:ring-2 focus:ring-primary/10 transition-all text-sm w-64"
              />
            </div>
            <div className="flex items-center gap-3 border-l border-gray-100 pl-6">
              <div className="text-right hidden sm:block">
                <div className="text-sm font-black text-primary leading-none">Admin User</div>
                <div className="text-[10px] font-bold text-secondary uppercase tracking-widest mt-1">Super Admin</div>
              </div>
              <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center font-black text-primary ring-4 ring-secondary/10">
                AD
              </div>
            </div>
          </div>
        </header>

        <div className="p-8">
          {(currentView === 'overview' || currentView === 'leads') && (
            <>
              {/* Hero Stats */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <StatCard 
                  icon={<Users className="text-white" />} 
                  label="Total Admissions" 
                  value={applications.length} 
                  trend={`+${Math.min(applications.length * 5, 25)}%`} 
                  color="bg-primary"
                />
                <StatCard 
                  icon={<CreditCard className="text-white" />} 
                  label="Gross Revenue" 
                  value={`₹${applications.reduce((sum, app) => {
                    const amt = parseInt(app.amount?.replace(/[^\d]/g, '') || '0');
                    return sum + amt;
                  }, 0).toLocaleString()}`} 
                  trend="+100%" 
                  color="bg-secondary"
                />
                <StatCard 
                  icon={<TrendingUp className="text-white" />} 
                  label="Daily Goal" 
                  value={`${Math.round((applications.filter(a => new Date(a.created_at).toDateString() === new Date().toDateString()).length / 5) * 100)}%`} 
                  trend="Target 5" 
                  color="bg-green-500"
                />
                <StatCard 
                  icon={<Clock className="text-white" />} 
                  label="Pending Review" 
                  value={applications.filter(a => a.status !== 'Paid').length} 
                  trend="Needs Action" 
                  color="bg-amber-500"
                />
              </div>
            </>
          )}

          {currentView === 'overview' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
              <div className="lg:col-span-2 bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100">
                <div className="flex justify-between items-center mb-8">
                  <div>
                    <h3 className="text-lg font-black text-primary">Admission Trends</h3>
                    <p className="text-xs text-neutralText/40 font-bold uppercase tracking-widest">Daily application volume</p>
                  </div>
                </div>
                <div className="h-[300px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={chartData}>
                      <defs>
                        <linearGradient id="colorApps" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#002E5B" stopOpacity={0.1}/>
                          <stop offset="95%" stopColor="#002E5B" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />
                      <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#94A3B8'}} dy={10} />
                      <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#94A3B8'}} />
                      <Tooltip 
                        contentStyle={{borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'}}
                      />
                      <Area type="monotone" dataKey="apps" stroke="#002E5B" strokeWidth={3} fillOpacity={1} fill="url(#colorApps)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100">
                <h3 className="text-lg font-black text-primary mb-2">Program Split</h3>
                <p className="text-xs text-neutralText/40 font-bold uppercase tracking-widest mb-8">Distribution by course</p>
                <div className="h-[240px] w-full relative">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={courseData.length > 0 ? courseData : [{name: 'None', value: 1}]}
                        innerRadius={60}
                        outerRadius={80}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {courseData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                    <div className="text-2xl font-black text-primary">{applications.length}</div>
                    <div className="text-[10px] font-bold text-neutralText/40 uppercase">Total</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {currentView === 'transactions' && (
            <div className="bg-white p-12 rounded-[3rem] text-center mb-8 border border-gray-100">
               <CreditCard size={48} className="mx-auto mb-4 text-secondary" />
               <h3 className="text-2xl font-black text-primary">Transaction History</h3>
               <p className="text-neutralText/60">Secure payment logs from Razorpay will appear here.</p>
            </div>
          )}

          {currentView === 'reporting' && (
            <div className="bg-white p-12 rounded-[3rem] text-center mb-8 border border-gray-100">
               <PieChartIcon size={48} className="mx-auto mb-4 text-green-500" />
               <h3 className="text-2xl font-black text-primary">Advanced Reporting</h3>
               <p className="text-neutralText/60">Detailed insights and CSV exports for academic sessions.</p>
            </div>
          )}

          {currentView === 'settings' && (
            <div className="max-w-2xl">
              <div className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-secondary/10 text-primary rounded-2xl flex items-center justify-center">
                    <CreditCard size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-primary">Financial Settings</h3>
                    <p className="text-sm text-neutralText/40">Manage application fees and payment gateway rules.</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-[10px] font-black text-neutralText/30 uppercase tracking-widest mb-2">Application Fee (INR)</label>
                    <div className="relative">
                      <span className="absolute left-6 top-1/2 -translate-y-1/2 font-black text-primary text-lg">₹</span>
                      <input 
                        type="number" 
                        value={applicationFee}
                        onChange={(e) => setApplicationFee(e.target.value)}
                        className="w-full pl-12 pr-8 py-5 rounded-[2rem] bg-gray-50 border-none focus:ring-2 focus:ring-primary/10 transition-all font-black text-primary text-lg"
                        placeholder="1000"
                      />
                    </div>
                    <p className="text-xs text-neutralText/40 mt-3 ml-2">This amount will be charged to students during the online application process.</p>
                  </div>

                  <button 
                    onClick={updateSettings}
                    disabled={isSavingSettings}
                    className="w-full bg-primary text-white py-5 rounded-[2rem] font-black text-sm flex items-center justify-center gap-3 hover:bg-secondary transition-all shadow-xl shadow-primary/10 disabled:opacity-50"
                  >
                    {isSavingSettings ? 'Saving Changes...' : 'Save Financial Settings'} <CheckCircle size={20} />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Applications Table */}
          <div className="bg-white rounded-[2.5rem] shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-8 border-b border-gray-50 flex justify-between items-center">
              <div>
                <h3 className="text-xl font-black text-primary">Student Admissions</h3>
                <p className="text-xs text-neutralText/40 font-bold mt-1">Manage and track all new enrollment leads</p>
              </div>
              <div className="flex gap-3">
                <button className="bg-gray-50 text-primary px-5 py-2.5 rounded-xl text-xs font-black hover:bg-gray-100 transition-all flex items-center gap-2">
                  <Filter size={14} /> Filter
                </button>
                <button className="bg-primary text-white px-5 py-2.5 rounded-xl text-xs font-black hover:bg-secondary transition-all flex items-center gap-2 shadow-lg shadow-primary/10">
                  <Download size={14} /> Export List
                </button>
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-gray-50/50 text-[10px] font-black uppercase tracking-[0.1em] text-neutralText/30">
                    <th className="px-8 py-6">Applicant Name</th>
                    <th className="px-8 py-6">Applied Course</th>
                    <th className="px-8 py-6">Payment Status</th>
                    <th className="px-8 py-6">Applied Date</th>
                    <th className="px-8 py-6 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {filteredApps.length > 0 ? filteredApps.map((app) => (
                    <tr key={app.id} className="hover:bg-primary/[0.02] transition-colors group">
                      <td className="px-8 py-6">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-primary/5 text-primary rounded-2xl flex items-center justify-center font-black text-lg group-hover:scale-110 transition-transform">
                            {app.first_name[0]}
                          </div>
                          <div>
                            <div className="font-bold text-primary group-hover:text-secondary transition-colors">{app.first_name} {app.last_name}</div>
                            <div className="text-xs text-neutralText/40 font-medium">{app.email}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-8 py-6">
                        <div className="px-3 py-1 bg-secondary/10 text-primary inline-block rounded-lg text-[10px] font-black uppercase tracking-wider mb-1">
                          {app.applied_course}
                        </div>
                        <div className="text-[10px] text-neutralText/30 font-bold uppercase tracking-widest block">Batch 2026-27</div>
                      </td>
                      <td className="px-8 py-6">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                          <span className="text-sm font-black text-primary">{app.amount} Paid</span>
                        </div>
                        <div className="text-[10px] text-neutralText/30 font-bold mt-1 uppercase tracking-widest">ID: {app.payment_id?.slice(0, 8)}...</div>
                      </td>
                      <td className="px-8 py-6">
                        <div className="text-sm font-bold text-primary">{new Date(app.created_at).toLocaleDateString()}</div>
                        <div className="text-[10px] text-neutralText/30 font-bold uppercase tracking-widest mt-1">Processed</div>
                      </td>
                      <td className="px-8 py-6 text-right">
                        <div className="flex justify-end gap-2">
                          <button onClick={() => setSelectedApp(app)} className="w-10 h-10 bg-white border border-gray-100 rounded-xl flex items-center justify-center text-primary hover:bg-primary hover:text-white hover:border-primary transition-all shadow-sm">
                            <Eye size={18} />
                          </button>
                          <button onClick={() => deleteApp(app.id)} className="w-10 h-10 bg-white border border-gray-100 rounded-xl flex items-center justify-center text-red-500 hover:bg-red-500 hover:text-white hover:border-red-500 transition-all shadow-sm">
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  )) : (
                    <tr>
                      <td colSpan={5} className="py-32 text-center">
                        <div className="max-w-sm mx-auto">
                          <div className="w-20 h-20 bg-gray-100 rounded-3xl flex items-center justify-center mx-auto mb-6 text-gray-300">
                            <FileText size={40} />
                          </div>
                          <h4 className="text-lg font-black text-primary mb-1">No Applications Yet</h4>
                          <p className="text-sm text-neutralText/40">When students apply on the website, they will appear here automatically.</p>
                        </div>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>

      {/* Application Detail Modal */}
      {selectedApp && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-[3rem] shadow-2xl w-full max-w-2xl overflow-hidden animate-fade-up">
            <div className="bg-primary p-8 text-white relative">
              <button 
                onClick={() => setSelectedApp(null)}
                className="absolute top-6 right-6 text-white/50 hover:text-white transition-all p-2 hover:bg-white/10 rounded-full"
              >
                <MoreVertical size={24} />
              </button>
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 bg-secondary rounded-3xl flex items-center justify-center font-black text-3xl text-primary shadow-2xl">
                  {selectedApp.first_name[0]}
                </div>
                <div>
                  <h2 className="text-3xl font-black">{selectedApp.first_name} {selectedApp.last_name}</h2>
                  <p className="text-white/60 font-bold uppercase tracking-widest text-xs mt-1">Application ID: {selectedApp.id.slice(0, 8)}</p>
                </div>
              </div>
            </div>
            
            <div className="p-10 grid grid-cols-2 gap-10">
              <div className="space-y-6">
                <DetailItem label="Email Address" value={selectedApp.email} icon={<Mail size={16} />} />
                <DetailItem label="Phone Number" value={selectedApp.phone} icon={<Phone size={16} />} />
                <DetailItem label="Gender" value={selectedApp.gender || 'Not specified'} icon={<Users size={16} />} />
                <DetailItem label="Full Address" value={selectedApp.address || 'Not specified'} icon={<MapPin size={16} />} />
              </div>
              <div className="space-y-6">
                <DetailItem label="Applied Program" value={selectedApp.applied_course} icon={<GraduationCap size={16} />} color="text-secondary" />
                <DetailItem label="Payment Status" value={`${selectedApp.amount} (Paid)`} icon={<CheckCircle size={16} />} color="text-green-500" />
                <DetailItem label="Transaction ID" value={selectedApp.payment_id} icon={<CreditCard size={16} />} />
                <DetailItem label="Applied Date" value={new Date(selectedApp.created_at).toLocaleString()} icon={<Clock size={16} />} />
              </div>
            </div>
            
            <div className="p-8 bg-gray-50 border-t border-gray-100 flex gap-4">
              <button className="flex-1 bg-primary text-white py-4 rounded-2xl font-black text-sm flex items-center justify-center gap-3 hover:bg-secondary transition-all">
                Download Full Form <Download size={18} />
              </button>
              <button onClick={() => setSelectedApp(null)} className="flex-1 bg-white border border-gray-200 text-primary py-4 rounded-2xl font-black text-sm hover:bg-gray-100 transition-all">
                Close Window
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const NavItem = ({ icon, label, active = false, onClick }: { icon: any, label: string, active?: boolean, onClick?: () => void }) => (
  <button 
    onClick={onClick}
    className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl font-black text-sm transition-all group ${active ? 'bg-primary text-secondary shadow-lg shadow-primary/20' : 'text-neutralText/40 hover:bg-primary/5 hover:text-primary'}`}
  >
    <span className={`${active ? 'text-secondary' : 'text-neutralText/20 group-hover:text-primary transition-colors'}`}>{icon}</span>
    {label}
    {active && <div className="ml-auto w-1.5 h-1.5 bg-secondary rounded-full"></div>}
  </button>
);

const StatCard = ({ icon, label, value, trend, color }: { icon: any, label: string, value: any, trend: string, color: string }) => (
  <div className="bg-white p-6 rounded-[2.5rem] shadow-sm border border-gray-100 hover:shadow-xl transition-all group overflow-hidden relative">
    <div className={`absolute top-0 right-0 w-24 h-24 ${color} opacity-[0.03] rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700`}></div>
    <div className="flex items-center justify-between mb-4">
      <div className={`w-12 h-12 ${color} rounded-2xl flex items-center justify-center shadow-lg`}>
        {React.cloneElement(icon as React.ReactElement<any>, { size: 20 })}
      </div>
      <div className="flex items-center gap-1 text-green-500 text-xs font-black bg-green-50 px-2 py-1 rounded-lg">
        <ArrowUpRight size={12} /> {trend}
      </div>
    </div>
    <div className="text-2xl font-black text-primary mb-1">{value}</div>
    <div className="text-[10px] font-black text-neutralText/30 uppercase tracking-widest">{label}</div>
  </div>
);

const DetailItem = ({ label, value, icon, color = "text-primary" }: { label: string, value: string, icon: any, color?: string }) => (
  <div className="flex gap-4 items-start">
    <div className={`w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center shrink-0 ${color}`}>
      {icon}
    </div>
    <div>
      <div className="text-[10px] font-black text-neutralText/30 uppercase tracking-widest mb-0.5">{label}</div>
      <div className={`text-sm font-bold ${color === 'text-primary' ? 'text-primary' : color} leading-snug`}>{value}</div>
    </div>
  </div>
);

const MapPin = ({ size, className }: { size?: number, className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size || 24} 
    height={size || 24} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

export default AdminDashboard;
