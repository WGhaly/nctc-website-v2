"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface TabContent {
  badge: string;
  title: string;
  description: string;
  buttonText?: string;
  imageSrc: string;
  imageAlt: string;
}

interface Tab {
  value: string;
  icon: React.ReactNode;
  label: string;
  content: TabContent;
}

interface Feature108Props {
  badge?: string;
  heading?: string;
  description?: string;
  tabs?: Tab[];
  onButtonClick?: (tabValue: string) => void;
}

const Feature108 = ({
  badge = "shadcnblocks.com",
  heading = "A Collection of Components Built With Shadcn & Tailwind",
  description = "Join us to build flawless web solutions.",
  tabs = [],
  onButtonClick,
}: Feature108Props) => {
  return (
    <section className="py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4 text-center">
          {badge && (
            <Badge 
              variant="outline" 
              className="border-[#4a81f6] px-4 py-1.5"
              style={{ color: '#01093d' }}
            >
              {badge}
            </Badge>
          )}
          <h1 
            className="max-w-2xl text-3xl font-bold md:text-4xl lg:text-5xl"
            style={{ color: '#01093d' }}
          >
            {heading}
          </h1>
          <p className="text-gray-600 max-w-3xl text-base md:text-lg">{description}</p>
        </div>
        <Tabs defaultValue={tabs[0]?.value} className="mt-8 md:mt-12">
          <TabsList className="w-full flex flex-col items-center justify-center gap-3 sm:flex-row md:gap-6 lg:gap-10 bg-transparent h-auto p-0">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="nctc-tab-trigger flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition-all w-full sm:w-auto"
              >
                {tab.icon} {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
          <div className="mx-auto mt-8 max-w-screen-xl rounded-2xl p-6 md:p-10 lg:p-16" style={{ backgroundColor: 'rgba(74, 129, 246, 0.05)' }}>
            {tabs.map((tab) => (
              <TabsContent
                key={tab.value}
                value={tab.value}
                className="grid place-items-center gap-10 md:gap-16 lg:grid-cols-2 lg:gap-12 mt-0"
              >
                <div className="flex flex-col gap-5 order-2 lg:order-1">
                  {tab.content.badge && (
                    <Badge 
                      variant="outline" 
                      className="w-fit bg-white px-3 py-1"
                      style={{ 
                        borderColor: '#4a81f6',
                        color: '#243996'
                      }}
                    >
                      {tab.content.badge}
                    </Badge>
                  )}
                  <h3 
                    className="text-2xl font-bold md:text-3xl lg:text-4xl xl:text-5xl"
                    style={{ color: '#01093d' }}
                  >
                    {tab.content.title}
                  </h3>
                  <p className="text-gray-700 text-base lg:text-lg leading-relaxed">
                    {tab.content.description}
                  </p>
                  {tab.content.buttonText && (
                    <Button
                      className="mt-2.5 w-fit gap-2 text-white font-semibold"
                      size="lg"
                      onClick={() => onButtonClick?.(tab.value)}
                      style={{
                        background: 'linear-gradient(135deg, #4a81f6, #243996)',
                      }}
                    >
                      {tab.content.buttonText}
                    </Button>
                  )}
                </div>
                <img
                  src={tab.content.imageSrc}
                  alt={tab.content.imageAlt}
                  className="rounded-xl w-full h-auto object-cover shadow-lg order-1 lg:order-2"
                />
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export { Feature108 };
