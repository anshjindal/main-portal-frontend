import React from 'react';
import '../styles/Services.css';
import CopyrightIcon from '../assets/SVG/CopyrightPolicyIcon.svg';
import Accordion from '../components/Reusable/Accordion';
import CopyrightData from '../content/PolicyPages/CopyrightPolicyText.json';
import ContactUsSection from '../components/Reusable/ContactUsSection';
import { useParams } from 'react-router-dom';

// Define the type for each section in the content
interface SectionContent {
  Heading?: string;
  Content?: string[];
}

// Define the overall content type for each language
interface PolicyContent {
  Title: string;
  Description: string;
  [key: string]: string | string[] | SectionContent | undefined;
}

// Define route params
interface RouteParams {
  lang?: keyof typeof CopyrightData;
}

const CopyrightPolicy: React.FC = () => {
  const { lang } = useParams<{ lang?: string }>();
  const Content: PolicyContent = CopyrightData[lang as keyof typeof CopyrightData];

  const sections: string[] = [
    'OwnershipofContent',
    'LimitedLicense',
    'ProhibitedUses',
    'UserContributions',
    'Trademarks',
    'CopyrightDisclaimer',
    'CopyrightInfringementNotification',
    'LinkstoThirdPartySites',
    'TerminationofAccess',
    'ChangestoCopyrightNotice',
    'ContactUs',
  ];

  return (
    <div className="flex justify-center mt-[5vw] page-background">
      <div className="w-[80%]">
        <div className="items-center justify-between max-[450px]:flex-col max-[450px]:gap-y-[6vw] relative">
          <div
            style={{ backgroundImage: `url(${CopyrightIcon})` }}
            className="w-[20vw] h-[20vw] bg-cover absolute right-40 max-[450px]:w-[50vw] max-[450px]:h-[50vw] max-[450px]:left-20 max-[450px]:top-5"
          ></div>
          <div>
            <h1 className="text-left w-[70%] text-[4vw]/[4vw] font-bold max-[450px]:text-[7.5vw]/[8.5vw] max-[450px]:w-full">
              {Content.Title}
            </h1>
          </div>
          <div className="flex gap-x-[2vw] mt-[3vw] max-[450px]:flex-col max-[450px]:gap-y-[2vw]">
            <div className="w-[7vw] border-t-[0.1vw] border-[#666666] max-[450px]:w-full max-[450px]:mt-[1vw] max-[450px]:w-[20vw]"></div>
            <div className="w-[65%] max-[450px]:w-[100%] max-[450px]:mt-[2vw]">
              <p className="text-left text-[1.1vw] max-[450px]:text-[3vw] max-[450px]:font-semibold">
                {Content.Description}
              </p>
            </div>
          </div>
        </div>

        <div className="mb-[1vw] mt-[5vw] max-[450px]:mt-[5vw]">
          {sections.map((section) => (
            <Accordion
              key={section}
              title={(Content[section] as SectionContent)?.Heading || section}
              InnerTextData={(Content[section] as SectionContent)?.Content || []}
            />
          ))}
        </div>

        <ContactUsSection />
      </div>
    </div>
  );
};

export default CopyrightPolicy;
