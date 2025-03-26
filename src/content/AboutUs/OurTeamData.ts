import RodrigueFouafouHeadshot from '../../assets/Images/OurTeam/RodrigueFouafouHeadshot.webp';
import RosalinRimjhimHeadshot from '../../assets/Images/OurTeam/RosalinRimjhimHeadshot.webp';
import StriveMazungaHeadshot from '../../assets/Images/OurTeam/StriveMazungaHeadshot.webp';
import ReginaldNugentHeadshot from '../../assets/Images/OurTeam/ReginaldNugentHeadshot.webp';
import NelsonNwankwoHeadshot from '../../assets/Images/OurTeam/NelsonNwankwoHeadshot.webp';
import MarieNsanaHeadshot from '../../assets/Images/OurTeam/MarieNsanaHeadshot.webp';
import PamelaDefoHeadshot from '../../assets/Images/OurTeam/PamelaDefoHeadshot.webp';
import BillTinglingHeadshot from '../../assets/Images/OurTeam/BillTinglingHeadshot.webp';
import PatriciacharekaHeadshot from '../../assets/Images/OurTeam/PatriciaCharekaHeadshot.png';

interface TeamMember {
  image: string;
  title: string;
  subtitle: string;
  hovertitle: string;
  linkedinlink: string;
}

interface OurTeamContent {
  en: TeamMember[];
  fr: TeamMember[];
}

const OurTeamData: OurTeamContent = {
  en: [
    {
      image: RodrigueFouafouHeadshot,
      title: 'Rodrigue Fouafou',
      subtitle: 'CEO',
      hovertitle:
        'Welcome to the future of digital innovation at Wouessi Inc. Our mission is simple: to empower businesses globally through groundbreaking digital experiences.',
      linkedinlink: 'https://www.linkedin.com/in/rodriguefouafou/',
    },
    {
      image: RosalinRimjhimHeadshot,
      title: 'Rimjhim Rosalin',
      subtitle: 'COO',
      hovertitle:
        'Imagine a world where operational excellence is the norm, not the exception. At Wouessi Inc., we turn this vision into reality every day.',
      linkedinlink: 'https://www.linkedin.com/in/rimjhimrosalin/',
    },
    {
      image: StriveMazungaHeadshot,
      title: 'Strive Mazunga',
      subtitle: 'CTO',
      hovertitle:
        "At Wouessi Inc., we are redefining what's possible in technology. Our team is at the cutting edge of AI, blockchain, and advanced digital solutions, driving innovations that shape the future.",
      linkedinlink: 'https://www.linkedin.com/in/strivem/',
    },
    {
      image: PatriciacharekaHeadshot,
      title: 'Patricia Chareka',
      subtitle: 'VP of Partnership & Inclusion',
      hovertitle:
        'Welcome to the future of digital innovation at Wouessi Inc. Our mission is simple: to empower businesses globally through groundbreaking digital experiences.',
      linkedinlink: 'https://www.linkedin.com/in/patriciachareka/',
    },
    {
      image: ReginaldNugentHeadshot,
      title: 'Reginald Nugent',
      subtitle: 'CFO',
      hovertitle:
        "Financial stewardship is the backbone of Wouessi Inc.'s success. In a rapidly evolving digital realm, we provide the financial stability and foresight necessary for long-term success.",
      linkedinlink: 'https://www.linkedin.com/in/reginald-nugent-816673b/',
    },
    {
      image: NelsonNwankwoHeadshot,
      title: 'Nelson Nwankwo',
      subtitle: 'Director of Digital services',
      hovertitle:
        "Digital transformation is at the heart of Wouessi Inc.'s mission. We don't just navigate the digital world; we shape it, creating innovative solutions that deliver measurable results.",
      linkedinlink: 'https://www.linkedin.com/in/nelson-nwankwo-4b5a8778/',
    },
    {
      image: MarieNsanaHeadshot,
      title: 'Marie Noel Nsana',
      subtitle: 'Advisor',
      hovertitle:
        'Welcome to the future of digital innovation at Wouessi Inc. Our mission is simple: to empower businesses globally through groundbreaking digital experiences.',
      linkedinlink:
        'https://www.linkedin.com/in/marie-noel-nsana-cams-cbp-cbe-120a433/',
    },
    {
      image: PamelaDefoHeadshot,
      title: 'Pamela Moko Defo',
      subtitle: 'Advisor',
      hovertitle:
        'Welcome to the future of digital innovation at Wouessi Inc. Our mission is simple: to empower businesses globally through groundbreaking digital experiences.',
      linkedinlink:
        'https://www.linkedin.com/in/pamela-moko-defo-m-sc-8a7a5549/',
    },
    {
      image: BillTinglingHeadshot,
      title: 'Bill Tingling',
      subtitle: 'Advisor',
      hovertitle:
        'Welcome to the future of digital innovation at Wouessi Inc. Our mission is simple: to empower businesses globally through groundbreaking digital experiences.',
      linkedinlink: 'https://www.linkedin.com/in/billtingling/',
    },
  ],
  fr: [
    // 👇 Même contenu en français (copié de ton fichier original)
    // ...
  ],
};

export default OurTeamData;
