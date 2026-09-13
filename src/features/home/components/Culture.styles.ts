import styled from "styled-components";
import { media } from "@/theme";

export const Section = styled.section`
  padding: 5rem 0;
  background: ${({ theme }) => theme.alpha(theme.colors.muted.DEFAULT, 0.3)};
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: center;

  ${media.lg} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const ImageFrame = styled.div`
  position: relative;
  border-radius: ${({ theme }) => theme.radii["2xl"]};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.elegant};
  height: 500px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ImageScrim = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, ${({ theme }) => theme.alpha(theme.colors.primary.DEFAULT, 0.6)}, transparent);
`;

export const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 2.25rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.foreground};
  margin: 0 0 1.5rem;

  ${media.md} {
    font-size: 3rem;
  }
`;

export const Lede = styled.p`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.muted.foreground};
  margin: 0 0 2rem;
`;

export const HighlightGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  ${media.sm} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const HighlightItem = styled.div`
  display: flex;
  gap: 1rem;
  padding: 1rem;
  border-radius: ${({ theme }) => theme.radii.lg};
  transition: background-color ${({ theme }) => theme.transitions.base};

  &:hover {
    background: ${({ theme }) => theme.colors.background};
  }
`;

export const HighlightIcon = styled.div`
  flex-shrink: 0;
  background: ${({ theme }) => theme.colors.secondary.DEFAULT};
  color: ${({ theme }) => theme.colors.secondary.foreground};
  padding: 0.75rem;
  border-radius: ${({ theme }) => theme.radii.lg};
  height: fit-content;
  display: flex;
`;

export const HighlightTitle = styled.h3`
  font-weight: 700;
  color: ${({ theme }) => theme.colors.foreground};
  margin: 0 0 0.25rem;
`;

export const HighlightDescription = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.muted.foreground};
  margin: 0;
`;
