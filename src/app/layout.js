// app/layout.js
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { TranslationProvider } from "./context/TranslationContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap", // Mejora la carga de fuentes
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://cicloit.com"),
  title: "CicloIT ~ Mantenimiento y Desarrollo de Software",
  description: "CicloIT, también conocido como Ciclo IT o Ciclo it, es una empresa especializada en mantenimiento proactivo y desarrollo de software a medida y en ciberseguridad. Transformamos tus procesos con tecnología ágil y soporte continuo. Innovación cíclica, resultados permanentes.",
  keywords: ["CicloIT", "Ciclo IT", "Ciclo it", "desarrollo de software", "mantenimiento de software", "ciberseguridad", "software a medida", "desarrollo web", "aplicaciones móviles", "consultoría IT", "soporte técnico", "transformación digital"],
  
  // Metadatos básicos adicionales
  authors: [{ name: "CicloIT" }],
  creator: "CicloIT",
  publisher: "CicloIT",
  
  // Open Graph para redes sociales
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://cicloit.com", // Reemplaza con tu URL real
    siteName: "CicloIT",
    title: "CicloIT - Desarrollo y Mantenimiento de Software",
    description: "Empresa especializada en desarrollo de software a medida, mantenimiento proactivo y ciberseguridad. Transformamos procesos con tecnología ágil.",
    images: [
      {
        url: "/op.jpg", // Agrega una imagen Open Graph
        width: 1200,
        height: 630,
        alt: "CicloIT - Desarrollo de Software",
      },
    ],
  },
  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  
  // Canonical URL
  alternates: {
    canonical: "https://cicloit.com", // Reemplaza con tu URL real
  },
  
  // Verificación (agrega cuando tengas las propiedades configuradas)
  verification: {
    google: "tu-codigo-de-verificacion-google", // Reemplaza con tu código real
    // bing: "tu-codigo-de-verificacion-bing",
  },
  
  // Metadatos adicionales
  category: "technology",
  classification: "Desarrollo de Software",
  
  // Schema.org structured data será agregado en el componente
  other: {
    "geo.region": "AR-X", // Córdoba, Argentina
    "geo.placename": "Río Cuarto, Córdoba",
    "geo.position": "-33.1301;-64.3495", // Coordenadas de Río Cuarto
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "CicloIT",
              "alternateName": ["Ciclo IT", "Ciclo it"],
              "description": "Empresa especializada en mantenimiento proactivo y desarrollo de software a medida y en ciberseguridad",
              "url": "https://cicloit.com", // Reemplaza con tu URL real
              //"logo": "https://cicloit.com/logo.png",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Río Cuarto",
                "addressRegion": "Córdoba",
                "addressCountry": "AR"
              },
              "sameAs": [
                // Agrega tus redes sociales
                "https://www.instagram.com/ciclo_it/",
                //"https://linkedin.com/company/cicloit",
                //"https://twitter.com/cicloit",
                //"https://facebook.com/cicloit"
              ],
              "serviceType": [
                "Desarrollo de Software",
                "Mantenimiento de Software",
                "Ciberseguridad",
                "Consultoría IT"
              ]
            })
          }}
        />
        
        {/* Preconnect para optimización */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Favicon y iconos */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#1bb9aa" />
      </head>
      <body className="min-h-screen bg-slate-900 text-white">
        <TranslationProvider defaultLocale="es">
          {children}
        </TranslationProvider>        
      </body>
    </html>
  );
}