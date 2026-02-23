import { motion, useReducedMotion } from 'framer-motion'
import { fadeInUp, textReveal, textRevealStagger } from '../lib/motion'

interface SectionHeaderProps {
  eyebrow: string
  issueTag?: string
  titleStart: string
  titleAccent: string
  titleEnd?: string
  subtitle?: string
  className?: string
}

export function SectionHeader({
  eyebrow,
  issueTag,
  titleStart,
  titleAccent,
  titleEnd,
  subtitle,
  className = '',
}: SectionHeaderProps) {
  const reduceMotion = useReducedMotion()

  const titleWords = [
    ...titleStart.split(' '),
    titleAccent,
    ...(titleEnd ? titleEnd.split(' ') : [])
  ].filter(Boolean)

  return (
    <motion.div
      className={`fun-heading ${className}`}
      variants={fadeInUp}
      initial={reduceMotion ? false : 'hidden'}
      whileInView={reduceMotion ? undefined : 'visible'}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="fun-eyebrow-row">
        <span className="fun-eyebrow">{eyebrow}</span>
        {issueTag && <span className="fun-issue-tag">Issue {issueTag}</span>}
      </div>
      <motion.h2 
        className="fun-title"
        variants={textRevealStagger}
        initial={reduceMotion ? false : 'hidden'}
        whileInView={reduceMotion ? undefined : 'visible'}
        viewport={{ once: true, amount: 0.3 }}
      >
        {titleWords.map((word, i) => {
          const isAccent = word === titleAccent
          return (
            <span key={i} style={{ display: 'inline-block', overflow: 'hidden', paddingRight: '0.2em' }}>
              <motion.span 
                style={{ display: 'inline-block' }} 
                variants={textReveal}
                className={isAccent ? 'fun-accent' : ''}
              >
                {word}
              </motion.span>
            </span>
          )
        })}
      </motion.h2>
      {subtitle && <p className="fun-subtitle">{subtitle}</p>}
    </motion.div>
  )
}
