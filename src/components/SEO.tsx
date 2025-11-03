import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
  canonical?: string;
  schema?: object;
}

const SEO: React.FC<SEOProps> = ({
  title = 'Axisol - Leading Solar Energy & Green Energy Solutions in India',
  description = 'Axisol is India\'s premier solar energy company providing residential & commercial solar panel installation, renewable energy solutions, and green energy systems. Save up to 90% on electricity bills.',
  keywords = 'solar energy India, solar panel installation, green energy solutions, renewable energy, solar power systems, rooftop solar, commercial solar, residential solar',
  ogImage = 'https://www.axisol.in/logo.png',
  ogUrl = 'https://www.axisol.in/',
  canonical,
  schema,
}) => {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={ogUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />

      {/* Schema.org structured data */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
