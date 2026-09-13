import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.gradients.heroScene};
`;

export const Content = styled.div`
  text-align: center;
`;

export const Code = styled.h1`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 3rem;
  font-weight: 700;
  margin: 0 0 1rem;
  color: ${({ theme }) => theme.colors.white};
`;

export const Message = styled.p`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.alpha(theme.colors.white, 0.8)};
  margin: 0 0 1rem;
`;

export const HomeLink = styled.a`
  color: ${({ theme }) => theme.colors.secondary.DEFAULT};
  text-decoration: underline;
  transition: color ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.white};
  }
`;
