"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { Languages, Moon, Sun } from "lucide-react";
import { useAppContext } from "../contexts/AppContext";

export default function Header() {
  const { language, setLanguage, theme, setTheme } = useAppContext();

  const toggleLanguage = () => setLanguage(language === "en" ? "ar" : "en");
  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  const translations = {
    en: {
      home: "Home",
      about: "About",
      vehicles: "Vehicles",
      contact: "Contact",
      gallery: "Gallery",
      journey: "Journey",
    },
    ar: {
      home: "الرئيسية",
      about: "من نحن",
      vehicles: "المركبات",
      contact: "اتصل بنا",
      gallery: "المعرض",
      journey: "رحلتنا",
    },
  };

  const t = translations[language];

  return (
    <header
      className={`z-50 flex fixed left-0 top-0 w-full justify-between items-center px-6 py-4 transition-colors duration-300 ${theme === "dark"
        ? "bg-[#1a1a1a] text-white"
        : "bg-white text-gray-900 shadow-sm"
        }`}
    >
      {/* Logo */}
      <Link href="/" className="font-bold text-xl">
        {language === "en" ? "Queen Travel" : "كوين ترانسبورت"}
      </Link>

      {/* Navigation Links */}
      <nav className="hidden md:flex items-center gap-6 font-medium">
        <Link href="/" className="hover:text-red-400 transition-colors">
          {t.home}
        </Link>
        <Link href="/about" className="hover:text-red-400 transition-colors">
          {t.about}
        </Link>
        <Link href="/vehicles" className="hover:text-red-400 transition-colors">
          {t.vehicles}
        </Link>
        <Link href="/gallery" className="hover:text-red-400 transition-colors">
          {t.gallery}
        </Link>
        <Link href="/journey" className="hover:text-red-400 transition-colors">
          {t.journey}
        </Link>
        <Link href="/contact" className="hover:text-red-400 transition-colors">
          {t.contact}
        </Link>
      </nav>

      {/* Actions */}
      <div className="flex items-center gap-3">
        <Button onClick={toggleLanguage} className="flex items-center gap-1">
          <Languages className="w-4 h-4" />
          <span>{language === "en" ? "AR" : "EN"}</span>
        </Button>

        <Button onClick={toggleTheme}>
          {theme === "light" ? (
            <Moon className="w-4 h-4" />
          ) : (
            <Sun className="w-4 h-4" />
          )}
        </Button>
      </div>
    </header>
  );
}
