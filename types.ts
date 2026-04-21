
export interface Course {
  id: string;
  name: string;
  shortDesc: string;
  fullDesc: string;
  duration: string;
  category: 'UG' | 'PG' | 'Certificate';
  eligibility: string;
  opportunities: string[];
}

export interface NavLink {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

export interface Testimonial {
  name: string;
  role: string;
  text: string;
  image: string;
}
