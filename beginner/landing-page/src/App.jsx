import { ThemeProvider } from "styled-components";
import { theme } from "../theme";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

/* eslint-disable react/prop-types */
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Main />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
