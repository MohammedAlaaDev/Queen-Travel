"use client"

import Link from "next/link"

export default function ServicesSection() {
  const services = [
    {
      title: "2024 BMW ALPINA X87 with exclusive...",
      description: "Accusam nec. Soluta aliquip quip autem nec.",
      image: "/assets/img2.jpeg",
    },
    {
      title: "BMW X6 M50i is designed to exceed your...",
      description: "Accusam nec. Soluta aliquip quip autem nec.",
      image: "/assets/img3.jpeg",
    },
    {
      title: "BMW X5 Gold 2024 Sport Review: Light c...",
      description: "Accusam nec. Soluta aliquip quip autem nec.",
      image: "/assets/img4.jpeg",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-16 animate-slideInUp">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group animate-slideInUp hover:shadow-xl transition duration-300 rounded-xl overflow-hidden"
              style={{ animationDelay: `${idx * 0.15}s` }}
            >
              <div className="relative h-64 overflow-hidden rounded-xl mb-6 bg-gray-200">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{service.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{service.description}</p>
                  <button className="text-red-500 hover:text-red-600 font-medium transition flex items-center gap-2">
                <Link href="services">
                    View <span>→</span>
                </Link>
                  </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
