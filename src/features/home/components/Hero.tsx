import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkle } from "lucide-react";
import { Button } from "@/shared/ui";
import { GlowWrap } from "@/shared/components";
import { useTheme } from "@/theme";
import ibomAirImg from "@/assets/ibom-air.png";
import mbopoFlier from "@/assets/mbopo-flier.png";
import fourpoint from "@/assets/four-points.png";
import logo from "@/assets/logo-main.png";
import governorImg from "@/assets/governor-image-2.webp";
import registrationImg from "@/assets/hotel-registration-flier.jpeg";
import {
  Section,
  Glow,
  ContentWrap,
  ContentCol,
  Eyebrow,
  EyebrowText,
  Title,
  Subtitle,
  CtaRow,
  MediaCol,
  MediaGlow,
  MediaFrame,
  SlideLayer,
  SlideImage,
  Indicators,
  Dot,
  BottomFade,
} from "./Hero.styles";
interface HeroSlide {
  image: string;
  title: string;
  subtitle: string;
  isCtaRequired: boolean;
  ctaLabel?: string;
  // Omitted on purpose for the two "get involved" slides below — no
  // destination has been decided yet, so the CTA renders without a link.
  ctaLink?: string;
  // Gives the CTA a constant glow halo (used for the hospitality-
  // registration slide so it matches the same CTA elsewhere on the page).
  glow?: boolean;
  isRedirect?: boolean;
}

// TODO: swap these placeholder titles/subtitles/CTAs for real copy per destination.
const heroSlides: HeroSlide[] = [
  {
    image: logo,
    title:
      "Welcome to Akwa Ibom State Hotels and Tourism Development Commission",
    subtitle:
      "Curating world-class hospitality, and unforgettable adventures in the land of promise.",
    ctaLabel: "About Us",
    ctaLink: "/about-akwa-ibom-state-tourism-board",
    isCtaRequired: true,
  },
  {
    image: governorImg,
    title: "Governor Umo Eno: A Champion for Tourism",
    subtitle:
      "“We are committed to making tourism a key driver of Akwa Ibom's economy — welcoming the world to our land of promise.” — Gov. Umo Eno",
    isCtaRequired: false,
  },
  {
    image: ibomAirImg,
    title: "Fly Into the Land of Promise",
    subtitle:
      "Seamless connections to Nigeria's most promising tourism destination.",
    ctaLabel: "Plan Your Visit",
    ctaLink: "/tourism/tour-operators",
    isCtaRequired: false,
  },
  {
    image: fourpoint,
    title: "World-Class Hospitality at World-Class Hotels",
    subtitle:
      "Experience international five-star comfort and service in the heart of Akwa Ibom State.",
    ctaLabel: "Explore Hotels",
    ctaLink: "/#hotels",
    isCtaRequired: false,
  },
  {
    image: registrationImg,
    title: "Call for Registration: Tourism & Hospitality Establishments",
    subtitle:
      "Register your tourism, hospitality, or allied business with the Commission on or before 31st October 2026 for proper licensing and certification.",
    ctaLabel: "Register Now",
    glow: true,
    ctaLink: "https://register.akhtdc.com.ng",
    isCtaRequired: true,
    isRedirect: true,
  },
  {
    image: mbopoFlier,
    title: "Mbopo Akwa Ibom: Beauty with Purpose",
    subtitle:
      "Applications are open for young women across all 31 local government areas to become Akwa Ibom's next State Tourism Ambassador.",
    ctaLabel: "Apply Now",
    glow: true,
    ctaLink: "https://mbopo-akwa-ibom-design.vercel.app/",
    isCtaRequired: true,
    isRedirect: true,
  },
];

const HeroCta = ({ slide }: { slide: HeroSlide }) => {
  const theme = useTheme();

  const button = (
    <Button
      size="lg"
      variant="secondary"
      style={{ boxShadow: theme.shadows.elegant }}
    >
      {slide.ctaLabel}
      <ArrowRight size={20} />
    </Button>
  );

  const content = slide.glow ? <GlowWrap>{button}</GlowWrap> : button;

  if (!slide.ctaLink) return content;

  if (slide.isRedirect) {
    return (
      <a href={slide.ctaLink} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return <Link to={slide.ctaLink}>{content}</Link>;
};

const Hero = () => {
  const theme = useTheme();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Section id="home">
      <Glow />

      <ContentWrap>
        <ContentCol>
          <Eyebrow>
            <Sparkle
              color={theme.colors.highlightMuted}
              size={16}
              fill={theme.colors.highlightMuted}
            />
            <EyebrowText>Akwa Ibom: Nigeria&apos;s Hidden Gem</EyebrowText>
          </Eyebrow>

          <Title key={`title-${current}`}>{heroSlides[current].title}</Title>

          <Subtitle key={`subtitle-${current}`}>
            {heroSlides[current].subtitle}
          </Subtitle>
          {heroSlides[current].isCtaRequired && (
            <CtaRow key={`cta-${current}`}>
              <HeroCta slide={heroSlides[current]} />
            </CtaRow>
          )}
        </ContentCol>

        <MediaCol>
          {/* <MediaGlow /> */}
          <MediaFrame>
            {heroSlides.map((slide, index) => (
              <SlideLayer key={index} $active={index === current}>
                <SlideImage
                  src={slide.image}
                  alt={`Akwa Ibom tourism ${index + 1}`}
                />
              </SlideLayer>
            ))}
          </MediaFrame>

          <Indicators>
            {heroSlides.map((_, index) => (
              <Dot
                key={index}
                $active={index === current}
                onClick={() => setCurrent(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </Indicators>
        </MediaCol>
      </ContentWrap>

      {/* <BottomFade /> */}
    </Section>
  );
};

export default Hero;
