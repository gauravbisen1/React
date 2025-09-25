import { createContext , useContext } from "react";

//usercontext and use context at same place ***

export const ThemeContext = createContext({//vatiable and method can be give
    themeMode : "light", //default
    darkTheme: () => {},
    lightTheme: () => {},
})

//varible exporting
export const ThemeProvider = ThemeContext.Provider//wrapper


//custom hooks
export default function useTheme(){
    return useContext(ThemeContext)
}
