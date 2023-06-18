
const Input = ({
  type,
  name,
  placeholder,
  id,
  classname,
  onchange

}) => {


  return (
    <div>
      <input 
        type={type}
        placeholder={placeholder}
        name={name}
        id={id}
        className={classname}
        onChange={onchange}
      />
    </div>
    
  );
};

export default Input;
