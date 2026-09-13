import type { ReactNode } from "react";
import {
  Banner,
  GradientOverlay,
  Content,
  Title,
  Subtitle,
  type HeroTint,
  type HeroTextColor,
  type HeroSubtitleColor,
} from "./PageHeroBanner.styles";

interface PageHeroBannerProps {
  title: ReactNode;
  subtitle?: ReactNode;
  image?: string;
  tint?: HeroTint;
  gradientOverlay?: boolean;
  titleColor?: HeroTextColor;
  subtitleColor?: HeroSubtitleColor;
}

// Shared ~40vh page hero used by every secondary page (tourism, about-akwa-ibom,
// the-board, ...). The home page and AboutBoardPage keep bespoke heroes.
const PageHeroBanner = ({
  title,
  subtitle,
  image,
  tint = "none",
  gradientOverlay = false,
  titleColor = "foreground",
  subtitleColor = "muted",
}: PageHeroBannerProps) => {
  return (
    <Banner $image={image} $tint={tint}>
      {gradientOverlay && <GradientOverlay />}
      <Content>
        <Title $color={titleColor}>{title}</Title>
        {subtitle && <Subtitle $color={subtitleColor}>{subtitle}</Subtitle>}
      </Content>
    </Banner>
  );
};

export default PageHeroBanner;
