import { createContext, useState } from "react";

export const MovieContext=createContext();

export const MovieContextProvider=({children})=>{
    const [movieList, setMovieList] = useState([{}]);

    return(<MovieContext.Provider value={{movieList,setMovieList}}>{children}</MovieContext.Provider>)

}