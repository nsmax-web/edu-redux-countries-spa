import styled from "styled-components";
import { Link } from "react-router-dom";
import { IoMoon, IoMoonOutline } from "react-icons/io5";

import { Container } from "./Container";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { eTheme } from "../styles/theme";
import { setTheme } from "../store/theme";

const HeaderEl = styled.header`
  box-shadow: ${({ theme }) => theme.colors.shadow};
  background-color: ${({ theme }) => theme.colors.base};
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`;

const Title = styled(Link).attrs({
  to: "/",
})`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.font.size.small};
  text-decoration: none;
  font-weight: ${({ theme }) => theme.font.weight.bold};
`;

const ModeSwitcher = styled.div`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.font.size.small};
  cursor: pointer;
  text-transform: capitalize;
`;

export const Header = () => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector((state) => state.theme);

  const toggleTheme = () => {
    dispatch(setTheme(theme === eTheme.dark ? eTheme.light : eTheme.dark));
  };

  return (
    <HeaderEl>
      <Container>
        <Wrapper>
          <Title>Where is the world?</Title>
          <ModeSwitcher onClick={toggleTheme}>
            {theme === "light" ? (
              <IoMoonOutline size="14px" />
            ) : (
              <IoMoon size="14px" />
            )}{" "}
            <span style={{ marginLeft: "0.75rem" }}>{theme} Theme</span>
          </ModeSwitcher>
        </Wrapper>
      </Container>
    </HeaderEl>
  );
};
