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

export const RestaurantsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-bottom: 4rem;

  ${media.md} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const RestaurantCard = styled.div`
  background: ${({ theme }) => theme.colors.card};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.xl};
  padding: 1.5rem;
  display: flex;
  gap: 1rem;
  transition: box-shadow ${({ theme }) => theme.transitions.base};

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }
`;

export const RestaurantThumb = styled.div`
  width: 5rem;
  height: 5rem;
  flex-shrink: 0;
  border-radius: ${({ theme }) => theme.radii.lg};
  background: linear-gradient(
    to bottom right,
    ${({ theme }) => theme.alpha(theme.colors.primary.DEFAULT, 0.3)},
    ${({ theme }) => theme.alpha(theme.colors.secondary.DEFAULT, 0.3)}
  );
`;

export const RestaurantBody = styled.div`
  flex: 1;
`;

export const RestaurantName = styled.h3`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.foreground};
  margin: 0 0 0.25rem;
`;

export const RestaurantCuisine = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.muted.foreground};
  margin: 0 0 0.5rem;
`;

export const RestaurantMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.muted.foreground};
`;

export const MetaLocation = styled.span`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

export const RatingRow = styled.span`
  display: flex;
  align-items: center;
  gap: 0.125rem;
`;

export const DelicaciesSection = styled.div`
  background: ${({ theme }) => theme.alpha(theme.colors.primary.DEFAULT, 0.05)};
  border-radius: ${({ theme }) => theme.radii["2xl"]};
  padding: 2rem 1.5rem;

  ${media.md} {
    padding: 3rem;
  }
`;

export const DelicaciesTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.foreground};
  margin: 0 0 1.5rem;
`;

export const DelicaciesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  ${media.md} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const DelicacyTitle = styled.h4`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.foreground};
  margin: 0 0 0.5rem;
`;

export const DelicacyText = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.muted.foreground};
  margin: 0;
`;
