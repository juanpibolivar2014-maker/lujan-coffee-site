import { useState } from 'react'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Menu', href: '#menu' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Visit Us', href: '#visit' },
]

export default function Navbar({ scrolled }) {
  const [open, setOpen] = useState(false)

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(45,26,14,0.97)' : 'transparent',
        backdropFilter: scrolled ? 'blur(8px)' : 'none',
        boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.3)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <CoffeeIcon />
          <div className="leading-tight">
            <span
              className="block text-xl font-bold tracking-wide"
              style={{ fontFamily: 'var(--font-serif)', color: '#fcd116' }}
            >
              Luján
            </span>
            <span className="block text-xs tracking-widest uppercase" style={{ color: '#d9a882' }}>
              Coffee Shop
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium tracking-wide transition-colors duration-200"
              style={{ color: '#edd4bc' }}
              onMouseEnter={(e) => (e.target.style.color = '#fcd116')}
              onMouseLeave={(e) => (e.target.style.color = '#edd4bc')}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#visit"
            className="px-5 py-2 rounded-full text-sm font-bold tracking-wide transition-all duration-200"
            style={{
              background: '#fcd116',
              color: '#2d1a0e',
            }}
            onMouseEnter={(e) => (e.target.style.background = '#ce1126') || (e.target.style.color = '#fff')}
            onMouseLeave={(e) => (e.target.style.background = '#fcd116') || (e.target.style.color = '#2d1a0e')}
          >
            Order Now
          </a>
        </nav>

        {/* Hamburger */}
        <button
          className="md:hidden p-2 rounded"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className="block w-6 h-0.5 mb-1.5 transition-all" style={{ background: '#faf3e8' }}></span>
          <span className="block w-6 h-0.5 mb-1.5 transition-all" style={{ background: '#faf3e8' }}></span>
          <span className="block w-6 h-0.5 transition-all" style={{ background: '#faf3e8' }}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-6 pb-6 flex flex-col gap-4" style={{ background: 'rgba(45,26,14,0.98)' }}>
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-base font-medium py-1"
              style={{ color: '#edd4bc' }}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}

function CoffeeIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
      <circle cx="18" cy="18" r="18" fill="#fcd116" />
      <path
        d="M10 14h12v8a6 6 0 01-6 6 6 6 0 01-6-6v-8z"
        fill="#2d1a0e"
      />
      <path
        d="M22 16h2a3 3 0 010 6h-2"
        stroke="#2d1a0e"
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M14 11 Q15 8 16 11 Q17 8 18 11"
        stroke="#ce1126"
        strokeWidth="1.2"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  )
}
