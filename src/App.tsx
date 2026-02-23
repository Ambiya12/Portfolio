import { useEffect, useMemo, useState } from 'react'
import { Cursor } from './components/Cursor'
import { NAV_ITEMS, type SectionId } from './shared/navigation'
import { AboutSection } from './sections/AboutSection.tsx'
import { ContactSection } from './sections/ContactSection.tsx'
import { ExperienceSection } from './sections/ExperienceSection.tsx'
import { HeroSection } from './sections/HeroSection.tsx'
import { MindsetSection } from './sections/MindsetSection.tsx'
import { ProjectsSection } from './sections/ProjectsSection.tsx'
import { SchoolSection } from './sections/SchoolSection.tsx'
import { SkillsSection } from './sections/SkillsSection.tsx'
import './styles/fun-theme.css'

function App() {
  const [activeSection, setActiveSection] = useState<SectionId>('home')

  const navItems = useMemo(() => NAV_ITEMS, [])

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((element): element is HTMLElement => Boolean(element))

    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        const next = visible[0]?.target.id as SectionId | undefined
        if (next) {
          setActiveSection(next)
        }
      },
      {
        root: null,
        threshold: [0.2, 0.4, 0.6],
        rootMargin: '-35% 0px -45% 0px',
      }
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [navItems])

  return (
    <div className="app-shell">
      <Cursor />

      <header className="sticky-site-nav" aria-label="Primary">
        <div className="container sticky-site-nav-inner">
          <a href="#home" className="sticky-site-brand" aria-label="Back to top">
            ▲
          </a>

          <nav className="sticky-site-links" aria-label="Section navigation">
            {navItems.map((item) => {
              const isActive = activeSection === item.id

              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`sticky-site-link${isActive ? ' is-active' : ''}`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.label}
                </a>
              )
            })}
          </nav>
        </div>
      </header>

      <main className="app-main">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SchoolSection />
        <ProjectsSection />
        <SkillsSection />
        <MindsetSection />
        <ContactSection />
      </main>
    </div>
  )
}

export default App
