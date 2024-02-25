/* eslint-disable react/prop-types */

import styled, { useTheme } from "styled-components";

const StyledFooter = styled.footer`
  margin: 0;
  width: 100%;
  background-color: ${(props) => props.theme.darkBackgroundColor};
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  display: grid;
  place-items: center;
`;
const Content = styled.p`
  font-size: 1rem;
  color: ${(props) => props.theme.heroSecondaryColor};
`;
function Footer() {
  const theme = useTheme();
  return (
    <StyledFooter theme={theme}>
      <Content theme={theme}>
        Made as a project for The Odin Project 2024
      </Content>
    </StyledFooter>
  );
}

export default Footer;
