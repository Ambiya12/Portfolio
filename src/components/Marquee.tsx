const WORDS = [
  'Design',
  'Build',
  'Deliver',
  'Collaborate',
  'Measure',
  'Improve',
  'Document',
  'Ship',
  'Scale',
  'Review',
  'Learn',
  'Repeat',
]

export function Marquee() {
  // Duplicate 2× so the seamless loop has enough content
  const items = [...WORDS, ...WORDS]

  return (
    <div className="marquee-band" aria-hidden="true">
      <div className="marquee-track">
        {items.map((word, i) => (
          <span key={`${word}-${i}`} className="marquee-item">
            {word}
            <span className="marquee-dot">·</span>
          </span>
        ))}
      </div>
    </div>
  )
}
