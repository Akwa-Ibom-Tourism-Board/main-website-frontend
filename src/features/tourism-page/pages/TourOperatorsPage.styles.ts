import styled from "styled-components";
import { media } from "@/theme";

export const ContentSection = styled.section`
  padding: 4rem 1rem;
`;

export const Inner = styled.div`
  max-width: 56rem;
  margin: 0 auto;
`;

export const SectionTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 1.875rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.foreground};
  margin: 0 0 1.5rem;
`;

export const IntroText = styled.p`
  color: ${({ theme }) => theme.colors.muted.foreground};
  margin: 0 0 2rem;
  line-height: 1.75;
`;

export const OperatorsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-bottom: 3rem;

  ${media.md} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const OperatorCard = styled.div`
  background: ${({ theme }) => theme.colors.card};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: 1.5rem;
  transition: box-shadow ${({ theme }) => theme.transitions.base};

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }
`;

export const OperatorTitle = styled.h3`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.foreground};
  margin: 0 0 0.5rem;
`;

export const OperatorText = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.muted.foreground};
  margin: 0 0 1rem;
`;

export const LicensedBadge = styled.span`
  display: inline-block;
  font-size: 0.75rem;
  background: ${({ theme }) => theme.alpha(theme.colors.primary.DEFAULT, 0.1)};
  color: ${({ theme }) => theme.colors.primary.DEFAULT};
  padding: 0.25rem 0.75rem;
  border-radius: ${({ theme }) => theme.radii.full};
`;

export const List = styled.ul`
  list-style: disc;
  margin: 0;
  padding-left: 1.5rem;
  color: ${({ theme }) => theme.colors.muted.foreground};

  li {
    margin-bottom: 0.5rem;
  }
`;
