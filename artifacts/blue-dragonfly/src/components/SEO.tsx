import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  schema?: Record<string, any>;
  ogImage?: string;
  /** Open Graph content type; use "article" for blog posts. */
  ogType?: "website" | "article";
  /** Unlisted pages: tell search engines not to index or follow. */
  noindex?: boolean;
}

export function SEO({ title, description, canonicalUrl, schema, ogImage = "/assets/hero-clinic.jpg", ogType = "website", noindex = false }: SEOProps) {
  const fullTitle = `${title} | Blue Dragonfly Health & Wellness Calgary`;
  const url = canonicalUrl || "https://bluedragonflyhw.com"; // placeholder domain

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      {!noindex && <link rel="canonical" href={url} />}

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={ogType} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
}
