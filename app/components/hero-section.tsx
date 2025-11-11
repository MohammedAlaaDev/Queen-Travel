"use client"

import Link from "next/link";
import { Button } from "./ui/button";

export default function HeroSection() {
  return (
    <section className=" pb-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-slideInLeft">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              4,675 Vehicles Available
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Find the perfect vehicle for your needs. Browse our extensive collection of luxury cars, SUVs, and more.
            </p>
            <div className="flex gap-4">
              <Link href={"vehicles"}>
                <Button className="bg-red-500 cursor-pointer hover:bg-red-600 text-white px-8 py-3 rounded-lg transition">
                  View Vehicles
                </Button>
              </Link>
              <Link href={"contact"}>
                <Button className="border-2 cursor-pointer border-gray-300 text-gray-800 hover:border-red-500 hover:text-red-500 px-8 py-3 rounded-lg transition">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="animate-slideInUp">
            <div className="relative h-96 bg-linear-to-br from-gray-200 to-gray-100 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/assets/img1.jpeg"
                alt="Featured Car"
                className="w-full h-full object-cover hover:scale-105 transition duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
