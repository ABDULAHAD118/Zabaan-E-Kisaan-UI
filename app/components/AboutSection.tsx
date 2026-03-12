import React from "react";

const AboutSection = () => {
  const workflowSteps = [
    {
      title: "1. Detect",
      description:
        "Upload or scan crop leaf images to detect supported diseases for corn, wheat, rice, and sugarcane.",
    },
    {
      title: "2. Ask",
      description:
        "Use chatbot voice or text to ask about treatment, disease causes, and precaution steps in English or Urdu.",
    },
    {
      title: "3. Verify Land",
      description:
        "Use coordinate-based remote sensing to analyze crop land through satellite signals and receive next-step guidance.",
    },
    {
      title: "4. Track Prices",
      description:
        "Filter by crop and city, review daily and previous rates, and share market updates with team members.",
    },
  ];

  const productHighlights = [
    "Bilingual user experience for English and Urdu users",
    "Dark mode support for better readability in low-light use",
    "Practical recommendations after disease prediction",
    "Market units shown by commodity: kg, dozen, or 100 pieces",
  ];

  return (
    <section
      id="workflow"
      className="bg-gradient-to-r from-green-700 to-emerald-700 py-20 text-white"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              From Field Problem to Action Plan
            </h2>
            <p className="mb-6 text-lg text-white/90">
              Zabaan-E-Kissan is designed for real farm operations. Farmers can
              diagnose, ask, verify, and decide quickly without switching
              between multiple tools.
            </p>
            <ul className="space-y-3">
              {productHighlights.map((highlight) => (
                <li key={highlight} className="flex items-center">
                  <span className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
                    ✓
                  </span>
                  {highlight}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl bg-white/10 p-8 backdrop-blur-sm">
            <h3 className="mb-4 text-2xl font-bold">How Farmers Use the App</h3>
            <div className="space-y-4">
              {workflowSteps.map((step) => (
                <div key={step.title}>
                  <h4 className="font-semibold">{step.title}</h4>
                  <p className="text-white/85">{step.description}</p>
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
