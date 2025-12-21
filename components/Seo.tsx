import Head from 'next/head';
import { FC } from 'react';
import { seoConfig } from '../seo.config';

interface SeoProps {
  title: string;
  description: string;
  url: string;
  ogImage?: string;
}

const Seo: FC<SeoProps> = ({ title, description, url, ogImage }) => {
  const finalUrl = url.startsWith('http') ? url : `https://panakompaniator.pl${url}`;
  const image = ogImage || 'https://panakompaniator.pl/og-image.jpg';

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#06B6D4" />
      <meta name="robots" content="index, follow" />
      
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={finalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={seoConfig.siteName} />
      <meta property="og:locale" content="pl_PL" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Canonical */}
      <link rel="canonical" href={finalUrl} />
      
      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: seoConfig.siteName,
            url: 'https://panakompaniator.pl',
            description: seoConfig.description,
            logo: 'https://panakompaniator.pl/logo.jpg',
            sameAs: [
              'https://www.tiktok.com/@panakompaniator',
              'https://www.youtube.com/@panakompaniator',
              'https://www.instagram.com/panakompaniator',
            ],
          }),
        }}
      />
    </Head>
  );
};

export default Seo;
