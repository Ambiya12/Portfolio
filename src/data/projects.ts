export type Project = {
  title: string
  statusLabel?: string
  description: string
  highlights: string
  tags: string[]
  githubUrl: string
}

export const projects: Project[] = [
  {
    title: 'Nomad Connect',
    description:
      'A community platform concept for travelers to share reliable local insights, trip stories, and practical recommendations.',
    highlights:
      'Delivered as a full-stack build with React, TypeScript, Node.js, and Express, focused on clean structure and scalable feature growth.',
    tags: ['React', 'TypeScript', 'Node.js', 'Express.js', 'Full-stack'],
    githubUrl: 'https://github.com/Ambiya12/NomadConnect.git',
  },
  {
    title: 'Evo-Botics (RAA)',
    statusLabel: 'Ongoing project',
    description:
      'An autonomous assistance robotics initiative designed to improve accessibility in public environments through real-time software coordination.',
    highlights:
      'Combines ROS navigation, computer vision, MQTT/WebSocket communication, and a WCAG-aware React dashboard for monitoring and control.',
    tags: ['ROS', 'React', 'Node.js', 'OpenCV', 'MQTT', 'WebSockets', 'Full-stack'],
    githubUrl: 'https://github.com/Ambiya12/evo-botics-raa.git',
  },
]
