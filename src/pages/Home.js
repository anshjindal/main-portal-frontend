import Achievements from '../components/Home/Achievements';
import NewsletterRegister from '../components/Reusable/NewsletterRegister.js';
import OurClients from '../components/Home/OurClients';
import ClientTestimonySlider from '../components/Home/ClientTestimonySlider';
import RecentProjects from '../components/Home/RecentProjects';
import RecentBlogs from '../components/Home/RecentBlogs';
import CallToActionSection from '../components/Reusable/CallToActionSection';
import WhyChooseUS from '../components/Home/WhyChooseUs';
import ServiceSpotlight from '../components/Home/ServiceSpotlight';
import OurServices from '../components/Home/OurServices';
import OurVision from '../components/Home/OurVision';
import Hero from '../components/Home/Hero';
// import PronunciationButton from "../components/Home/PronunciationButton";
import { useParams } from 'react-router-dom';
import HomeMetaRender from '../components/Home/HomeMetaDataRender.js';

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

      <ClientTestimonySlider lang={lang} />

      {/*<NewsletterRegister lang={lang}/> */}

      {/*<RecentBlogs lang={lang}/> */}

      <CallToActionSection CallToAction="workwithus" lang={lang} />
    </div>
  );
}

export default Home;
