import styled from "styled-components";
import Information from "./Information";
import Quote from "./Quote";
import Action from "./Action";

/* eslint-disable react/prop-types */
const StyledMain = styled.main``;
function Main() {
  return (
    <StyledMain>
      <Information />
      <Quote />
      <Action />
    </StyledMain>
  );
}

export default Main;
