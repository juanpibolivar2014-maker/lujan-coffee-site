export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #1a0e06 0%, #4a2c1a 50%, #2d1a0e 100%)' }}
    >
      {/* Decorative coffee-bean shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-20 right-10 w-64 h-64 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #a8683e, transparent)' }}
        />
        <div
          className="absolute bottom-32 left-10 w-96 h-96 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #fcd116, transparent)' }}
        />
        {/* Colombian flag stripe accent */}
        <div className="absolute top-0 left-0 right-0 h-1 flex">
          <div className="flex-1" style={{ background: '#fcd116' }} />
          <div className="flex-1" style={{ background: '#003087' }} />
          <div className="flex-1" style={{ background: '#ce1126' }} />
        </div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-3 mb-6">
          <span className="h-px w-12" style={{ background: '#fcd116' }} />
          <span className="text-xs font-bold tracking-[0.25em] uppercase" style={{ color: '#fcd116' }}>
            Altamonte Springs, FL
          </span>
          <span className="h-px w-12" style={{ background: '#fcd116' }} />
        </div>

        {/* Main heading */}
        <h1
          className="text-5xl md:text-7xl font-bold leading-tight mb-4"
          style={{ fontFamily: 'var(--font-serif)', color: '#faf3e8' }}
        >
          Luján<br />
          <span style={{ color: '#fcd116' }}>Coffee Shop</span>
        </h1>

        {/* Tagline */}
        <p
          className="text-xl md:text-2xl italic mb-8 font-light"
          style={{ fontFamily: 'var(--font-serif)', color: '#d9a882' }}
        >
          "A Taste of Colombia in Every Cup."
        </p>

        {/* Sub-copy */}
        <p className="text-base md:text-lg mb-10 max-w-xl mx-auto leading-relaxed" style={{ color: '#c4845a' }}>
          Family-owned and rooted in Colombian tradition. Come for the coffee,
          stay for the warmth.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#menu"
            className="px-8 py-4 rounded-full text-base font-bold tracking-wide transition-all duration-200 hover:scale-105"
            style={{ background: '#fcd116', color: '#2d1a0e' }}
          >
            Explore Our Menu
          </a>
          <a
            href="#visit"
            className="px-8 py-4 rounded-full text-base font-bold tracking-wide border-2 transition-all duration-200 hover:scale-105"
            style={{ borderColor: '#d9a882', color: '#d9a882' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#d9a882'
              e.currentTarget.style.color = '#2d1a0e'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.color = '#d9a882'
            }}
          >
            Find Us
          </a>
        </div>

        {/* Scroll hint */}
        <div className="mt-16 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs tracking-widest uppercase" style={{ color: '#6b3f22' }}>Scroll</span>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M5 8l5 5 5-5" stroke="#6b3f22" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
      </div>
    </section>
  )
}
