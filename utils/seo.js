import { siteConfig } from '../config/site';
import { content } from '../data/content';

export const generateSEOConfig = (pageKey, language = 'ar') => {
  const pageContent = content.pages?.[pageKey]?.[language];
  const siteName = siteConfig.name[language];
  
  if (!pageContent) {
    return {
      title: siteConfig.seo.title[language],
      description: siteConfig.description[language],
    };
  }
  
  return {
    title: pageContent.metaTitle || `${pageContent.title} - ${siteName}`,
    description: pageContent.metaDescription || siteConfig.description[language],
    keywords: siteConfig.seo.keywords[language],
    openGraph: {
      title: pageContent.metaTitle || pageContent.title,
      description: pageContent.metaDescription || siteConfig.description[language],
      type: 'website',
      locale: language === 'ar' ? 'ar_SA' : 'en_US',
      siteName: siteName,
    },
    twitter: {
      card: 'summary_large_image',
      title: pageContent.metaTitle || pageContent.title,
      description: pageContent.metaDescription || siteConfig.description[language],
    }
  };
};

export const generateStructuredData = (pageKey, language = 'ar') => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name[language],
    description: siteConfig.description[language],
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://abarhail.com',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: siteConfig.contact.phone,
      email: siteConfig.contact.email,
      contactType: 'Customer Service'
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: siteConfig.contact.address[language]
    },
    sameAs: Object.values(siteConfig.social)
  };
};