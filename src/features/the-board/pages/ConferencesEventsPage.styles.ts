import styled from "styled-components";
import { media } from "@/theme";

export const ContentSection = styled.section`
  padding: 4rem 1rem;
`;

export const Inner = styled.div`
  max-width: 64rem;
  margin: 0 auto;
`;

export const SectionBlock = styled.div`
  margin-bottom: 4rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const SectionTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 1.875rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.foreground};
  margin: 0 0 2rem;
`;

export const UpcomingGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  ${media.md} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const UpcomingCard = styled.div`
  background: ${({ theme }) => theme.alpha(theme.colors.primary.DEFAULT, 0.05)};
  border: 2px solid ${({ theme }) => theme.alpha(theme.colors.primary.DEFAULT, 0.2)};
  border-radius: ${({ theme }) => theme.radii.xl};
  padding: 1.5rem;
  transition: border-color ${({ theme }) => theme.transitions.base};

  &:hover {
    border-color: ${({ theme }) => theme.alpha(theme.colors.primary.DEFAULT, 0.4)};
  }
`;

export const UpcomingBadge = styled.span`
  display: inline-block;
  font-size: 0.75rem;
  background: ${({ theme }) => theme.colors.secondary.DEFAULT};
  color: ${({ theme }) => theme.colors.secondary.foreground};
  padding: 0.25rem 0.75rem;
  border-radius: ${({ theme }) => theme.radii.full};
`;

export const EventTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 1.25rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.foreground};
  margin: 1rem 0 0.5rem;
`;

export const PastEventTitle = styled(EventTitle)`
  margin-top: 0;
`;

export const EventDescription = styled.p`
  color: ${({ theme }) => theme.colors.muted.foreground};
  font-size: 0.875rem;
  margin: 0 0 1rem;
`;

export const EventMetaRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.muted.foreground};
`;

export const EventMetaItem = styled.span`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

export const PastEventsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const PastEventCard = styled.div`
  background: ${({ theme }) => theme.colors.card};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.xl};
  padding: 1.5rem;
  transition: box-shadow ${({ theme }) => theme.transitions.base};

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }
`;

export const PastEventRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 1.5rem;

  ${media.md} {
    flex-direction: row;
    align-items: flex-start;
  }
`;

export const PastEventThumb = styled.div`
  width: 8rem;
  height: 8rem;
  flex-shrink: 0;
  border-radius: ${({ theme }) => theme.radii.lg};
  background: linear-gradient(
    to bottom right,
    ${({ theme }) => theme.alpha(theme.colors.primary.DEFAULT, 0.3)},
    ${({ theme }) => theme.alpha(theme.colors.secondary.DEFAULT, 0.3)}
  );
`;

export const PastEventBody = styled.div`
  flex: 1;
`;
