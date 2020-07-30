import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Routes from "./routes";

// hooks
import ThemeProvider, { useTheme } from "./context/Theme";

import { GlobalStyle } from "./styles/global";

const App: React.FC = () => {
    const { theme } = useTheme();

    return (
        <ThemeProvider>
            <GlobalStyle
                backgroundColor={theme.themeProps.backgroundColor}
                textColor={theme.themeProps.textColor}
            />
            <Router>
                <Routes />
            </Router>
        </ThemeProvider>
    );
};

export default App;
