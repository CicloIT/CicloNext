// app/components/LanguageSwitcher.js
'use client';

import { useTranslation } from '@/app/context/TranslationContext';

export default function LanguageSwitcher() {
  const { locale, setLocale } = useTranslation();

  const changeLanguage = (lng) => {
    setLocale(lng);
  };

  // Opciones del selector
  const options = [
    { code: 'es', label: '🇪🇸 ES' },
    { code: 'en', label: '🇺🇸 EN' },
  ];

  return (
    <>
      {/* Botones solo en pantallas sm o más */}
      <div className="hidden sm:flex gap-2">
        {options.map(({ code, label }) => (
          <button
            key={code}
            className={`text-black rounded-lg transition-colors
              px-3 py-2 text-base
              ${
                locale === code
                  ? 'bg-green-200 ring-2 ring-green-500'
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
            onClick={() => changeLanguage(code)}
            aria-label={`Cambiar idioma a ${label}`}
          >
            {label}
          </button>
        ))}
      </div>
      {/* Select solo en pantallas xs (menores que sm) */}
      <div className="sm:hidden">
        <select
          aria-label="Selector de idioma"
          className="rounded-lg border border-gray-300 px-3 py-2 text-black"
          value={locale}
          onChange={(e) => changeLanguage(e.target.value)}
        >
          {options.map(({ code, label }) => (
            <option key={code} value={code}>
              {label}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}
