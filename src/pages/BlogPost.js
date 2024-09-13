import React from "react";
import { useState } from "react";
import "../styles/Blogpost.css";
import BlogPost1 from "../assets/Images/BlogPost1.png";
import BlogPost2 from "../assets/Images/BlogPost2.png";
import BlogsCarousel from "../components/Reusable/BlogsCarousel";
import IconShare from "../assets/Images/Icon-Share.png";
import IconLinkedin from "../assets/Images/Icon-Linkedin.png";
import IconTiktok from "../assets/Images/Icon-Tiktok.png";
import IconInsta from "../assets/Images/Icon-Insta.png";
import CallToActionSection from "../components/Reusable/CallToActionSection";


function BlogPost() {
  const [activeIndex, setActiveIndex] = useState(null);
  const sections = ["SECTION 1", "SECTION 2", "SECTION 3", "SECTION 4"];
  const media_icons = [IconShare, IconLinkedin, IconTiktok, IconInsta];

  return (
    <div className="flex justify-center mt-[5vw] mb-[5vw] page-background">
      <div className="w-[80%]">
        {/* Header Section */}
        <div className="flex justify-between mb-[2vw]">
          <p>July 12th, 2024</p>
          <div className="flex space-x-[1vw]">
            {media_icons.map((icon, index) => (
              <button
                key={index}
                style={{ backgroundImage: `url(${icon})` }}
                className="w-[1.4vw] h-[1.4vw] bg-cover bg-center bg-no-repeat border-none cursor-pointer focus:outline-none"
                aria-label={`Social media icon ${index + 1}`}></button>
            ))}
          </div>
        </div>

        {/* Main Content Section */}
        <div className="flex">
          {/* Sidebar Navigation */}
          <div className="w-[20%] space-y-[1vw] sticky top-[20vw] self-start">
            {sections.map((section, index) => (
              <div key={index} className="relative">
                <button
                  className={`border-[#250978] text-[#666666] border-[0.2vw] rounded-full px-[1vw] py-[0.2vw] text-[1vw] bg-transparent cursor-pointer transition duration-300 ${
                    activeIndex === index
                      ? "bg-white text-[#250978]"
                      : "bg-transparent text-[#666666]"
                  } ${
                    activeIndex === index
                      ? "border-[#250978]"
                      : "border-transparent"
                  } hover:bg-[#250978] hover:text-white`}
                  onClick={() => setActiveIndex(index)}>
                  {section}
                </button>
                {/* Adjust spacing or add any additional content here if needed */}
                <p className="mt-2" />
              </div>
            ))}
          </div>

          {/* Blogs Content */}
          <div className="w-[60%] mb-[7vw]">
            <div className="m-[2vw]">
              {/* Tags and Read Time */}
              <div className="flex items-center mb-[1vw] space-x-[1vw]">
                <button
                  className="border-[#D26B2F] text-[#D26B2F] border-[0.2vw] rounded-full px-[1vw] py-[0.2vw] text-[1vw] bg-transparent cursor-pointer hover:text-white hover:bg-[#D26B2F] transition duration-300"
                  disabled>
                  SEO SERVICES
                </button>
                <p className="text-[1.1vw]">5 MIN Read</p>
              </div>

              {/* Blogs Title and Image */}
              <h1 className="text-[3.5vw] font-bold leading-[4.2vw]">
                Key Reasons Why Your Business Needs Mobile SEO Services
              </h1>
              <div
                style={{ backgroundImage: `url(${BlogPost1})` }}
                className="h-[40vw] bg-cover bg-center my-[2vw]"></div>

              {/* Blogs Content */}
              <div className="space-y-[2vw] text-left">
                <p className="w-[80%]">
                  Today, smartphones have become an indispensable part of our
                  lives. Therefore, as the number of mobile users continues to
                  skyrocket, businesses must adapt their strategies to cater to
                  this growing audience. One such essential strategy is Mobile
                  Search Engine Optimization Services. In this comprehensive
                  guide, we delve into the key reasons why your business needs
                  to prioritize Mobile SEO Services for sustainable growth.
                </p>

                <h2 className="text-[2vw] font-bold">
                  Reasons for Using Mobile SEO Services
                </h2>

                <p className="font-bold" style={{ marginBottom: "0" }}>
                  Explosive Growth of Mobile Users
                </p>
                <p style={{ marginTop: "0" }}>
                  With the proliferation of smartphones, more and more people
                  are accessing the internet through their mobile devices.
                  Statistics reveal that mobile devices account for over half of
                  global web traffic. Ignoring mobile users means missing out on
                  a significant portion of potential customers. Mobile SEO
                  Services ensure that your website is optimized for mobile
                  users, offering them a seamless browsing experience and
                  increasing the likelihood of conversion.
                </p>

                <div
                  style={{ backgroundImage: `url(${BlogPost2})` }}
                  className="h-[40vw] bg-cover bg-center my-[2vw]"></div>

                <p className="font-bold" style={{ marginBottom: "0" }}>
                  Enhanced User Experience (UX)
                </p>
                <p style={{ marginTop: "0" }}>
                  User experience plays a pivotal role in determining the
                  success of your online presence. Mobile SEO Services focus on
                  optimizing your website's design, speed, and functionality for
                  mobile users. This includes implementing responsive design,
                  improving page load times, and streamlining navigation. By
                  providing users with a smooth and intuitive browsing
                  experience, you can keep them engaged and encourage them to
                  explore your site further.
                </p>

                <p className="font-bold" style={{ marginBottom: "0" }}>
                  Higher Search Engine Rankings
                </p>
                <p style={{ marginTop: "0" }}>
                  Search engines, such as Google, prioritize mobile-friendly
                  websites in their search results. With Google's mobile-first
                  indexing, the mobile version of your site serves as the
                  primary source for determining its ranking in search engine
                  results pages (SERPs). By investing in Mobile SEO Services,
                  you can ensure that your website ranks higher in mobile search
                  results, driving organic traffic and increasing your
                  visibility to potential customers.
                </p>

                <p className="font-bold" style={{ marginBottom: "0" }}>
                  Local SEO Optimization
                </p>
                <p style={{ marginTop: "0" }}>
                  Mobile devices play a significant role in local searches, with
                  users often seeking nearby businesses while on the go. Mobile
                  SEO Services incorporate local SEO strategies to optimize your
                  website for local searches, such as Google My Business
                  optimization, local keyword targeting, and location-based
                  content. This helps businesses attract local customers and
                  improve their visibility in local search results, ultimately
                  driving foot traffic and sales.
                </p>

                <p className="font-bold" style={{ marginBottom: "0" }}>
                  Improved Mobile Conversion Rates
                </p>
                <p style={{ marginTop: "0" }}>
                  A mobile-friendly website isn't just about providing a better
                  user experience—it's also about driving conversions. Mobile
                  SEO Services focus on optimizing key elements of your website,
                  such as call-to-action buttons, forms, and checkout processes,
                  for mobile users. Removing barriers to conversion and making
                  it easier for users to take action on your site enables you to
                  significantly improve your mobile conversion rates and
                  generate more leads or sales.
                </p>

                <p className="font-bold" style={{ marginBottom: "0" }}>
                  Stay Ahead of the Competition
                </p>
                <p style={{ marginTop: "0" }}>
                  In today's fiercely competitive digital landscape, staying
                  ahead of the competition is essential for business survival.
                  By investing in Mobile SEO Services, you can gain a
                  competitive edge by ensuring that your website outperforms
                  competitors in mobile search rankings. Moreover, businesses
                  that prioritize mobile optimization demonstrate their
                  commitment to meeting the evolving needs of consumers, which
                  can enhance brand credibility and trustworthiness.
                </p>

                <p className="font-bold" style={{ marginBottom: "0" }}>
                  Adaptation to Voice Search
                </p>
                <p style={{ marginTop: "0" }}>
                  The rise of voice search technology, driven by virtual
                  assistants like Siri, Alexa, and Google Assistant, has
                  transformed the way users search for information online.
                  Mobile SEO Services help businesses adapt to the growing
                  popularity of voice search by optimizing their content for
                  natural language queries and long-tail keywords. Ensuring that
                  your website is voice-search-friendly enables you to capture
                  traffic from users who prefer to interact with their mobile
                  devices using voice commands.
                </p>

                <p className="font-bold" style={{ marginBottom: "0" }}>
                  Scalability and Future-Proofing
                </p>
                <p style={{ marginTop: "0" }}>
                  Investing in Mobile SEO Services isn't just about short-term
                  gains—it's about laying a foundation for long-term success. As
                  mobile technology continues to evolve, businesses that
                  prioritize mobile optimization will be better equipped to
                  adapt to future changes and innovations. By future-proofing
                  your website with Mobile SEO Services, you can ensure that
                  your business remains relevant and competitive in the
                  ever-evolving digital landscape.
                </p>
                <h2 className="text-[2vw] font-bold">
                  Tools and Tips for Successful Mobile SEO Optimization
                </h2>
                <p>
                  Implementing effective Mobile SEO strategies requires the
                  right tools and techniques. Here are some essential tools and
                  specific tips to help you excel in Mobile SEO optimization:
                </p>
                <ul class="core-web-vitals p-5">
                  <li>
                    <strong>Google's Mobile-Friendly Test:</strong> Start by
                    assessing your website's mobile-friendliness using Google's
                    Mobile-Friendly Test. This tool analyzes your site's mobile
                    compatibility and provides actionable insights for
                    improvement. Address any issues identified by the test to
                    ensure a seamless mobile experience for users.
                  </li>
                  <li>
                    <strong>Responsive Design:</strong> Adopt a responsive web
                    design approach to ensure that your website adapts
                    seamlessly to various screen sizes and devices. Responsive
                    design eliminates the need for separate mobile and desktop
                    versions of your site, streamlining maintenance and ensuring
                    consistent user experience across devices.
                  </li>
                  <li>
                    <strong>Optimize Page Speed:</strong> Mobile users expect
                    fast-loading websites, and page speed is a crucial ranking
                    factor for both mobile and desktop searches. Use tools like
                    Google PageSpeed Insights or GTmetrix to identify factors
                    affecting your site's performance and optimize accordingly.
                    Compress images, minify CSS and JavaScript, and leverage
                    browser caching to improve page load times.
                  </li>
                  <li>
                    <strong>Mobile-First Indexing:</strong> With Google's
                    mobile-first indexing, prioritize mobile optimization to
                    ensure that your site ranks well in search results. Optimize
                    your mobile content, metadata, and structured data markup to
                    align with Google's mobile-first indexing guidelines. Pay
                    special attention to mobile usability issues flagged in
                    Google Search Console and address them promptly.
                  </li>
                  <li>
                    <strong>Local SEO Optimization for Mobile:</strong> Enhance
                    your visibility in local search results by optimizing your
                    website for local SEO. Claim and optimize your Google My
                    Business listing, ensure consistent NAP (name, address,
                    phone number) information across online directories, and
                    create location-specific content targeting local keywords.
                    Encourage customer reviews and testimonials to boost your
                    local credibility.
                  </li>
                  <li>
                    <strong>Mobile-Optimized Content:</strong> Tailor your
                    content to suit the preferences and browsing habits of
                    mobile users. Create concise, scannable content that is easy
                    to digest on smaller screens. Use short paragraphs, bullet
                    points, and subheadings to improve readability. Optimize
                    images and videos for mobile viewing and ensure that
                    multimedia content doesn't slow down page load times.
                  </li>
                  <li>
                    <strong>Regular Mobile SEO Audits:</strong> Perform regular
                    audits of your mobile site to identify and address any
                    issues affecting its performance and usability. Use tools
                    like Screaming Frog or Moz's Site Crawl to conduct
                    comprehensive SEO audits and track mobile-specific metrics
                    such as mobile traffic, bounce rates, and conversion rates.
                    Monitor changes in mobile search rankings and algorithm
                    updates to stay ahead of the curve.
                  </li>
                </ul>

                <p className="font-bold" style={{ marginBottom: "0" }}>
                  Conclusion
                </p>
                <p style={{ marginTop: "0" }}>
                  Embracing Mobile SEO Services is imperative for businesses
                  seeking sustained growth and relevance in today's
                  mobile-dominated digital landscape. Investing in Mobile SEO
                  Services not only yields short-term benefits but also lays the
                  foundation for long-term success by future-proofing your
                  website and ensuring its adaptability to evolving mobile
                  technologies. By embracing Mobile SEO Services, businesses can
                  unlock new avenues for growth, reach a wider audience, and
                  solidify their position in the competitive digital
                  marketplace. {" "}
                </p>
                <p>
                  Are you ready to elevate your online presence and tap into the
                  immense potential of mobile users? Partner with Wouessi for
                  comprehensive Mobile SEO Services tailored to your business
                  needs. With our expertise in mobile optimization techniques
                  and proven track record of driving results, we'll help you
                  boost your search engine rankings, enhance user experience,
                  and maximize conversions on mobile devices. Don't miss out on
                  the opportunity to unlock new growth avenues for your
                  business. Contact us today to get started on your Mobile SEO
                  journey! {" "}
                </p>
              </div>
            </div>
          </div>

          {/* Subscription Section */}
          <div className="w-[20%] space-y-[2vw] sticky top-[20vw] self-start">
            <div className="bg-white p-[1vw]">
              <p className="text-[1.3vw] font-semibold text-left">
                SIGN UP TO BE NOTIFIED FOR MORE
              </p>
              <div className="relative mt-[2vh]">
                <input
                  type="email"
                  placeholder="EMAIL HERE"
                  className="w-full p-[0.4vw] pr-[3.5vw] border-[0.2vw] border-[#2703A5]"
                />
                <button
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#2703A5] text-orange-500 px-[0.6vw] py-[0.5vw] border-none cursor-pointer focus:outline-none"
                  aria-label="Submit">
                  &#8594;
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Section */}
        <BlogsCarousel />

        {/* Call to Action Section */}
        <CallToActionSection
          Content="We would love to hear more about your project"
          CallToAction="Let's Talk"
          Title="Work With Us"
        />
      </div>
    </div>
  );
}

export default BlogPost;
