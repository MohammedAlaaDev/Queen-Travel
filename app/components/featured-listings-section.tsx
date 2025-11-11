"use client"

import Link from "next/link"

export default function FeaturedListingsSection() {
  const listings = [
    {
      name: "T-Cross - 2023",
      price: "$40.55",
      specs: ["10 Miles", "Petrol", "CVT"],
      image: "/assets/img5.jpeg",
    },
    {
      name: "Q-Class - 2023",
      price: "$50.75",
      specs: ["50 Miles", "Petrol", "Automatic"],
      image: "/assets/img6.jpeg",
    },
    {
      name: "Ford Transit - 2021",
      price: "$45.25",
      specs: ["2500 Miles", "Petrol", "Automatic"],
      image: "/assets/img7.jpeg",
    },
    {
      name: "New GLC - 2023",
      price: "$55.00",
      specs: ["50 Miles", "Petrol", "Automatic"],
      image: "/assets/img1.jpeg",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 animate-slideInUp">Featured Listings</h2>
          <Link href="vehicles" >
            <button className="cursor-pointer text-red-500 hover:text-red-600 font-medium transition">
              View All →
            </button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {listings.map((listing, idx) => (
            <div
              key={idx}
              className="group animate-slideInUp hover:shadow-lg transition duration-300 rounded-lg overflow-hidden"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="relative h-48 overflow-hidden rounded-lg mb-4 bg-gray-200">
                <img
                  src={listing.image || "/placeholder.svg"}
                  alt={listing.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">{listing.name}</h3>
                <p className="text-red-500 font-bold mb-3">{listing.price}</p>
                <div className="flex gap-3 text-xs text-gray-600">
                  {listing.specs.map((spec, i) => (
                    <div key={i} className="flex items-center gap-1">
                      <span>•</span> {spec}
                    </div>
                  ))}
                </div>
                <button className="cursor-pointer mt-4 text-red-500 hover:text-red-600 font-medium text-sm transition">
                  View Details →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
