// utils/language.js
import { siteConfig } from '../config/site';

export const detectLanguage = (req) => {
  if (req?.query?.lang && ['ar', 'en'].includes(req.query.lang)) return req.query.lang;
  if (req?.headers?.['accept-language']) {
    const lang = req.headers['accept-language'].split(',')[0].split('-')[0];
    if (['ar', 'en'].includes(lang)) return lang;
  }
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('preferred-language');
    if (saved && ['ar', 'en'].includes(saved)) return saved;
    const browserLang = navigator.language.split('-')[0];
    if (['ar', 'en'].includes(browserLang)) return browserLang;
  }
  return 'ar';
};

export const getLanguageFromPath = (path) => {
  const arPaths = Object.values(siteConfig.urls.ar);
  return arPaths.some((p) => path.startsWith(p)) ? 'ar' : 'en';
};

export const isRTL = (lang) => lang === 'ar';

export const switchLanguage = (currentLang, currentPath, router) => {
  const newLang = currentLang === 'ar' ? 'en' : 'ar';

  // Map from siteConfig
  const map = siteConfig.urls;
  const keys = Object.keys(map[currentLang]);

  let newPath = null;

  // Try to find the page key from current path
  for (const key of keys) {
    const curPath = map[currentLang][key];
    if (currentPath === curPath || currentPath.startsWith(curPath + '?')) {
      newPath = map[newLang][key];
      break;
    }
  }

  // If we can't find it, fallback to current path (so we don't break anything)
  if (!newPath) {
    newPath = currentPath;
  }

  // Save language preference
  if (typeof window !== 'undefined') {
    localStorage.setItem('preferred-language', newLang);
  }

  // Push to the new route (stays on same page, but in other language)
  router.push(newPath);
};

