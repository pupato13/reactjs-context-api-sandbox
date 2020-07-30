import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// hooks
import ThemeProvider from "./context/Theme";

// common Components
import ChangeTheme from "./components/ChangeTheme";

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider>
            <ChangeTheme />
            <App />
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
