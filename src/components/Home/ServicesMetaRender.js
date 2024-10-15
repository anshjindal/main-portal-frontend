import React from "react";
import { Helmet } from "react-helmet";
import content from "../../content/Services/ServicesMetaData.json";

const ServicesMetaRender = ({ lang }) => {
  const Contents = content[lang];
  return (
    <>
       <Helmet>
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"/>
        <title>{Contents.meta.title}</title>
        <meta name="description" content={Contents.meta.description} />
        <meta name="keywords" content={Contents.meta.kewyWords} />

        {/* open graph meta tags */}
        <link rel="canonical" href="https://www.wouessi.com/en/Services"/>
        <meta property="og:title" content={Contents.meta.openGraph.title} />
        <meta property="og:description" content={Contents.meta.openGraph.description}/>
        <meta property="og:type" content="website"/>
        <meta property="og:image" content={Contents.meta.openGraph.ogImage} />
        <meta property="og:image:alt" content="Wouessi digital"></meta>
        <meta name="og:url" content={Contents.meta.openGraph.ogUrl} />

        {/* Twitter meta tags */}
        <meta name="twitter:title" content={Contents.meta.twitter.title} />
        <meta name="twitter:description" content={Contents.meta.twitter.description}/>
        <meta name="twitter:image" content={Contents.meta.twitter.twitterImage}/>
        <meta name="twitter:card" content={Contents.meta.twitter.twitterCardContent}/>
      </Helmet>
    </>
  );
};

export default ServicesMetaRender;
