import styled from "styled-components";
import { fadeIn, media } from "@/theme";

export const Section = styled.section`
  padding: 5rem 0;
  background: ${({ theme }) => theme.gradients.heroScene};
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
  color: ${({ theme }) => theme.colors.white};
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

export const NewsCardEl = styled.div`
  background: ${({ theme }) => theme.colors.card};
  border-radius: ${({ theme }) => theme.radii.xl};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.lg};
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.colors.border};
  transition:
    box-shadow 500ms,
    border-color 500ms;
  animation: ${fadeIn} 0.6s ease-out forwards;

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.xl};
    border-color: ${({ theme }) =>
      theme.alpha(theme.colors.secondary.DEFAULT, 0.5)};
  }
`;

export const ImageWrap = styled.div`
  position: relative;
  height: 12rem;
  overflow: hidden;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 500ms;

  ${NewsCardEl}:hover & {
    transform: scale(1.1);
  }
`;

export const CategoryBadge = styled.span`
  position: absolute;
  top: 1rem;
  left: 1rem;
  background: ${({ theme }) => theme.colors.secondary.DEFAULT};
  color: ${({ theme }) => theme.colors.secondary.foreground};
  padding: 0.25rem 0.75rem;
  border-radius: ${({ theme }) => theme.radii.full};
  font-size: 0.75rem;
  font-weight: 500;
`;

export const Body = styled.div`
  padding: 1.25rem;
`;

export const Date = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.muted.foreground};
  margin: 0 0 0.5rem;
`;

export const CardTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 1.125rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.foreground};
  margin: 0 0 0.5rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  transition: color ${({ theme }) => theme.transitions.fast};

  ${NewsCardEl}:hover & {
    color: ${({ theme }) => theme.colors.primary.DEFAULT};
  }
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.muted.foreground};
  font-size: 0.875rem;
  margin: 0 0 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const ReadMore = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: ${({ theme }) => theme.colors.secondary.DEFAULT};
  font-weight: 500;
  font-size: 0.875rem;
  transition: gap 300ms;

  ${NewsCardEl}:hover & {
    gap: 0.5rem;
  }
`;
