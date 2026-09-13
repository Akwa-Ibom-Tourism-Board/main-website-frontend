import styled from "styled-components";
import { media } from "@/theme";

export const ContentSection = styled.section`
  padding: 4rem 1rem;
`;

export const Inner = styled.div`
  max-width: 56rem;
  margin: 0 auto;
`;

export const IntroBlock = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

export const IntroTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 1.875rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.foreground};
  margin: 0 0 1rem;
`;

export const IntroText = styled.p`
  color: ${({ theme }) => theme.colors.muted.foreground};
  max-width: 42rem;
  margin: 0 auto;
  line-height: 1.75;
`;

export const MonthList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const MonthCard = styled.div`
  background: ${({ theme }) => theme.colors.card};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.xl};
  overflow: hidden;
`;

export const MonthHeader = styled.div`
  background: ${({ theme }) => theme.alpha(theme.colors.primary.DEFAULT, 0.1)};
  padding: 0.75rem 1.5rem;
`;

export const MonthTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 1.125rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.foreground};
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const MonthBody = styled.div`
  padding: 1.5rem;
`;

export const EventRow = styled.div<{ $divider?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;

  ${media.md} {
    flex-direction: row;
    align-items: center;
  }

  ${({ $divider, theme }) =>
    $divider &&
    `
      margin-top: 1rem;
      padding-top: 1rem;
      border-top: 1px solid ${theme.colors.border};
    `}
`;

export const EventName = styled.h4`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.foreground};
  margin: 0;
`;

export const EventMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 0.5rem;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.muted.foreground};
`;

export const MetaItem = styled.span`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

export const LearnMoreButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.primary.DEFAULT};
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
