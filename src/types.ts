export interface ShortFormProject {
  id: string;
  title: string;
  duration: string;
  category: string;
  views: string;
  videoUrl: string;
  thumbnailUrl: string;
}

export interface BeforeAfterComparison {
  beforeUrl: string; // Video or image URL showing raw state
  afterUrl: string;  // Video or image URL showing final premium edit
  beforeLabel: string;
  afterLabel: string;
}

export interface ClientTestimonial {
  quote: string;
  author: string;
  role: string;
  avatarUrl: string;
}

export interface LongFormProject {
  id: string;
  title: string;
  duration: string;
  views: string;
  category: string;
  videoUrl: string;
  thumbnailUrl: string;
  bannerUrl: string;
  clientName: string;
  description: string;
  editingProcess: string[];
  beforeAfter: BeforeAfterComparison;
  projectResults: string[];
  testimonial: ClientTestimonial;
  tags?: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string; // Lucide icon identifier
  details: string[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
