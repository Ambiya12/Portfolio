import { motion, useReducedMotion } from 'framer-motion'
import { skillGroups } from '../data/skills'
import { fadeInUp, staggerContainer } from '../lib/motion'
import { SectionHeader } from '../components/SectionHeader'

export function SkillsSection() {
  const reduceMotion = useReducedMotion()

  return (
    <section id="skills" className="fun-section fun-bg-lavender">
      <div className="container">
        <SectionHeader
          eyebrow="Technical Skills"
          issueTag="05"
          titleStart="Cross-stack"
          titleAccent="toolkit"
          titleEnd="."
          subtitle="A practical stack for shipping features end-to-end, from interface quality to deployment reliability."
        />

        <motion.div
          className="skills-grid"
          variants={staggerContainer}
          initial={reduceMotion ? false : 'hidden'}
          whileInView={reduceMotion ? undefined : 'visible'}
          viewport={{ once: true, amount: 0.2 }}
        >
          {skillGroups.map((group) => (
            <motion.article key={group.title} className="fun-card" variants={fadeInUp}>
              <h3 className="skills-card-title">{group.title}</h3>
              <div className="fun-badge-wrap">
                {group.items.map((item) => (
                  <span key={item} className="fun-badge">
                    {item}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
