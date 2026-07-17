import evoBoticsDeck from '../assets/EvoBotics.pptx?url'

export type Project = {
  title: string
  description: string
  points: string[]
  tags: string[]
  githubUrl?: string
  presentation?: {
    label: string
    url: string
    fileName: string
  }
  visual: 'dashboard' | 'robot' | 'nomad'
}

export const projects: Project[] = [
  {
    title: 'Evo-Botics — Autonomous Reception Robot',
    description:
      'An autonomous front-desk robot for business centres and coworking spaces that welcomes visitors, validates secure QR-code reservations, and guides them to meeting rooms.',
    points: [
      'Connected ROS 2 and Nav2 navigation to a Laravel reservation backend and React interface through rosbridge.',
      'Used OpenCV for QR reading, YOLO for human detection, and local Whisper and Piper models for voice interaction.',
      'Secured access codes with HMAC-SHA256 signatures and validated the system with unit, integration, API, and end-to-end tests.',
    ],
    tags: ['ROS2 Humble', 'Python', 'Nav2', 'OpenCV', 'Whisper', 'Piper', 'Largyel', 'React', 'TypeScript'],
    githubUrl: 'https://github.com/Ambiya12/evo-botics-raa.git',
    presentation: {
      label: 'Download presentation',
      url: evoBoticsDeck,
      fileName: 'Ambiya-Galystan-Evo-Botics-Presentation.pptx',
    },
    visual: 'robot',
  },
  {
    title: 'Production Quality Dashboard — Defect Analysis and Prediction',
    description:
      'A data pipeline and interactive dashboard for analysing production quality and estimating defect risk.',
    points: [
      'Built a Python pipeline to clean, transform, and load more than 2,000 production records.',
      'Created quality indicators and analysed the factors associated with defects.',
      'Compared classification models to estimate defect risk.',
      'Developed an interactive dashboard for non-technical users.',
    ],
    tags: ['Python', 'Pandas', 'Scikit-learn', 'Plotly', 'Streamlit', 'Jupyter Notebook'],
    githubUrl: 'https://github.com/Ambiya12/Production-quality-defect-prediction',
    visual: 'dashboard',
  },
  {
    title: 'Nomad Connect',
    description:
      'A community platform where travellers can share reliable local information, stories, and practical recommendations.',
    points: [
      'Designed and developed a structured full-stack application centred on a clear community experience.',
      'Implemented with React, TypeScript, Node.js, and Express.',
    ],
    tags: ['React', 'TypeScript', 'Node.js', 'Express.js', 'Full-stack'],
    githubUrl: 'https://github.com/Ambiya12/NomadConnect.git',
    visual: 'nomad',
  },
]
