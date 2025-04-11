import Achievements from '../components/Home/Achievements';
import OurClients from '../components/Home/OurClients';
import ClientTestimonySlider from '../components/Home/ClientTestimonySlider';
import RecentProjects from '../components/Home/RecentProjects';
import CallToActionSection from '../components/Reusable/CallToActionSection';
import WhyChooseUS from '../components/Home/WhyChooseUs';
import ServiceSpotlight from '../components/Home/ServiceSpotlight';
import OurServices from '../components/Home/OurServices';
import OurVision from '../components/Home/OurVision';
import Hero from '../components/Home/Hero';
import { useParams } from 'react-router-dom';
import HomeMetaRender from '../components/Home/HomeMetaDataRender.js';
import React from 'react';

function Home() {
  const { lang } = useParams();

  return (
    <div className="page-background">
      <HomeMetaRender lang={lang} />

      {/* <PronunciationButton lang={lang}/>   */}

      <Hero lang={lang} />

      <OurClients lang={lang} />

      <OurVision lang={lang} />

      <OurServices lang={lang} />

      <ServiceSpotlight lang={lang} />

      <WhyChooseUS lang={lang} />

      <Achievements lang={lang} />

      <RecentProjects lang={lang} />

      <ClientTestimonySlider />

      {/*<NewsletterRegister lang={lang}/> */}

      {/*<RecentBlogs lang={lang}/> */}

      <CallToActionSection CallToAction="workwithus" lang={lang} />
    </div>
  );
}

export default Home;
