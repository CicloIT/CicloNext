function Footer() {
  return (
    <footer className="bg-slate-900 py-12 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex space-x-6 mb-4 md:mb-0">
            {/* X (Twitter) 
            <a href="#" className="text-slate-400 hover:text-white transition-colors" aria-label="X">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 1200 1227">
                <path d="M714.163 519.284 1160.89 0h-105.86L667.137 450.887 357.328 0H0l468.492 681.821L0 1226.37h105.866l409.625-476.152 327.181 476.152H1200L714.137 519.284h.026ZM569.165 687.828l-47.468-67.894-377.686-540.24h162.604l304.797 435.991 47.468 67.894 396.2 566.721H892.476L569.165 687.854v-.026Z" />
              </svg>
            </a>
            */}
            {/* LinkedIn  
            <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors" aria-label="LinkedIn">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 448 512">
                <path d="M100.28 448H7.4V148.9h92.88zm-46.44-341a53.29 53.29 0 1 1 53.29-53.29 53.29 53.29 0 0 1-53.29 53.29zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.24-79.2-48.3 0-55.7 37.7-55.7 76.6V448h-92.6V148.9h88.9v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
              </svg>
            </a>
           */}
            {/* Instagram */}
            <a href="https://www.instagram.com/ciclo_it/" target="_blank" className="text-slate-400 hover:text-pink-600 transition-colors" aria-label="Instagram">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
              </svg>
            </a>

          </div>
        </div>

        <div className="text-center text-slate-400 text-sm">
          <p className="mb-2">&copy; {new Date().getFullYear()} CicloIT. Todos los derechos reservados.</p>
          <p>Diseñado y desarrollado por CicloIT.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
