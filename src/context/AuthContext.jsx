import { createContext, useEffect, useState } from "react";
import { useLocalStorageHandle } from "../hooks/useLocalStorageHandle";

export const AuthContext=createContext();


export const AuthContextProvider=({children})=>{
    const [isAuth,setIsAuth] = useState(false);
    const [field,setField]= useState({});
    const LocalStore = useLocalStorageHandle();
  
    useEffect(()=>{
        // const token=localStorage.getItem("token");
      const token= LocalStore.getLocalstorage("token");
    if(token){
       console.log("logged");
      setIsAuth(true);
      // navigate(-1);
    }
    })

    const handleChange = (event) => {
        const { name, value } = event.target;
        setField((prev) => ({...prev, [name]: value}));
        // console.log(field,"===fields");
        
      };

      const handleSubmit=()=>{
        if(field.username ==="test" && field.password ==="test"){
            LocalStore.setLocalstorage("token","movieapp");
            // localStorage.setItem("token","movieapp");
            setIsAuth(true);
       
          }
      }

    const logoutHandle=()=>{
        LocalStore.removeLocalstorage("token");
        // localStorage.removeItem("token");
            setIsAuth(false);
    }
   
    return(<AuthContext.Provider value={{isAuth,setIsAuth,handleChange,handleSubmit,logoutHandle}}>{children}</AuthContext.Provider>)
}
