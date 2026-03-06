"use client";

import { Factory, Building2, TrendingUp, Landmark, Users, GraduationCap } from "lucide-react";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";

const OTCNetworkSection = () => {
  const networkData = [
    {
      id: 1,
      title: "Industry",
      date: "Key Partner",
      content: "Enterprises and corporations that license technologies, provide market insights, and collaborate on R&D initiatives. Industry partners transform research into commercial products and services, driving economic growth and creating real-world impact.",
      category: "Commercial",
      icon: Factory,
      relatedIds: [2, 4, 5],
      status: "completed" as const,
      energy: 95,
    },
    {
      id: 2,
      title: "OTCs",
      date: "Technology Offices",
      content: "Offices of Technology Commercialization serve as the bridge between research and market. They manage intellectual property portfolios, facilitate technology transfer, and connect innovations with industry partners to enable successful commercialization.",
      category: "Core Network",
      icon: Building2,
      relatedIds: [1, 4, 5, 6],
      status: "completed" as const,
      energy: 90,
    },
    {
      id: 3,
      title: "VCs",
      date: "Investment Partners",
      content: "Venture capital firms and angel investors provide crucial funding for promising technologies and startups. They offer financial resources, strategic guidance, and industry connections to help innovations scale and reach market potential.",
      category: "Funding",
      icon: TrendingUp,
      relatedIds: [1, 2, 4],
      status: "in-progress" as const,
      energy: 85,
    },
    {
      id: 4,
      title: "Government (NCTC)",
      date: "National Hub",
      content: "The National Center of Technology Commercialization establishes the infrastructure, governance frameworks, and standardized processes that enable the entire ecosystem. NCTC provides platforms, resources, and coordination to streamline commercialization nationwide.",
      category: "Governance",
      icon: Landmark,
      relatedIds: [1, 2, 3, 5, 6],
      status: "completed" as const,
      energy: 100,
    },
    {
      id: 5,
      title: "Researchers",
      date: "Innovators",
      content: "Scientists, engineers, and inventors who create breakthrough technologies and solutions. Researchers drive innovation by pushing the boundaries of knowledge and developing inventions that address critical challenges across industries.",
      category: "Talent",
      icon: Users,
      relatedIds: [1, 2, 4, 6],
      status: "completed" as const,
      energy: 95,
    },
    {
      id: 6,
      title: "Research Centers & Universities",
      date: "Knowledge Hubs",
      content: "Academic institutions and research centers nurture talent, conduct cutting-edge research, and generate innovations. They provide the foundation for the ecosystem by training the next generation of researchers and creating new knowledge and technologies.",
      category: "Academic",
      icon: GraduationCap,
      relatedIds: [2, 4, 5],
      status: "completed" as const,
      energy: 90,
    },
  ];

  return (
    <section id="otc-network" className="w-full relative">
      {/* Header Overlay */}
      <div className="absolute top-0 left-0 right-0 z-10 py-12" style={{ background: 'linear-gradient(to bottom, rgba(1, 9, 61, 0.95), transparent)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            Innovation Ecosystem
          </h2>
          <p className="text-base md:text-lg text-white/90 leading-relaxed max-w-3xl mx-auto">
            A collaborative network of key stakeholders driving technology commercialization. Click any node to explore roles and connections.
          </p>
        </div>
      </div>

      {/* Radial Orbital Timeline */}
      <RadialOrbitalTimeline timelineData={networkData} />
    </section>
  );
};

export default OTCNetworkSection;
