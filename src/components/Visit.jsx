const hours = [
  { day: 'Monday – Friday', time: '6:30 AM – 7:00 PM' },
  { day: 'Saturday', time: '7:00 AM – 8:00 PM' },
  { day: 'Sunday', time: '8:00 AM – 6:00 PM' },
]

export default function Visit() {
  return (
    <section id="visit" className="py-24 px-6" style={{ background: '#faf3e8' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs font-bold tracking-[0.2em] uppercase mb-3" style={{ color: '#ce1126' }}>
            Come See Us
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold"
            style={{ fontFamily: 'var(--font-serif)', color: '#2d1a0e' }}
          >
            Find Us in Altamonte Springs
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Info */}
          <div className="space-y-8">
            {/* Address */}
            <div className="flex gap-4">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 text-xl"
                style={{ background: '#2d1a0e', color: '#fcd116' }}
              >
                📍
              </div>
              <div>
                <h3 className="font-bold text-base mb-1" style={{ color: '#2d1a0e' }}>Address</h3>
                <p style={{ color: '#6b3f22' }}>123 S Keller Rd, Suite 101</p>
                <p style={{ color: '#6b3f22' }}>Altamonte Springs, FL 32714</p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex gap-4">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 text-xl"
                style={{ background: '#2d1a0e', color: '#fcd116' }}
              >
                🕐
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-base mb-3" style={{ color: '#2d1a0e' }}>Hours</h3>
                <div className="space-y-2">
                  {hours.map((h) => (
                    <div key={h.day} className="flex justify-between text-sm border-b pb-2" style={{ borderColor: '#edd4bc', color: '#6b3f22' }}>
                      <span>{h.day}</span>
                      <span className="font-bold" style={{ color: '#2d1a0e' }}>{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 text-xl"
                style={{ background: '#2d1a0e', color: '#fcd116' }}
              >
                📞
              </div>
              <div>
                <h3 className="font-bold text-base mb-1" style={{ color: '#2d1a0e' }}>Phone</h3>
                <a href="tel:+14075550196" className="text-base" style={{ color: '#8b5530' }}>
                  (407) 555-0196
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-4">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 text-xl"
                style={{ background: '#2d1a0e', color: '#fcd116' }}
              >
                ✉️
              </div>
              <div>
                <h3 className="font-bold text-base mb-1" style={{ color: '#2d1a0e' }}>Email</h3>
                <a href="mailto:hola@lujancoffee.com" style={{ color: '#8b5530' }}>
                  hola@lujancoffee.com
                </a>
              </div>
            </div>

            {/* CTA */}
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-bold text-sm transition-all duration-200 hover:scale-105"
              style={{ background: '#2d1a0e', color: '#fcd116' }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              Get Directions
            </a>
          </div>

          {/* Map placeholder */}
          <div
            className="rounded-3xl overflow-hidden flex items-center justify-center"
            style={{
              background: 'linear-gradient(145deg, #2d1a0e, #4a2c1a)',
              minHeight: '380px',
            }}
          >
            <div className="text-center p-8">
              <div className="text-6xl mb-4">🗺️</div>
              <p
                className="text-lg font-bold mb-2"
                style={{ fontFamily: 'var(--font-serif)', color: '#faf3e8' }}
              >
                Altamonte Springs, FL
              </p>
              <p className="text-sm mb-6" style={{ color: '#c4845a' }}>
                Located off SR-436, easy parking available
              </p>
              <div
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm"
                style={{ background: 'rgba(252,209,22,0.15)', color: '#fcd116', border: '1px solid rgba(252,209,22,0.3)' }}
              >
                📍 123 S Keller Rd, Suite 101
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
