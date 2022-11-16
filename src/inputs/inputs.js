const Inputs = (props) => {
  const { placeholder, onChange, value } = props;
  return (
    <div className="">
      <input
        type="text"
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        className="placeholder-indigo-500 border-2 border-slate-700 outline-none h-10 p-2 w-80 text-md"
      />
    </div>
  );
};

export default Inputs;
