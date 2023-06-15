import React, { createContext, useState } from 'react'

export const ThemeContext=createContext();

export const ThemeContextProvider = ({children}) => {
  const [mode,setMode]=useState(true);

  const setModeTheme=()=>{
    setMode((prev)=>!prev);
  }
  return (
    <ThemeContext.Provider value={{setModeTheme,mode}}>{children}</ThemeContext.Provider>
  )
}
