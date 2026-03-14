import React from "react";
import Image from "next/image";

interface CTASectionProps {
  apkUrl: string;
  text: {
    heading: string;
    description: string;
    qrHeading: string;
    qrDescription: string;
    qrAlt: string;
    fallback: string;
    button: string;
  };
}

const CTASection: React.FC<CTASectionProps> = ({ text, apkUrl }) => {
  return (
    <section id="download" className="bg-gray-50 py-20 dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="text-center md:text-left">
            <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
              {text.heading}
            </h2>
            <p className="mb-8 text-lg text-gray-600 dark:text-gray-300 md:text-xl">
              {text.description}
            </p>

            <div className="flex justify-center md:justify-start">
              <a
                href={apkUrl}
                download
                target="_blank"
                rel="noreferrer"
                className="rounded-lg bg-green-600 px-8 py-4 text-center text-lg font-semibold text-white transition-colors hover:bg-green-700"
              >
                {text.button}
              </a>
            </div>
          </div>

          <div className="mx-auto w-full max-w-sm md:ml-auto md:mr-0">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <p className="text-base font-semibold text-gray-900 dark:text-white">
                {text.qrHeading}
              </p>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                {text.qrDescription}
              </p>
              <div className="mx-auto mt-4 w-fit rounded-xl border border-gray-200 bg-white p-3 dark:border-gray-600 dark:bg-gray-900">
                <Image
                  src="/QR-Code-Apk.png"
                  alt={text.qrAlt}
                  width={180}
                  height={180}
                  className="h-[180px] w-[180px]"
                />
              </div>
              <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                {text.fallback}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
