import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { detectLanguage, getLanguageFromPath, isRTL, switchLanguage } from '../utils/language';
import { content } from '../data/content';

export const useLanguage = () => {
  const router = useRouter();
  const [currentLanguage, setCurrentLanguage] = useState('ar');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const detected = detectLanguage({ query: router.query }) || getLanguageFromPath(router.asPath) || 'ar';
    setCurrentLanguage(detected);
  }, [router.asPath, router.query]);

  // Add this effect to update HTML document attributes
  useEffect(() => {
    if (mounted && typeof document !== 'undefined') {
      const html = document.documentElement;
      const direction = isRTL(currentLanguage) ? 'rtl' : 'ltr';
      
      // Update lang attribute
      html.setAttribute('lang', currentLanguage);
      
      // Update dir attribute
      html.setAttribute('dir', direction);
      
      // Optional: Update body class for styling purposes
      document.body.className = document.body.className.replace(/\b(rtl|ltr)\b/g, '');
      document.body.classList.add(direction);
    }
  }, [currentLanguage, mounted]);

  const handleSwitchLanguage = () => {
    switchLanguage(currentLanguage, router.asPath, router);
  };

  const t = (key) => {
    const keys = key.split('.');
    let result = content;
    
    try {
      // Navigate to the section first (e.g., 'navigation', 'common')
      for (let i = 0; i < keys.length - 1; i++) {
        result = result[keys[i]];
        if (!result) return key;
      }
      
      // Get the final key (e.g., 'home', 'about')
      const finalKey = keys[keys.length - 1];
      
      // Check if we have language-specific content
      if (result[currentLanguage] && result[currentLanguage][finalKey]) {
        return result[currentLanguage][finalKey];
      }
      
      // Fallback to English
      if (result.en && result.en[finalKey]) {
        return result.en[finalKey];
      }
      
      // Direct access attempt
      if (result[finalKey]) {
        const value = result[finalKey];
        if (typeof value === 'object' && value[currentLanguage]) {
          return value[currentLanguage];
        }
        if (typeof value === 'string') {
          return value;
        }
      }
      
      return key; // Return the key if no translation found
    } catch (error) {
      console.warn(`Translation error for key "${key}":`, error);
      return key;
    }
  };

  if (!mounted) {
    return { 
      currentLanguage, 
      isRTL: isRTL(currentLanguage), 
      switchLanguage: () => {}, 
      t: (k) => k 
    };
  }

  return { 
    currentLanguage, 
    isRTL: isRTL(currentLanguage), 
    switchLanguage: handleSwitchLanguage, 
    t 
  };
};