"use client"

import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"
import { useAppContext } from "../contexts/AppContext";

export default function Footer() {
  const { language, theme } = useAppContext();
  const translations = {
    en: {
      company: "Company",
      aboutUs: "About Us",
      blog: "Blog",
      services: "Services",
      faqs: "FAQs",
      terms: "Terms",
      contactUs: "Contact Us",
      quickLinks: "Quick Links",
      getInTouch: "Get in touch",
      helpCenter: "Help Center",
      liveChat: "Live Chat",
      howItWorks: "How it works",
      ourPartners: "Our Partners",
      vehiclesType: "Vehicle Types",
      sedan: "Sedan",
      hatchback: "Hatchback",
      suv: "SUV",
      hybrid: "Hybrid",
      electric: "Electric",
      coupe: "Coupe",
      truck: "Truck",
      convertible: "Convertible",
      connectWithUs: "Connect with us",
      rightsReserved: "All rights reserved.",
      termsConditions: "Terms & Conditions",
      privacyNotice: "Privacy Notice",
    },
    ar: {
      company: "الشركة",
      aboutUs: "من نحن",
      blog: "المدونة",
      services: "الخدمات",
      faqs: "الأسئلة الشائعة",
      terms: "الشروط",
      contactUs: "اتصل بنا",
      quickLinks: "روابط سريعة",
      getInTouch: "تواصل معنا",
      helpCenter: "مركز المساعدة",
      liveChat: "دردشة مباشرة",
      howItWorks: "كيف تعمل",
      ourPartners: "شركاؤنا",
      vehiclesType: "أنواع المركبات",
      sedan: "سيدان",
      hatchback: "هاتشباك",
      suv: "دفع رباعي",
      hybrid: "هايبرد",
      electric: "كهربائية",
      coupe: "كوبيه",
      truck: "شاحنة",
      convertible: "قابلة للفتح",
      connectWithUs: "تواصل معنا",
      rightsReserved: "جميع الحقوق محفوظة.",
      termsConditions: "الشروط والأحكام",
      privacyNotice: "سياسة الخصوصية",
    },
  };

  const t = translations[language];
  const footerBg = theme === "dark" ? "bg-[#111]" : "bg-[#2a2a2a]";
  return (
    <footer className={`${footerBg} text-white py-12 px-4 md:px-8`
    }>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">{t.company}</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#" className="hover:text-white">
                  {t.aboutUs}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  {t.blog}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  {t.services}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  {t.faqs}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  {t.terms}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  {t.contactUs}
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">{t.quickLinks}</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#" className="hover:text-white">
                  {t.getInTouch}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  {t.helpCenter}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  {t.liveChat}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  {t.howItWorks}
                </a>
              </li>
            </ul>
          </div>

          {/* Our Partners */}
          <div>
            <h3 className="font-semibold mb-4">{t.ourPartners}</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#" className="hover:text-white">
                  Toyota
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Porsche
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Audi
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  BMW
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Ford
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Nissan
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Peugeot
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Volkswagen
                </a>
              </li>
            </ul>
          </div>

          {/* Vehicles Type */}
          <div>
            <h3 className="font-semibold mb-4">{t.vehiclesType}</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#" className="hover:text-white">
                  {t.sedan}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  {t.hatchback}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  {t.suv}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  {t.hybrid}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  {t.electric}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  {t.coupe}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  {t.truck}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  {t.convertible}
                </a>
              </li>
            </ul>
          </div>

          {/* Connect With Us */}
          <div>
            <h3 className="font-semibold mb-4">{t.connectWithUs}</h3>
            <div className="flex gap-4">
              <a href="#" className="hover:text-gray-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-gray-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-gray-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-gray-300">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© 2025 example.com. {t.rightsReserved}</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">
              {t.termsConditions}
            </a>
            <span>•</span>
            <a href="#" className="hover:text-white">
              {t.privacyNotice}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
