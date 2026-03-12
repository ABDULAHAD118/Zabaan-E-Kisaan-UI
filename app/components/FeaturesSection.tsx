import React from "react";
import FeatureCard from "./FeatureCard";

const FeaturesSection = () => {
  const features = [
    {
      bgColorClass:
        "bg-gradient-to-br from-green-50 to-green-100 dark:from-gray-700 dark:to-gray-600",
      iconBgClass: "bg-green-600",
      icon: "🎤",
      title: "Voice Assistant",
      description:
        "Ask questions about your crops, get weather updates, and receive farming advice using natural voice commands.",
    },
    {
      bgColorClass:
        "bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-700 dark:to-gray-600",
      iconBgClass: "bg-blue-600",
      icon: "🤖",
      title: "AI Crop Analysis",
      description:
        "Advanced AI algorithms analyze your crops for diseases, pests, and growth optimization recommendations.",
    },
    {
      bgColorClass:
        "bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-gray-700 dark:to-gray-600",
      iconBgClass: "bg-yellow-600",
      icon: "🌤️",
      title: "Weather Insights",
      description:
        "Real-time weather data and forecasts tailored to your farm location for better planning.",
    },
    {
      bgColorClass:
        "bg-gradient-to-br from-purple-50 to-purple-100 dark:from-gray-700 dark:to-gray-600",
      iconBgClass: "bg-purple-600",
      icon: "📈",
      title: "Market Prices",
      description:
        "Stay updated with real-time crop prices and market trends to make informed selling decisions.",
    },
    {
      bgColorClass:
        "bg-gradient-to-br from-red-50 to-red-100 dark:from-gray-700 dark:to-gray-600",
      iconBgClass: "bg-red-600",
      icon: "👨‍🌾",
      title: "Expert Support",
      description:
        "Connect with agricultural experts and get personalized advice for your specific farming challenges.",
    },
  ];

  return (
    <section id="features" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Powerful Features for Modern Farmers
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Everything you need to optimize your farming operations
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              bgColorClass={feature.bgColorClass}
              iconBgClass={feature.iconBgClass}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
