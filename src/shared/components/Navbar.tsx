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

const REGISTER_ESTABLISHMENT_URL = "https://register.akhtdc.com.ng";
const MBOPO_AKWA_IBOM_URL = "https://mbopo-akwa-ibom-design.vercel.app/";

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
      {
        name: "About the Commission",
        href: "/about-akwa-ibom-state-tourism-board",
      },
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
    <Nav>
      <Inner>
        <Row>
          <BrandLink to="/">
            <LogoImg src={logo} alt="Akwa Ibom Tourism" />
            <BrandText>
              <BrandTitle>Akwa Ibom State</BrandTitle>
              <BrandSubtitle>
                Hotels & Tourism Development Commission
              </BrandSubtitle>
            </BrandText>
          </BrandLink>

          <DesktopLinks>
            <NavItemLink to="/">Home</NavItemLink>
            {navItems.map((item) => (
              <NavDropdown key={item.name} item={item} />
            ))}
            <NavItemLink to="/#contact">Contact</NavItemLink>
            <NavCtaButton
              as="a"
              href={REGISTER_ESTABLISHMENT_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Register Establishment
            </NavCtaButton>
            <NavCtaButtonOutline
              as="a"
              href={MBOPO_AKWA_IBOM_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Mbopo Akwa Ibom
            </NavCtaButtonOutline>
          </DesktopLinks>

          {/* Always visible below `md`, so these don't wait behind the hamburger menu. */}
          <CompactCtaGroup>
            <CompactCtaButton
              as="a"
              href={REGISTER_ESTABLISHMENT_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Register
            </CompactCtaButton>
            <CompactCtaButtonOutline
              as="a"
              href={MBOPO_AKWA_IBOM_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Mbopo
            </CompactCtaButtonOutline>
          </CompactCtaGroup>

          <MenuButton
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
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
                <NavDropdown
                  key={item.name}
                  item={item}
                  mobile
                  onItemClick={() => setIsMenuOpen(false)}
                />
              ))}
              <MobileNavItemLink
                to="/#contact"
                onClick={() => setIsMenuOpen(false)}
              >
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
