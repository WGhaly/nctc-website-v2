'use client';

import { Building2, Scale, TrendingUp } from 'lucide-react';

const StakeholdersSection = () => {
  const stakeholders = [
    {
      icon: <Building2 className="w-8 h-8" />,
      title: 'Universities & Research Institutions',
      description: 'Generate cutting-edge research and technologies ready for commercialization.',
      stats: '35+ Institutions',
    },
    {
      icon: <Scale className="w-8 h-8" />,
      title: 'Industry Partners',
      description: 'Provide real-world validation, manufacturing expertise, and market access.',
      stats: '6 Innovation Clusters',
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Investors & Funds',
      description: 'Support scaling through venture capital, grants, and strategic funding.',
      stats: '1 National Platform',
    }
  ];

  return (
    <section id="stakeholders" className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#01093d' }}>
            Collaborative Ecosystem
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl">
            NCTC brings together Egypt's innovation stakeholders to accelerate technology commercialization and economic impact.
          </p>
        </div>

        {/* Horizontal Stat Cards */}
        <div className="space-y-6 mb-12">
          {stakeholders.map((stakeholder, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 group hover:-translate-y-1"
            >
              <div className="flex flex-col md:flex-row">
                {/* Stats Side */}
                <div 
                  className="md:w-1/3 p-8 flex flex-col items-center justify-center text-white relative overflow-hidden"
                  style={{ background: index === 0 ? 'linear-gradient(135deg, #01093d, #243996)' : index === 1 ? 'linear-gradient(135deg, #243996, #4a81f6)' : 'linear-gradient(135deg, #4a81f6, #243996)' }}
                >
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white blur-2xl" />
                    <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full bg-white blur-xl" />
                  </div>
                  
                  <div className="relative z-10 text-center">
                    <div className="w-20 h-20 rounded-2xl flex items-center justify-center bg-white/10 backdrop-blur-sm mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      {stakeholder.icon}
                    </div>
                    <div className="text-4xl font-bold mb-2">
                      {stakeholder.stats.split(' ')[0]}
                    </div>
                    <div className="text-sm text-white/80 uppercase tracking-wide">
                      {stakeholder.stats.split(' ').slice(1).join(' ')}
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="flex-1 p-8">
                  <h3 className="text-2xl font-bold mb-4" style={{ color: '#01093d' }}>
                    {stakeholder.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {stakeholder.description}
                  </p>
                  <div className="mt-4 h-1 w-20 rounded-full" style={{ background: 'linear-gradient(90deg, #4a81f6, #243996)' }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StakeholdersSection;
