export type ExperienceItem = {
  period: string
  title: string
  summary: string
  points: string[]
}

export const experienceTimeline: ExperienceItem[] = [
  {
    period: 'Sep 2024 — Present',
    title: 'Fullstack Developer — GEODIS',
    summary:
      'Levallois-Perret, Île-de-France, France (On-site). Delivering internal and operational products across frontend, backend, and platform workflows.',
    points: [
      'Front-end: Built production interfaces with React, Next.js, and TypeScript using reusable component patterns.',
      'Architecture: Applied clean structure and type-safe contracts to improve maintainability and handover quality.',
      'Back-end: Developed BFF and API integrations with Node.js and Fastify for internal product needs.',
      'DevOps: Contributed to containerized delivery through Docker, GitLab CI/CD, OpenShift, Harbor, Argo CD, and SonarQube.',
      'Team workflow: Participated in Agile rituals including planning, stand-ups, review, and backlog refinement.',
      'Collaboration: Coordinated delivery with product and engineering teams via Jira, Confluence, and Microsoft Teams.',
    ],
  },
  {
    period: 'Jun 2023 — Aug 2023',
    title: 'Web Developer Intern — Owner Digital Agency',
    summary:
      'Jakarta, Indonesia. Internship focused on practical web delivery and client-facing implementation quality.',
    points: [
      'Built and maintained UI components using HTML, CSS, and JavaScript across client projects.',
      'Customized WordPress themes and plugins to improve usability and visual consistency.',
      'Translated Figma designs into functional pages and supported integration-oriented feature work.',
      'Improved front-end performance and adopted stronger coding practices through peer guidance.',
    ],
  },
]
