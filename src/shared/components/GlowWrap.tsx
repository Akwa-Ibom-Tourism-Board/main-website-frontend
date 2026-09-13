import styled from "styled-components";
import { glowPulse } from "@/theme";

// Wrap a pill-shaped CTA in this to give it a constant, gentle glow halo
// (used for the hospitality-establishment registration CTAs).
export const GlowWrap = styled.span`
  display: inline-block;
  border-radius: ${({ theme }) => theme.radii.full};
  animation: ${glowPulse} 2.2s ease-in-out infinite;
`;
