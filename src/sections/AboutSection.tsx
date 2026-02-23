import { motion, useReducedMotion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '../lib/motion'
import { SectionHeader } from '../components/SectionHeader'
import nomadPhoto from '../assets/nomad.jpg'

export function AboutSection() {
  const reduceMotion = useReducedMotion()

  return (
    <section id="about" className="fun-section fun-bg-mint">
      <div className="container about-layout">
        <motion.div
          className="profile-placeholder fun-card about-media"
          variants={fadeInUp}
          initial={reduceMotion ? false : 'hidden'}
          whileInView={reduceMotion ? undefined : 'visible'}
          viewport={{ once: true, amount: 0.35 }}
        >
          <img
            src={nomadPhoto}
            alt="Ambiya presenting Nomad Connect project"
            className="about-photo"
            loading="lazy"
            decoding="async"
          />
        </motion.div>

        <motion.div
          className="about-copy"
          variants={staggerContainer}
          initial={reduceMotion ? false : 'hidden'}
          whileInView={reduceMotion ? undefined : 'visible'}
          viewport={{ once: true, amount: 0.35 }}
        >
          <SectionHeader
            eyebrow="About"
            issueTag="01"
            titleStart="Engineering with"
            titleAccent="ownership"
            titleEnd="."
            subtitle="I turn product requirements into reliable software outcomes by balancing architecture quality, team communication, and practical delivery speed."
          />
          <motion.p className="about-note" variants={fadeInUp}>
            I thrive in apprenticeship environments where mentorship and accountability coexist: I document decisions,
            ask better questions early, and keep implementation aligned with business priorities.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
