/* eslint-disable react/prop-types */

import styled, { ThemeProvider } from "styled-components";
import Sidebar from "../components/Sidebar";
import { theme } from "../../theme";

const StyledApp = styled.div`
  height: 100dvh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
function App() {
  return (
    <ThemeProvider theme={theme}>
      <StyledApp>
        <Sidebar />
        <div>Messages</div>
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
