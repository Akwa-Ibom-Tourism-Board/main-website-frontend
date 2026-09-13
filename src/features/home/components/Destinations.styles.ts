import styled from "styled-components";
import { media } from "@/theme";
import { Card } from "@/shared/ui";

export const Section = styled.section`
  padding: 5rem 0;
  background: radial-gradient(circle at 80% 85%, ${({ theme }) => theme.alpha(theme.colors.secondary.DEFAULT, 0.16)}, transparent 60%), ${({ theme }) => theme.gradients.panel};
`;

export const Heading = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

export const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 2.25rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};
  margin: 0 0 1rem;

  ${media.md} {
    font-size: 3rem;
  }
`;

export const Lede = styled.p`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.alpha(theme.colors.white, 0.8)};
  max-width: 42rem;
  margin: 0 auto;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  ${media.md} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${media.lg} {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const DestinationCard = styled(Card)`
  overflow: hidden;
  transition: box-shadow ${({ theme }) => theme.transitions.base}, border-color ${({ theme }) => theme.transitions.base};

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.elegant};
    border-color: ${({ theme }) => theme.alpha(theme.colors.primary.DEFAULT, 0.5)};
  }
`;

export const ImageWrap = styled.div`
  height: 12rem;
  position: relative;
  overflow: hidden;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 500ms;

  ${DestinationCard}:hover & {
    transform: scale(1.1);
  }
`;

export const Tint = styled.div`
  position: absolute;
  inset: 0;
  background: ${({ theme }) => theme.alpha(theme.colors.primary.DEFAULT, 0.2)};
  transition: background-color ${({ theme }) => theme.transitions.base};

  ${DestinationCard}:hover & {
    background: ${({ theme }) => theme.alpha(theme.colors.primary.DEFAULT, 0.3)};
  }
`;

export const IconBadge = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: ${({ theme }) => theme.colors.secondary.DEFAULT};
  color: ${({ theme }) => theme.colors.secondary.foreground};
  padding: 0.75rem;
  border-radius: ${({ theme }) => theme.radii.full};
  box-shadow: ${({ theme }) => theme.shadows.lg};
  display: flex;
`;

export const Body = styled.div`
  padding: 1.5rem;
`;

export const CardTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 1.25rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.foreground};
  margin: 0 0 0.5rem;
  transition: color ${({ theme }) => theme.transitions.fast};

  ${DestinationCard}:hover & {
    color: ${({ theme }) => theme.colors.primary.DEFAULT};
  }
`;

export const CardDescription = styled.p`
  color: ${({ theme }) => theme.colors.muted.foreground};
  margin: 0;
`;
