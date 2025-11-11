"use client"

export default function PartnersSection() {
  const partners = [
    { name: "Toyota", icon: "🔷" },
    { name: "BMW", icon: "⬟" },
    { name: "Porsche", icon: "◆" },
    { name: "Audi", icon: "⬡" },
    { name: "Ford", icon: "◈" },
    { name: "Mercedes", icon: "⬠" },
    { name: "Nissan", icon: "⬢" },
    { name: "Audi", icon: "◇" },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-gray-600 uppercase tracking-wider text-sm mb-12 animate-fadeIn">
          Explore Our Partners
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
          {partners.map((partner, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center h-16 animate-scaleIn hover:scale-110 transition duration-300"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="text-4xl text-gray-400 hover:text-gray-600 transition">{partner.icon}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
