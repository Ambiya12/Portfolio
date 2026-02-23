export type SchoolItem = {
  period: string
  institution: string
  degree: string
  details: string[]
}

export const schoolHistory: SchoolItem[] = [
  {
    period: 'Sep 2025 — Sep 2026',
    institution: 'HETIC',
    degree: 'Développeur Web, Computer Programming',
    details: [
      'Focus: Full-stack software engineering with emphasis on architecture and delivery quality.',
      'System design: Applied clean architecture principles to structure scalable web applications.',
      'Front-end stack: JavaScript, TypeScript, React, and design-to-implementation workflows.',
      'Back-end stack: Node.js, PHP, SQL modeling, and service-oriented implementation.',
      'Quality and methods: Agile collaboration, unit testing, and integration testing practices.',
      'Advanced topics: Authentication, AI-assisted optimization, and IoT-oriented engineering with Python.',
    ],
  },
  {
    period: 'Jun 2024 — Jun 2025',
    institution: '3W Academy',
    degree: 'Développeur Full Stack, Computer Programming',
    details: [
      'Front-end fundamentals: HTML, CSS, JavaScript, and framework-based UI development.',
      'Back-end fundamentals: Node.js, Express, and PHP for feature implementation.',
      'Data layer: SQL and NoSQL database fundamentals including MongoDB.',
      'CMS workflows: WordPress and PrestaShop in practical project contexts.',
    ],
  },
  {
    period: 'Sep 2022 — 2024',
    institution: 'Université Paris Cité',
    degree: "Double Bachelor's Degree, Mathematics and Computer Science",
    details: [
      'Built strong analytical foundations in mathematics and computer science.',
      'Strengthened formal reasoning and problem-solving for software engineering practice.',
    ],
  },
]
