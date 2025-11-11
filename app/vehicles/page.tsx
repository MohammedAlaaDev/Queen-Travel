"use client"

import { useAppContext } from "../contexts/AppContext";
import { useState } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import {
    ArrowRight,
    Gauge,
    Fuel,
    Settings2,
    Facebook,
    Twitter,
    Instagram,
    Linkedin,
    Moon,
    Sun,
    Languages,
} from "lucide-react"

export default function VehiclesPage() {
    const { language, setLanguage, theme, setTheme } = useAppContext();

    const translations = {
        en: {
            home: "Home",
            about: "About",
            vehicles: "Vehicles",
            contact: "Contact",
            heroTitle: "Mercedes-Benz, C Class",
            petrol: "Petrol",
            miles: "Miles",
            automatic: "Automatic",
            learnMore: "Learn More",
            exploreVehicles: "Explore All Vehicles",
            allCars: "All Cars",
            viewDetails: "View Details",
            onlineTitle: "Online, in-person,",
            onlineTitle2: "everywhere",
            onlineDesc:
                "Choose from thousands of vehicles from multiple brands and buy online with Click & Drive, or visit us at one of our dealerships today.",
            contactUs: "Contact Us",
            company: "Company",
            aboutUs: "About Us",
            blog: "Blog",
            services: "Services",
            faqs: "FAQs",
            terms: "Terms",
            quickLinks: "Quick Links",
            getInTouch: "Get in Touch",
            helpCenter: "Help center",
            liveChat: "Live chat",
            howItWorks: "How it works",
            ourPartners: "Our Partners",
            vehiclesType: "Vehicles Type",
            sedan: "Sedan",
            hatchback: "Hatchback",
            suv: "SUV",
            hybrid: "Hybrid",
            electric: "Electric",
            coupe: "Coupe",
            truck: "Truck",
            convertible: "Convertible",
            connectWithUs: "Connect With Us",
            rightsReserved: "All rights reserved.",
            termsConditions: "Terms & Conditions",
            privacyNotice: "Privacy Notice",
            diesel: "Diesel",
            manual: "Manual",
            cvt: "CVT",
        },
        ar: {
            home: "الرئيسية",
            about: "من نحن",
            vehicles: "المركبات",
            contact: "اتصل بنا",
            heroTitle: "مرسيدس-بنز، الفئة سي",
            petrol: "بنزين",
            miles: "ميل",
            automatic: "أوتوماتيك",
            learnMore: "اعرف المزيد",
            exploreVehicles: "استكشف جميع المركبات",
            allCars: "جميع السيارات",
            viewDetails: "عرض التفاصيل",
            onlineTitle: "عبر الإنترنت، شخصيًا،",
            onlineTitle2: "في كل مكان",
            onlineDesc:
                "اختر من بين آلاف المركبات من علامات تجارية متعددة واشتر عبر الإنترنت باستخدام Click & Drive، أو قم بزيارتنا في أحد وكلائنا اليوم.",
            contactUs: "اتصل بنا",
            company: "الشركة",
            aboutUs: "من نحن",
            blog: "المدونة",
            services: "الخدمات",
            faqs: "الأسئلة الشائعة",
            terms: "الشروط",
            quickLinks: "روابط سريعة",
            getInTouch: "تواصل معنا",
            helpCenter: "مركز المساعدة",
            liveChat: "الدردشة المباشرة",
            howItWorks: "كيف يعمل",
            ourPartners: "شركاؤنا",
            vehiclesType: "أنواع المركبات",
            sedan: "سيدان",
            hatchback: "هاتشباك",
            suv: "دفع رباعي",
            hybrid: "هجين",
            electric: "كهربائي",
            coupe: "كوبيه",
            truck: "شاحنة",
            convertible: "قابل للتحويل",
            connectWithUs: "تواصل معنا",
            rightsReserved: "جميع الحقوق محفوظة.",
            termsConditions: "الشروط والأحكام",
            privacyNotice: "سياسة الخصوصية",
            diesel: "ديزل",
            manual: "يدوي",
            cvt: "سي في تي",
        },
    }

    const t = translations[language]

    const brands = [
        { name: "Volkswagen", logo: "/volkswagen-logo.png" },
        { name: "Audi", logo: "/four-interlocking-rings.png" },
        { name: "BMW", logo: "/bmw-logo.png" },
        { name: "Ford", logo: "/ford-logo-generic.png" },
        { name: "Mercedes Benz", logo: "/mercedes-benz-logo.png" },
        { name: "Peugeot", logo: "/peugeot-logo.jpg" },
        { name: "Volkswagen", logo: "/volkswagen-logo.png" },
        { name: "Audi", logo: "/four-interlocking-rings.png" },
    ]

    const vehicles = [
        {
            name: "Toyota Camry New",
            specs: "3.5 D5 PowerPulse Momentum 5dr AW...",
            mileage: "20",
            fuelType: "petrol",
            transmission: "automatic",
            image: "/toyota-camry-blue-car-driving.jpg",
        },
        {
            name: "T-Cross – 2023",
            specs: "4.0 D5 PowerPulse Momentum 5dr AW...",
            mileage: "15",
            fuelType: "petrol",
            transmission: "cvt",
            image: "/range-rover-white-suv-road.jpg",
        },
        {
            name: "C-Class – 2023",
            specs: "4.0 D5 PowerPulse Momentum 5dr AW...",
            mileage: "50",
            fuelType: "petrol",
            transmission: "automatic",
            image: "/bentley-blue-suv-sunset.jpg",
        },
        {
            name: "Ford Transit – 2021",
            specs: "4.0 D5 PowerPulse Momentum 5dr AW...",
            mileage: "2500",
            fuelType: "diesel",
            transmission: "manual",
            image: "/mitsubishi-gold-suv-sunset.jpg",
        },
    ]

    const bgColor = theme === "dark" ? "bg-[#1a1a1a]" : "bg-[#f8f9fa]"
    const headerBg = theme === "dark" ? "bg-[#2a2a2a]" : "bg-[#6c757d]"
    const navBg = theme === "dark" ? "bg-[#333333]" : "bg-[#495057]"
    const textColor = theme === "dark" ? "text-gray-100" : "text-gray-900"
    const cardBg = theme === "dark" ? "bg-[#2a2a2a]" : "bg-white"
    const sectionBg = theme === "dark" ? "bg-[#2a2a2a]" : "bg-white"
    const footerBg = theme === "dark" ? "bg-[#0a0a0a]" : "bg-[#0f1419]"

    return (
        <div className={`min-h-screen ${bgColor} ${language === "ar" ? "rtl" : "ltr"}`}>

            {/* Hero Section */}
            <section className="relative h-[600px] overflow-hidden">
                <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4602ced7c3faa04635c9b6802f935a1619d3f39d-xlxCdZSmNQJqocxOGFkCYeIrf4jnFI.jpg"
                    alt="Mercedes-Benz C Class"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-r from-black/40 to-transparent" />
                <div className="relative h-full max-w-7xl mx-auto px-4 md:px-24 flex flex-col justify-center">
                    <button
                        className={`absolute ${language === "ar" ? "right-8" : "left-8"} top-1/2 w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition-colors`}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button
                        className={`absolute ${language === "ar" ? "left-8" : "right-8"} top-1/2 w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition-colors`}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">{t.heroTitle}</h1>
                    <div className="flex items-center gap-6 mb-8">
                        <div className="flex items-center gap-2 text-white">
                            <Fuel className="w-5 h-5" />
                            <span>{t.petrol}</span>
                        </div>
                        <div className="flex items-center gap-2 text-white">
                            <Gauge className="w-5 h-5" />
                            <span>100 {t.miles}</span>
                        </div>
                        <div className="flex items-center gap-2 text-white">
                            <Settings2 className="w-5 h-5" />
                            <span>{t.automatic}</span>
                        </div>
                    </div>

                    <Button className="w-fit bg-white! text-gray-900! hover:bg-gray-100!">
                        {t.learnMore}
                        <ArrowRight className={`${language === "ar" ? "mr-2 rotate-180" : "ml-2"} w-4 h-4`} />
                    </Button>
                </div>
            </section>

            {/* Brands Section */}
            <section className={`py-12 px-4 md:px-8 ${sectionBg}`}>
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
                        {brands.map((brand, index) => (
                            <div
                                key={index}
                                className={`flex flex-col items-center justify-center p-6 ${theme === "dark" ? "bg-[#3a3a3a]" : "bg-[#f8f9fa]"} rounded-lg hover:shadow-md transition-shadow`}
                            >
                                <img src={brand.logo || "/placeholder.svg"} alt={brand.name} className="w-12 h-12 mb-3" />
                                <span className={`text-sm ${textColor} text-center`}>{brand.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Vehicles Section */}
            <section className="py-16 px-4 md:px-8">
                <div className="max-w-7xl mx-auto">
                    <h2 className={`text-4xl font-bold ${textColor} mb-8`}>{t.exploreVehicles}</h2>
                    <div className="mb-8 border-b border-gray-200">
                        <button className={`pb-4 ${textColor} font-semibold border-b-2 border-red-500`}>{t.allCars}</button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {vehicles.map((vehicle, index) => (
                            <Card
                                key={index}
                                className={`overflow-hidden hover:shadow-lg transition-shadow ${theme === "dark" ? "bg-[#2a2a2a] text-gray-100" : "bg-white text-gray-900"}`}
                                style={{ backgroundColor: theme === "dark" ? "#2a2a2a" : "white" }}
                            >
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={vehicle.image || "/placeholder.svg"}
                                        alt={vehicle.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <CardContent className="p-4">
                                    <h3 className={`text-lg font-semibold ${textColor} mb-2`}>{vehicle.name}</h3>
                                    <p className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-600"} mb-4`}>
                                        {vehicle.specs}
                                    </p>
                                    <div className="flex items-center justify-between mb-4 text-sm">
                                        <div className="flex items-center gap-1">
                                            <Gauge className="w-4 h-4" />
                                            <span>
                                                {vehicle.mileage} {t.miles}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Fuel className="w-4 h-4" />
                                            <span>{t[vehicle.fuelType as keyof typeof t]}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Settings2 className="w-4 h-4" />
                                            <span>{t[vehicle.transmission as keyof typeof t]}</span>
                                        </div>
                                    </div>
                                    <button className="text-red-500 hover:text-red-600 font-semibold text-sm flex items-center gap-1">
                                        {t.viewDetails}
                                        <ArrowRight className={`w-4 h-4 ${language === "ar" ? "rotate-180" : ""}`} />
                                    </button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Online Section */}
            <section className={`py-16 px-4 md:px-8 ${sectionBg}`}>
                <div className="max-w-4xl mx-auto text-center">
                    <div className="mb-8 flex justify-center">
                        <img
                            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4602ced7c3faa04635c9b6802f935a1619d3f39d-xlxCdZSmNQJqocxOGFkCYeIrf4jnFI.jpg"
                            alt="Car at sunset"
                            className="rounded-2xl w-full max-w-md shadow-lg"
                        />
                    </div>
                    <h2 className={`text-4xl font-bold ${textColor} mb-4`}>
                        {t.onlineTitle}
                        <br />
                        {t.onlineTitle2}
                    </h2>
                    <p className={`${theme === "dark" ? "text-gray-400" : "text-gray-600"} mb-6 max-w-2xl mx-auto`}>
                        {t.onlineDesc}
                    </p>
                    <Button className="bg-[#0f1419] text-white hover:bg-[#1a1f26]">
                        {t.contactUs}
                        <ArrowRight className={`${language === "ar" ? "mr-2 rotate-180" : "ml-2"} w-4 h-4`} />
                    </Button>
                </div>
            </section>


        </div>
    )
}
