import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import NavDropdown, { NavItemWithDropdown } from "@/components/NavDropdown";
import logo from "@/assets/logo-main.png";
import ariseLogo from "@/assets/arise-logo-main.png";
import akwaIbomLogo from "@/assets/akwa-ibom-logo-main.png";

const navItems: NavItemWithDropdown[] = [
  {
    name: "Tourism",
    items: [
      { name: "Tour Operators", href: "/tourism/tour-operators" },
      { name: "Group Tours", href: "/tourism/group-tours" },
      {
        name: "Prestigious Destinations",
        href: "/tourism/prestigious-destinations",
      },
      {
        name: "Restaurants & Fine Dining",
        href: "/tourism/restaurants-fine-dining",
      },
    ],
  },
  {
    name: "About Akwa Ibom",
    items: [
      { name: "About Akwa Ibom", href: "/about-akwa-ibom" },
      { name: "Culture & Heritage", href: "/about-akwa-ibom/culture-heritage" },
      { name: "Calendar of Activities", href: "/about-akwa-ibom/calendar" },
    ],
  },
  {
    name: "The Board",
    items: [
      { name: "About the Board", href: "/about-akwa-ibom-state-tourism-board" },
      { name: "Conferences & Events", href: "/the-board/conferences-events" },
      {
        name: "Organizational Structure",
        href: "/the-board/organizational-structure",
      },
    ],
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-[100px] md:top-24 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Left: Main Logo and Text */}
          <Link to="/" className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0">
            <img
              src={logo}
              alt="Akwa Ibom Tourism"
              className="h-14 w-14 sm:h-16 sm:w-16 lg:h-20 lg:w-20"
            />
            <div className="hidden sm:block">
              <div className="font-display text-sm sm:text-base lg:text-xl font-bold text-primary leading-tight">
                Akwa Ibom State
              </div>
              <div className="text-[10px] sm:text-xs text-muted-foreground">
                Hotels & Tourism Board
              </div>
            </div>
          </Link>

          {/* Center: Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <Link
              to="/"
              className="text-foreground hover:text-[#e37333] transition-colors font-medium"
            >
              Home
            </Link>
            {navItems.map((item) => (
              <NavDropdown key={item.name} item={item} />
            ))}
            <Link
              to="/#contact"
              className="text-foreground hover:text-[#e37333] transition-colors font-medium"
            >
              Contact
            </Link>
          </div>

          {/* Right: Additional Logos (Desktop) and Mobile Menu Button */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Additional logos - hidden on mobile, shown on larger screens */}
            <img
              src={ariseLogo}
              alt="Arise Logo"
              className="hidden md:block h-14 w-14 lg:h-20 lg:w-20 flex-shrink-0"
            />
            <img
              src={akwaIbomLogo}
              alt="Akwa Ibom Logo"
              className="hidden md:block h-14 w-auto lg:h-20 lg:w-auto max-w-[80px] lg:max-w-[120px] flex-shrink-0"
            />
            
            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-foreground p-2 -mr-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col space-y-2">
              <Link
                to="/"
                className="py-2 text-foreground hover:text-[#e37333] transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              {navItems.map((item) => (
                <NavDropdown
                  key={item.name}
                  item={item}
                  mobile
                  onItemClick={() => setIsMenuOpen(false)}
                />
              ))}
              <Link
                to="/#contact"
                className="py-2 text-foreground hover:text-[#e37333] transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
            
            {/* Mobile: Show additional logos at bottom of menu */}
            <div className="flex items-center justify-center space-x-4 mt-6 pt-4 border-t border-border md:hidden">
              <img
                src={ariseLogo}
                alt="Arise Logo"
                className="h-16 w-16"
              />
              <img
                src={akwaIbomLogo}
                alt="Akwa Ibom Logo"
                className="h-16 w-auto max-w-[100px]"
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;