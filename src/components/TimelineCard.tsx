import { motion } from 'framer-motion'
import { fadeInUp } from '../lib/motion'

interface TimelineCardProps {
  period: string
  isCurrent?: boolean
  title: string
  subtitle: string
  logo?: string | null
  logoAlt?: string
  isSchoolLogo?: boolean
  location?: string
  description?: string
  points: { category: string | null; content: string }[]
}

export function TimelineCard({
  period,
  isCurrent = false,
  title,
  subtitle,
  logo,
  logoAlt = 'Logo',
  isSchoolLogo = false,
  location,
  description,
  points,
}: TimelineCardProps) {
  return (
    <motion.article className="exp-card" variants={fadeInUp}>
      <div className="exp-dot-col">
        <div className={`exp-dot ${isCurrent ? 'exp-dot--active' : ''}`} />
        <div className="exp-line" />
      </div>

      <div className="exp-card-inner">
        <div className="exp-meta-row">
          <span className="exp-period">{period}</span>
          {isCurrent && <span className="exp-badge-current">Current</span>}
        </div>

        <div className="exp-header">
          <div className="exp-header-text">
            <h3 className="exp-role">{title}</h3>
            <span className="exp-company-name">{subtitle}</span>
          </div>
          {logo ? (
            <div className={`exp-logo-wrap ${isSchoolLogo ? 'exp-logo-wrap--school' : ''}`}>
              <img
                className="brand-logo"
                src={logo}
                alt={logoAlt}
                loading="lazy"
                decoding="async"
              />
            </div>
          ) : (
            <span className="exp-logo-fallback">{subtitle}</span>
          )}
        </div>

        {location && (
          <p className="exp-location">
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M20 10c0 6-8 13-8 13s-8-7-8-13a8 8 0 0 1 16 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            {location}
          </p>
        )}

        {description && <p className="exp-description">{description}</p>}

        {points.length > 0 && (
          <ul className="exp-points">
            {points.map((p, i) => (
              <li key={i} className="exp-point-item">
                <span className="exp-point-dash">—</span>
                <div>
                  {p.category && <span className="exp-point-cat">{p.category}</span>}
                  <span className="exp-point-text">{p.content}</span>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.article>
  )
}
