"use client";

import React, { useEffect, useMemo, useState } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import AboutSection from "./components/AboutSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";
import { APK_URL, content, Theme } from "./i18n";

export default function Home() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("zek-theme");

    if (savedTheme === "light" || savedTheme === "dark") {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;

    root.classList.toggle("dark", theme === "dark");
    root.lang = "en";
    root.dir = "ltr";

    localStorage.setItem("zek-theme", theme);
  }, [theme]);

  const text = useMemo(() => content.en, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <Header
        text={text.header}
        apkUrl={APK_URL}
        theme={theme}
        onThemeChange={setTheme}
      />
      <HeroSection text={text.hero} apkUrl={APK_URL} />
      <FeaturesSection text={text.features} />
      <AboutSection text={text.about} />
      <CTASection text={text.cta} apkUrl={APK_URL} />
      <Footer text={text.footer} />
    </div>
  );
}
