import styled from "styled-components";

export const PageWrapper = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.background};
`;

export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1rem;
`;

export const QrImage = styled.img`
  width: 12rem;
  height: 12rem;
  object-fit: contain;
`;

export const ModalHint = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.gray500};
  margin: 0;
`;

export const ModalOrText = styled.div`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.gray700};
`;

export const ModalLink = styled.a`
  color: ${({ theme }) => theme.colors.primary.DEFAULT};
  font-weight: 600;
  text-decoration: underline;
  transition: color ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.secondary.DEFAULT};
  }
`;
