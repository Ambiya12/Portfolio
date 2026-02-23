export type SkillGroup = {
  title: string
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend',
    items: [
      'React',
      'Next.js',
      'TypeScript',
      'Responsive Interface Development',
      'Component Architecture',
      'Figma (UI Prototyping)',
    ],
  },
  {
    title: 'Backend',
    items: [
      'Node.js (Fastify)',
      'Node.js (Express)',
      'BFF Architecture',
      'REST API Design',
      'Service Integrations',
      'PHP',
      'SQL Database Management',
      'NoSQL (MongoDB)',
    ],
  },
  {
    title: 'DevOps',
    items: [
      'Docker',
      'GitLab CI/CD',
      'OpenShift (Azure Red Hat)',
      'Harbor',
      'Argo CD',
      'SonarQube',
    ],
  },
  {
    title: 'Management & Tools',
    items: [
      'Agile Delivery',
      'Jira',
      'Confluence',
      'Microsoft Teams',
      'Slack',
      'Notion',
    ],
  },
]
