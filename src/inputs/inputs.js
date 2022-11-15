const Inputs = (props) => {
  const { placeholder, onChange, value } = props;
  return (
      <input
        type="text"
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        className="border-2 border-slate-700 outline-none h-10 p-2 w-80 text-md"
      />
  );
};

export default Inputs;
