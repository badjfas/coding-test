import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import App from "./App";
import GlobalStyles from "./styles/GlobalStyles";
import Theme from "./styles/Theme";

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={Theme}>
            <App />
            <GlobalStyles />
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
