import React from "react";

interface FeatureCardProps {
  bgColorClass: string;
  iconBgClass: string;
  icon: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  bgColorClass,
  iconBgClass,
  icon,
  title,
  description,
}) => {
  return (
    <div
      className={`${bgColorClass} p-6 rounded-xl w-full md:w-5/12 lg:w-3/10`}
    >
      <div
        className={`w-12 h-12 ${iconBgClass} rounded-lg flex items-center justify-center mb-4`}
      >
        <span className="text-white text-2xl">{icon}</span>
      </div>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
};

export default FeatureCard;
