"use client"

export default function StatsSection() {
  const stats = [
    { number: "836M", label: "Cars for Sale" },
    { number: "738M", label: "Dealer Reviews" },
    { number: "100M", label: "Visitors Per Day" },
    { number: "238M", label: "Verified Dealers" },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center animate-fadeIn" style={{ animationDelay: `${idx * 0.1}s` }}>
              <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-sm uppercase tracking-wider text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
