import { useEffect, useState } from 'react'
import { experienceTimeline } from './data/experience'
import { projects, type Project } from './data/projects'
import { schoolHistory } from './data/school'
import { skillGroups } from './data/skills'
import galystRaaImage from './assets/GalystRAA.jpg'
import nomadImage from './assets/nomad.jpg'
import portraitImage from './assets/portrait.jpg'
import robotImage from './assets/Robot.jpg'

const EMAIL = 'ambiyadms@gmail.com'
const THEME_STORAGE_KEY = 'portfolio-theme'

type Theme = 'light' | 'dark'

function getInitialTheme(): Theme {
  if (typeof window === 'undefined') return 'light'

  try {
    const savedTheme = window.localStorage.getItem(THEME_STORAGE_KEY)
    if (savedTheme === 'light' || savedTheme === 'dark') return savedTheme
  } catch {
    // Fall back to the system preference when storage is unavailable.
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function Arrow() {
  return <span className="arrow" aria-hidden="true">↗</span>
}

function SectionHeading({ index, title }: { index: string; title: string }) {
  return (
    <header className="section-heading">
      <p>{index}</p>
      <h2>{title}</h2>
    </header>
  )
}

function ProjectVisual({ project }: { project: Project }) {
  if (project.visual === 'nomad') {
    return <img src={nomadImage} alt="Nomad Connect interface" />
  }

  if (project.visual === 'dashboard') {
    return (
      <div className="data-visual" aria-label="Abstract production quality chart">
        <span style={{ height: '32%' }} />
        <span style={{ height: '52%' }} />
        <span style={{ height: '43%' }} />
        <span style={{ height: '72%' }} />
        <span style={{ height: '61%' }} />
        <span style={{ height: '88%' }} />
      </div>
    )
  }

  return (
    <div className="robot-visual">
      <img src={galystRaaImage} alt="Ambiya assembling the Evo-Botics robot" />
      <img src={robotImage} alt="Evo-Botics reception robot prototype" />
    </div>
  )
}

function ProjectRow({ project, index }: { project: Project; index: number }) {
  return (
    <article className="project-row">
      <p className="project-number">0{index + 1}</p>

      <div className="project-media">
        <ProjectVisual project={project} />
      </div>

      <div className="project-copy">
        <h3>{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <p className="project-tags">{project.tags.slice(0, 5).join(' · ')}</p>

        {(project.githubUrl || project.presentation) && (
          <div className="project-links">
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noreferrer">
                GitHub <Arrow />
              </a>
            )}
            {project.presentation && (
              <a href={project.presentation.url} download={project.presentation.fileName}>
                Presentation <span aria-hidden="true">↓</span>
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  )
}

function App() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.querySelector<HTMLMetaElement>('meta[name="theme-color"]')
      ?.setAttribute('content', theme === 'dark' ? '#111210' : '#f5f4ef')

    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, theme)
    } catch {
      // The theme still works when storage is unavailable.
    }
  }, [theme])

  const experience = experienceTimeline[0]
  const experienceHighlights = [
    experience.points[0],
    experience.points[3],
    experience.points[4],
    experience.points[5],
  ]

  return (
    <div className="site-shell">
      <button
        type="button"
        className="theme-toggle"
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      >
        <span aria-hidden="true">{theme === 'dark' ? '○' : '●'}</span>
      </button>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-stage">
            <p className="eyebrow">Data engineering · AI · Full-stack development</p>
            <h1 id="hero-title">
              I turn fragmented data into reliable systems and build the tools people need to use them.
            </h1>
          </div>

          <div className="hero-followup">
            <p className="hero-statement">
              I’m Ambiya Dimas Galystan, a full-stack developer in Paris moving deeper into Data
              Engineering &amp; AI.
            </p>
            <div className="hero-bottom">
              <p>
                Currently at GEODIS and starting EFREI’s Master’s in Data Engineering &amp; AI in
                September 2026.
              </p>
              <a className="availability" href={`mailto:${EMAIL}`}>
                <span aria-hidden="true" /> Available for a 12-month apprenticeship
              </a>
            </div>
          </div>
        </section>

        <section className="section" id="work">
          <SectionHeading index="01" title="Selected work" />
          <div className="project-list">
            {projects.map((project, index) => (
              <ProjectRow project={project} index={index} key={project.title} />
            ))}
          </div>
        </section>

        <section className="section about-section" id="about">
          <SectionHeading index="02" title="About" />
          <div className="about-grid">
            <figure className="portrait">
              <img src={portraitImage} alt="Ambiya Dimas Galystan" />
              <figcaption>Paris, France · 2026</figcaption>
            </figure>
            <div className="about-copy">
              <p className="about-lede">
                I work between data, software, and the people who use both.
              </p>
              <p>
                My experience spans APIs, data flows, monitoring, testing, and product delivery.
                I care about building systems that are reliable, understandable, and genuinely useful.
              </p>
              <dl className="facts">
                <div><dt>Focus</dt><dd>Data Engineering · AI</dd></div>
                <div><dt>Languages</dt><dd>English · French · Indonesian</dd></div>
                <div><dt>Location</dt><dd>Paris, France</dd></div>
              </dl>
            </div>
          </div>
        </section>

        <section className="section" id="experience">
          <SectionHeading index="03" title="Experience" />
          <article className="experience">
            <header>
              <div>
                <h3>{experience.title}</h3>
                <p>{experience.summary}</p>
              </div>
              <p>{experience.period}</p>
            </header>
            <ul>
              {experienceHighlights.map((point) => <li key={point}>{point}</li>)}
            </ul>
          </article>
        </section>

        <section className="section" id="capabilities">
          <SectionHeading index="04" title="Capabilities" />
          <div className="capability-list">
            {skillGroups.map((group) => (
              <article key={group.title}>
                <h3>{group.title}</h3>
                <p>{group.items.join(', ')}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="education">
          <SectionHeading index="05" title="Education" />
          <div className="education-list">
            {schoolHistory.map((school) => (
              <article key={school.institution}>
                <div>
                  <h3>{school.degree}</h3>
                  <p>{school.institution}</p>
                </div>
                <p>{school.period}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="contact" id="contact">
          <p className="eyebrow">Have a role or a project in mind?</p>
          <h2>Let’s talk.</h2>
          <a href={`mailto:${EMAIL}`}>{EMAIL} <Arrow /></a>
        </section>
      </main>

      <footer>
        <p>© {new Date().getFullYear()} Ambiya Dimas Galystan</p>
        <div>
          <a href="https://github.com/Ambiya12" target="_blank" rel="noreferrer">GitHub <Arrow /></a>
          <a href="https://www.linkedin.com/in/galystan" target="_blank" rel="noreferrer">LinkedIn <Arrow /></a>
        </div>
      </footer>
    </div>
  )
}

export default App
