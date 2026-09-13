import styled from "styled-components";
import { fadeIn, media } from "@/theme";

export const Section = styled.section`
  padding: 5rem 0;
  background: ${({ theme }) => theme.colors.servicesBackground};
`;

export const Heading = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

export const Eyebrow = styled.span`
  color: ${({ theme }) => theme.colors.secondary.DEFAULT};
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-size: 0.875rem;
`;

export const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 1.875rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary.DEFAULT};
  margin: 0.5rem 0 1rem;

  ${media.md} {
    font-size: 2.25rem;
  }
`;

export const Lede = styled.p`
  color: ${({ theme }) => theme.colors.muted.foreground};
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

export const ServiceCard = styled.div`
  background: ${({ theme }) => theme.colors.card};
  border-radius: ${({ theme }) => theme.radii.xl};
  padding: 1.5rem;
  box-shadow: ${({ theme }) => theme.shadows.md};
  border: 1px solid ${({ theme }) => theme.colors.border};
  transition: box-shadow ${({ theme }) => theme.transitions.base}, border-color ${({ theme }) => theme.transitions.base};
  animation: ${fadeIn} 0.6s ease-out forwards;

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.lg};
    border-color: ${({ theme }) => theme.alpha(theme.colors.secondary.DEFAULT, 0.3)};
  }
`;

export const IconBadge = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: ${({ theme }) => theme.radii.lg};
  background: ${({ theme }) => theme.alpha(theme.colors.secondary.DEFAULT, 0.1)};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.secondary.DEFAULT};
  transition: background-color ${({ theme }) => theme.transitions.base};

  ${ServiceCard}:hover & {
    background: ${({ theme }) => theme.alpha(theme.colors.secondary.DEFAULT, 0.2)};
  }
`;

export const ServiceTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 1.125rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.foreground};
  margin: 0 0 0.5rem;
`;

export const ServiceDescription = styled.p`
  color: ${({ theme }) => theme.colors.muted.foreground};
  font-size: 0.875rem;
  line-height: 1.6;
  margin: 0;
`;
