"use client"
import { createContext, useContext, useState, ReactNode } from "react";

type AppContextType = {
  language: "en" | "ar";
  setLanguage: (lang: "en" | "ar") => void;
  theme: "light" | "dark";
  setTheme: (theme: "light" | "dark") => void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<"en" | "ar">("en");
  const [theme, setTheme] = useState<"light" | "dark">("light");

  return (
    <AppContext.Provider value={{ language, setLanguage, theme, setTheme }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) throw new Error("useAppContext must be used within AppProvider");
  return context;
}
