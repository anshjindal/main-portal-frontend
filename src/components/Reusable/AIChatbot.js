import React, { useState, useEffect } from 'react';

const AIChatbot = () => {
  const [iframeKey, setIframeKey] = useState(0);

  useEffect(() => {
    // Update iframeKey to force iframe reload when the component mounts
    setIframeKey((prevKey) => prevKey + 1);
  }, []);

  return (
    <div className="webchat" style={{ height: '600px', width: '400px' }}>
      <iframe
        key={iframeKey} // This ensures the iframe is reloaded
        title={iframeKey}
        style={{ height: '100%', width: '100%', border: 'none' }}
        srcDoc={`
    <!doctype html>
    <html lang="en">
      <head></head>
      <body>
        <script src="https://cdn.botpress.cloud/webchat/v2.2/inject.js"></script>
        <script defer>
          window.botpress.on("webchat:ready", () => {
            botpress.open();
            });

          // Initialize the Botpress Webchat
          window.botpress.init({
            "botId": ${process.env.REACT_APP_BOTID},
             "configuration": {
    "botName": "Wouessi Digital",
    "botAvatar": "https://files.bpcontent.cloud/2024/12/25/22/20241225220141-A9XJY2D5.ico",
    "website": {
      "title": "https://www.wouessi.com/en",
      "link": "https://www.wouessi.com/en"
    },
    "email": {
      "title": " info@wouessi.com",
      "link": " info@wouessi.com"
    },
    "phone": {
      "title": "+1 844 317 2845",
      "link": "+1 844 317 2845"
    },
    "termsOfService": {},
    "privacyPolicy": {},
    "color": "#2b00ac",
    "variant": "solid",
    "themeMode": "light",
    "fontFamily": "inter",
    "radius": 1,
    "additionalStylesheetUrl": "https://files.bpcontent.cloud/2024/12/25/22/20241225220426-PQGWUM2C.css"
  },
            "clientId": ${process.env.REACT_APP_CLIENTID}
          });
        </script>
      </body>
    </html>`}
      ></iframe>
    </div>
  );
};

export default AIChatbot;
