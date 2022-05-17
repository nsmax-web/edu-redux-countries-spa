import styled from "styled-components";

import { IoSearch } from "react-icons/io5";

const InputContainer = styled.label`
  background-color: ${({ theme }) => theme.colors.base};
  padding: 1rem 2rem;
  display: flex;
  align-items: center;

  border-radius: ${({ theme }) => theme.other.radii};
  box-shadow: ${({ theme }) => theme.colors.shadow};
  width: 100%;
  margin-bottom: 1rem;

  @media (min-width: 767px) {
    margin-bottom: 0;
    width: 280px;
  }
`;

const Input = styled.input.attrs({
  type: "search",
  placeholder: "Search for a country...",
})`
  margin-left: 2rem;
  border: none;
  outline: none;
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.base};
`;

export const Search = ({ search, setSearch }) => {
  return (
    <InputContainer>
      <IoSearch />
      <Input onChange={(e) => setSearch(e.target.value)} value={search} />
    </InputContainer>
  );
};
