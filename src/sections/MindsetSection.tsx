import { motion, useReducedMotion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '../lib/motion'
import { SectionHeader } from '../components/SectionHeader'

const mindsetItems = [
  {
    title: 'Feedback-Driven Growth',
    description:
      'I convert reviews, retrospectives, and metrics into clear next actions that improve code quality sprint after sprint.',
  },
  {
    title: 'Sustainable Code Quality',
    description:
      'I prioritize readable abstractions, testability, and consistency so features remain maintainable as teams and scope grow.',
  },
  {
    title: 'Systems Thinking',
    description:
      'I evaluate architecture decisions through scalability, operational cost, and developer experience instead of short-term fixes.',
  },
  {
    title: 'Reliable Delivery',
    description:
      'I care about CI/CD quality, release confidence, and observability to reduce deployment risk and support faster iteration.',
  },
]

export function MindsetSection() {
  const reduceMotion = useReducedMotion()

  return (
    <section id="mindset" className="fun-section fun-bg-rose">
      <div className="container">
        <SectionHeader
          eyebrow="Approach"
          issueTag="06"
          titleStart="Engineering"
          titleAccent="Principles"
          titleEnd="."
          subtitle="How I approach software work to balance delivery speed, maintainability, and collaboration."
        />

        <motion.div
          className="mindset-grid"
          variants={staggerContainer}
          initial={reduceMotion ? false : 'hidden'}
          whileInView={reduceMotion ? undefined : 'visible'}
          viewport={{ once: true, amount: 0.2 }}
        >
          {mindsetItems.map((item) => (
            <motion.article key={item.title} className="fun-card mindset-card" variants={fadeInUp}>
              <h3 className="mindset-title">{item.title}</h3>
              <p className="mindset-desc">{item.description}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
