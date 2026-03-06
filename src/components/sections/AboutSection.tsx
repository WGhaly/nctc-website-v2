'use client';

import { Target, Eye, Zap } from "lucide-react";
import { Feature108 } from "@/components/ui/feature108";

const AboutSection = () => {
  const aboutData = {
    badge: "",
    heading: "Transforming Egyptian Innovation Into Economic Impact",
    description: "The National Center for Technology Commercialization bridges the gap between research and market-ready solutions.",
    tabs: [
      {
        value: "mission",
        icon: <Target className="h-auto w-4 shrink-0" />,
        label: "Our Mission",
        content: {
          badge: "",
          title: "Enabling Research Commercialization",
          description:
            "To enable the commercialization of Egyptian research and innovation by providing structured pathways, digital tools, and national partnerships that connect knowledge creators with industry and investment. We facilitate the transformation of academic discoveries into market-ready solutions that drive economic growth.",
          imageSrc:
            "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop",
          imageAlt: "Professional team collaboration on innovation strategy",
        },
      },
      {
        value: "vision",
        icon: <Eye className="h-auto w-4 shrink-0" />,
        label: "Our Vision",
        content: {
          badge: "",
          title: "Regional Leadership in Innovation",
          description:
            "To position Egypt as a regional leader in technology commercialization, where research-driven innovation fuels sustainable economic growth, industrial advancement, and societal impact. We envision an ecosystem where Egyptian innovation competes globally and creates lasting value for society.",
          imageSrc:
            "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
          imageAlt: "Modern city skyline representing regional innovation leadership",
        },
      },
      {
        value: "why-now",
        icon: <Zap className="h-auto w-4 shrink-0" />,
        label: "Why NCTC",
        content: {
          badge: "",
          title: "Unlocking Egypt's Research Potential",
          description:
            "Egypt holds a vast reserve of untapped research, patents, and technical expertise across its universities and research centers. As global markets rapidly evolve and technology-driven economies accelerate, NCTC ensures that Egyptian innovation does not remain confined to labs—but reaches industries, markets, and communities where it can create measurable value.",
          imageSrc:
            "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=600&fit=crop",
          imageAlt: "University research and academic collaboration",
        },
      },
    ],
  };

  return (
    <section id="about" className="w-full bg-white">
      <Feature108 {...aboutData} />
    </section>
  );
};

export default AboutSection;
