import React from "react";
import { Helmet } from "react-helmet";
import content from "../../content/Services/ServicesMetaData.json";

const ServicesMetaRender = ({ lang }) => {
  const Contents = content[lang];
  return (
    <>
       <Helmet>
        <title>{Contents.meta.title}</title>
        <meta name="description" content={Contents.meta.description} />
        <meta name="keywords" content={Contents.meta.kewyWords} />

        {/* open graph meta tags */}
        <meta property="og:title" content={Contents.meta.openGraph.title} />
        <meta
          property="og:description"
          content={Contents.meta.openGraph.description}
        />
        <meta property="og:image" content={Contents.meta.openGraph.ogImage} />
        <meta name="og:url" content={Contents.meta.openGraph.ogUrl} />
      </Helmet>
    </>
  );
};

export default ServicesMetaRender;
