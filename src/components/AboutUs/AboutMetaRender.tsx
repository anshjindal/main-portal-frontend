import React from 'react';
import { Helmet } from 'react-helmet';
import contentRaw from '../../content/AboutUs/AboutMetaData.json';

type AboutMetaRenderProps = {
  lang: 'en' | 'fr';
};

type MetaContent = {
  title: string;
  description: string;
  keyWords: string;
  openGraph: {
    title: string;
    description: string;
    ogImage: string;
    ogUrl: string;
  };
  twitter: {
    title: string;
    description: string;
    twitterImage: string;
    twitterCardContent: string;
  };
};

type AboutMetaContent = {
  [key in AboutMetaRenderProps['lang']]: {
    meta: MetaContent;
  };
};

const content = contentRaw as AboutMetaContent;

const AboutMetaRender: React.FC<AboutMetaRenderProps> = ({ lang }) => {
  const Contents = content[lang];

  return (
    <Helmet>
      <meta
        name="robots"
        content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      />
      <title>{Contents.meta.title}</title>
      <meta name="description" content={Contents.meta.description} />
      <meta name="keywords" content={Contents.meta.keyWords} />

      {/* Open Graph meta tags */}
      <link rel="canonical" href="https://www.wouessi.com/en/AboutUs" />
      <meta property="og:title" content={Contents.meta.openGraph.title} />
      <meta
        property="og:description"
        content={Contents.meta.openGraph.description}
      />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={Contents.meta.openGraph.ogImage} />
      <meta property="og:image:alt" content="Wouessi digital" />
      <meta name="og:url" content={Contents.meta.openGraph.ogUrl} />

      {/* Twitter meta tags */}
      <meta name="twitter:title" content={Contents.meta.twitter.title} />
      <meta
        name="twitter:description"
        content={Contents.meta.twitter.description}
      />
      <meta
        name="twitter:image"
        content={Contents.meta.twitter.twitterImage}
      />
      <meta
        name="twitter:card"
        content={Contents.meta.twitter.twitterCardContent}
      />
    </Helmet>
  );
};

export default AboutMetaRender;
