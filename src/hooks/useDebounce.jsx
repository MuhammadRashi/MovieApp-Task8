import React, { useEffect } from 'react'

export const useDebounce = (searchInputValue,getSearchMovie) => {

    useEffect(()=>{
        const timeout = setTimeout(() => {
        getSearchMovie(searchInputValue);
      }, 200);
      return()=>{
         clearTimeout(timeout);
      }
    },[searchInputValue])
 }
