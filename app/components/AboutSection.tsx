import React from "react";

const AboutSection = () => {
  const benefits = [
    {
      icon: "🚀",
      title: "Increase Productivity",
      description: "Boost your farm's efficiency by up to 40%",
    },
    {
      icon: "💰",
      title: "Reduce Costs",
      description: "Save on water, fertilizers, and labor costs",
    },
    {
      icon: "🌱",
      title: "Sustainable Farming",
      description: "Promote eco-friendly farming practices",
    },
  ];

  const features = [
    "24/7 AI-powered farming assistance",
    "Voice-activated commands in Urdu languages",
    "Real-time crop monitoring and alerts",
    "Data-driven farming recommendations",
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Empowering Farmers with Technology
            </h2>
            <p className="text-xl mb-6">
              Our digital farmer assistance platform combines cutting-edge AI
              technology with voice recognition to make farming more efficient,
              sustainable, and profitable.
            </p>
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-3">
                    ✓
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">
              Why Choose SmartAgri AI Voice Assistance?
            </h3>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <span className="text-2xl mr-3">{benefit.icon}</span>
                  <div>
                    <h4 className="font-semibold">{benefit.title}</h4>
                    <p className="text-white/80">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
