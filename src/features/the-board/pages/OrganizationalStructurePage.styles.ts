import styled from "styled-components";
import { media } from "@/theme";

export const ContentSection = styled.section`
  padding: 4rem 1rem;
`;

export const Inner = styled.div`
  max-width: 64rem;
  margin: 0 auto;
`;

export const ChartBlock = styled.div`
  margin-bottom: 4rem;
`;

export const ChairmanRow = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;

export const ChairmanCard = styled.div`
  background: ${({ theme }) => theme.colors.primary.DEFAULT};
  color: ${({ theme }) => theme.colors.primary.foreground};
  border-radius: ${({ theme }) => theme.radii.xl};
  padding: 1.5rem;
  text-align: center;
  box-shadow: ${({ theme }) => theme.shadows.lg};
`;

export const ChairmanCardTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 1.125rem;
  font-weight: 700;
  margin: 0;
`;

export const ChairmanCardSubtitle = styled.p`
  font-size: 0.875rem;
  opacity: 0.9;
  margin: 0;
`;

export const ConnectorRow = styled.div`
  display: flex;
  justify-content: center;
`;

export const Connector = styled.div`
  width: 2px;
  height: 2rem;
  background: ${({ theme }) => theme.colors.border};
`;

export const DeptGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 1rem;

  ${media.md} {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const DeptChip = styled.div`
  background: ${({ theme }) => theme.colors.card};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: 1rem;
  text-align: center;
  transition: box-shadow ${({ theme }) => theme.transitions.base};

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.md};
  }
`;

export const DeptChipHead = styled.h4`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.foreground};
  font-size: 0.875rem;
  margin: 0 0 0.25rem;
`;

export const DeptChipName = styled.p`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.muted.foreground};
  margin: 0;
`;

export const SectionTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 1.875rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.foreground};
  margin: 0 0 2rem;
  text-align: center;
`;

export const DeptDetailGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  ${media.md} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const DeptCard = styled.div`
  background: ${({ theme }) => theme.colors.card};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.xl};
  padding: 1.5rem;
  transition: box-shadow ${({ theme }) => theme.transitions.base};

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }
`;

export const DeptCardRow = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
`;

export const DeptIndexBadge = styled.div`
  width: 3rem;
  height: 3rem;
  flex-shrink: 0;
  background: ${({ theme }) => theme.alpha(theme.colors.primary.DEFAULT, 0.1)};
  border-radius: ${({ theme }) => theme.radii.lg};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DeptIndexNumber = styled.span`
  font-family: ${({ theme }) => theme.fonts.display};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary.DEFAULT};
`;

export const DeptCardName = styled.h3`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.foreground};
  margin: 0 0 0.25rem;
`;

export const DeptCardHead = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.primary.DEFAULT};
  margin: 0 0 0.5rem;
`;

export const DeptCardDescription = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.muted.foreground};
  margin: 0;
`;
