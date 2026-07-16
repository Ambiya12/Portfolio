export type SkillGroup = {
  title: string
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Data Engineering',
    items: ['Python', 'SQL', 'Pandas', 'Data modelling', 'PostgreSQL', 'MongoDB'],
  },
  {
    title: 'Data Science',
    items: ['Exploratory analysis', 'Scikit-learn', 'Plotly', 'Streamlit', 'Jupyter Notebook'],
  },
  {
    title: 'Cloud & Industrialisation',
    items: ['Azure', 'Databricks', 'Docker', 'Kubernetes', 'GitLab CI/CD', 'Argo CD'],
  },
  {
    title: 'Development',
    items: ['Java Spring Boot', 'Node.js', 'API REST', 'React', 'TypeScript'],
  },
  {
    title: 'Quality & Monitoring',
    items: ['Pytest', 'Vitest', 'Postman', 'SonarQube', 'Grafana', 'Faro'],
  },
  {
    title: 'Tools',
    items: ['GitLab', 'Jira', 'Confluence', 'Agile/Scrum'],
  },
]
