"use client";

import { FeaturesSectionWithHoverEffects } from "@/components/ui/feature-section-with-hover-effects";
import { 
  FileSearch, 
  TrendingUp, 
  Database,
  Shield,
  Lightbulb,
  Target
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      title: "Technology Readiness Level (TRL) Assessment",
      description:
        "A systematic evaluation of a technology's maturity, from basic principles (TRL 1) to full system proven in an operational environment (TRL 9). We provide an objective, evidence-based assessment to identify critical gaps and development risks before significant resources are committed.",
      icon: <FileSearch className="w-8 h-8" />,
    },
    {
      title: "Market Readiness Level (MRL) Assessment",
      description:
        "An evaluation of a technology's commercial maturity, from initial market concept (MRL 1) to full commercial traction (MRL 9). We assess customer discovery, competitive positioning, regulatory pathways, and go-to-market strategy to bridge the gap between a lab prototype and a commercially viable product.",
      icon: <TrendingUp className="w-8 h-8" />,
    },
    {
      title: "Prior Art Search",
      description:
        "Determines whether an invention is worth protecting before filing costs are incurred. We evaluate novelty, inventive step, and industrial applicability against global prior art, while also assessing the technical strength and differentiation of the invention.",
      icon: <Database className="w-8 h-8" />,
    },
    {
      title: "IP Protection",
      description:
        "End-to-end management of the patent process, from drafting and filing to prosecution and grant. Our patent agents and attorneys translate your technical invention into robust legal claims, navigate office actions, and secure the strongest possible protection for your innovation.",
      icon: <Shield className="w-8 h-8" />,
    },
    {
      title: "Feasibility Study",
      description:
        "A comprehensive, multi-dimensional assessment of a proposed project's viability. We evaluate technical, economic, legal, operational, and scheduling factors to provide a data-driven \"go/no-go\" recommendation, identifying hidden costs and critical risks early.",
      icon: <Lightbulb className="w-8 h-8" />,
    },
    {
      title: "Commercialization",
      description:
        "An end-to-end pathway for transforming a patented technology into a market-ready asset with secured revenue streams. We manage the entire pipeline - from securing legal mandates and building business cases to developing licensing strategies and negotiating with industrial partners.",
      icon: <Target className="w-8 h-8" />,
    },
  ];

  return (
    <section id="services" className="w-full py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            style={{ color: '#01093d' }}
          >
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive support for transforming research into market-ready innovations
          </p>
        </div>

        {/* Services Grid */}
        <FeaturesSectionWithHoverEffects features={services} />
      </div>
    </section>
  );
};

export default ServicesSection;
