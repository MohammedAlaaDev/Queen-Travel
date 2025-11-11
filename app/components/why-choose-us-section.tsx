"use client"

export default function WhyChooseUsSection() {
  const reasons = [
    {
      title: "Special Financing Offers",
      description: "Our stress-free finance department that can find financial solutions to save you money.",
      icon: "🎯",
    },
    {
      title: "Trusted Car Dealership",
      description: "Our stress-free finance department that can find financial solutions to save you money.",
      icon: "✓",
    },
    {
      title: "Transparent Pricing",
      description: "Our stress-free finance department that can find financial solutions to save you money.",
      icon: "🏷️",
    },
    {
      title: "Expert Car Service",
      description: "Our stress-free finance department that can find financial solutions to save you money.",
      icon: "🔧",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-16 text-center animate-slideInUp">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300 animate-slideInUp"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="text-4xl mb-4">{reason.icon}</div>
              <h3 className="font-bold text-gray-900 mb-3">{reason.title}</h3>
              <p className="text-sm text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
