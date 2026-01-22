// src/components/SEO.js
import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({ 
  title, 
  description, 
  image, 
  url, 
  type = 'website',
  publishedTime,
  modifiedTime,
  author,
  section,
  tags 
}) => {
  const siteName = "Royal Estates Nigeria";
  const twitterHandle = "@RoyalEstatesNG";
  const currentUrl = typeof window !== 'undefined' ? url || window.location.href : url;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_NG" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterHandle} />
      <meta name="twitter:site" content={twitterHandle} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Additional Meta Tags */}
      <link rel="canonical" href={currentUrl} />
      <meta name="keywords" content="Nigeria real estate, luxury properties, Lagos apartments, Abuja villas, property for sale Nigeria" />
      
      {/* Structured Data for Google */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "RealEstateAgent",
          "name": siteName,
          "image": image,
          "description": description,
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Lagos",
            "addressRegion": "Lagos",
            "addressCountry": "NG"
          },
          "priceRange": "₦50M - ₦5B",
          "telephone": "+234-800-000-0000"
        })}
      </script>
      
      {/* Article-specific structured data */}
      {type === 'article' && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": title,
            "description": description,
            "image": image,
            "datePublished": publishedTime,
            "dateModified": modifiedTime,
            "author": {
              "@type": "Person",
              "name": author
            },
            "publisher": {
              "@type": "Organization",
              "name": siteName,
              "logo": {
                "@type": "ImageObject",
                "url": "/logo.png"
              }
            },
            "articleSection": section,
            "keywords": tags ? tags.join(', ') : ''
          })}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;