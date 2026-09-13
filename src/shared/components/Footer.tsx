import { useEffect, useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  ArrowUp,
} from "lucide-react";
import logo from "@/assets/logo-main.png";
import { Container } from "./Container";
import {
  FooterEl,
  Grid,
  BrandRow,
  BrandLogo,
  BrandTitle,
  BrandSubtitle,
  About,
  Heading,
  LinkList,
  FooterLink,
  ContactList,
  ContactItem,
  SocialText,
  SocialRow,
  SocialButton,
  BottomBar,
  BackToTopButton,
} from "./Footer.styles";

const BACK_TO_TOP_THRESHOLD = 400;

const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > BACK_TO_TOP_THRESHOLD);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <FooterEl id="contact">
      <Container>
        <Grid>
          <div>
            <BrandRow>
              <BrandLogo src={logo} alt="Logo" />
              <div>
                <BrandTitle>Akwa Ibom State</BrandTitle>
                <BrandSubtitle>
                  Hotels & Tourism Development Commission
                </BrandSubtitle>
              </div>
            </BrandRow>
            <About>
              Your gateway to discovering the beauty, culture, and hospitality
              of Nigeria&apos;s land of promise.
            </About>
          </div>

          <div>
            <Heading>Quick Links</Heading>
            <LinkList>
              <li>
                <FooterLink href="#home">Home</FooterLink>
              </li>
              <li>
                <FooterLink href="#destinations">Destinations</FooterLink>
              </li>
              <li>
                <FooterLink href="#hotels">Hotels</FooterLink>
              </li>
              <li>
                <FooterLink href="#culture">Culture</FooterLink>
              </li>
            </LinkList>
          </div>

          <div>
            <Heading>Contact Us</Heading>
            <ContactList>
              <ContactItem data-align="start">
                <MapPin size={16} />
                <span>
                  Akwa Ibom State Hotels & Tourism Development Commission, Uyo,
                  Nigeria
                </span>
              </ContactItem>
              <ContactItem>
                <Phone size={16} />
                <span>+234 (0) 7030721184</span>
              </ContactItem>
              <ContactItem>
                <Mail size={16} />
                <span>info.akhtb@gmail.com</span>
              </ContactItem>
            </ContactList>
          </div>

          <div>
            <Heading>Follow Us</Heading>
            <SocialText>
              Stay connected for the latest updates and travel inspiration
            </SocialText>
            <SocialRow>
              <SocialButton href="#" aria-label="Facebook">
                <Facebook size={20} />
              </SocialButton>
              <SocialButton href="#" aria-label="Instagram">
                <Instagram size={20} />
              </SocialButton>
              <SocialButton href="#" aria-label="Twitter">
                <Twitter size={20} />
              </SocialButton>
            </SocialRow>
          </div>
        </Grid>

        <BottomBar>
          <p>
            &copy; {new Date().getFullYear()} Akwa Ibom State Hotels and Tourism
            Development Commission. All rights reserved.
          </p>
        </BottomBar>
      </Container>

      <BackToTopButton
        $visible={showBackToTop}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        aria-hidden={!showBackToTop}
        tabIndex={showBackToTop ? 0 : -1}
      >
        <ArrowUp size={20} />
      </BackToTopButton>
    </FooterEl>
  );
};

export default Footer;
