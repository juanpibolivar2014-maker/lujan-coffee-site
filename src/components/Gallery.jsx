const photos = [
  { label: 'Morning Espresso', bg: 'linear-gradient(145deg, #4a2c1a, #8b5530)', icon: '☕', large: true },
  { label: 'Pan de Bono', bg: 'linear-gradient(145deg, #8b5530, #c4845a)', icon: '🧀' },
  { label: 'Our Café', bg: 'linear-gradient(145deg, #2d1a0e, #4a2c1a)', icon: '🏡' },
  { label: 'Limonada de Coco', bg: 'linear-gradient(145deg, #6b3f22, #a8683e)', icon: '🥥' },
  { label: 'Cold Brew', bg: 'linear-gradient(145deg, #1a0e06, #2d1a0e)', icon: '🧊', large: true },
  { label: 'Arepa con Queso', bg: 'linear-gradient(145deg, #a8683e, #d9a882)', icon: '🫓' },
]

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 px-6" style={{ background: '#fdf6ee' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs font-bold tracking-[0.2em] uppercase mb-3" style={{ color: '#ce1126' }}>
            A Glimpse Inside
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold"
            style={{ fontFamily: 'var(--font-serif)', color: '#2d1a0e' }}
          >
            The Luján Experience
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((p, i) => (
            <div
              key={i}
              className={`relative rounded-2xl overflow-hidden flex items-center justify-center cursor-pointer group transition-transform duration-300 hover:scale-[1.02] ${p.large ? 'col-span-1 md:col-span-1' : ''}`}
              style={{ background: p.bg, minHeight: p.large ? '280px' : '200px' }}
            >
              <div className="flex flex-col items-center gap-3">
                <span className="text-5xl">{p.icon}</span>
                <span
                  className="text-sm font-bold tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  style={{ color: '#faf3e8' }}
                >
                  {p.label}
                </span>
              </div>
              {/* Hover overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4"
                style={{ background: 'linear-gradient(to top, rgba(26,14,6,0.7), transparent)' }}
              >
                <span className="text-sm font-bold" style={{ color: '#faf3e8' }}>{p.label}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="text-center mt-10">
          <p className="text-sm mb-3" style={{ color: '#8b5530' }}>
            Follow along for daily specials and behind-the-scenes moments.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm border-2 transition-all duration-200 hover:scale-105"
            style={{ borderColor: '#2d1a0e', color: '#2d1a0e' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#2d1a0e'
              e.currentTarget.style.color = '#fcd116'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.color = '#2d1a0e'
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
            @lujancoffee
          </a>
        </div>
      </div>
    </section>
  )
}
