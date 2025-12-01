// app/components/Header.js
'use client';
import { Eye } from "lucide-react";
import { useTranslation } from '../../context/TranslationContext'; // Asegúrate de que la ruta sea correcta
import LanguageSwitcher from "../LanguageSwitcher";

export function HeaderJ() {
  const { t } = useTranslation();

  return (
    <header className="bg-white shadow-lg border-b-4 border-green-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          {/* Izquierda: logo + título */}
          <div className="flex items-center space-x-4">
            <div className="bg-green-600 p-3 rounded-xl">
              <Eye className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                WildTrack LoRaWAN
              </h1>
              <p className="text-gray-600">{t('header.subtitulo')}</p>
            </div>
          </div>
          {/* Derecha: destacado + language switcher */}
          <div className="flex items-center space-x-6 flex-wrap sm:flex-nowrap">
            <div className="bg-green-100 px-4 py-2 rounded-lg mb-2 sm:mb-0">
              <span className="text-green-800 font-semibold">
                {t('header.destacado')}
              </span>
            </div>
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </header>
  );
}
