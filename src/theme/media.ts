import { theme } from "./theme";

// Min-width breakpoint helpers for styled-components, mirroring the
// Tailwind `sm`/`md`/`lg`/`xl`/`2xl` (+ ad-hoc `xs`) breakpoints the app
// used to rely on: `${media.md} { flex-direction: row; }`
export const media = {
  xs: `@media (min-width: ${theme.breakpoints.xs})`,
  sm: `@media (min-width: ${theme.breakpoints.sm})`,
  md: `@media (min-width: ${theme.breakpoints.md})`,
  lg: `@media (min-width: ${theme.breakpoints.lg})`,
  xl: `@media (min-width: ${theme.breakpoints.xl})`,
  "2xl": `@media (min-width: ${theme.breakpoints["2xl"]})`,
} as const;
