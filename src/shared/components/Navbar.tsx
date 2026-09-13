import { useState } from "react";
import { Menu, X } from "lucide-react";
import NavDropdown, { type NavItemWithDropdown } from "./NavDropdown";
import logo from "@/assets/logo-main.png";
import {
  Nav,
  Inner,
  Row,
  BrandLink,
  LogoImg,
  BrandText,
  BrandTitle,
  BrandSubtitle,
  DesktopLinks,
  NavItemLink,
  NavCtaButton,
  NavCtaButtonOutline,
  MenuButton,
  CompactCtaGroup,
  CompactCtaButton,
  CompactCtaButtonOutline,
  MobileMenu,
  MobileLinks,
  MobileNavItemLink,
} from "./Navbar.styles";

const navItems: NavItemWithDropdown[] = [
  {
    name: "Tourism",
    items: [
      { name: "Tour Operators", href: "/tourism/tour-operators" },
      { name: "Group Tours", href: "/tourism/group-tours" },
      { name: "Prestigious Destinations", href: "/tourism/prestigious-destinations" },
      { name: "Restaurants & Fine Dining", href: "/tourism/restaurants-fine-dining" },
    ],
  },
  {
    name: "Akwa Ibom",
    items: [
      { name: "About Akwa Ibom", href: "/about-akwa-ibom" },
      { name: "Culture & Heritage", href: "/about-akwa-ibom/culture-heritage" },
      { name: "Calendar of Activities", href: "/about-akwa-ibom/calendar" },
    ],
  },
  {
    name: "Commission",
    items: [
      { name: "About the Commission", href: "/about-akwa-ibom-state-tourism-board" },
      { name: "Conferences & Events", href: "/the-board/conferences-events" },
      { name: "Organizational Structure", href: "/the-board/organizational-structure" },
    ],
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Nav>
      <Inner>
        <Row>
          <BrandLink to="/">
            <LogoImg src={logo} alt="Akwa Ibom Tourism" />
            <BrandText>
              <BrandTitle>Akwa Ibom State</BrandTitle>
              <BrandSubtitle>Hotels & Tourism Development Commission</BrandSubtitle>
            </BrandText>
          </BrandLink>

          <DesktopLinks>
            <NavItemLink to="/">Home</NavItemLink>
            {navItems.map((item) => (
              <NavDropdown key={item.name} item={item} />
            ))}
            <NavItemLink to="/#contact">Contact</NavItemLink>
            {/* Placeholder CTAs — no destination wired yet, on purpose */}
            <NavCtaButton type="button">Register Establishment</NavCtaButton>
            <NavCtaButtonOutline type="button">Mbopo Akwa Ibom</NavCtaButtonOutline>
          </DesktopLinks>

          {/* Always visible below `md`, so these don't wait behind the hamburger menu. Placeholder CTAs — no destination wired yet, on purpose */}
          <CompactCtaGroup>
            <CompactCtaButton type="button">Register</CompactCtaButton>
            <CompactCtaButtonOutline type="button">Mbopo</CompactCtaButtonOutline>
          </CompactCtaGroup>

          <MenuButton onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </MenuButton>
        </Row>

        {isMenuOpen && (
          <MobileMenu>
            <MobileLinks>
              <MobileNavItemLink to="/" onClick={() => setIsMenuOpen(false)}>
                Home
              </MobileNavItemLink>
              {navItems.map((item) => (
                <NavDropdown key={item.name} item={item} mobile onItemClick={() => setIsMenuOpen(false)} />
              ))}
              <MobileNavItemLink to="/#contact" onClick={() => setIsMenuOpen(false)}>
                Contact
              </MobileNavItemLink>
            </MobileLinks>
          </MobileMenu>
        )}
      </Inner>
    </Nav>
  );
};

export default Navbar;
