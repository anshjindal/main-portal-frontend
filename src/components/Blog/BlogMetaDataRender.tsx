import {JSX } from 'react'
  import { Helmet,} from 'react-helmet';
import rawContent from '../../content/Blogs/BlogMetaData.json';
import { useParams } from 'react-router-dom';

// 1. Définir les types
type MetaData = {
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

type BlogMetaData = {
  en: { meta: MetaData };
  fr: { meta: MetaData };
};

type RouteParams = {
  lang: 'en' | 'fr';
};

// 2. Cast JSON
const content = rawContent as BlogMetaData;

const BlogMetaDataRender = (): JSX.Element => {
  const { lang = 'en' } = useParams<RouteParams>();
  const Contents = content[lang];

  return (
    <>
      <Helmet>
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <title>{Contents.meta.title}</title>
        <meta name="description" content={Contents.meta.description} />
        <meta name="keywords" content={Contents.meta.keyWords} />

        {/* Open Graph Meta Tags */}
        <link rel="canonical" href="https://www.wouessi.com/en/Blogs" />
        <meta property="og:title" content={Contents.meta.openGraph.title} />
        <meta
          property="og:description"
          content={Contents.meta.openGraph.description}
        />
        <meta property="og:image" content={Contents.meta.openGraph.ogImage} />
        <meta property="og:type" content="website" />
        <meta property="og:image:alt" content="Wouessi digital" />
        <meta property="og:url" content={Contents.meta.openGraph.ogUrl} />

        {/* Twitter Meta Tags */}
        <meta name="twitter:title" content={Contents.meta.twitter.title} />
        <meta
          name="twitter:description"
          content={Contents.meta.twitter.description}
        />
        <meta name="twitter:image" content={Contents.meta.twitter.twitterImage} />
        <meta
          name="twitter:card"
          content={Contents.meta.twitter.twitterCardContent}
        />
      </Helmet>
    </>
  );
};

export default BlogMetaDataRender;
