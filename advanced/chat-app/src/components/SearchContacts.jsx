/* eslint-disable react/prop-types */

import styled, { useTheme } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding-top: 5%;
  padding-bottom: 5%;
  padding-left: 10%;
  padding-right: 10%;

  border-bottom: 1px solid ${(props) => props.theme.subtle};
`;
const StyleInput = styled.input`
  font-size: 1.25rem;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  border-radius: 2rem;
  border: 0;
  &:focus-visible {
    outline: 0;
  }
  width: 100%;
  padding-left: 2rem;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='%23999' stroke-width='2'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' /%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: 0.5rem 0.6rem;
  background-size: 1rem;
  position: relative;
`;

const StyledButton = styled.button`
  padding-left: 0.8rem;
  padding-right: 0.8rem;
  padding-top: 0.4rem;
  padding-bottom: 0.4rem;
  margin-left: 1rem;
  border: 0;
  border-radius: 0.5rem;
  background-color: ${(props) => props.theme.action};
  font-size: 1rem;
  &:hover {
  }
`;
function SearchContacts() {
  const theme = useTheme();
  return (
    <Wrapper theme={theme}>
      <StyleInput type="text" placeholder="Search" />
      <StyledButton theme={theme}>New</StyledButton>
    </Wrapper>
  );
}

export default SearchContacts;
