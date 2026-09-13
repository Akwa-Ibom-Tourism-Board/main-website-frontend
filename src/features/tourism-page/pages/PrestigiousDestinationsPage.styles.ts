import styled from "styled-components";
import { media } from "@/theme";

export const ContentSection = styled.section`
  padding: 4rem 1rem;
`;

export const Inner = styled.div`
  max-width: 72rem;
  margin: 0 auto;
`;

export const DestinationsGrid = styled.div`
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

export const DestinationCard = styled.div`
  background: ${({ theme }) => theme.colors.card};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.xl};
  overflow: hidden;
  transition: box-shadow ${({ theme }) => theme.transitions.base};

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.xl};
  }

  &:hover [data-destination-image] {
    transform: scale(1.05);
  }
`;

export const DestinationImage = styled.div`
  height: 12rem;
  background: linear-gradient(
    to bottom right,
    ${({ theme }) => theme.alpha(theme.colors.primary.DEFAULT, 0.4)},
    ${({ theme }) => theme.alpha(theme.colors.secondary.DEFAULT, 0.4)}
  );
  transition: transform 0.5s ease;
`;

export const DestinationBody = styled.div`
  padding: 1.5rem;
`;

export const DestinationTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 1.25rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.foreground};
  margin: 0 0 0.75rem;
`;

export const DestinationText = styled.p`
  color: ${({ theme }) => theme.colors.muted.foreground};
  font-size: 0.875rem;
  margin: 0 0 1rem;
`;

export const FeaturesRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const FeatureTag = styled.span`
  font-size: 0.75rem;
  background: ${({ theme }) => theme.alpha(theme.colors.primary.DEFAULT, 0.1)};
  color: ${({ theme }) => theme.colors.primary.DEFAULT};
  padding: 0.25rem 0.5rem;
  border-radius: ${({ theme }) => theme.radii.full};
`;
