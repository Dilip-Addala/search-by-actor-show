const Inputs = (props) =>{
    const {placeholder} = props
    return (
        <div className="mt-3">
            <input type="text" placeholder={placeholder} className="border-2 border-slate-700 outline-none h-10 p-2 w-2/4 text-md"/>
        </div>
    )
}

export default Inputs