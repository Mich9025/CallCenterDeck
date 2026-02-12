export interface ClientData {
  name: string;
  company: string;
  role: string;
  email: string;
  phone: string;
  industry: string;
  volume: string;
  painPoint: string;
  goal: string;
}

export enum SlideType {
  INTRO = 'INTRO',
  DIAGNOSIS = 'DIAGNOSIS',
  SOLUTION = 'SOLUTION',
  TECH_STACK = 'TECH_STACK',
  DEMO = 'DEMO',
  ROI = 'ROI',
  CONTACT = 'CONTACT'
}

export interface SlideProps {
  isActive: boolean;
  client: ClientData;
  nextSlide: () => void;
  prevSlide: () => void;
}