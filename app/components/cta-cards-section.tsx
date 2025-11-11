"use client"

import Link from "next/link";
import { Button } from "./ui/button";

export default function CtaCardsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Looking for a car */}
          <div className="bg-blue-50 p-8 lg:p-12 rounded-xl animate-slideInUp hover:shadow-lg transition duration-300">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Are You Looking For a Car?</h3>
            <p className="text-gray-600 mb-6">We are committed to providing our customers with exceptional service</p>
            <Link href={"contact"}>
              <Button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg transition">
                Get Started
              </Button>
            </Link>
            <div className="mt-8 text-6xl opacity-20">🚗</div>
          </div>

          {/* Selling a car */}
          <div
            className="bg-pink-50 p-8 lg:p-12 rounded-xl animate-slideInUp hover:shadow-lg transition duration-300"
            style={{ animationDelay: "0.1s" }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Do You Want to Sell a Car?</h3>
            <p className="text-gray-600 mb-6">We are committed to providing our customers with exceptional service</p>
            <Link href={"contact"}>
              <Button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg transition">
                Get Started
              </Button>
            </Link>
            <div className="mt-8 text-6xl opacity-20">💰</div>
          </div>
        </div>
      </div>
    </section>
  )
}
