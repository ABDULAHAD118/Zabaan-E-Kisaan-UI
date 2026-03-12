import React from "react";

const CTASection = () => {
  return (
    <section className="bg-gray-50 py-20 dark:bg-gray-900">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
          Ready to Use Zabaan-E-Kissan?
        </h2>
        <p className="mb-8 text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Download the Android app and start using disease detection, bilingual
          AI support, remote sensing, and crop price tracking in one platform.
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="/Zabaan-E-Kisaan.apk"
            download
            className="rounded-lg bg-green-600 px-8 py-4 text-center text-lg font-semibold text-white transition-colors hover:bg-green-700"
          >
            Download App
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
