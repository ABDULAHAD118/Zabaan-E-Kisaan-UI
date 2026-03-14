export type Theme = "light" | "dark";

export const APK_URL =
  "https://github.com/ABDULAHAD118/Zabaan-E-Kissan-UI/releases/download/Agriculture/Zabaan-E-Kissan.apk";

export const content = {
  en: {
    header: {
      modules: "Modules",
      workflow: "Workflow",
      contact: "Contact",
      downloadApp: "Download App",
      logoAlt: "Zabaan-E-Kissan logo",
    },
    hero: {
      badge: "Bilingual Agriculture Assistant (English + Urdu)",
      title: "AI Tools for Smarter Farming",
      description:
        "One app for disease detection, AI chatbot guidance, remote sensing, and daily crop prices from official government sources. Built for farmers who want fast decisions in the field.",
      downloadAndroidApp: "Download Android App",
      exploreFeatures: "Explore Features",
      cards: [
        {
          title: "Disease Detection",
          description:
            "Supports selected leaf disease predictions with action recommendations.",
        },
        {
          title: "AI Chatbot",
          description:
            "Ask precautions, treatment, and crop care questions using voice or text.",
        },
        {
          title: "Remote Sensing",
          description:
            "Land checks by coordinates through satellite insights for agriculture land.",
        },
        {
          title: "Daily Crop Prices",
          description:
            "View latest and historical rates with filters and sharing support.",
        },
      ],
    },
    features: {
      heading: "Built Around Real Farming Workflows",
      subheading:
        "Three focused modules designed for fast, practical field decisions.",
      items: [
        {
          icon: "🦠",
          title: "Disease Detection Module",
          description:
            "Detect selected leaf diseases and get immediate recommendations for next actions.",
          points: [
            "Supported crops: corn, wheat, rice, and sugarcane.",
            "Predicts selected leaf diseases, not every disease type.",
            "Shows recommendations on what to do after prediction.",
            "Ask the AI chatbot for disease details and precaution steps.",
          ],
        },
        {
          icon: "🤖",
          title: "AI Chatbot + Remote Sensing",
          description:
            "Bilingual smart assistant with voice and satellite-driven guidance.",
          points: [
            "Works in English and Urdu conversations.",
            "Voice-to-text and text-to-voice support.",
            "Remote sensing by coordinate for crop and land checks.",
            "Satellite guidance is designed for agricultural land, not residential land.",
          ],
        },
        {
          icon: "📊",
          title: "Crop Prices Module",
          description:
            "Daily market prices with history, filters, and sharing support for team decisions.",
          points: [
            "Prices update daily from official government websites.",
            "View latest and previous prices in one place.",
            "Units include kg, dozen, and 100 pieces based on crop type.",
            "Filter by crop and city, then share prices with other members.",
          ],
        },
      ],
    },
    about: {
      heading: "From Field Problem to Action Plan",
      description:
        "Zabaan-E-Kissan is designed for real farm operations. Farmers can diagnose, ask, verify, and decide quickly without switching between multiple tools.",
      highlights: [
        "Bilingual user experience for English and Urdu users",
        "Dark mode support for better readability in low-light use",
        "Practical recommendations after disease prediction",
        "Market units shown by commodity: kg, dozen, or 100 pieces",
      ],
      workflowHeading: "How Farmers Use the App",
      steps: [
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
      ],
    },
    cta: {
      heading: "Ready to Use Zabaan-E-Kissan?",
      description:
        "Download the Android app and start using disease detection, bilingual AI support, remote sensing, and crop price tracking in one platform.",
      qrHeading: "Scan QR to download on Android",
      qrDescription: "Open your camera, scan, and install instantly.",
      qrAlt: "QR code to download the Zabaan-E-Kissan Android app",
      fallback: "Or use the button on the left.",
      button: "Download App",
    },
    footer: {
      logoAlt: "Zabaan-E-Kissan logo",
      description:
        "Agriculture-first AI platform with bilingual support, remote sensing, and practical daily decisions for farmers.",
      modulesTitle: "Modules",
      appTitle: "App",
      navigateTitle: "Navigate",
      productLinks: [
        { name: "Disease Detection", href: "/#modules" },
        { name: "AI Chatbot", href: "/#workflow" },
        { name: "Remote Sensing", href: "/#workflow" },
        { name: "Crop Prices", href: "/#modules" },
      ],
      appLinks: [
        { name: "Download Android App", href: APK_URL },
        { name: "Bilingual Support", href: "/#home" },
        { name: "Dark Mode UI", href: "/#home" },
        { name: "Daily Price Updates", href: "/#modules" },
      ],
      connectLinks: [
        { name: "Contact", href: "/#contact" },
        { name: "Modules", href: "/#modules" },
        { name: "Workflow", href: "/#workflow" },
      ],
      rightsReserved: "All rights reserved.",
    },
  },
} as const;

