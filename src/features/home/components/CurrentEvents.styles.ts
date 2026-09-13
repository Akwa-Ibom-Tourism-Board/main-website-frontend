import styled from "styled-components";
import { fadeIn, media } from "@/theme";

export const Section = styled.section`
  padding: 5rem 0;
  background: ${({ theme }) => theme.alpha(theme.colors.muted.DEFAULT, 0.5)};
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
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const EventCard = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.card};
  border-radius: ${({ theme }) => theme.radii.xl};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.lg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  cursor: pointer;
  transition: box-shadow 300ms, border-color 300ms, transform 300ms;
  animation: ${fadeIn} 0.6s ease-out forwards;

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.xl};
    border-color: ${({ theme }) => theme.alpha(theme.colors.secondary.DEFAULT, 0.5)};
    transform: translateY(-0.25rem);
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

  ${EventCard}:hover & {
    transform: scale(1.08);
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 1.25rem;
`;

export const CardTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 1.125rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.foreground};
  margin: 0 0 0.5rem;
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.muted.foreground};
  font-size: 0.875rem;
  line-height: 1.6;
  margin: 0 0 1.25rem;
  flex: 1;
`;

export const ViewDetails = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: ${({ theme }) => theme.colors.secondary.DEFAULT};
  font-weight: 500;
  font-size: 0.875rem;
  transition: gap 300ms;

  ${EventCard}:hover & {
    gap: 0.5rem;
  }
`;
