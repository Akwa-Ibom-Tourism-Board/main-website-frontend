import styled from "styled-components";
import { media, fadeIn, pulse } from "@/theme";

export const Bar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: ${({ theme }) => theme.zIndex.topBar};
  background: ${({ theme }) => theme.colors.primary.DEFAULT};
  color: ${({ theme }) => theme.colors.primary.foreground};
  animation: ${fadeIn} 0.4s ease-out;
`;

// Everything lives in one slim row — no stacked sub-rows.
export const Content = styled.div`
  max-width: ${({ theme }) => theme.container.maxWidth};
  margin: 0 auto;
  min-height: 3rem;
  padding: 0.5rem 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.625rem;

  ${media.sm} {
    min-height: 3.25rem;
    padding: 0.625rem 1rem;
    gap: 1rem;
  }
`;

export const LogosGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.625rem;
  flex-shrink: 0;
`;

export const LogoImgSmall = styled.img`
  height: 2rem;
  width: auto;

  ${media.sm} {
    height: 2.375rem;
  }
`;

export const EmailGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.375rem;
  min-width: 0;
  overflow: hidden;
`;

export const EmailLink = styled.a`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 0.6875rem;
  text-underline-offset: 2px;
  transition: color ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.secondary.DEFAULT};
    text-decoration: underline;
  }

  ${media.sm} {
    font-size: 0.8125rem;
  }
`;

export const SocialIcons = styled.div`
  display: none;
  align-items: center;
  gap: 0.625rem;
  flex-shrink: 0;

  ${media.sm} {
    display: flex;
  }
`;

export const SocialIconLink = styled.a`
  display: flex;
  padding: 0.125rem;
  border-radius: ${({ theme }) => theme.radii.full};
  transition: color ${({ theme }) => theme.transitions.base}, transform ${({ theme }) => theme.transitions.base};

  &:hover {
    color: ${({ theme }) => theme.colors.secondary.DEFAULT};
    transform: scale(1.1);
  }
`;

export const Spacer = styled.div`
  flex: 1;
  min-width: 0.5rem;
`;

export const HotelIconSlot = styled.div`
  display: none;
  color: ${({ theme }) => theme.colors.highlightMuted};
  flex-shrink: 0;

  ${media.md} {
    display: flex;
  }
`;

export const RegisterButton = styled.a`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  background: transparent;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.highlight};
  font-size: 0.6875rem;
  font-weight: 600;
  white-space: nowrap;
  text-decoration: underline;
  text-underline-offset: 3px;
  animation: ${pulse} 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  transition: color ${({ theme }) => theme.transitions.base}, transform ${({ theme }) => theme.transitions.base};

  ${media.sm} {
    font-size: 0.8125rem;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.white};
    transform: scale(1.05);
    filter: drop-shadow(0 0 6px rgba(255, 255, 255, 0.9));
  }
`;

export const RegisterLabelShort = styled.span`
  display: inline;

  ${media.sm} {
    display: none;
  }
`;

export const RegisterLabelFull = styled.span`
  display: none;

  ${media.sm} {
    display: inline;
  }
`;
