const reviews = [
  {
    name: 'Maria G.',
    location: 'Altamonte Springs',
    stars: 5,
    text: 'The best café con leche I\'ve had outside of Colombia. The Luján family makes you feel right at home. I come here every single morning!',
  },
  {
    name: 'James T.',
    location: 'Longwood, FL',
    stars: 5,
    text: 'Pan de bono fresh out of the oven and a cortado — that\'s my weekend. Incredible quality, incredible people.',
  },
  {
    name: 'Sofia R.',
    location: 'Orlando, FL',
    stars: 5,
    text: 'Luján Coffee is a hidden gem. The Agua Panela Latte is unlike anything else in the area. Highly recommend to anyone who loves real Colombian coffee.',
  },
  {
    name: 'Carlos M.',
    location: 'Casselberry, FL',
    stars: 5,
    text: 'As a Colombian myself, this place brings me so much joy. The aromas, the flavors, the warmth of the owners — it\'s all perfect.',
  },
]

function Stars({ count }) {
  return (
    <div className="flex gap-0.5 mb-3">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 16 16" fill="#fcd116">
          <path d="M8 1l1.8 3.6L14 5.3l-3 2.9.7 4.1L8 10.4l-3.7 1.9.7-4.1-3-2.9 4.2-.7z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6" style={{ background: '#4a2c1a' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs font-bold tracking-[0.2em] uppercase mb-3" style={{ color: '#fcd116' }}>
            What Our Guests Say
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold"
            style={{ fontFamily: 'var(--font-serif)', color: '#faf3e8' }}
          >
            Stories Over Coffee
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="p-6 rounded-2xl"
              style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(217,168,130,0.15)' }}
            >
              <Stars count={r.stars} />
              <p
                className="text-base leading-relaxed mb-5 italic"
                style={{ fontFamily: 'var(--font-serif)', color: '#edd4bc' }}
              >
                "{r.text}"
              </p>
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm"
                  style={{ background: '#fcd116', color: '#2d1a0e' }}
                >
                  {r.name[0]}
                </div>
                <div>
                  <p className="text-sm font-bold" style={{ color: '#faf3e8' }}>{r.name}</p>
                  <p className="text-xs" style={{ color: '#8b5530' }}>{r.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google review badge */}
        <div className="flex justify-center mt-10">
          <div
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full"
            style={{ background: 'rgba(252,209,22,0.1)', border: '1px solid rgba(252,209,22,0.3)' }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <span className="text-sm font-bold" style={{ color: '#fcd116' }}>4.9 ★ on Google Reviews</span>
          </div>
        </div>
      </div>
    </section>
  )
}
