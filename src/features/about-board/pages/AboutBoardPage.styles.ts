import styled from "styled-components";
import { fadeIn, media } from "@/theme";

export const Hero = styled.section`
  position: relative;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const HeroImageLayer = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
`;

export const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const HeroScrim = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to right,
    ${({ theme }) => theme.alpha(theme.colors.heroDeep, 0.95)},
    ${({ theme }) => theme.alpha(theme.colors.primary.DEFAULT, 0.85)},
    ${({ theme }) => theme.alpha(theme.colors.primary.DEFAULT, 0.55)}
  );
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 10;
  max-width: ${({ theme }) => theme.container.maxWidth};
  margin: 0 auto;
  padding: 8rem 1rem 0;
  text-align: center;
`;

export const HeroTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 2.25rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary.foreground};
  margin: 0 0 1rem;
  animation: ${fadeIn} 0.6s ease-out forwards;

  ${media.md} {
    font-size: 3rem;
  }
`;

export const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.alpha(theme.colors.primary.foreground, 0.9)};
  max-width: 42rem;
  margin: 0 auto;
  animation: ${fadeIn} 0.6s ease-out forwards;
`;

export const MainSection = styled.section`
  padding: 5rem 0;
`;

export const Inner = styled.div`
  max-width: ${({ theme }) => theme.container.maxWidth};
  margin: 0 auto;
  padding: 0 1rem;
`;

export const BackLink = styled.div`
  margin-bottom: 2rem;
`;

export const SplitRow = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: center;
  margin-bottom: 5rem;

  ${media.lg} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const TextBlock = styled.div`
  animation: ${fadeIn} 0.6s ease-out forwards;
`;

export const SectionHeadingRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
`;

export const IconBadge = styled.div<{ $variant: "primary" | "secondary" }>`
  width: 3rem;
  height: 3rem;
  border-radius: ${({ theme }) => theme.radii.lg};
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme, $variant }) =>
    theme.alpha(theme.colors[$variant].DEFAULT, 0.1)};
  color: ${({ theme, $variant }) => theme.colors[$variant].DEFAULT};
`;

export const SectionTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 1.875rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary.DEFAULT};
  margin: 0;
`;

export const Prose = styled.div`
  color: ${({ theme }) => theme.colors.muted.foreground};
  font-size: 1.125rem;
  line-height: 1.75;

  p {
    margin: 0 0 1rem;
  }

  p:last-child {
    margin-bottom: 0;
  }
`;

export const ImageBlock = styled.div`
  position: relative;
  animation: ${fadeIn} 0.6s ease-out forwards;
`;

export const RoundedImage = styled.img`
  border-radius: ${({ theme }) => theme.radii["2xl"]};
  box-shadow: ${({ theme }) => theme.shadows.xl};
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  object-position: center;
`;

export const StatBadge = styled.div`
  position: absolute;
  bottom: -1.5rem;
  left: -1.5rem;
  background: ${({ theme }) => theme.colors.secondary.DEFAULT};
  color: ${({ theme }) => theme.colors.secondary.foreground};
  padding: 1rem;
  border-radius: ${({ theme }) => theme.radii.xl};
  box-shadow: ${({ theme }) => theme.shadows.lg};
`;

export const StatNumber = styled.div`
  font-size: 1.5rem;
  font-weight: 700;

  ${media.md} {
    font-size: 2.25rem;
  }
`;

export const StatLabel = styled.div`
  font-size: 0.75rem;

  ${media.md} {
    font-size: 0.875rem;
  }
`;

export const ChairmanImage = styled.img`
  border-radius: ${({ theme }) => theme.radii["2xl"]};
  box-shadow: ${({ theme }) => theme.shadows.xl};
  width: 100%;
  max-height: 500px;
  object-fit: cover;
  object-position: center;
`;

export const ChairmanText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
`;

export const ChairmanTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 1.875rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary.DEFAULT};
  margin: 0 0 1rem;
`;

export const ChairmanParagraph = styled.p`
  color: ${({ theme }) => theme.colors.muted.foreground};
  line-height: 1.75;
  margin: 0;
`;

export const SignatureBlock = styled.div`
  margin-top: 0.5rem;
`;

export const SignatureLine = styled.p`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary.DEFAULT};
  margin: 0;
`;

export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-top: 2.5rem;

  ${media.md} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const InfoCard = styled.div`
  background: ${({ theme }) => theme.colors.card};
  border-radius: ${({ theme }) => theme.radii["2xl"]};
  padding: 1.5rem;
  box-shadow: ${({ theme }) => theme.shadows.lg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  animation: ${fadeIn} 0.6s ease-out forwards;
  transition: box-shadow ${({ theme }) => theme.transitions.base};

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.xl};
  }

  ${media.md} {
    padding: 2rem;
  }
`;

export const CardTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary.DEFAULT};
  margin: 0;
`;

export const CardText = styled.p`
  color: ${({ theme }) => theme.colors.muted.foreground};
  line-height: 1.75;
  margin: 0;
`;
