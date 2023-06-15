import React, { useState } from 'react'

const useHandleChange = (initial) => {
    const [state, setState] = useState(initial);

    const useInputValueAssign=(event)=>{
        setState(event.target.value);
    };
  return {
    searchInputValue:state,
    setSearchInputValue:useInputValueAssign
  }
}

export default useHandleChange