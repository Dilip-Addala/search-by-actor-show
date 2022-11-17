const Inputs = (props) => {
  const { placeholder, onChange, value,type,clicked,classStyle,id,name } = props;
  return (
    <div className="">
      <input
        type={type}
        onChange={onChange}
        name={name}
        value={value}
        placeholder={placeholder}
        onClick={clicked}
        id={id}
        className={classStyle}
      />
    </div>
  );
};

export default Inputs;
