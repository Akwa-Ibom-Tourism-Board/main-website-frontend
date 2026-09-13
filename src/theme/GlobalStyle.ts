import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    border-color: ${({ theme }) => theme.colors.border};
  }

  html {
    scroll-behavior: smooth;
    /* Keeps hash-linked sections (#hotels, #contact, ...) from landing
       underneath the fixed TopBar + Navbar when scrolled/jumped to. */
    scroll-padding-top: 7.5rem;
  }

  body {
    margin: 0;
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.foreground};
    font-family: ${({ theme }) => theme.fonts.sans};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  img {
    max-width: 100%;
    display: block;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    font-family: inherit;
  }
`;
