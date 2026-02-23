import { motion, useReducedMotion } from 'framer-motion'
import { schoolHistory } from '../data/school'
import { staggerContainer } from '../lib/motion'
import { parseCategoryString } from '../lib/utils'
import { SectionHeader } from '../components/SectionHeader'
import { TimelineCard } from '../components/TimelineCard'
import heticLogo from '../assets/Hetic.jpg'
import academy3wLogo from '../assets/3WAcademy.jpg'
import upcLogo from '../assets/UniversiteParisCite.jpg'

function getSchoolLogo(institution: string) {
  if (institution.includes('HETIC')) return heticLogo
  if (institution.includes('3W Academy')) return academy3wLogo
  if (institution.includes('Université Paris Cité')) return upcLogo
  return null
}

export function SchoolSection() {
  const reduceMotion = useReducedMotion()

  return (
    <section id="school" className="fun-section fun-bg-lavender school-section">
      <div className="container">
        <SectionHeader
          eyebrow="Education"
          issueTag="03"
          titleStart="Learning"
          titleAccent="Trajectory"
          titleEnd="."
          subtitle="Formal training that supports practical software engineering work in real teams."
        />

        <motion.div
          className="exp-timeline"
          variants={staggerContainer}
          initial={reduceMotion ? false : 'hidden'}
          whileInView={reduceMotion ? undefined : 'visible'}
          viewport={{ once: true, amount: 0.2 }}
        >
          {schoolHistory.map((item) => {
            const logo = getSchoolLogo(item.institution)
            const parsed = item.details.map((d) => parseCategoryString(d, 28))

            return (
              <TimelineCard
                key={`${item.period}-${item.institution}`}
                period={item.period}
                title={item.institution}
                subtitle={item.degree}
                logo={logo}
                logoAlt={`${item.institution} logo`}
                isSchoolLogo={true}
                points={parsed}
              />
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
