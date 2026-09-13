import styled from "styled-components";
import { media } from "@/theme";
import { Card } from "@/shared/ui";

export const Section = styled.section`
  padding: 5rem 0;
  background: ${({ theme }) => theme.colors.background};
`;

export const Heading = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

export const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 2.25rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.foreground};
  margin: 0 0 1rem;

  ${media.md} {
    font-size: 3rem;
  }
`;

export const Lede = styled.p`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.muted.foreground};
  max-width: 42rem;
  margin: 0 auto;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  ${media.md} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${media.lg} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const HotelCard = styled(Card)`
  overflow: hidden;
  transition: box-shadow ${({ theme }) => theme.transitions.base};

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.elegant};
  }
`;

export const ImageWrap = styled.div`
  height: 14rem;
  overflow: hidden;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 500ms;

  &:hover {
    transform: scale(1.1);
  }
`;

export const Header = styled.div`
  padding: 1.5rem 1.5rem 0;
`;

export const NameRow = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
`;

export const HotelName = styled.h3`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 1.25rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.foreground};
  margin: 0;
`;

export const Stars = styled.div`
  display: flex;
  align-items: center;
  gap: 0.125rem;
  color: ${({ theme }) => theme.colors.secondary.DEFAULT};
  flex-shrink: 0;

  svg {
    fill: currentColor;
  }
`;

export const AmenityRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const AmenityPill = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.muted.foreground};
  background: ${({ theme }) => theme.colors.muted.DEFAULT};
  padding: 0.25rem 0.5rem;
  border-radius: ${({ theme }) => theme.radii.full};
`;

export const Content = styled.div`
  padding: 1.5rem;
`;

export const PriceRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;

export const PriceLabel = styled.span`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.muted.foreground};
  display: block;
`;

export const Price = styled.p`
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary.DEFAULT};
  font-size: 1.125rem;
  margin: 0;
`;
