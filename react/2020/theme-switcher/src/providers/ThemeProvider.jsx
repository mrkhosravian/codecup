import React, {useState} from "react";
import {THEME_TYPE} from "../constants";

export const ThemeContext = React.createContext({
    themeMode: THEME_TYPE.LIGHT,
    setTheme: () => {}
});

const ThemeProvider = ({children}) => {

    const [theme, setTheme ] = useState(THEME_TYPE.LIGHT);

    return <ThemeContext.Provider value={{themeMode: theme, setTheme}}>
        {children}
    </ThemeContext.Provider>;
};

export default ThemeProvider;
