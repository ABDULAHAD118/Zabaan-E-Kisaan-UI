import React from "react";

interface AboutSectionProps {
  text: {
    heading: string;
    description: string;
    highlights: ReadonlyArray<string>;
    workflowHeading: string;
    steps: ReadonlyArray<{ title: string; description: string }>;
  };
}

const AboutSection: React.FC<AboutSectionProps> = ({ text }) => {

  return (
    <section
      id="workflow"
      className="bg-gradient-to-r from-green-700 to-emerald-700 py-20 text-white"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              {text.heading}
            </h2>
            <p className="mb-6 text-lg text-white/90">{text.description}</p>
            <ul className="space-y-3">
              {text.highlights.map((highlight) => (
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
            <h3 className="mb-4 text-2xl font-bold">{text.workflowHeading}</h3>
            <div className="space-y-4">
              {text.steps.map((step) => (
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
