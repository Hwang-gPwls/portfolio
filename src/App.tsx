import React from "react";
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/globalStyles";
import { theme } from "./styles/theme";

import Main from "./pages/Main";
import Career from "./pages/Career";
import Strength from "./pages/Strength";

const App = () => {
  return (
    <Container>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/career/*" element={<Career />}></Route>
            <Route path="/strength/*" element={<Strength />}></Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
`;

export default App;
