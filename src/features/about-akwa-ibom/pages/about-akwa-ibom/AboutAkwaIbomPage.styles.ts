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

export const Paragraph = styled.p`
  color: ${({ theme }) => theme.colors.muted.foreground};
  margin: 0 0 2rem;
  line-height: 1.75;
`;

export const FactsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-bottom: 3rem;

  ${media.md} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const InfoCard = styled.div`
  background: ${({ theme }) => theme.colors.card};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.xl};
  padding: 1.5rem;
`;

export const InfoCardTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 1.25rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.foreground};
  margin: 0 0 1rem;
`;

export const InfoCardText = styled.p`
  color: ${({ theme }) => theme.colors.muted.foreground};
  margin: 0;
  line-height: 1.6;
`;

export const FactsList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  color: ${({ theme }) => theme.colors.muted.foreground};
`;
