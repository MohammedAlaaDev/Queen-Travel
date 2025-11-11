import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "./contexts/ScrollProviderContext";
import Footer from "./components/footer";
import Header from "./components/header";
import { AppProvider } from "./contexts/AppContext";
export const metadata: Metadata = {
  title: "Queen Travel | Premium Transportation &  Services in Egypt",
  description: "Queen Travel provides professional transportation and travel solutions for companies, factories, and individuals across Egypt. Our modern fleet includes Hiace, Coaster, Minibus, and luxury buses — delivering comfort, safety, and punctual service every time.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SmoothScroll>
          <AppProvider>
            <Header />
            
              {children}
            
            <Footer />
          </AppProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}