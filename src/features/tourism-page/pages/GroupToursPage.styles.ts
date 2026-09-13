import styled from "styled-components";
import { media } from "@/theme";

export const ContentSection = styled.section`
  padding: 4rem 1rem;
`;

export const Inner = styled.div`
  max-width: 64rem;
  margin: 0 auto;
`;

export const Header = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

export const HeaderTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 1.875rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.foreground};
  margin: 0 0 1rem;
`;

export const HeaderText = styled.p`
  color: ${({ theme }) => theme.colors.muted.foreground};
  max-width: 42rem;
  margin: 0 auto;
  line-height: 1.75;
`;

export const ToursGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-bottom: 4rem;

  ${media.md} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const TourCard = styled.div`
  background: ${({ theme }) => theme.colors.card};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.xl};
  overflow: hidden;
  transition: box-shadow ${({ theme }) => theme.transitions.base},
    transform ${({ theme }) => theme.transitions.base};

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.xl};
    transform: translateY(-0.25rem);
  }
`;

export const TourImage = styled.div`
  height: 12rem;
  background: linear-gradient(
    to bottom right,
    ${({ theme }) => theme.alpha(theme.colors.primary.DEFAULT, 0.3)},
    ${({ theme }) => theme.alpha(theme.colors.secondary.DEFAULT, 0.3)}
  );
`;

export const TourBody = styled.div`
  padding: 1.5rem;
`;

export const TourTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 1.25rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.foreground};
  margin: 0 0 0.75rem;
`;

export const TourText = styled.p`
  color: ${({ theme }) => theme.colors.muted.foreground};
  font-size: 0.875rem;
  margin: 0 0 1rem;
`;

export const TourMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  font-size: 0.75rem;
`;

export const TourMetaItem = styled.span`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: ${({ theme }) => theme.colors.muted.foreground};
`;

export const WhySection = styled.div`
  background: ${({ theme }) => theme.alpha(theme.colors.primary.DEFAULT, 0.05)};
  border-radius: ${({ theme }) => theme.radii["2xl"]};
  padding: 2rem 1.5rem;

  ${media.md} {
    padding: 3rem;
  }
`;

export const WhyTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.foreground};
  margin: 0 0 1.5rem;
  text-align: center;
`;

export const WhyGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  ${media.md} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const WhyItem = styled.div`
  text-align: center;
`;

export const WhyIconCircle = styled.div<{ $variant: "primary" | "secondary" }>`
  width: 3rem;
  height: 3rem;
  border-radius: ${({ theme }) => theme.radii.full};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  background: ${({ theme, $variant }) => theme.alpha(theme.colors[$variant].DEFAULT, 0.1)};
`;

export const WhyItemTitle = styled.h4`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.foreground};
  margin: 0 0 0.5rem;
`;

export const WhyItemText = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.muted.foreground};
  margin: 0;
`;
