import styled from "styled-components";
import { Link } from "react-router-dom";
import { media, fadeIn, glowPulse } from "@/theme";

// Must track TopBar's own height exactly (3rem below `sm`, 3.25rem from
// `sm` up) — any mismatch leaves a gap between the two fixed bars.
export const Nav = styled.nav`
  position: fixed;
  top: 3rem;
  left: 0;
  right: 0;
  z-index: ${({ theme }) => theme.zIndex.navbar};
  background: ${({ theme }) => theme.alpha(theme.colors.background, 0.95)};
  backdrop-filter: blur(4px);
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: ${({ theme }) => theme.shadows.sm};

  ${media.sm} {
    top: 3.25rem;
  }
`;

export const Inner = styled.div`
  max-width: ${({ theme }) => theme.container.maxWidth};
  margin: 0 auto;
  padding: 1rem;

  ${media.sm} {
    padding: 1rem 2rem;
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  row-gap: 0.5rem;
  min-height: 4rem;
  padding: 0.375rem 0;
`;

export const BrandLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-shrink: 0;

  ${media.sm} {
    gap: 0.75rem;
  }
`;

export const LogoImg = styled.img`
  height: 3rem;
  width: 3rem;

  ${media.sm} {
    height: 3.5rem;
    width: 3.5rem;
  }

  ${media.lg} {
    height: 5rem;
    width: 5rem;
  }
`;

export const BrandText = styled.div`
  display: none;

  ${media.sm} {
    display: block;
  }
`;

export const BrandTitle = styled.div`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 0.875rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary.DEFAULT};
  line-height: 1.2;

  ${media.md} {
    font-size: 1rem;
  }

  ${media.lg} {
    font-size: 1.25rem;
  }
`;

export const BrandSubtitle = styled.div`
  font-size: 0.625rem;
  color: ${({ theme }) => theme.colors.muted.foreground};

  ${media.sm} {
    font-size: 0.75rem;
  }
`;

export const DesktopLinks = styled.div`
  display: none;

  ${media.md} {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    row-gap: 0.5rem;
    gap: 0.875rem;
  }

  ${media.lg} {
    gap: 1.25rem;
  }

  ${media.xl} {
    gap: 1.75rem;
  }
`;

export const NavItemLink = styled(Link)`
  color: ${({ theme }) => theme.colors.foreground};
  font-weight: 500;
  transition: color ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.secondary.DEFAULT};
  }
`;

export const NavCtaButton = styled.button`
  display: inline-flex;
  align-items: center;
  white-space: nowrap;
  padding: 0.5rem 1rem;
  border-radius: ${({ theme }) => theme.radii.full};
  border: none;
  background: ${({ theme }) => theme.colors.secondary.DEFAULT};
  color: ${({ theme }) => theme.colors.secondary.foreground};
  font-weight: 600;
  font-size: 0.8125rem;
  cursor: pointer;
  transition: background-color ${({ theme }) => theme.transitions.fast}, transform ${({ theme }) => theme.transitions.fast};
  animation: ${glowPulse} 2.2s ease-in-out infinite;

  &:hover {
    background: ${({ theme }) => theme.alpha(theme.colors.secondary.DEFAULT, 0.9)};
    transform: translateY(-1px);
  }
`;

export const NavCtaButtonOutline = styled.button`
  display: inline-flex;
  align-items: center;
  white-space: nowrap;
  padding: 0.5rem 1rem;
  border-radius: ${({ theme }) => theme.radii.full};
  border: 1.5px solid ${({ theme }) => theme.colors.primary.DEFAULT};
  background: transparent;
  color: ${({ theme }) => theme.colors.primary.DEFAULT};
  font-weight: 600;
  font-size: 0.8125rem;
  cursor: pointer;
  transition: background-color ${({ theme }) => theme.transitions.fast}, color ${({ theme }) => theme.transitions.fast};

  &:hover {
    background: ${({ theme }) => theme.colors.primary.DEFAULT};
    color: ${({ theme }) => theme.colors.primary.foreground};
  }
`;

export const MenuButton = styled.button`
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.foreground};
  padding: 0.5rem;
  margin-right: -0.5rem;
  cursor: pointer;
  display: flex;

  ${media.md} {
    display: none;
  }
`;

export const MobileMenu = styled.div`
  padding: 1rem 0;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  animation: ${fadeIn} 0.4s ease-out;

  ${media.md} {
    display: none;
  }
`;

export const MobileLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const MobileNavItemLink = styled(Link)`
  padding: 0.5rem 0;
  color: ${({ theme }) => theme.colors.foreground};
  font-weight: 500;
  transition: color ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.secondary.DEFAULT};
  }
`;

// Always visible below `md` (not gated behind the hamburger menu) — the
// full-text versions in `DesktopLinks` take over at `md` and up.
export const CompactCtaGroup = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;

  ${media.md} {
    display: none;
  }
`;

export const CompactCtaButton = styled.button`
  display: inline-flex;
  align-items: center;
  white-space: nowrap;
  padding: 0.375rem 0.75rem;
  border-radius: ${({ theme }) => theme.radii.full};
  border: none;
  background: ${({ theme }) => theme.colors.secondary.DEFAULT};
  color: ${({ theme }) => theme.colors.secondary.foreground};
  font-weight: 600;
  font-size: 0.6875rem;
  cursor: pointer;
  animation: ${glowPulse} 2.2s ease-in-out infinite;

  ${media.sm} {
    font-size: 0.75rem;
    padding: 0.5rem 0.875rem;
  }
`;

export const CompactCtaButtonOutline = styled.button`
  display: inline-flex;
  align-items: center;
  white-space: nowrap;
  padding: 0.375rem 0.75rem;
  border-radius: ${({ theme }) => theme.radii.full};
  border: 1.5px solid ${({ theme }) => theme.colors.primary.DEFAULT};
  background: transparent;
  color: ${({ theme }) => theme.colors.primary.DEFAULT};
  font-weight: 600;
  font-size: 0.6875rem;
  cursor: pointer;

  ${media.sm} {
    font-size: 0.75rem;
    padding: 0.5rem 0.875rem;
  }
`;
