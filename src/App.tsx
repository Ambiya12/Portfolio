import { experienceTimeline } from './data/experience'
import { projects, type Project } from './data/projects'
import { schoolHistory } from './data/school'
import { skillGroups } from './data/skills'
import galystRaaImage from './assets/GalystRAA.jpg'
import geodisLogo from './assets/Geodis.svg.png'
import nomadImage from './assets/nomad.jpg'
import portraitImage from './assets/portrait.jpg'
import robotImage from './assets/Robot.jpg'

const EMAIL = 'ambiyadms@gmail.com'
const PHONE = '+33 7 55 83 79 83'

const profileDetails = [
  {
    title: 'Soft skills',
    items: [
      'Problem analysis and solving',
      'Business-to-technical communication',
      'Rigour, curiosity, and team spirit',
    ],
  },
  {
    title: 'Languages',
    items: ['Indonesian — Native', 'English — C1', 'French — B2'],
  },
  {
    title: 'Interests',
    items: [
      'Sports — level 6a climbing, swimming',
      'Music — guitar',
      'Photography and video editing',
    ],
  },
]

function Arrow() {
  return <span className="arrow" aria-hidden="true">↘</span>
}

function SectionHeading({ title, description }: { title: string; description?: string }) {
  return (
    <header className="section-heading">
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </header>
  )
}

function ProjectVisual({ project }: { project: Project }) {
  if (project.visual === 'nomad') {
    return (
      <div className="project-visual">
        <img src={nomadImage} alt="Nomad Connect project presentation" />
      </div>
    )
  }

  if (project.visual === 'dashboard') {
    return (
      <div className="project-visual dashboard-glyph" aria-hidden="true">
        <div className="chart-bars">
          <span /><span /><span /><span /><span /><span />
        </div>
        <div className="glyph-label"><span>QUALITY</span><span>01</span></div>
      </div>
    )
  }

  return (
    <div className="project-visual project-gallery" aria-label="Evo-Botics project photographs">
      <figure>
        <img src={galystRaaImage} alt="Ambiya assembling the Evo-Botics reception robot" />
      </figure>
      <figure>
        <img src={robotImage} alt="Evo-Botics autonomous reception robot prototype" />
      </figure>
    </div>
  )
}

function ProjectTile({ project }: { project: Project }) {
  return (
    <li>
      <div className="project-static">
      <ProjectVisual project={project} />
      <div className="tile-copy">
        <h3>{project.title}</h3>
        <p className="project-summary">
          <span>What it does</span>
          {project.description}
        </p>
        <ul className="project-points">
          {project.points.map((point) => <li key={point}>{point}</li>)}
        </ul>
        <p className="tile-meta">{project.tags.join(' · ')}</p>
        {(project.githubUrl || project.presentation) && (
          <div className="project-actions">
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noreferrer">
                View GitHub <Arrow />
              </a>
            )}
            {project.presentation && (
              <a href={project.presentation.url} download={project.presentation.fileName}>
                {project.presentation.label} <span aria-hidden="true">↓</span>
              </a>
            )}
          </div>
        )}
      </div>
      </div>
    </li>
  )
}

