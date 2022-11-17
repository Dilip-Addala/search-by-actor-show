import Inputs from "../inputs/inputs"

const RadioButtons=(props)=>{
    const {changeType,id} = props
    return (
        <div className="w-40 flex justify-center items-center">
            <Inputs
              type="radio"
              name="actors-shows"
              id={id}
              classStyle=" w-5 h-5 mr-3 cursor-pointer"
              clicked={changeType}
            />
            <label
              htmlFor={id}
              className="text-xl fonts-medium cursor-pointer"
            >
              {id}
            </label>
          </div>
    )
}

export default RadioButtons