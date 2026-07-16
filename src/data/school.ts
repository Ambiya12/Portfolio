import academyLogo from '../assets/3WAcademy.jpg'
import efreiLogo from '../assets/efrei.jpg'
import heticLogo from '../assets/Hetic.jpg'

export type SchoolItem = {
  period: string
  institution: string
  degree: string
  details: string[]
  logo: {
    src: string
    alt: string
    tone: 'efrei' | 'hetic' | 'academy'
  }
}

export const schoolHistory: SchoolItem[] = [
  {
    period: 'September 2026 — 2028',
    institution: 'EFREI Paris',
    degree: 'Master’s in Data Engineering & AI',
    details: ['Admission confirmed.'],
    logo: {
      src: efreiLogo,
      alt: 'EFREI Paris logo',
      tone: 'efrei',
    },
  },
  {
    period: 'September 2025 — Present',
    institution: 'HETIC Paris',
    degree: 'Bachelor’s in Web Development',
    details: [],
    logo: {
      src: heticLogo,
      alt: 'HETIC Paris logo',
      tone: 'hetic',
    },
  },
  {
    period: 'June 2024 — 2025',
    institution: '3W Academy Paris',
    degree: 'Full-stack Developer Program',
    details: [],
    logo: {
      src: academyLogo,
      alt: '3W Academy Paris logo',
      tone: 'academy',
    },
  },
]
