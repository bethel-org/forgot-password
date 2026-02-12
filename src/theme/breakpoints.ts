export const breakpoints = {
  tablet: "768px",
  desktop: "1024px",
  largeDesktop: "1440px",
} as const;

export const mediaQueries = {
  tablet: `@media (min-width: ${breakpoints.tablet})`,
  desktop: `@media (min-width: ${breakpoints.desktop})`,
  largeDesktop: `@media (min-width: ${breakpoints.largeDesktop})`,
} as const;

export type BreakpointToken = typeof breakpoints;
export type MediaQueryToken = typeof mediaQueries;
