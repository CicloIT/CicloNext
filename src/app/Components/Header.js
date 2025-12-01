"use client"; // Si usás Next.js 13+ con app router y hooks de cliente
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const isActive = (path) => (pathname === path ? "text-blue-400" : "hover:text-blue-400");

  const handleContactoClick = () => {
    if (pathname === "/") {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push("/#contact");
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm z-50 border-b border-slate-800">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold hover:text-blue-400 transition-colors">
          <Image width={108} height={50} src="/icono.webp" alt="Logo" className="h-15 inline-block mr-2" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className={`${isActive('/')}`}>
            Inicio
          </Link>
          <Link href="/servicios" className={`${isActive('/servicios')}`}>
            Servicios
          </Link>
          <Link href="/planes" className={`${isActive('/planes')}`}>
            Planes
          </Link>
          <Link href="/nosotros" className={`${isActive('/nosotros')}`}>
            Sobre Nosotros
          </Link>
          <Link href="/cursos" className={`${isActive('/cursos')}`}>
            Cursos
          </Link>
          <Link href="/cowork" className={`${isActive('/cowork')}`}>
            Coworking
          </Link>
          <button onClick={handleContactoClick} className={`transition-colors`}>
            Contacto
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2 hover:bg-slate-800 rounded" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-slate-800 border-t border-slate-700">
          <div className="px-4 py-2 space-y-2">
            <Link href="/" className={`block py-2 ${isActive('/')}`} onClick={() => setIsMenuOpen(false)}>
              Inicio
            </Link>
            <Link href="/servicios" className={` block py-2 ${isActive('/servicios')}`} onClick={() => setIsMenuOpen(false)}>
              Servicios
            </Link>
            <Link href="/planes" className={`block py-2 ${isActive('/planes')}`} onClick={() => setIsMenuOpen(false)}>
              Planes
            </Link>
            <Link href="/nosotros" className={`block py-2 ${isActive('/nosotros')}`} onClick={() => setIsMenuOpen(false)}>
              Sobre Nosotros
            </Link>
            <Link href="/cowork" className={`block py-2 ${isActive('/cowork')}`} onClick={() => setIsMenuOpen(false)}>
              Coworking
            </Link>
            <Link href="/cursos" className={`block py-2 ${isActive('/cursos')}`} onClick={() => setIsMenuOpen(false)}>
              Cursos
            </Link>
            <button
              onClick={handleContactoClick}
              className="block py-2 hover:text-blue-400 transition-colors cursor-pointer w-full text-left"
            >
              Contacto
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}
