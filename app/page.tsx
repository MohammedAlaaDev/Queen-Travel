"use client"

import { useEffect, useState } from "react";

import HeroSection from "./components/hero-section";
import Header from "./components/header";
import PartnersSection from "./components/partners-section";
import ServicesSection from "./components/services-section";
import StatsSection from "./components/stats-section";
import FeaturedListingsSection from "./components/featured-listings-section";
import WhyChooseUsSection from "./components/why-choose-us-section";
import TestimonialsSection from "./components/testimonials-section";
import CtaCardsSection from "./components/cta-cards-section";
import Compined from "./components/Combined";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="min-h-screen bg-white pt-32">
      {isLoaded && (
        <>
          <HeroSection />
          <PartnersSection />
          <ServicesSection />
          <StatsSection />
          <FeaturedListingsSection />
          <TestimonialsSection />
          <Compined />
        </>
      )}
    </div>
  );
}