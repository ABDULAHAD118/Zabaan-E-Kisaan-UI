import React from "react";

const HeroSection = () => {
  return (
    <section id="home" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl text-center">
        <p className="mb-4 inline-block rounded-full bg-green-100 px-4 py-1 text-sm font-semibold text-green-700 dark:bg-green-900/40 dark:text-green-300">
          Bilingual Agriculture Assistant (English + Urdu)
        </p>
        <h1 className="mb-6 text-4xl font-bold text-gray-900 dark:text-white md:text-6xl">
          Zabaan-E-Kissan
          <span className="block text-green-600">AI Tools for Smarter Farming</span>
        </h1>
        <p className="mx-auto mb-8 max-w-4xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          One app for disease detection, AI chatbot guidance, remote sensing, and
          daily crop prices from official government sources. Built for farmers
          who want fast decisions in the field.
        </p>

        <div className="mb-12 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="https://github.com/ABDULAHAD118/Zabaan-E-Kissan-UI/releases/download/Agriculture/Zabaan-E-Kissan.apk"
            download
            target="_blank"
            className="rounded-lg bg-green-600 px-8 py-4 text-center text-lg font-semibold text-white transition-colors hover:bg-green-700"
          >
            Download Android App
          </a>
          <a
            href="/#modules"
            className="rounded-lg border-2 border-green-600 px-8 py-4 text-lg font-semibold text-green-700 transition-colors hover:bg-green-600 hover:text-white dark:text-green-300"
          >
            Explore Features
          </a>
        </div>

        <div className="grid gap-4 text-left sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl bg-white p-4 shadow-sm dark:bg-gray-800">
            <p className="text-sm font-semibold text-gray-900 dark:text-white">
              Disease Detection
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Supports selected leaf disease predictions with action
              recommendations.
            </p>
          </div>
          <div className="rounded-xl bg-white p-4 shadow-sm dark:bg-gray-800">
            <p className="text-sm font-semibold text-gray-900 dark:text-white">
              AI Chatbot
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Ask precautions, treatment, and crop care questions using voice or
              text.
            </p>
          </div>
          <div className="rounded-xl bg-white p-4 shadow-sm dark:bg-gray-800">
            <p className="text-sm font-semibold text-gray-900 dark:text-white">
              Remote Sensing
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Land checks by coordinates through satellite insights for
              agriculture land.
            </p>
          </div>
          <div className="rounded-xl bg-white p-4 shadow-sm dark:bg-gray-800">
            <p className="text-sm font-semibold text-gray-900 dark:text-white">
              Daily Crop Prices
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              View latest and historical rates with filters and sharing support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
