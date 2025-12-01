"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import PlansPage from "./PlansPage";
import ServicesPage from "./ServicesPage";
import AboutPage from "./AboutPage";
import ContactPage from "./ContactPage";


export default function HomePage() {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    // Detectar si la URL tiene hash #contact
    if (typeof window !== "undefined") {
      const hash = window.location.hash;
      if (hash === "#contact") {
        const el = document.getElementById("contact");
        if (el) {
          setTimeout(() => {
            el.scrollIntoView({ behavior: "smooth" });
          }, 100);
        }
      }
    }
  }, [pathname]);

  return (
    <>
      <div className="pt-20">
        {/* Hero Banner */}
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                Hola, somos Ciclo
                <span className="text-verde-it">IT</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
                ¡Bienvenido a CicloIT! Nos encargamos de mantener tus redes y
                sistemas de seguridad en perfecto estado, asegurando tu
                tranquilidad y protección. ¡Gracias por elegirnos!
              </p>
              <Link
                href="/servicios"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300 text-lg"
              >
                Ver Servicios
              </Link>
            </div>
          </div>
        </section>
      </div>
      <PlansPage/>
      <ServicesPage />
      <AboutPage />
      <ContactPage />
    </>
  );
}
