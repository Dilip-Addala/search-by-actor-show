// import logo from './logo.svg';
import "./App.css";
import Header from "./Header/header";
import {useState} from "react"
import Inputs from "./inputs/inputs";

function App() {
  const [category,setCategory] = useState("")
  
  const placeholder = category==="actors"? "Search by Actors Name":"Search by Shows Name"

  return (
    <div className="h-screen flex justify-center">
      <div className="w-3/4">
        <Header />
        <div className="w-full bg-red-400 flex p-5 items-center">
          <div className="w-40">
            <input
              type="radio"
              name="actors-shows"
              id="actors"
              className=" w-5 h-5 mr-3 cursor-pointer"
              group="movie"
              onClick={e=>setCategory("actors")}
            />
            <label htmlFor="actors" className="text-xl font-medium cursor-pointer">Actors</label>
          </div>
          <div className="w-40">
            <input
              type="radio"
              name="actors-shows"
              id="shows"
              className=" w-5 h-5 mr-3 cursor-pointer"
              group="movie"
              onClick={e=>setCategory("shows")}
            />
            <label htmlFor="shows" className="text-xl font-medium cursor-pointer">Shows</label>
          </div>
        </div>
        {category && <Inputs placeholder={placeholder}/>}
      </div>
    </div>
  );
}

export default App;
