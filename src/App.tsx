import { useEffect, useState } from 'react'
import { motion, useReducedMotion, useScroll, useSpring } from 'framer-motion'
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
  if (typeof window === 'undefined') return 'dark'

  try {
    const savedTheme = window.localStorage.getItem(THEME_STORAGE_KEY)
    if (savedTheme === 'light' || savedTheme === 'dark') return savedTheme
  } catch {
    // Keep the dark default when storage is unavailable.
  }

  return 'dark'
}

function Arrow() {
  return <span className="arrow" aria-hidden="true">↗</span>
}

function SectionHeading({ index, title }: { index: string; title: string }) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.header
      className="section-heading"
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.65 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <p>{index}</p>
      <h2>{title}</h2>
    </motion.header>
  )
}

function ProjectVisual({ project }: { project: Project }) {
  const reduceMotion = useReducedMotion()

  if (project.visual === 'nomad') {
    return <img src={nomadImage} alt="Nomad Connect interface" />
  }

  if (project.visual === 'dashboard') {
    return (
      <div className="data-visual" aria-label="Abstract production quality chart">
        {['32%', '52%', '43%', '72%', '61%', '88%'].map((height, index) => (
          <motion.span
            key={height}
            style={{ height, transformOrigin: 'bottom' }}
            initial={reduceMotion ? false : { scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.5, delay: index * 0.055, ease: [0.22, 1, 0.36, 1] }}
          />
        ))}
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
  const reduceMotion = useReducedMotion()

  return (
    <motion.article
      className="project-row"
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
    >
      <p className="project-number">0{index + 1}</p>

      <motion.div
        className="project-media"
        whileHover={reduceMotion ? undefined : { y: -5, rotate: index % 2 === 0 ? -0.4 : 0.4 }}
        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
      >
        <ProjectVisual project={project} />
      </motion.div>

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
    </motion.article>
  )
}

function App() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    mass: 0.18,
  })

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
      <motion.div
        className="scroll-progress"
        style={{ scaleX: reduceMotion ? scrollYProgress : smoothProgress }}
        aria-hidden="true"
      />

      <motion.button
        type="button"
        className="theme-toggle"
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        whileHover={reduceMotion ? undefined : { y: -1, scale: 1.03 }}
        whileTap={reduceMotion ? undefined : { scale: 0.9 }}
      >
        <span className="theme-toggle-icon" aria-hidden="true">{theme === 'dark' ? '☀' : '☾'}</span>
        <span className="theme-toggle-label">{theme === 'dark' ? 'Light' : 'Dark'}</span>
      </motion.button>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-stage">
            <p className="eyebrow">Data engineering · AI · Full-stack development</p>
            <h1 id="hero-title">
              I turn fragmented data into reliable systems and build the tools people need to use them.
            </h1>
          </div>

          <div className="hero-followup">
            <motion.p
              className="hero-statement"
              initial={reduceMotion ? false : { opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.65 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              I’m Ambiya Dimas Galystan, a full-stack developer in Paris moving deeper into Data
              Engineering &amp; AI.
            </motion.p>
            <motion.div
              className="hero-bottom"
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.7 }}
              transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <p>
                Currently at GEODIS and starting EFREI’s Master’s in Data Engineering &amp; AI in
                September 2026.
              </p>
              <a className="availability" href={`mailto:${EMAIL}`}>
                <span aria-hidden="true" /> Available for a 12-month apprenticeship
              </a>
            </motion.div>
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
          <motion.div
            className="about-grid"
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.22 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.figure
              className="portrait"
              whileHover={reduceMotion ? undefined : { y: -5, rotate: -0.35 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <img src={portraitImage} alt="Ambiya Dimas Galystan" />
              <figcaption>Paris, France · 2026</figcaption>
            </motion.figure>
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
          </motion.div>
        </section>

        <section className="section" id="experience">
          <SectionHeading index="03" title="Experience" />
          <motion.article
            className="experience"
            initial={reduceMotion ? false : { opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
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
          </motion.article>
        </section>

        <section className="section" id="capabilities">
          <SectionHeading index="04" title="Capabilities" />
          <div className="capability-list">
            {skillGroups.map((group, index) => (
              <motion.article
                key={group.title}
                initial={reduceMotion ? false : { opacity: 0, x: -14 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ duration: 0.45, delay: index * 0.035, ease: [0.22, 1, 0.36, 1] }}
              >
                <h3>{group.title}</h3>
                <p>{group.items.join(', ')}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="section" id="education">
          <SectionHeading index="05" title="Education" />
          <div className="education-list">
            {schoolHistory.map((school, index) => (
              <motion.article
                key={school.institution}
                initial={reduceMotion ? false : { opacity: 0, x: 14 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ duration: 0.45, delay: index * 0.045, ease: [0.22, 1, 0.36, 1] }}
              >
                <div>
                  <h3>{school.degree}</h3>
                  <p>{school.institution}</p>
                </div>
                <p>{school.period}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="contact" id="contact">
          <p className="eyebrow">Have a role or a project in mind?</p>
          <motion.h2
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            Let’s talk.
          </motion.h2>
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
