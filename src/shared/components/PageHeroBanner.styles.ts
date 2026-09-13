import styled, { css } from "styled-components";
import { fadeIn } from "@/theme";

export type HeroTint = "primary" | "secondary" | "scene" | "panel" | "none";
export type HeroTextColor = "foreground" | "white";
export type HeroSubtitleColor = "muted" | "secondary" | "white";

const tintStyles: Record<HeroTint, ReturnType<typeof css>> = {
  primary: css`
    background: ${({ theme }) => theme.alpha(theme.colors.primary.DEFAULT, 0.1)};
  `,
  secondary: css`
    background: ${({ theme }) => theme.alpha(theme.colors.secondary.DEFAULT, 0.1)};
  `,
  // The same dramatic dark-green-to-black sweep behind the homepage Hero.
  scene: css`
    background: ${({ theme }) => theme.gradients.heroScene};
  `,
  // The calmer, more uniform dark-green sweep used by the Destinations panel.
  panel: css`
    background: ${({ theme }) => theme.gradients.panel};
  `,
  none: css``,
};

export const Banner = styled.section<{ $image?: string; $tint: HeroTint }>`
  position: relative;
  height: 40vh;
  min-height: 300px;
  margin-top: 7.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  ${({ $tint }) => tintStyles[$tint]}

  ${({ $image }) =>
    $image &&
    css`
      &::before {
        content: "";
        position: absolute;
        inset: 0;
        background-image: url(${$image});
        background-size: cover;
        background-position: top;
      }
    `}
`;

export const GradientOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to right,
    ${({ theme }) => theme.alpha(theme.colors.secondary.DEFAULT, 0.2)},
    ${({ theme }) => theme.alpha(theme.colors.primary.DEFAULT, 0.2)}
  );
`;

const textColors: Record<HeroTextColor, ReturnType<typeof css>> = {
  foreground: css`
    color: ${({ theme }) => theme.colors.foreground};
  `,
  white: css`
    color: ${({ theme }) => theme.colors.white};
  `,
};

const subtitleColors: Record<HeroSubtitleColor, ReturnType<typeof css>> = {
  muted: css`
    color: ${({ theme }) => theme.colors.muted.foreground};
  `,
  secondary: css`
    color: ${({ theme }) => theme.colors.secondary.DEFAULT};
  `,
  white: css`
    color: ${({ theme }) => theme.alpha(theme.colors.white, 0.9)};
  `,
};

export const Content = styled.div`
  position: relative;
  z-index: 1;
  text-align: center;
  padding: 0 1rem;
`;

export const Title = styled.h1<{ $color: HeroTextColor }>`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 2.25rem;
  font-weight: 700;
  margin: 0 0 1rem;
  animation: ${fadeIn} 0.6s ease-out forwards;

  @media (min-width: 768px) {
    font-size: 3rem;
  }

  ${({ $color }) => textColors[$color]}
`;

export const Subtitle = styled.p<{ $color: HeroSubtitleColor }>`
  font-size: 1.125rem;
  max-width: 42rem;
  margin: 0 auto;
  animation: ${fadeIn} 0.6s ease-out forwards;

  ${({ $color }) => subtitleColors[$color]}
`;
