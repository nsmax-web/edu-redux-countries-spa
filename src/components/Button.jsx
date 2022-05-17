import styled from "styled-components";

export const Button = styled.button`
  padding: 0 1rem;
  background-color: ${({ theme }) => theme.colors.base};
  box-shadow: ${({ theme }) => theme.colors.shadow};
  line-height: 2.5;
  border-radius: ${({ theme }) => theme.other.radii};

  border: none;
  display: flex;
  align-items: center;
  gap: 0.75rem;

  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
`;
