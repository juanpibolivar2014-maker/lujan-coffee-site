import { useState } from 'react'

const categories = ['All', 'Coffee', 'Cold Drinks', 'Food', 'Pastries']

const items = [
  // Coffee
  { cat: 'Coffee', name: 'Tinto Clásico', desc: 'Traditional Colombian black coffee, brewed slow and rich.', price: '$3.50', tag: 'Signature', emoji: '☕' },
  { cat: 'Coffee', name: 'Café con Leche', desc: 'Half strong espresso, half warm steamed milk — pure comfort.', price: '$4.25', emoji: '🥛' },
  { cat: 'Coffee', name: 'Cortado Colombiano', desc: 'Double espresso cut with a splash of whole milk.', price: '$4.00', emoji: '☕' },
  { cat: 'Coffee', name: 'Agua Panela Latte', desc: 'Espresso sweetened with raw Colombian cane sugar & oat milk.', price: '$5.50', tag: 'Fan Favorite', emoji: '🌿' },
  { cat: 'Coffee', name: 'Chorro de Huila', desc: 'Single-origin pour-over from the Huila region.', price: '$5.00', emoji: '🫗' },
  // Cold
  { cat: 'Cold Drinks', name: 'Cold Brew Tinto', desc: '18-hour cold-steeped Colombian blend. Smooth & bold.', price: '$5.00', emoji: '🧊' },
  { cat: 'Cold Drinks', name: 'Limonada de Coco', desc: 'Classic Colombian coconut lemonade. Blended fresh.', price: '$5.50', tag: 'Bestseller', emoji: '🥥' },
  { cat: 'Cold Drinks', name: 'Iced Panela Latte', desc: 'Our Agua Panela Latte served over ice.', price: '$5.50', emoji: '🧋' },
  { cat: 'Cold Drinks', name: 'Maracuyá Refresher', desc: 'Passion fruit, sparkling water, and a hint of mint.', price: '$5.00', emoji: '🌺' },
  // Food
  { cat: 'Food', name: 'Arepa con Queso', desc: 'Grilled corn cake stuffed with warm Colombian white cheese.', price: '$6.00', tag: 'Must Try', emoji: '🫓' },
  { cat: 'Food', name: 'Empanadas (2 pcs)', desc: 'Crispy, golden, filled with beef picadillo or potato & egg.', price: '$7.00', emoji: '🥟' },
  { cat: 'Food', name: 'Tostada Calentado', desc: 'Toast with black beans, egg, and house tomato sauce.', price: '$8.50', emoji: '🍳' },
  // Pastries
  { cat: 'Pastries', name: 'Pan de Bono', desc: 'Warm, chewy Colombian cheese bread — baked fresh daily.', price: '$3.00', tag: 'Fresh Daily', emoji: '🧀' },
  { cat: 'Pastries', name: 'Buñuelos', desc: 'Light, airy fried dough balls with a hint of anise.', price: '$3.50', emoji: '🍩' },
  { cat: 'Pastries', name: 'Torta de Café', desc: 'Colombian coffee cake with espresso glaze and cinnamon.', price: '$5.00', emoji: '🍰' },
]

const tagColors = {
  Signature: { bg: '#fcd116', text: '#2d1a0e' },
  'Fan Favorite': { bg: '#ce1126', text: '#fff' },
  Bestseller: { bg: '#2d1a0e', text: '#fcd116' },
  'Must Try': { bg: '#8b5530', text: '#fff' },
  'Fresh Daily': { bg: '#a8683e', text: '#fff' },
}

export default function Menu() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? items : items.filter((i) => i.cat === active)

  return (
    <section id="menu" className="py-24 px-6" style={{ background: '#2d1a0e' }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-xs font-bold tracking-[0.2em] uppercase mb-3" style={{ color: '#fcd116' }}>
            What We Serve
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: 'var(--font-serif)', color: '#faf3e8' }}
          >
            Our Menu
          </h2>
          <p className="text-base max-w-lg mx-auto" style={{ color: '#c4845a' }}>
            Everything made with intention — from our Colombian beans to our family recipes.
          </p>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className="px-5 py-2 rounded-full text-sm font-bold tracking-wide transition-all duration-200"
              style={{
                background: active === cat ? '#fcd116' : 'rgba(255,255,255,0.08)',
                color: active === cat ? '#2d1a0e' : '#d9a882',
                border: active === cat ? 'none' : '1px solid rgba(217,168,130,0.2)',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Items grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((item) => (
            <div
              key={item.name}
              className="rounded-2xl p-5 flex gap-4 transition-transform duration-200 hover:-translate-y-1"
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(168,104,62,0.2)' }}
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                style={{ background: 'rgba(168,104,62,0.15)' }}
              >
                {item.emoji}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h3
                    className="text-base font-bold leading-snug"
                    style={{ fontFamily: 'var(--font-serif)', color: '#faf3e8' }}
                  >
                    {item.name}
                  </h3>
                  <span
                    className="text-base font-bold flex-shrink-0"
                    style={{ color: '#fcd116' }}
                  >
                    {item.price}
                  </span>
                </div>
                {item.tag && (
                  <span
                    className="inline-block px-2 py-0.5 rounded-full text-xs font-bold mb-1"
                    style={{
                      background: tagColors[item.tag]?.bg,
                      color: tagColors[item.tag]?.text,
                    }}
                  >
                    {item.tag}
                  </span>
                )}
                <p className="text-xs leading-relaxed" style={{ color: '#a8683e' }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center mt-10 text-sm" style={{ color: '#6b3f22' }}>
          * Menu changes seasonally. Ask us about our daily specials!
        </p>
      </div>
    </section>
  )
}
