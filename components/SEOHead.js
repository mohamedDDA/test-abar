import Head from "next/head";
import { siteConfig } from "../config/site";
import { content } from "../data/content";
import { useRouter } from "next/router";

export const generateSEOConfig = (pageKey, language = "ar") => {
  const pageContent = content.pages?.[pageKey]?.[language];
  const siteName = siteConfig.name[language];
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://abarhail.com";

  const title = pageContent?.metaTitle || `${pageContent?.title || siteName} - ${siteName}`;
  const description = pageContent?.metaDescription || siteConfig.description[language];
  const url = `${siteUrl}${pageKey === "home" ? "/" : `/${pageKey}`}`;

  return {
    title,
    description,
    url,
    siteName,
    keywords: siteConfig.seo.keywords[language],
    robots: "follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
    openGraph: {
      title,
      description,
      type: "website",
      locale: language === "ar" ? "ar_SA" : "en_US",
      siteName,
      url,
      updatedTime: new Date().toISOString(),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      site: "@abarhail",
      creator: "@abarhail",
    },
    canonical: url,
    publishedTime: pageContent?.publishedTime || "2022-07-28T10:55:13+00:00",
    modifiedTime: pageContent?.modifiedTime || new Date().toISOString(),
  };
};

export const generateStructuredData = (pageKey, language = "ar") => {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://abarhail.com";
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Person", "Organization"],
        "@id": `${siteUrl}#person`,
        name: "abarhail",
        sameAs: ["https://twitter.com/abarhail"],
        logo: {
          "@type": "ImageObject",
          "@id": `${siteUrl}#logo`,
          url: `${siteUrl}/images/logo.png`,
          contentUrl: `${siteUrl}/images/logo.png`,
          caption: "مياه آبار حائل",
          inLanguage: "en-US",
          width: "2888",
          height: "1904",
        },
        image: {
          "@id": `${siteUrl}#logo`,
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}#website`,
        url: siteUrl,
        name: "مياه آبار حائل",
        publisher: { "@id": `${siteUrl}#person` },
        inLanguage: "en-US",
        potentialAction: {
          "@type": "SearchAction",
          target: `${siteUrl}/?s={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "WebPage",
        "@id": `${siteUrl}#webpage`,
        url: siteUrl,
        name: "الرئيسية - آبارحائل للمياه",
        datePublished: "2022-07-28T10:55:13+00:00",
        dateModified: new Date().toISOString(),
        isPartOf: { "@id": `${siteUrl}#website` },
        primaryImageOfPage: { "@id": `${siteUrl}/images/logo.png` },
        inLanguage: "en-US",
      },
    ],
  };
};

const SEOHead = ({ pageKey = "home", language = "ar", customConfig = {} }) => {
  const router = useRouter();
  const seoConfig = generateSEOConfig(pageKey, language);
  const structuredData = generateStructuredData(pageKey, language);

  const finalConfig = { ...seoConfig, ...customConfig };

  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>{finalConfig.title}</title>
      <meta name="description" content={finalConfig.description} />
      <meta name="keywords" content={finalConfig.keywords} />
      <meta name="robots" content={finalConfig.robots} />
      <link rel="canonical" href={finalConfig.canonical} />

      {/* Open Graph */}
      <meta property="og:locale" content={finalConfig.openGraph.locale} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={finalConfig.openGraph.title} />
      <meta property="og:description" content={finalConfig.openGraph.description} />
      <meta property="og:url" content={finalConfig.url} />
      <meta property="og:site_name" content={finalConfig.siteName} />
      <meta property="og:updated_time" content={finalConfig.openGraph.updatedTime} />
      <meta property="article:published_time" content={finalConfig.publishedTime} />
      <meta property="article:modified_time" content={finalConfig.modifiedTime} />

      {/* Twitter */}
      <meta name="twitter:card" content={finalConfig.twitter.card} />
      <meta name="twitter:title" content={finalConfig.twitter.title} />
      <meta name="twitter:description" content={finalConfig.twitter.description} />
      <meta name="twitter:site" content={finalConfig.twitter.site} />
      <meta name="twitter:creator" content={finalConfig.twitter.creator} />

      {/* Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "مياه آبار حائل",
          "url": "https://abarhail.com",
          "logo": "https://abarhail.com/images/logo.png",
          "contactPoint": [
            {
              "@type": "ContactPoint",
              "telephone": "+920024455",
              "email": "customercare@abarwater.com",
              "contactType": "Customer Service",
              "availableLanguage": ["Arabic", "English"]
            }
          ],
          "sameAs": [
            "https://x.com/abarhail",
            "https://www.facebook.com/abarhail",
            "https://www.instagram.com/abarhail"
          ]
        })
      }} />

    </Head>
  );
};

export default SEOHead;
