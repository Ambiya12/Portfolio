import { motion, useReducedMotion } from 'framer-motion'
import { experienceTimeline } from '../data/experience'
import { staggerContainer } from '../lib/motion'
import { parseCategoryString } from '../lib/utils'
import { SectionHeader } from '../components/SectionHeader'
import { TimelineCard } from '../components/TimelineCard'
import geodisLogo from '../assets/Geodis.svg.png'

function getCompanyLogo(title: string) {
  if (title.includes('GEODIS')) return geodisLogo
  return null
}

function isCurrent(period: string) {
  return period.toLowerCase().includes('present')
}

export function ExperienceSection() {
  const reduceMotion = useReducedMotion()

  return (
    <section id="experience" className="fun-section fun-bg-lemon">
      <div className="container">
        <SectionHeader
          eyebrow="Experience"
          issueTag="02"
          titleStart="Delivery"
          titleAccent="Record"
          titleEnd="."
          subtitle="Recent professional work across product delivery, full-stack implementation, and engineering collaboration."
        />

        <motion.div
          className="exp-timeline"
          variants={staggerContainer}
          initial={reduceMotion ? false : 'hidden'}
          whileInView={reduceMotion ? undefined : 'visible'}
          viewport={{ once: true, amount: 0.15 }}
        >
          {experienceTimeline.map((item) => {
            const logo = getCompanyLogo(item.title)
            const [role, company] = item.title.split('—').map((part) => part.trim())
            const companyName = company ?? ''
            const current = isCurrent(item.period)

            // Split summary into location + description
            const summaryParts = item.summary.split('. ')
            const location = summaryParts[0] ?? ''
            const description = summaryParts.slice(1).join('. ')

            // Group points by category
            const grouped = item.points.map((p) => parseCategoryString(p, 22))

            return (
              <TimelineCard
                key={`${item.period}-${item.title}`}
                period={item.period}
                isCurrent={current}
                title={role}
                subtitle={companyName}
                logo={logo}
                logoAlt={`${companyName} logo`}
                location={location}
                description={description}
                points={grouped}
              />
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
