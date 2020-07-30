import React, { createContext, useState, useContext, useCallback } from "react";

interface IThemeObject {
    name: string;
    themeProps: IThemeProps;
}

interface IThemeProps {
    backgroundColor: string;
    textColor: string;
}

interface ThemeContextData {
    theme: IThemeObject;
    setTheme: React.Dispatch<React.SetStateAction<IThemeObject>>;
    changeTheme(): void;
}

export const themes: IThemeObject[] = [
    {
        name: "light",
        themeProps: {
            backgroundColor: "#ededed",
            textColor: "#333",
        },
    },
    {
        name: "dark",
        themeProps: {
            backgroundColor: "#333",
            textColor: "#ededed",
        },
    },
];

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

export default function ThemeProvider({ children }: any) {
    const [theme, setTheme] = useState(themes[1]);

    const changeTheme = useCallback(() => {
        const newTheme = themes.find(
            (themeObj) => themeObj.name !== theme.name
        );

        if (newTheme) {
            setTheme(newTheme);
        }
    }, [setTheme, theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme, changeTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);

    if (!context)
        throw new Error("useTheme must be used within a ThemeProvider");

    const { theme, setTheme, changeTheme } = context;

    return { theme, setTheme, changeTheme };
}
