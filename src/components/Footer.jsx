const socials = [
  {
    name: 'Instagram',
    href: '#',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    name: 'Facebook',
    href: '#',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: 'TikTok',
    href: '#',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.16 8.16 0 004.77 1.52V6.76a4.85 4.85 0 01-1-.07z" />
      </svg>
    ),
  },
]

const quickLinks = [
  { label: 'About Us', href: '#about' },
  { label: 'Menu', href: '#menu' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Visit Us', href: '#visit' },
]

import { useState } from 'react'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  function handleSubscribe(e) {
    e.preventDefault()
    if (email.trim()) {
      setSubscribed(true)
      setEmail('')
    }
  }

  return (
    <footer style={{ background: '#1a0e06', color: '#c4845a' }}>
      {/* Colombian flag bar */}
      <div className="flex h-1">
        <div className="w-2/4" style={{ background: '#fcd116' }} />
        <div className="w-1/4" style={{ background: '#003087' }} />
        <div className="w-1/4" style={{ background: '#ce1126' }} />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3
              className="text-2xl font-bold mb-2"
              style={{ fontFamily: 'var(--font-serif)', color: '#fcd116' }}
            >
              Luján Coffee Shop
            </h3>
            <p className="text-sm italic mb-4" style={{ color: '#8b5530' }}>
              "A Taste of Colombia in Every Cup."
            </p>
            <p className="text-sm leading-relaxed" style={{ color: '#6b3f22' }}>
              An independent Colombian café bringing the warmth and flavors of
              Colombia to Altamonte Springs, FL since 2018.
            </p>

            {/* Socials */}
            <div className="flex gap-3 mt-6">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  aria-label={s.name}
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200"
                  style={{ background: 'rgba(255,255,255,0.06)', color: '#c4845a' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#fcd116'
                    e.currentTarget.style.color = '#2d1a0e'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.06)'
                    e.currentTarget.style.color = '#c4845a'
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold tracking-widest uppercase mb-4" style={{ color: '#faf3e8' }}>
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm transition-colors duration-200"
                    style={{ color: '#6b3f22' }}
                    onMouseEnter={(e) => (e.target.style.color = '#fcd116')}
                    onMouseLeave={(e) => (e.target.style.color = '#6b3f22')}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold tracking-widest uppercase mb-4" style={{ color: '#faf3e8' }}>
              Get in Touch
            </h4>
            <div className="space-y-3 text-sm" style={{ color: '#6b3f22' }}>
              <p>📍 123 S Keller Rd, Suite 101<br />Altamonte Springs, FL 32714</p>
              <p>📞 <a href="tel:+14075550196" style={{ color: '#8b5530' }}>(407) 555-0196</a></p>
              <p>✉️ <a href="mailto:hola@lujancoffee.com" style={{ color: '#8b5530' }}>hola@lujancoffee.com</a></p>
            </div>

            {/* Newsletter */}
            <div className="mt-6">
              <p className="text-xs font-bold mb-2" style={{ color: '#faf3e8' }}>
                Get weekly specials in your inbox
              </p>
              {subscribed ? (
                <div
                  className="px-4 py-3 rounded-lg text-sm font-medium"
                  style={{ background: 'rgba(252,209,22,0.15)', color: '#fcd116', border: '1px solid rgba(252,209,22,0.3)' }}
                >
                  ¡Gracias! You're on the list ☕
                </div>
              ) : (
                <form className="flex gap-2" onSubmit={handleSubscribe}>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="flex-1 px-3 py-2 rounded-lg text-sm outline-none focus:ring-2"
                    style={{
                      background: 'rgba(255,255,255,0.08)',
                      color: '#faf3e8',
                      border: '1px solid rgba(168,104,62,0.3)',
                    }}
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-lg text-sm font-bold transition-all duration-200 hover:scale-105"
                    style={{ background: '#fcd116', color: '#2d1a0e' }}
                  >
                    Join
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs"
          style={{ borderTop: '1px solid rgba(107,63,34,0.3)', color: '#4a2c1a' }}
        >
          <p>© {new Date().getFullYear()} Luján Coffee Shop. All rights reserved.</p>
          <p>Made with ☕ and ❤️ for our community.</p>
        </div>
      </div>
    </footer>
  )
}
