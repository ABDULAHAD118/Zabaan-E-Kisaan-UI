import React from "react";

interface FeatureCardProps {
  bgColorClass: string;
  iconBgClass: string;
  icon: string;
  title: string;
  description: string;
  points?: ReadonlyArray<string>;
  id?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  bgColorClass,
  iconBgClass,
  icon,
  title,
  description,
  points,
  id,
}) => {
  return (
    <article
      id={id}
      className={`${bgColorClass} h-full rounded-xl p-6 shadow-sm transition-transform hover:-translate-y-1`}
    >
      <div
        className={`mb-4 flex h-12 w-12 items-center justify-center rounded-lg ${iconBgClass}`}
      >
        <span className="text-2xl text-white">{icon}</span>
      </div>
      <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
        {title}
      </h3>
      <p className="mb-4 text-gray-700 dark:text-gray-200">{description}</p>

      {points && points.length > 0 && (
        <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-200">
          {points.map((point) => (
            <li key={point} className="flex items-start gap-2">
              <span className="mt-0.5 text-green-600 dark:text-green-400">-</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
};

export default FeatureCard;
