const values = [
  {
    icon: '🫘',
    title: 'Single-Origin Beans',
    text: 'Sourced directly from Colombian highlands — Huila, Nariño, and Antioquia.',
  },
  {
    icon: '🏡',
    title: 'Family Owned',
    text: 'Founded by the Luján family, bringing abuela\'s recipes to Altamonte Springs.',
  },
  {
    icon: '🤝',
    title: 'Community First',
    text: 'A gathering place for neighbors, friends, and anyone who needs a warm cup.',
  },
]

export default function About() {
  return (
    <section id="about" className="py-24 px-6" style={{ background: '#faf3e8' }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text side */}
          <div>
            <p className="text-xs font-bold tracking-[0.2em] uppercase mb-3" style={{ color: '#ce1126' }}>
              Our Story
            </p>
            <h2
              className="text-4xl md:text-5xl font-bold leading-tight mb-6"
              style={{ fontFamily: 'var(--font-serif)', color: '#2d1a0e' }}
            >
              Born in Colombia,<br />
              <span style={{ color: '#8b5530' }}>brewed with love.</span>
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: '#6b3f22' }}>
              The Luján family immigrated from the coffee-growing region of Huila, Colombia,
              carrying with them the traditions of slow mornings, strong tinto, and the kind of
              hospitality that makes strangers feel like family.
            </p>
            <p className="text-base leading-relaxed mb-8" style={{ color: '#6b3f22' }}>
              In 2018, they opened Luján Coffee Shop in Altamonte Springs — a cozy corner café
              where every cup is crafted with care, and every visit feels like coming home.
            </p>

            {/* Colombian flag ribbon */}
            <div className="flex h-2 w-40 rounded-full overflow-hidden mb-8">
              <div className="w-2/4" style={{ background: '#fcd116' }} />
              <div className="w-1/4" style={{ background: '#003087' }} />
              <div className="w-1/4" style={{ background: '#ce1126' }} />
            </div>

            <a
              href="#menu"
              className="inline-block px-7 py-3 rounded-full font-bold text-sm tracking-wide transition-all duration-200 hover:scale-105"
              style={{ background: '#2d1a0e', color: '#fcd116' }}
            >
              See What We Serve →
            </a>
          </div>

          {/* Visual side */}
          <div className="relative">
            {/* Illustrated coffee scene placeholder */}
            <div
              className="relative rounded-3xl overflow-hidden flex items-center justify-center"
              style={{
                background: 'linear-gradient(145deg, #4a2c1a, #8b5530)',
                minHeight: '420px',
              }}
            >
              <CoffeeIllustration />
            </div>

            {/* Badge */}
            <div
              className="absolute -bottom-6 -left-6 w-28 h-28 rounded-full flex flex-col items-center justify-center text-center shadow-xl"
              style={{ background: '#fcd116', color: '#2d1a0e' }}
            >
              <span className="text-2xl font-bold" style={{ fontFamily: 'var(--font-serif)' }}>6+</span>
              <span className="text-xs font-bold leading-tight">Years<br/>Serving</span>
            </div>
          </div>
        </div>

        {/* Value cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-20">
          {values.map((v) => (
            <div
              key={v.title}
              className="p-6 rounded-2xl transition-transform duration-200 hover:-translate-y-1"
              style={{ background: '#fff', boxShadow: '0 4px 24px rgba(74,44,26,0.08)' }}
            >
              <div className="text-4xl mb-4">{v.icon}</div>
              <h3
                className="text-lg font-bold mb-2"
                style={{ fontFamily: 'var(--font-serif)', color: '#2d1a0e' }}
              >
                {v.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: '#6b3f22' }}>{v.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CoffeeIllustration() {
  return (
    <svg width="240" height="280" viewBox="0 0 240 280" fill="none">
      {/* Cup */}
      <path d="M60 120 L80 220 H160 L180 120 Z" fill="#2d1a0e" />
      <path d="M60 120 H180" stroke="#a8683e" strokeWidth="3" />
      {/* Saucer */}
      <ellipse cx="120" cy="224" rx="60" ry="10" fill="#4a2c1a" />
      {/* Handle */}
      <path
        d="M180 148 Q210 148 210 168 Q210 188 180 188"
        stroke="#a8683e"
        strokeWidth="8"
        fill="none"
        strokeLinecap="round"
      />
      {/* Coffee surface */}
      <ellipse cx="120" cy="130" rx="55" ry="14" fill="#6b3f22" />
      {/* Latte art — leaf */}
      <path
        d="M120 118 Q130 125 120 142 Q110 125 120 118Z"
        fill="#c4845a"
        opacity="0.7"
      />
      <line x1="120" y1="118" x2="120" y2="142" stroke="#c4845a" strokeWidth="0.8" opacity="0.6" />
      {/* Steam */}
      <path
        d="M90 108 Q93 98 90 88 Q87 78 90 68"
        stroke="#d9a882"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        opacity="0.7"
      />
      <path
        d="M120 104 Q123 94 120 84 Q117 74 120 64"
        stroke="#d9a882"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        opacity="0.7"
      />
      <path
        d="M150 108 Q153 98 150 88 Q147 78 150 68"
        stroke="#d9a882"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        opacity="0.7"
      />
      {/* Coffee beans decoration */}
      <ellipse cx="50" cy="80" rx="12" ry="8" fill="#4a2c1a" transform="rotate(-30 50 80)" />
      <line x1="44" y1="78" x2="56" y2="82" stroke="#6b3f22" strokeWidth="1" />
      <ellipse cx="200" cy="90" rx="12" ry="8" fill="#4a2c1a" transform="rotate(20 200 90)" />
      <line x1="194" y1="88" x2="206" y2="92" stroke="#6b3f22" strokeWidth="1" />
      {/* Colombian flag accent dots */}
      <circle cx="115" cy="250" r="4" fill="#fcd116" />
      <circle cx="120" cy="250" r="4" fill="#003087" />
      <circle cx="125" cy="250" r="4" fill="#ce1126" />
    </svg>
  )
}
