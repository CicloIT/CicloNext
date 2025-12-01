// app/components/Final.js
'use client';
import { Eye } from 'lucide-react';
import { useTranslation } from '../../context/TranslationContext';

export function Final() {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-green-600 p-2 rounded-lg">
                <Eye className="h-6 w-6 text-white" />
              </div>
              <h4 className="text-lg font-semibold">WildTrack LoRaWAN</h4>
            </div>
            <p className="text-gray-300 text-sm">{t('footer.descripcion')}</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.proyecto.titulo')}</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              {t('footer.proyecto.items', { returnObjects: true })?.map((item, i) => (
                <li key={`proyecto-i-${i}`}>• {item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.tecnologia.titulo')}</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              {t('footer.tecnologia.items', { returnObjects: true })?.map((item, i) => (
                <li key={`tecnologia-i-${i}`}>• {item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.impacto.titulo')}</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              {t('footer.impacto.items', { returnObjects: true })?.map((item, i) => (
                <li key={`impacto-i-${i}`}>• {item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>{t('footer.derechos')}</p>
        </div>
      </div>
    </footer>
  );
}
