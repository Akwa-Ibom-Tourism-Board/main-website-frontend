import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import NavDropdown, { NavItemWithDropdown } from "@/components/NavDropdown";
import logo from "@/assets/logo-main.png";
import ariseLogo from "@/assets/arise-logo-main.png";

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
    <nav className="fixed top-10 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img
              src={ariseLogo}
              alt="Akwa Ibom Tourism"
              className="lg:hidden h-20 w-20"
            />
            <img src={logo} alt="Akwa Ibom Tourism" className="h-20 w-20" />
            <div className="hidden md:block">
              <div className="font-display text-xl font-bold text-primary">
                Akwa Ibom State
              </div>
              <div className="text-xs text-muted-foreground">
                Hotels & Tourism Board
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
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
            {/* <Button
              variant="default"
              className="bg-secondary hover:bg-secondary/90"
            >
              Plan Your Visit
            </Button> */}
            <img
              src={ariseLogo}
              alt="Akwa Ibom Tourism"
              className="h-20 w-20"
            />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
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
              {/* <Button variant="default" className="bg-secondary hover:bg-secondary/90 w-full mt-4">
                Plan Your Visit
              </Button> */}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
