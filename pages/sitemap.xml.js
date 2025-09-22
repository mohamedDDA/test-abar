export const getServerSideProps = async ({ res }) => {
    // Your site URL
    const baseUrl = "https://abarhail.com";

    // List of pages (you can fetch this dynamically from a CMS or database)
    const pages = [
        { url: "", priority: 1.0 },
        { url: "news", priority: 0.8 },
        { url: "about", priority: 0.7 },
        { url: "contact", priority: 0.7 },
    ];

    // Generate XML string
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
            .map(
                (page) => `<url>
    <loc>${baseUrl}/${page.url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <priority>${page.priority}</priority>
  </url>`
            )
            .join("")}
</urlset>`;

    // Set headers to return XML
    res.setHeader("Content-Type", "text/xml");
    res.write(sitemap);
    res.end();

    return { props: {} };
};

export default function Sitemap() {
    return null; // Nothing to render on the page
}
