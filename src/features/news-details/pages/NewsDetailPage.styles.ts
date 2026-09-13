import styled from "styled-components";
import { fadeIn, media } from "@/theme";

export const HeroImageSection = styled.section`
  position: relative;
  height: 60vh;
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
    to top,
    ${({ theme }) => theme.colors.background},
    ${({ theme }) => theme.alpha(theme.colors.background, 0.5)},
    transparent
  );
`;

export const ContentSection = styled.section`
  position: relative;
  z-index: 10;
  margin-top: -8rem;
  padding-bottom: 5rem;
`;

export const Inner = styled.div`
  max-width: 48rem;
  margin: 0 auto;
  padding: 0 1rem;
`;

export const Card = styled.div`
  background: ${({ theme }) => theme.colors.card};
  border-radius: ${({ theme }) => theme.radii["2xl"]};
  padding: 2rem;
  box-shadow: ${({ theme }) => theme.shadows.xl};
  border: 1px solid ${({ theme }) => theme.colors.border};
  animation: ${fadeIn} 0.6s ease-out forwards;

  ${media.md} {
    padding: 3rem;
  }
`;

export const MetaRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

export const MetaDate = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.muted.foreground};
  font-size: 0.875rem;
`;

export const CategoryTag = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: ${({ theme }) => theme.alpha(theme.colors.secondary.DEFAULT, 0.1)};
  color: ${({ theme }) => theme.colors.secondary.DEFAULT};
  padding: 0.25rem 0.75rem;
  border-radius: ${({ theme }) => theme.radii.full};
  font-size: 0.875rem;
`;

export const ArticleTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 1.875rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary.DEFAULT};
  margin: 0 0 1.5rem;
  line-height: 1.3;

  ${media.md} {
    font-size: 2.25rem;
  }
`;

export const ArticleBody = styled.div`
  color: ${({ theme }) => theme.colors.muted.foreground};
`;

export const Paragraph = styled.p`
  margin: 0 0 1rem;
  line-height: 1.75;
`;
