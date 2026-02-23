import { motion, useReducedMotion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '../lib/motion'
import featurePortrait from '../assets/portrait.jpg'
import { Marquee } from '../components/Marquee'

const HERO_STRENGTHS = [
  'Build maintainable React + TypeScript interfaces for production teams.',
  'Design clear API boundaries with Node/Fastify and clean architecture practices.',
  'Ship with confidence through CI/CD, quality gates, and iterative delivery.',
]

const HERO_OPERATIONS = [
  { label: 'Target role', value: 'Software Engineering Apprenticeship' },
  { label: 'Start date', value: 'September 2026' },
  { label: 'Status', value: 'Actively interviewing' },
  { label: 'Location', value: 'Paris · Hybrid / On-site' },
]

export function HeroSection() {
  const rm = useReducedMotion()

  return (
    <section id="home" className="hero section hero-redesign">
      <div className="container hero-layout">
        <motion.div
          className="hero-grid"
          variants={staggerContainer}
          initial={rm ? false : 'hidden'}
          whileInView={rm ? undefined : 'visible'}
          viewport={{ once: true, amount: 0.15 }}
        >
          <motion.article className="hero-panel hero-panel-intro" variants={fadeInUp}>
            <p className="hero-intro-kicker">Software Engineer Apprentice · Issue 2026</p>
            <h1 className="hero-intro-title">Galystan Ambiya Dimas</h1>
            <p className="hero-intro-summary">
              I build robust web products with strong architecture, clear communication, and execution that teams can trust in production.
            </p>
            <p className="hero-intro-summary hero-intro-summary-secondary">
              Currently seeking a software engineering apprenticeship where I can contribute to real delivery goals while continuing to grow in scalable frontend and backend systems.
            </p>
            <div className="hero-intro-actions">
              <a className="btn btn-primary" href="https://www.linkedin.com/in/galystan" target="_blank" rel="noreferrer">
                Connect on LinkedIn
              </a>
              <a className="btn btn-secondary" href="#contact">Book a Conversation</a>
            </div>
          </motion.article>

          <motion.figure className="hero-panel hero-panel-visual" variants={fadeInUp}>
            <img className="hero-portrait" src={featurePortrait} alt="Galystan portrait" loading="eager" decoding="async" />
            <figcaption className="hero-visual-caption">Open to apprenticeship and junior software engineering opportunities</figcaption>
          </motion.figure>

          <motion.aside className="hero-side-stack" variants={fadeInUp}>
            <article className="hero-panel hero-panel-ops">
              <h2 className="hero-panel-title">Opportunity</h2>
              <ul className="hero-ops-list" aria-label="Opportunity details">
                {HERO_OPERATIONS.map((item) => (
                  <li key={item.label}>
                    <span>{item.label}</span>
                    <strong>{item.value}</strong>
                  </li>
                ))}
              </ul>
            </article>

            <article className="hero-panel hero-panel-focus">
              <h2 className="hero-panel-title">Current focus</h2>
              <ul className="hero-focus-list" aria-label="Current engineering focus">
                {HERO_STRENGTHS.map((focus) => (
                  <li key={focus}>{focus}</li>
                ))}
              </ul>
            </article>
          </motion.aside>

        </motion.div>
      </div>
      <Marquee />
    </section>
  )
}
