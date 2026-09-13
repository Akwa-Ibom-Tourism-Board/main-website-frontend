import styled, { css } from "styled-components";

export const MobileWrapper = styled.div`
  width: 100%;
`;

export const MobileTrigger = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0.5rem 0;
  background: transparent;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.foreground};
  font-weight: 500;
  font-family: inherit;
  font-size: 1rem;
  transition: color ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.primary.DEFAULT};
  }
`;

export const MobilePanel = styled.div<{ $open: boolean }>`
  overflow: hidden;
  transition: max-height 300ms ease-in-out, opacity 300ms ease-in-out;
  max-height: ${({ $open }) => ($open ? "24rem" : "0")};
  opacity: ${({ $open }) => ($open ? 1 : 0)};
`;

export const MobileList = styled.div`
  padding: 0.5rem 0 0.5rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  border-left: 2px solid ${({ theme }) => theme.alpha(theme.colors.primary.DEFAULT, 0.3)};
`;

export const MobileItem = styled.a`
  display: block;
  padding: 0.375rem 0;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.muted.foreground};
  transition: color ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.primary.DEFAULT};
  }
`;

export const DesktopWrapper = styled.div`
  position: relative;
`;

export const DesktopTrigger = styled.button`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  background: transparent;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.foreground};
  font-weight: 500;
  font-family: inherit;
  font-size: 1rem;
  padding: 0.5rem 0;
  transition: color ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.secondary.DEFAULT};
  }
`;

export const DesktopPanel = styled.div<{ $open: boolean }>`
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 220px;
  background: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  box-shadow: ${({ theme }) => theme.shadows.lg};
  padding: 0.5rem 0;
  z-index: ${({ theme }) => theme.zIndex.dropdown};
  transform-origin: top;
  transition: opacity 200ms ease-out, transform 200ms ease-out;

  ${({ $open }) =>
    $open
      ? css`
          opacity: 1;
          transform: scale(1) translateY(0);
          pointer-events: auto;
        `
      : css`
          opacity: 0;
          transform: scale(0.95) translateY(-0.5rem);
          pointer-events: none;
        `}
`;

export const DesktopItem = styled.a`
  display: block;
  padding: 0.625rem 1rem;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.foreground};
  transition: color ${({ theme }) => theme.transitions.fast}, background-color ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.navHover};
  }
`;
