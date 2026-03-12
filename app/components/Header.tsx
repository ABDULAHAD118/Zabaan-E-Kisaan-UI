import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-green-200 bg-white/90 backdrop-blur-sm dark:border-gray-700 dark:bg-gray-900/90">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="/#home" className="flex items-center space-x-2">
          <Image
            src="/Zabaan-E-Kissan.png"
            alt="Zabaan-E-Kissan logo"
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
            Modules
          </a>
          <a
            href="/#workflow"
            className="text-gray-700 transition-colors hover:text-green-600 dark:text-gray-300 dark:hover:text-green-400"
          >
            Workflow
          </a>
          <a
            href="/#contact"
            className="text-gray-700 transition-colors hover:text-green-600 dark:text-gray-300 dark:hover:text-green-400"
          >
            Contact
          </a>
        </nav>

        <a
          href="https://github.com/ABDULAHAD118/Zabaan-E-Kissan-UI/releases/download/Agriculture/Zabaan-E-Kissan.apk"
          download
          className="rounded-lg bg-green-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-green-700 sm:px-6 sm:py-2.5"
        >
          Download App
        </a>
      </div>
    </header>
  );
};

export default Header;
