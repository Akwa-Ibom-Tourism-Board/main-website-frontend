import React from "react";
import { Mail, Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { LiaHotelSolid } from "react-icons/lia";
import ariseLogo from "@/assets/arise-white.jpeg";
import akwaIbomLogo from "@/assets/akwa-ibom-logo-main.png";

interface TopBarProps {
  isModalOpen?: boolean;
  setIsModalOpen?: (isOpen: boolean) => void;
}
const TopBar = ({ isModalOpen, setIsModalOpen }: TopBarProps) => {
  const socialLinks = [
    {
      icon: Facebook,
      href: "https://facebook.com/akwaibomtourism",
      label: "Facebook",
    },
    {
      icon: Instagram,
      href: "https://instagram.com/akwaibomtourism",
      label: "Instagram",
    },
    {
      icon: Twitter,
      href: "https://twitter.com/akwaibomtourism",
      label: "Twitter",
    },
    {
      icon: Youtube,
      href: "https://youtube.com/akwaibomtourism",
      label: "YouTube",
    },
  ];

  return (
    <div className="fixed py-2 px-2 flex top-0 left-0 right-0 z-50 bg-primary text-primary-foreground animate-fade-in">
      <div className="md:hidden flex">
         <img
                src={ariseLogo}
                alt="Arise Logo"
                className="h-10 w-10"
              />
      </div>
      <div className="container mx-auto px-3 sm:px-4 py-2 sm:py-3">
        {/* Top row */}
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between text-xs sm:text-sm">
          {/* Email */}
          <div className="flex items-center justify-center sm:justify-start gap-2">
            <Mail size={14} className="shrink-0" />
            <span className="hidden xs:inline">Mail us:</span>
            <a
              href="mailto:info@akwaibomtourism.com"
              className="hover:text-secondary transition-colors underline-offset-2 hover:underline truncate max-w-[220px] sm:max-w-none"
            >
              info@akwaibomtourism.com
            </a>
          </div>

          {/* Social icons */}
          <div className="flex items-center justify-center sm:justify-end gap-3">
            <span className="hidden md:inline">Follow us on:</span>
            <div className="flex items-center gap-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-1 rounded-full hover:text-secondary transition-all duration-300 hover:scale-110"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-2 sm:mt-3 flex flex-wrap items-center justify-center md:justify-start gap-2 sm:gap-1 animate-pulse">
          <div className="hidden md:flex">
            <LiaHotelSolid size={18} className="text-yellow-300 shrink-0" />
          </div>

          <div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="
              text-yellow-400
              text-xs sm:text-sm
              font-semibold
              underline underline-offset-4
              transition-all duration-300
              hover:text-white
              hover:scale-105
              hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.9)]
            "
            >
              Register your hospitality establishment
            </button>
          </div>
        </div>
      </div>
        <div className="md:hidden flex">
         <img
                src={akwaIbomLogo}
                alt="Arise Logo"
                className="h-10 w-16"
              />
      </div>
    </div>
  );
};

export default TopBar;
