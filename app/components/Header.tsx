import React from "react";
import Image from "next/image";
import { Theme } from "../i18n";

interface HeaderProps {
  text: {
    modules: string;
    workflow: string;
    contact: string;
    downloadApp: string;
    logoAlt: string;
  };
  apkUrl: string;
  theme: Theme;
  onThemeChange: (theme: Theme) => void;
}

const Header: React.FC<HeaderProps> = ({
  text,
  apkUrl,
  theme,
  onThemeChange,
}) => {
  return (
    <header className="sticky top-0 z-50 border-b border-green-200 bg-white/90 backdrop-blur-sm dark:border-gray-700 dark:bg-gray-900/90">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-4 sm:px-6 lg:px-8">
        <a href="/#home" className="flex items-center space-x-2">
          <Image
            src="/Zabaan-E-Kissan.png"
            alt={text.logoAlt}
            width={36}
            height={36}
            className="rounded-md"
            priority
          />
          <span className="text-base font-bold text-gray-900 dark:text-white sm:text-lg">
            Zabaan-E-Kissan
          </span>
        </a>

        <nav className="hidden items-center space-x-8 md:flex">
          <a
            href="/#modules"
            className="text-gray-700 transition-colors hover:text-green-600 dark:text-gray-300 dark:hover:text-green-400"
          >
            {text.modules}
          </a>
          <a
            href="/#workflow"
            className="text-gray-700 transition-colors hover:text-green-600 dark:text-gray-300 dark:hover:text-green-400"
          >
            {text.workflow}
          </a>
          <a
            href="/#contact"
            className="text-gray-700 transition-colors hover:text-green-600 dark:text-gray-300 dark:hover:text-green-400"
          >
            {text.contact}
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => onThemeChange(theme === "dark" ? "light" : "dark")}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            className="rounded-md border border-gray-300 p-2 text-gray-700 transition-colors hover:bg-gray-100 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-800"
          >
            {theme === "dark" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-5 w-5"
              >
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2" />
                <path d="M12 20v2" />
                <path d="m4.93 4.93 1.41 1.41" />
                <path d="m17.66 17.66 1.41 1.41" />
                <path d="M2 12h2" />
                <path d="M20 12h2" />
                <path d="m6.34 17.66-1.41 1.41" />
                <path d="m19.07 4.93-1.41 1.41" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-5 w-5"
              >
                <path d="M12 3a7 7 0 1 0 9 9 9 9 0 1 1-9-9" />
              </svg>
            )}
          </button>

          <a
            href={apkUrl}
            download
            target="_blank"
            rel="noreferrer"
            className="rounded-lg bg-green-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-green-700 sm:px-6 sm:py-2.5"
          >
            {text.downloadApp}
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