function App() {
  return (
    <div className="site-shell">
      <main>
        <section className="crawl" aria-labelledby="intro-title">
          <div className="crawl-column">
            <h1 id="intro-title">
              <span>I turn fragmented data into reliable systems and build the tools people need to use them.</span>
              <span>I’m Ambiya Dimas Galystan, based in Paris and seeking a 12-month Data Engineering / AI apprenticeship from September 2026.</span>
            </h1>

            <div className="intro-secondary">
              <p>
                I currently work as a full-stack developer apprentice at GEODIS, contributing to
                a data-unification platform and tools used by business teams. My experience spans
                APIs, data flows, testing, monitoring, and application industrialisation.
              </p>
            </div>
          </div>

          <div className="crawl-column availability">
            <p className="status-line"><span aria-hidden="true" /> Seeking an apprenticeship · September 2026</p>
            <p>
              I have been accepted into EFREI’s Master’s in Data Engineering & AI starting in
              September 2026, where I will specialise in collecting, transforming, and creating
              value from data.
            </p>
            <p>
              I am seeking a 12-month apprenticeship focused primarily on Data Engineering, with
              opportunities to contribute to data analysis and machine-learning projects.
            </p>
            <p>
              EFREI schedule: 1 week at school / 2 weeks in the company.{' '}
              <a href={`mailto:${EMAIL}`}>Let’s talk.</a>
            </p>
          </div>
        </section>

        <section className="home-section" id="profile">
          <SectionHeading title="Profile" />
          <div className="section-grid now-grid">
            <p className="section-lede">
              My background brings together full-stack development, data flows, software quality,
              and monitoring. At EFREI, I will deepen my expertise in collecting, transforming,
              and creating value from data.
            </p>
            <figure className="portrait-frame">
              <img src={portraitImage} alt="Portrait of Ambiya Dimas Galystan" />
              <figcaption>Paris, France · 2026</figcaption>
            </figure>
            <div className="now-notes">
              <p><span>Target role</span> Data Engineer / AI Engineer apprenticeship</p>
              <p><span>Duration</span> 12 months · September 2026</p>
              <p><span>Schedule</span> 1 week at school / 2 weeks in the company</p>
              <p><span>Contact</span> {PHONE}</p>
            </div>
          </div>
        </section>

        <section className="home-section" id="experience">
          <SectionHeading title="Experience" />
          <div className="directory">
            {experienceTimeline.map((item) => (
              <article className="experience-entry" key={item.title}>
                <header className="experience-role">
                  <figure className="experience-logo">
                    <img src={geodisLogo} alt="GEODIS logo" />
                  </figure>
                  <div className="experience-role-copy">
                    <h3>{item.title}</h3>
                    <p className="muted">{item.summary}</p>
                  </div>
                  <p className="directory-date">{item.period}</p>
                </header>
                <div className="experience-detail">
                  <p className="experience-label">Selected responsibilities</p>
                  <ul>
                    {item.points.map((point) => <li key={point}>{point}</li>)}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="home-section" id="projects">
          <SectionHeading title="Projects" />
          <ul className="tile-grid project-grid">
            {projects.map((project) => <ProjectTile project={project} key={project.title} />)}
          </ul>
        </section>

        <section className="home-section" id="education">
          <SectionHeading title="Education" />
          <div className="directory education-directory">
            {schoolHistory.map((school) => (
              <article className="education-entry" key={school.institution}>
                <figure className={`education-logo education-logo--${school.logo.tone}`}>
                  <img src={school.logo.src} alt={school.logo.alt} />
                </figure>
                <div className="education-copy">
                  <h3>{school.degree}</h3>
                  <p className="muted">{school.institution}</p>
                </div>
                <div className="education-meta">
                  <p className="directory-date">{school.period}</p>
                  {school.details[0] && <p className="education-status">{school.details[0]}</p>}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="home-section" id="skills">
          <SectionHeading title="Technical skills" />
          <ul className="tile-grid skills-grid">
            {skillGroups.map((group, index) => (
              <li key={group.title}>
                <div className="skill-name">
                  <span className="tile-number">0{index + 1}</span>
                  <h3>{group.title}</h3>
                </div>
                <p>{group.items.join(', ')}.</p>
              </li>
            ))}
          </ul>

          <div className="profile-details">
            {profileDetails.map((group) => (
              <article key={group.title}>
                <h3>{group.title}</h3>
                <ul>
                  {group.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact">
          <p className="contact-kicker">An apprenticeship, a data project, or a good conversation.</p>
          <h2>Let’s build something useful.</h2>
          <a className="contact-link" href={`mailto:${EMAIL}`}>{EMAIL} <Arrow /></a>
          <a className="contact-phone" href="tel:+33755837983">{PHONE}</a>
        </section>
      </main>

      <footer>
        <p>
          Designed and developed by Ambiya Dimas Galystan. Lightweight, responsive, and carefully structured.
        </p>
        <div className="footer-directory">
          <div>
            <h2>Here</h2>
            <a href="#profile">Profile</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
          </div>
          <div>
            <h2>Elsewhere</h2>
            <a href="https://github.com/Ambiya12" target="_blank" rel="noreferrer">GitHub <Arrow /></a>
            <a href="https://www.linkedin.com/in/galystan" target="_blank" rel="noreferrer">LinkedIn <Arrow /></a>
            <a href={`mailto:${EMAIL}`}>Email <Arrow /></a>
          </div>
        </div>
        <p className="copyright">© {new Date().getFullYear()} Ambiya Dimas Galystan</p>
      </footer>
    </div>
  )
}

export default App
