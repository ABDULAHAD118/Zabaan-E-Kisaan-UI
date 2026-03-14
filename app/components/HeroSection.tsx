import React from "react";

interface HeroSectionProps {
  apkUrl: string;
  text: {
    badge: string;
    title: string;
    description: string;
    downloadAndroidApp: string;
    exploreFeatures: string;
    cards: ReadonlyArray<{ title: string; description: string }>;
  };
}

const HeroSection: React.FC<HeroSectionProps> = ({ apkUrl, text }) => {
  return (
    <section id="home" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl text-center">
        <p className="mb-4 inline-block rounded-full bg-green-100 px-4 py-1 text-sm font-semibold text-green-700 dark:bg-green-900/40 dark:text-green-300">
          {text.badge}
        </p>
        <h1 className="mb-6 text-4xl font-bold text-gray-900 dark:text-white md:text-6xl">
          Zabaan-E-Kissan
          <span className="block text-green-600">{text.title}</span>
        </h1>
        <p className="mx-auto mb-8 max-w-4xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          {text.description}
        </p>

        <div className="mb-12 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href={apkUrl}
            download
            target="_blank"
            rel="noreferrer"
            className="rounded-lg bg-green-600 px-8 py-4 text-center text-lg font-semibold text-white transition-colors hover:bg-green-700"
          >
            {text.downloadAndroidApp}
          </a>
          <a
            href="/#modules"
            className="rounded-lg border-2 border-green-600 px-8 py-4 text-lg font-semibold text-green-700 transition-colors hover:bg-green-600 hover:text-white dark:text-green-300"
          >
            {text.exploreFeatures}
          </a>
        </div>

        <div className="grid gap-4 text-left sm:grid-cols-2 lg:grid-cols-4">
          {text.cards.map((card) => (
            <div
              key={card.title}
              className="rounded-xl bg-white p-4 shadow-sm dark:bg-gray-800"
            >
              <p className="text-sm font-semibold text-gray-900 dark:text-white">
                {card.title}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
