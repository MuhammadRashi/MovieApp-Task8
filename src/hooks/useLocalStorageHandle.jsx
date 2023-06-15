
export const useLocalStorageHandle = () => {

    const setLocalstorage=(tokenName,tokenValue)=>{
        localStorage.setItem(tokenName,tokenValue);
    }

    const removeLocalstorage=(tokenName)=>{
        localStorage.removeItem(tokenName);
    }
    const getLocalstorage=(tokenName)=>{
        const result=localStorage.getItem(tokenName);
        return result;
    }


  return {
    setLocalstorage,
    removeLocalstorage,
    getLocalstorage
  };
}
