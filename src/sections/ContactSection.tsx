import type { FormEvent } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '../lib/motion'
import { SectionHeader } from '../components/SectionHeader'

const CONTACT_EMAIL = 'ambiyadms@gmail.com'

export function ContactSection() {
  const reduceMotion = useReducedMotion()

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const name = String(formData.get('name') ?? '').trim()
    const email = String(formData.get('email') ?? '').trim()
    const message = String(formData.get('message') ?? '').trim()

    const subject = `Portfolio Contact | ${name || 'New message'}`
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <section id="contact" className="fun-section fun-bg-lavender section-last">
      <div className="container contact-layout">
        <motion.div
          className="contact-intro"
          variants={staggerContainer}
          initial={reduceMotion ? false : 'hidden'}
          whileInView={reduceMotion ? undefined : 'visible'}
          viewport={{ once: true, amount: 0.1 }}
        >
          <SectionHeader
            eyebrow="Contact"
            issueTag="07"
            titleStart="Let's"
            titleAccent="Collaborate"
            titleEnd="."
            subtitle="I’m currently looking for apprenticeship opportunities in software engineering. If your team values ownership and clean execution, I’d love to connect."
          />

          <motion.div className="contact-links" variants={fadeInUp}>
            <a href={`mailto:${CONTACT_EMAIL}`} className="fun-button">Send Email</a>
            <a href="https://www.linkedin.com/in/galystan" target="_blank" rel="noreferrer" className="fun-button fun-button-secondary">
              LinkedIn
            </a>
            <a href="https://github.com/Ambiya12" target="_blank" rel="noreferrer" className="fun-button fun-button-secondary">
              GitHub
            </a>
          </motion.div>
        </motion.div>

        <motion.form
          className="fun-card fun-form contact-form-card"
          onSubmit={handleSubmit}
          variants={fadeInUp}
          initial={reduceMotion ? false : 'hidden'}
          whileInView={reduceMotion ? undefined : 'visible'}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ delay: 0.08 }}
        >
          <div>
            <label htmlFor="contact-name" className="form-label">Name</label>
            <input id="contact-name" name="name" type="text" className="fun-input" placeholder="Your name" required />
          </div>

          <div>
            <label htmlFor="contact-email" className="form-label">Email</label>
            <input id="contact-email" name="email" type="email" className="fun-input" placeholder="your@email.com" required />
          </div>

          <div>
            <label htmlFor="contact-message" className="form-label">Message</label>
            <textarea id="contact-message" name="message" rows={5} className="fun-textarea" placeholder="Tell me about the role or project..." required />
          </div>

          <button type="submit" className="fun-button form-submit contact-submit">
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  )
}
