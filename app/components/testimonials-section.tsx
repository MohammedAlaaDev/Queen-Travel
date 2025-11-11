"use client"

import { useState } from "react"

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  const testimonials = [
    {
      name: "Leslie Alexander",
      role: "Facebook",
      title: "Great Work",
      quote:
        "Amazing design, easy to customize and a design quality suitable account on the cloud platform for the optimized performance. And we didn't on our original designs.",
      avatar: "👨‍💼",
    },
    {
      name: "Floyd Miles",
      role: "Designer",
      title: "Awesome Design",
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dislite magna aliqua ut enim ad minim veniam.",
      avatar: "👨‍💼",
    },
    {
      name: "Dianne Russell",
      role: "Marketing",
      title: "Good Job",
      quote:
        "But I must explain to you how all this mistakin idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.",
      avatar: "👩‍💼",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 animate-slideInUp">What our customers say</h2>
          <div className="flex gap-4">
            <button className="px-4 py-2 border border-gray-300 rounded hover:border-red-500 transition">←</button>
            <button className="px-4 py-2 border border-gray-300 rounded hover:border-red-500 transition">→</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-gray-50 p-8 rounded-lg animate-slideInUp hover:shadow-lg transition duration-300"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="flex items-start gap-4 mb-4">
                <span className="text-4xl">{testimonial.avatar}</span>
                <div>
                  <h3 className="font-bold text-gray-900">{testimonial.title}</h3>
                  <div className="flex gap-1 my-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400">
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 mb-4 italic">"{testimonial.quote}"</p>
              <div>
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
