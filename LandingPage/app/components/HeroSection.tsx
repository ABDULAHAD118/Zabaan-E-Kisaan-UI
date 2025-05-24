import React from "react";

const HeroSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
          Smart Farming with
          <span className="text-green-600 block">AI & Voice Technology</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
          Revolutionize your farming experience with our AI-powered digital
          assistant. Get real-time crop insights, weather updates, and expert
          advice through voice commands.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors text-center">
            Get Started Free
          </button>
          <button className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
            📱 Download App
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
