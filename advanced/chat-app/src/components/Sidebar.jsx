/* eslint-disable react/prop-types */

import styled, { useTheme } from "styled-components";
import SearchContacts from "./SearchContacts";

const StyledSidebar = styled.div`
  height: 100%;
  width: 33%;
  background-color: ${(props) => props.theme.backgroundColor};
`;
function Sidebar() {
  const theme = useTheme();
  return (
    <StyledSidebar theme={theme}>
      <SearchContacts />
    </StyledSidebar>
  );
}

export default Sidebar;
