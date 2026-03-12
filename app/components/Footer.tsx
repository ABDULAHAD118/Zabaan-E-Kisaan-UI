import React from "react";
import Image from "next/image";

const Footer = () => {
  const productLinks = [
    { name: "Disease Detection", href: "/#modules" },
    { name: "AI Chatbot", href: "/#workflow" },
    { name: "Remote Sensing", href: "/#workflow" },
    { name: "Crop Prices", href: "/#prices" },
  ];

  const appLinks = [
    { name: "Download Android App", href: "/Zabaan-E-Kisaan.apk" },
    { name: "Bilingual Support", href: "/#home" },
    { name: "Dark Mode UI", href: "/#home" },
    { name: "Daily Price Updates", href: "/#prices" },
  ];

  const connectLinks = [
    { name: "Contact", href: "/#contact" },
    { name: "Modules", href: "/#modules" },
    { name: "Workflow", href: "/#workflow" },
    { name: "Prices", href: "/#prices" },
  ];

  return (
    <footer id="contact" className="bg-gray-900 py-12 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center space-x-2">
              <Image
                src="/Zabaan-E-Kissan.png"
                alt="Zabaan-E-Kissan logo"
                width={32}
                height={32}
                className="rounded-md"
              />
              <span className="text-xl font-bold">Zabaan-E-Kissan</span>
            </div>
            <p className="text-gray-400">
              Agriculture-first AI platform with bilingual support, remote
              sensing, and practical daily decisions for farmers.
            </p>
          </div>

          <FooterColumn title="Modules" links={productLinks} />
          <FooterColumn title="App" links={appLinks} />
          <FooterColumn title="Navigate" links={connectLinks} />
        </div>

        <div className="mt-8 border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Zabaan-E-Kissan. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

interface FooterColumnProps {
  title: string;
  links: { name: string; href: string }[];
}

const FooterColumn: React.FC<FooterColumnProps> = ({ title, links }) => {
  return (
    <div>
      <h3 className="mb-4 text-lg font-semibold">{title}</h3>
      <ul className="space-y-2 text-gray-400">
        {links.map((link) => (
          <li key={`${title}-${link.name}`}>
            <a href={link.href} className="transition-colors hover:text-white">
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
