// app/context/TranslationContext.js
'use client';

import { createContext, useContext, useState } from 'react';
import es from '@/app/locales/es.json';
import en from '@/app/locales/en.json';

const translations = { es, en };

const getNestedValue = (obj, path) => {
  return path.split('.').reduce((o, p) => (o && o[p] ? o[p] : path), obj);
};

const TranslationContext = createContext();

export const TranslationProvider = ({ children, defaultLocale }) => {
  const [locale, setLocale] = useState(defaultLocale);

  const t = (key) => {
    const translation = translations[locale] || translations.es;
    return getNestedValue(translation, key);
  };

  return (
    <TranslationContext.Provider value={{ t, locale, setLocale }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => {
  return useContext(TranslationContext);
};
