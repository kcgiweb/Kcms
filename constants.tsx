import React from 'react';
import { Course, Testimonial } from './types';
import { 
  Target, Shield, BookOpen, Users, Award, Landmark, Zap, History, Globe, Heart, 
  ShieldCheck, FileText, Calendar, GraduationCap, Laptop, Monitor, Library, 
  Building2, Bus, Coffee, Activity, Scale, CheckCircle, PhoneCall, Microscope, 
  MapPin, Handshake, Briefcase, TrendingUp, BarChart, Rocket, Globe2, Trophy, 
  Cpu, Code, PieChart, PlaneTakeoff, Music, Stethoscope, Dumbbell, Clock, Info,
  Search, ClipboardCheck, Layout, Lightbulb, MousePointer2, CpuIcon, Eye, Radio,
  Smartphone, Thermometer, UserCheck
} from 'lucide-react';

export const NAVIGATION: any[] = [
  { label: 'Home', href: '/' },
  { 
    label: 'About', 
    href: '/about',
    mega: true,
    columns: [
      {
        title: 'Institutional',
        links: [
          { label: 'About Us', href: '/about' },
          { label: 'Vision & Mission', href: '/p/vision-mission' },
          { label: 'Principal Message', href: '/p/principal' },
          { label: 'Chairman\'s Desk', href: '/p/chairman' },
          { label: 'History & Milestones', href: '/p/history' },
          { label: 'Leadership Hub', href: '/p/leadership' },
        ]
      },
      {
        title: 'Campus Life',
        links: [
          { label: 'Campus Life Overview', href: '/p/campus-life' },
          { label: 'Student Support Hub', href: '/p/student-support' },
          { label: 'Clubs & Societies', href: '/p/clubs' },
          { label: 'Sports & Cultural', href: '/p/sports' },
          { label: 'Social Initiatives', href: '/p/social-initiatives' },
        ]
      },
      {
        title: 'Compliance',
        links: [
          { label: 'IQAC Hub', href: '/p/iqac' },
          { label: 'NAAC Portal', href: '/p/naac' },
          { label: 'Anti Ragging Cell', href: '/p/anti-ragging' },
          { label: 'Women\'s Cell', href: '/p/womens-cell' },
          { label: 'Grievance Redressal', href: '/p/grievance' },
        ]
      }
    ]
  },
  { 
    label: 'Academics', 
    href: '/courses',
    mega: true,
    columns: [
      {
        title: 'Undergraduate Programs',
        links: [
          { label: 'BBA Aviation Management', href: '/course/bba-aviation' },
          { label: 'BCA (General)', href: '/course/bca' },
          { label: 'BCA (AI & ML)', href: '/course/bca-ai-ml' },
          { label: 'BSc Criminology & Forensic Science', href: '/course/bsc-criminology' },
          { label: 'BTTM', href: '/course/bttm' },
        ]
      },
      {
        title: 'Postgraduate Programs',
        links: [
          { label: 'M.Com', href: '/course/mcom' },
          { label: 'MTTM', href: '/course/mttm' },
        ]
      },
      {
        highlight: {
          title: 'Admissions 2026',
          text: 'Apply for admission 2026 Bangalore at KCMS.',
          cta: 'Apply Now',
          href: '/admissions'
        }
      }
    ]
  },
  { label: 'Admissions', href: '/admissions' },
  { label: 'Placements', href: '/placements' },
  { label: 'Facilities', href: '/p/infrastructure' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
  { label: 'AICTE', href: '/aicte' },
];

export const PAGE_DATA: Record<string, any> = {
  // --- 1. CENTRAL LIBRARY ---
  'library': {
    title: 'Central Library',
    subtitle: 'Best Infrastructure in Bangalore - Knowledge Hub',
    heroImage: 'https://res.cloudinary.com/dejcpd56d/image/upload/v1767689980/download_4_gfxni9.png',
    sections: [
      { 
        type: 'text', 
        title: 'Library Overview', 
        content: 'The Central Library of KCMS Bangalore is a hallmark of the best infrastructure in Bangalore, providing access to a wide range of learning resources and digital gateways for academic excellence.' 
      },
      { 
        type: 'grid', 
        title: 'Vision & Objectives', 
        items: [
          { title: 'Research Culture', desc: 'Promote intensive research culture among scholars.', icon: <Search /> },
          { title: 'Curriculum Support', desc: 'Aligned with University programs.', icon: <Target /> },
          { title: 'Digital Accessibility', desc: 'Global resource availability.', icon: <Globe /> },
          { title: 'Independent Learning', desc: 'Lifelong learning commitment.', icon: <Lightbulb /> }
        ]
      }
    ]
  },
  // --- 2. SMART CLASSROOMS ---
  'smart-classrooms': {
    title: 'Smart Classrooms',
    subtitle: 'Digitally Enabled Learning Spaces',
    heroImage: 'https://res.cloudinary.com/dejcpd56d/image/upload/v1767690141/download_8_f7gppy.png',
    sections: [
      { 
        type: 'text', 
        title: 'Modern Pedagogy', 
        content: 'KCMS features interactive smart classrooms equipped with 4K interactive boards, high-definition audio systems, and high-speed fiber-optic internet to facilitate a seamless digital learning experience.' 
      },
      { 
        type: 'list', 
        title: 'Key Features', 
        items: [
          'Interactive 4K Smart Boards',
          'Acoustically Designed Lecture Halls',
          'Digital Projection Systems',
          'High-Speed Wi-Fi Connectivity',
          'Ergonomic Seating Arrangements'
        ]
      }
    ]
  },
  // --- 3. HOSTEL FACILITY ---
  'hostel': {
    title: 'Hostel Facility',
    subtitle: 'Safe and Comfortable Living on Campus',
    heroImage: 'https://res.cloudinary.com/dejcpd56d/image/upload/v1767693347/download_13_pobgl1.png',
    sections: [
      { 
        type: 'text', 
        title: 'A Home Away from Home', 
        content: 'KCMS offers separate residential facilities for boys and girls, ensuring a secure environment with modern amenities, nutritious food, and round-the-clock supervision.' 
      },
      { 
        type: 'grid', 
        title: 'Hostel Amenities', 
        items: [
          { title: 'Security', desc: '24/7 CCTV surveillance and security staff.', icon: <Shield /> },
          { title: 'Dining', desc: 'Hygienic multi-cuisine mess facilities.', icon: <Coffee /> },
          { title: 'Wi-Fi', desc: 'High-speed internet for research and leisure.', icon: <Globe /> },
          { title: 'Health', desc: 'On-campus medical assistance and emergency support.', icon: <Activity /> }
        ]
      }
    ]
  }
};

export const COURSES_DATA: Record<string, any> = {
  'bba-aviation': {
    id: 'bba-aviation',
    name: 'BBA in Aviation Management',
    category: 'Undergraduate',
    icon: <PlaneTakeoff />,
    duration: '3 Years',
    shortDesc: 'Soar to new heights with a specialized BBA in Aviation. The premier course in Bangalore for airline and airport management careers.',
    fullDesc: 'The BBA in Aviation Management at KCMS is a comprehensive program designed to prepare students for the dynamic aviation industry. It covers airport operations, airline management, aviation safety, and air traffic control fundamentals.',
    objectives: [
      'Master airport and airline operations.',
      'Understand global aviation regulations (IATA/ICAO).',
      'Develop skills in air cargo management and logistics.',
      'Prepare for leadership roles in the aviation sector.'
    ],
    curriculum: [
      { sem: 'Sem 1-2', focus: 'Aviation Principles, Business Communication, Airport Functions.' },
      { sem: 'Sem 3-4', focus: 'Airline Operations, Aviation Law, Cargo Management, Safety protocols.' },
      { sem: 'Sem 5-6', focus: 'Strategic Airline Management, Airport Planning, Internship.' }
    ],
    facultyStats: { phd: '30%', experience: '15+ Years Avg.', industry: 'Ex-Airline Managers' },
    labInfo: [
      { icon: <PlaneTakeoff />, title: 'Aviation Simulation Lab', desc: 'Real-time flight and airport operations simulation.' },
      { icon: <Globe />, title: 'Global Distribution System', desc: 'Hands-on training with Amadeus/Galileo booking systems.' }
    ],
    opportunities: ['Airport Manager', 'Airline Operations Manager', 'Aviation Safety Officer', 'Cargo Manager', 'Ground Staff Manager'],
    achievements: [
      'MOU with leading international airlines for internships.',
      'Ranked as the best emerging aviation college in South India.'
    ]
  },
  bca: {
    id: 'bca',
    name: 'Bachelor of Computer Applications (BCA)',
    category: 'Undergraduate',
    icon: <Code />,
    duration: '3 Years',
    shortDesc: 'Top BCA college in Bangalore with placements. Join KCMS for a strong foundation in computer science and software development.',
    fullDesc: 'The BCA program at KCMS offers a robust curriculum covering programming languages, database management, networking, and web development. It is the perfect launchpad for a career in the IT industry.',
    objectives: [
      'Master core programming paradigms (Java, Python, C++).',
      'Build a strong foundation in data structures and algorithms.',
      'Develop dynamic web applications using MERN stack.',
      'Prepare for roles in top tech companies with 100% placement support.'
    ],
    curriculum: [
      { sem: 'Sem 1-2', focus: 'Programming Fundamentals, Math, Digital Logic.' },
      { sem: 'Sem 3-4', focus: 'Data Structures, OS, DBMS, Web Technologies.' },
      { sem: 'Sem 5-6', focus: 'Advanced Java, Python Programming, Final Project.' }
    ],
    facultyStats: { phd: '45%', experience: '12+ Years Avg.', publications: '150+' },
    labInfo: [
      { icon: <Code />, title: 'Full Stack Lab', desc: 'Equipped with MERN stack tools and IDEs.' },
      { icon: <Cpu />, title: 'Hardware & Networking Lab', desc: 'Hands-on with networking devices and system hardware.' }
    ],
    opportunities: ['Software Developer', 'Web Developer', 'System Analyst', 'Database Administrator'],
    achievements: [
      '100% placement record in tier-1 tech companies.',
      'Consistent ranking among top BCA colleges in Bangalore.'
    ]
  },
  'bca-ai-ml': {
    id: 'bca-ai-ml',
    name: 'BCA (Artificial Intelligence & Machine Learning)',
    category: 'Undergraduate',
    icon: <Cpu />,
    duration: '3 Years',
    shortDesc: 'Specialize in the future of tech with our BCA in AI & ML. The leading program in Bangalore for careers in intelligent systems.',
    fullDesc: 'This specialized BCA program focuses on the cutting-edge fields of Artificial Intelligence and Machine Learning. Students delve into neural networks, natural language processing, computer vision, and data science, preparing them to build the intelligent applications of tomorrow.',
    objectives: [
      'Understand the fundamentals of AI and ML algorithms.',
      'Develop and train machine learning models for real-world problems.',
      'Work with popular AI frameworks like TensorFlow and PyTorch.',
      'Gain expertise in data analysis and visualization.'
    ],
    curriculum: [
      { sem: 'Sem 1-2', focus: 'Python for AI, Linear Algebra, Probability & Statistics.' },
      { sem: 'Sem 3-4', focus: 'Machine Learning Algorithms, Data Science, NLP Basics.' },
      { sem: 'Sem 5-6', focus: 'Deep Learning, Computer Vision, AI Capstone Project.' }
    ],
    facultyStats: { phd: '55%', experience: '14+ Years Avg.', research: 'Active AI Researchers' },
    labInfo: [
      { icon: <CpuIcon />, title: 'AI & Deep Learning Lab', desc: 'High-performance GPU workstations for model training.' },
      { icon: <PieChart />, title: 'Data Science Hub', desc: 'Equipped with Anaconda, Tableau, and PowerBI.' }
    ],
    opportunities: ['Machine Learning Engineer', 'AI Developer', 'Data Scientist', 'NLP Engineer', 'Computer Vision Specialist'],
    achievements: [
      'Collaboration with top AI firms for live projects.',
      'Winners of National AI Hackathon 2024.'
    ]
  },
  'bsc-criminology': {
    id: 'bsc-criminology',
    name: 'BSc in Criminology and Forensic Science',
    category: 'Undergraduate',
    icon: <Microscope />,
    duration: '3 Years',
    shortDesc: 'Explore the science of crime-solving. A unique BSc program in Bangalore that blends criminology theory with forensic investigation techniques.',
    fullDesc: 'The BSc in Criminology and Forensic Science is an interdisciplinary program that provides a scientific approach to crime and the justice system. It covers criminal psychology, forensic pathology, crime scene investigation, and cyber forensics.',
    objectives: [
      'Understand criminal behavior and theories of criminology.',
      'Learn scientific techniques for crime scene investigation.',
      'Analyze physical and digital forensic evidence in a lab setting.',
      'Explore the legal and ethical aspects of forensic science.'
    ],
    curriculum: [
      { sem: 'Sem 1-2', focus: 'Intro to Criminology, Forensic Psychology, Criminal Law.' },
      { sem: 'Sem 3-4', focus: 'Crime Scene Management, Forensic Chemistry, Fingerprinting.' },
      { sem: 'Sem 5-6', focus: 'Cyber Forensics, Forensic Ballistics, Moot Court & Internship.' }
    ],
    facultyStats: { phd: '40%', experience: '16+ Years Avg.', professional: 'Ex-Police/Forensic Experts' },
    labInfo: [
      { icon: <Microscope />, title: 'Forensic Lab', desc: 'Equipped for fingerprinting, DNA analysis, and chemical testing.' },
      { icon: <ShieldCheck />, title: 'Cyber Forensics Unit', desc: 'Tools for digital evidence recovery and analysis.' }
    ],
    opportunities: ['Forensic Scientist', 'Crime Scene Investigator', 'Criminologist', 'Private Detective', 'Cyber Forensics Expert'],
    achievements: [
      'Tie-ups with state police departments for practical training.',
      'First college in Bangalore with a dedicated Cyber Forensics lab.'
    ]
  },
  bttm: {
    id: 'bttm',
    name: 'Bachelor of Travel and Tourism Management (BTTM)',
    category: 'Undergraduate',
    icon: <Globe />,
    duration: '3 Years',
    shortDesc: 'Launch your career in the global travel industry. Best BTTM college in Bangalore for tourism operations and hospitality management.',
    fullDesc: 'The BTTM program at KCMS offers comprehensive training in travel and tourism management. The curriculum covers everything from tour operations and destination marketing to airline ticketing and hospitality services, preparing students for a vibrant global career.',
    objectives: [
      'Master tour packaging and itinerary planning.',
      'Learn global distribution systems (GDS) for ticketing.',
      'Understand sustainable tourism practices and policies.',
      'Develop skills for hospitality and event management.'
    ],
    curriculum: [
      { sem: 'Core', focus: 'Travel Geography, IATA Regulations, Ticketing, Hospitality Basics.' },
      { sem: 'Advanced', focus: 'Event Planning, Hotel Operations, Destination Marketing.' },
      { sem: 'Applied', focus: 'Tour Guiding, Global Distribution Systems, Internship.' }
    ],
    facultyStats: { phd: '25%', industry: 'IATA Certified', experience: '18+ Years' },
    labInfo: [
      { icon: <PlaneTakeoff />, title: 'GDS Terminal', desc: 'Hands-on training on Amadeus & Galileo.' },
      { icon: <Globe />, title: 'Cultural Studio', desc: 'Global itinerary planning and destination research.' }
    ],
    opportunities: ['Tour Manager', 'Travel Consultant', 'Event Manager', 'Airline Ground Staff', 'Hotel Operations'],
    achievements: [
      'Top-rated hospitality and tourism college in Bangalore.',
      'Partnerships with global travel agencies for placements.'
    ]
  },
  mcom: {
    id: 'mcom',
    name: 'Master of Commerce (M.Com)',
    category: 'Postgraduate',
    icon: <Scale />,
    duration: '2 Years',
    shortDesc: 'Achieve mastery in commerce and finance. A leading M.Com program in Bangalore with specializations in finance and accounting.',
    fullDesc: "The M.Com program at KCMS is designed for students seeking advanced knowledge in commerce, finance, and taxation. It provides an in-depth understanding of financial markets, corporate accounting, and business research, preparing graduates for high-level roles in academia and industry.",
    objectives: [
      'Gain expertise in advanced financial accounting and IFRS.',
      'Understand the complexities of corporate law and GST.',
      'Conduct independent research and publish papers.',
      'Prepare for professional certifications like CA and CMA.'
    ],
    curriculum: [
      { sem: 'Sem 1', focus: 'Advanced Corporate Accounting, Financial Management.' },
      { sem: 'Sem 2-3', focus: 'Security Analysis, Portfolio Management, International Finance, Research Methodology.' },
      { sem: 'Sem 4', focus: 'Strategic Cost Management, Advanced Taxation, Dissertation.' }
    ],
    facultyStats: { phd: '65%', professional: 'CA/CMA Mentors', experience: '18+ Years' },
    labInfo: [
      { icon: <Scale />, title: 'Advanced Accounting Lab', desc: 'Training on Tally Prime, SAP FICO module.' },
      { icon: <BarChart />, title: 'Financial Analytics Hub', desc: 'Using R and Python for financial modeling.' }
    ],
    opportunities: ['Financial Controller', 'Senior Accountant', 'Academic Lecturer', 'Taxation Specialist', 'Investment Analyst'],
    achievements: [
      'Highest number of M.Com students qualifying for UGC-NET.',
      'Best commerce department in Bangalore for research output.'
    ]
  },
  mttm: {
    id: 'mttm',
    name: 'Master of Travel and Tourism Management (MTTM)',
    category: 'Postgraduate',
    icon: <PlaneTakeoff />,
    duration: '2 Years',
    shortDesc: 'Lead the global tourism industry with an advanced MTTM degree. Top-ranked program in Bangalore for strategic tourism management.',
    fullDesc: 'The MTTM program is a postgraduate course that prepares students for senior management roles in the tourism and hospitality sector. It focuses on strategic planning, destination development, tourism policy, and international hospitality management.',
    objectives: [
      'Develop strategic leadership skills for the tourism industry.',
      'Master sustainable tourism planning and policy-making.',
      'Analyze global tourism trends and markets using data analytics.',
      'Manage large-scale hospitality and event operations.'
    ],
    curriculum: [
      { sem: 'Sem 1', focus: 'Tourism Principles, Hospitality Management, Research Methods.' },
      { sem: 'Sem 2-3', focus: 'Strategic Management, E-Tourism, Financial Management in Tourism, Electives.' },
      { sem: 'Sem 4', focus: 'Tourism Policy & Planning, Dissertation, International Internship.' }
    ],
    facultyStats: { phd: '50%', industry: 'IATA/UFTAA Certified', experience: '20+ Years' },
    labInfo: [
      { icon: <PlaneTakeoff />, title: 'Advanced GDS & Analytics', desc: 'Training on Amadeus, Sabre, and tourism data analytics tools.' },
      { icon: <Globe2 />, title: 'Global Destination Lab', desc: 'Case studies and virtual tours of international tourism hubs.' }
    ],
    opportunities: ['Tourism Director', 'Destination Manager', 'Hospitality Consultant', 'Airline Revenue Manager', 'Policy Advisor'],
    achievements: [
      'Ranked among the top 5 MTTM programs in India.',
      'Collaboration with Ministry of Tourism for research projects.'
    ]
  }
};


export const TESTIMONIALS: Testimonial[] = [
  { name: "Rahul Sharma", role: "MBA 2022 Graduate", text: "KCMS provided me with the perfect blend of academic rigor and practical exposure. The placements here are outstanding and the faculty mentorship is life-changing!", image: "https://i.pravatar.cc/150?u=1" },
  { name: "Sneha Patil", role: "BCA 2021 Graduate", text: "The faculty in the computer department is extremely supportive. I got placed in a top MNC right after graduation thanks to the skill development cell.", image: "https://i.pravatar.cc/150?u=2" },
  { name: "John Doe", role: "BBA 2023 Student", text: "The vibrant campus life and the focus on character building make KCMS a unique place to grow as a professional and a human.", image: "https://i.pravatar.cc/150?u=3" }
];