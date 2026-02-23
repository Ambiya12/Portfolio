import { motion, useReducedMotion } from 'framer-motion'
import { projects } from '../data/projects'
import { fadeInUp, staggerContainer } from '../lib/motion'
import { SectionHeader } from '../components/SectionHeader'

export function ProjectsSection() {
  const reduceMotion = useReducedMotion()

  return (
    <section id="projects" className="fun-section fun-bg-blue projects-scene">
      <div className="projects-scene-stage">
        <div className="container projects-scene-heading">
          <SectionHeader
            eyebrow="Projects"
            issueTag="04"
            titleStart="Projects with"
            titleAccent="production"
            titleEnd="thinking."
            subtitle="Selected builds that emphasize architecture choices, reliability, and user-facing value."
          />
        </div>

        <motion.div
          className="projects-track"
          variants={staggerContainer}
          initial={reduceMotion ? false : 'hidden'}
          whileInView={reduceMotion ? undefined : 'visible'}
          viewport={{ once: true, amount: 0.15 }}
        >
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              className="fun-card project-card projects-card"
              data-index={String(i + 1).padStart(2, '0')}
              variants={fadeInUp}
            >
              <div className="project-title-row">
                <h3 className="project-title">{project.title}</h3>
                {project.statusLabel && (
                  <span className="project-status">{project.statusLabel}</span>
                )}
              </div>
              <p className="project-desc">{project.description}</p>
              <p className="project-highlight">
                {project.highlights}
              </p>

              <div className="fun-badge-wrap">
                {project.tags.map((tag) => (
                  <span key={`${project.title}-${tag}`} className="fun-badge">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="project-actions">
                <a href={project.githubUrl} target="_blank" rel="noreferrer" className="fun-button fun-button-secondary">
                  GitHub
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
