export type ExperienceItem = {
  period: string
  title: string
  summary: string
  points: string[]
}

export const experienceTimeline: ExperienceItem[] = [
  {
    period: 'September 2024 — Present',
    title: 'Full-stack Developer Apprentice',
    summary: 'GEODIS — Levallois-Perret',
    points: [
      'Contributing to the back office of a data-unification platform used by corporate teams and Group Business Services.',
      'Gathering and clarifying requirements with internal users, then translating them into practical features and user journeys.',
      'Building proofs of concept to evaluate the feasibility and value of new solutions before industrialisation.',
      'Migrating a legacy back office to React while improving usability and access to business information.',
      'Using Grafana and Faro monitoring indicators to identify anomalies and track production performance.',
      'Contributing to Java Spring Boot microservices and validating data flows and APIs with Postman.',
      'Implementing automated tests, SonarQube quality controls, and GitLab CI/CD pipelines.',
      'Documenting development work and coordinating delivery through Jira and Confluence in an Agile environment.',
    ],
  },
]
