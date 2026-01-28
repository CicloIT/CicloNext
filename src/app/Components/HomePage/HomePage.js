"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import PlansPage from "./PlansPage";
import ServicesPage from "./ServicesPage";
import AboutPage from "./AboutPage";
import ContactPage from "./ContactPage";
import LoraPage from "./LoraPage";


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
      <div className="relative bg-slate-900 overflow-hidden">
        {/* Abstract Background Element */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
          <div className="absolute -top-[50%] -left-[20%] w-[80%] h-[80%] rounded-full bg-verde-it/5 blur-[120px]"></div>
          <div className="absolute top-[20%] -right-[20%] w-[60%] h-[60%] rounded-full bg-blue-600/5 blur-[100px]"></div>
        </div>

        {/* Hero Banner */}
        <section className="relative z-10 min-h-screen flex items-center justify-center pt-20">
          <div className="container mx-auto px-6 text-center">
            <div className="max-w-5xl mx-auto">
              <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-tight text-white animate-slide-up">
                Hola, somos <span className="text-verde-it">CicloIT</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-400 mb-12 leading-relaxed max-w-3xl mx-auto animate-slide-up delay-100">
                Transformamos la tecnología en tranquilidad. Mantenemos tus redes y sistemas
                seguros con un servicio premium diseñado para tu protección.
              </p>
              <div className="animate-slide-up delay-200">
                <Link
                  href="/servicios"
                  className="inline-block bg-verde-it hover:bg-[#159e90] text-white font-semibold py-4 px-10 rounded-full transition-all duration-300 text-lg shadow-[0_0_20px_rgba(27,185,170,0.3)] hover:shadow-[0_0_30px_rgba(27,185,170,0.5)] transform hover:-translate-y-1"
                >
                  Descubrir Servicios
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="bg-slate-50 dark:bg-slate-900">
        <PlansPage />
        <ServicesPage />
        <LoraPage />
        <AboutPage />
        <ContactPage />
      </div>
    </>
  );
}
