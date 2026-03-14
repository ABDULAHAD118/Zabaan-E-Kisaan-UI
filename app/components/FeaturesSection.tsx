import React from "react";
import FeatureCard from "./FeatureCard";

interface FeaturesSectionProps {
  text: {
    heading: string;
    subheading: string;
    items: ReadonlyArray<{
      icon: string;
      title: string;
      description: string;
      points: ReadonlyArray<string>;
    }>;
  };
}

const FeaturesSection: React.FC<FeaturesSectionProps> = ({ text }) => {
  const colorStyles = [
    {
      bgColorClass:
        "bg-gradient-to-br from-green-50 to-green-100 dark:from-gray-700 dark:to-gray-600",
      iconBgClass: "bg-green-600",
    },
    {
      bgColorClass:
        "bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-700 dark:to-gray-600",
      iconBgClass: "bg-blue-600",
    },
    {
      bgColorClass:
        "bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-gray-700 dark:to-gray-600",
      iconBgClass: "bg-yellow-600",
    },
  ];

  return (
    <section id="modules" className="bg-white py-20 dark:bg-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
            {text.heading}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 md:text-xl">
            {text.subheading}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {text.items.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              id={index === 2 ? "prices" : feature.title}
              bgColorClass={
                colorStyles[index]?.bgColorClass || colorStyles[0].bgColorClass
              }
              iconBgClass={
                colorStyles[index]?.iconBgClass || colorStyles[0].iconBgClass
              }
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              points={feature.points}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
