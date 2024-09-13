import Achievements from "../components/Home/Achievements";
import NewsletterRegister from "../components/Reusable/NewsletterRegister.js";
import OurClients from "../components/Home/OurClients";
import ClientTestimonySlider from "../components/Home/ClientTestimonySlider";
import RecentProjects from "../components/Home/RecentProjects";
import RecentBlogs from "../components/Home/RecentBlogs";
import WhyChooseUS from "../components/Home/WhyChooseUs";
import ServiceSpotlight from "../components/Home/ServiceSpotlight";
import OurServices from "../components/Home/OurServices";
import OurVision from "../components/Home/OurVision";
import Hero from "../components/Home/Hero";
import PronunciationButton from "../components/Home/PronunciationButton";

function Home() {

  return (
    <div className="overflow-hidden page-background">

      <Hero />

      <PronunciationButton/>

      <OurClients />

      <OurVision />

      <OurServices />

      <ServiceSpotlight />

      <WhyChooseUS />

      <Achievements />

      <RecentProjects />

      <ClientTestimonySlider />

      <NewsletterRegister />

      <RecentBlogs />
      

    </div>
  );
}

export default Home;
