import styled from "styled-components";
import { media } from "@/theme";

export const Section = styled.section`
  padding: 4rem 0;
  background: ${({ theme }) => theme.alpha(theme.colors.muted.DEFAULT, 0.5)};
`;

export const Heading = styled.div`
  text-align: center;
  margin-bottom: 2.5rem;
`;

export const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 1.875rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary.DEFAULT};
  margin: 0 0 1rem;

  ${media.md} {
    font-size: 2.25rem;
  }
`;

export const Lede = styled.p`
  color: ${({ theme }) => theme.colors.muted.foreground};
  max-width: 42rem;
  margin: 0 auto;
`;

export const ScrollTrack = styled.div`
  overflow-x: hidden;
`;

export const ScrollRow = styled.div`
  display: flex;
  gap: 1.5rem;
  width: fit-content;
`;

export const AnnouncementCard = styled.div`
  width: 20rem;
  flex-shrink: 0;
  background: ${({ theme }) => theme.colors.card};
  border-radius: ${({ theme }) => theme.radii.xl};
  padding: 1.5rem;
  box-shadow: ${({ theme }) => theme.shadows.lg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  cursor: pointer;
  transition: box-shadow 300ms, border-color 300ms, transform 300ms;

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.xl};
    transform: translateY(-0.5rem);
    border-color: ${({ theme }) => theme.alpha(theme.colors.secondary.DEFAULT, 0.5)};
  }
`;

export const DateRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.muted.foreground};
  margin-bottom: 0.75rem;
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
`;

export const CardPreview = styled.p`
  color: ${({ theme }) => theme.colors.muted.foreground};
  font-size: 0.875rem;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const DialogBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const DialogDate = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.muted.foreground};
`;

export const DialogText = styled.p`
  color: ${({ theme }) => theme.colors.foreground};
  line-height: 1.6;
  margin: 0;
`;
