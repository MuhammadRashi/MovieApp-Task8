
const Input = ({
  type,
  name,
  palaceholder,
  id,
  classname,
  onchange

}) => {


  return (
    <div>
      <input 
        type={type}
        name={name}
        placeholder={palaceholder}
        id={id}
        className={classname}
        onChange={onchange}
      />
    </div>
  );
};

export default Input;
