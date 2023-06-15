import { useState } from "react";

const useFormHandleChange = (initial) => {
  const [state, setState] = useState(initial);

  const formhandleChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  return {
    formData: state,
    handleInputChange: formhandleChange,
  };
};

export default useHandleChange;
