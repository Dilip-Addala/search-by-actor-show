// import logo from './logo.svg';
import "./App.css";
import Header from "./Header/header";
import { useState } from "react";
import Inputs from "./inputs/inputs";
import Cards from "./Cards/cards";
import axios from "axios";

function App() {
  const [category, setCategory] = useState("");
  const [input, setInput] = useState("");
  const [resultData, setResultData] = useState([]);
  const [submit, setSubmit] = useState(false);

  const placeholder =
    category === "people" ? "Search by Actors Name" : "Search by Shows Name";

  const fetchData = async (e) => {
    e.preventDefault();
    const url = `https://api.tvmaze.com/search/${category}?q=${input}`;
    const response = await axios.get(url);
    setResultData(response.data);
    setSubmit(true);
  };

  const changeType = (e) => {
    const id = e.target.id
    setCategory(id)
    setSubmit(false)
    setInput("")
  }

  return (
    <div className="h-screen flex justify-center">
      <div className="w-3/4 flex flex-col items-center">
        <Header />
        <div className="w-full bg-slate-200 flex p-5 items-center">
          <div className="w-40">
            <input
              type="radio"
              name="actors-shows"
              id="people"
              className=" w-5 h-5 mr-3 cursor-pointer"
              group="movie"
              onClick={changeType}
            />
            <label
              htmlFor="people"
              className="text-xl fonts-medium cursor-pointer"
            >
              Actors
            </label>
          </div>
          <div className="w-40">
            <input
              type="radio"
              name="actors-shows"
              id="shows"
              className=" w-5 h-5 mr-3 cursor-pointer"
              group="movie"
              onClick={changeType}
            />
            <label
              htmlFor="shows"
              className="text-xl font-medium cursor-pointer"
            >
              Shows
            </label>
          </div>
        </div>
        {category && (
          <form className="flex justify-center bg-slate-200 w-full " onSubmit={fetchData}>
            <Inputs
              placeholder={placeholder}
              onChange={e=>setInput(e.target.value)}
              value={input}
            />
            <button className="bg-blue-600 ml-3 p-2 cursor-pointer text-white font-bold rounded-md mb-3 ">
              Submit
            </button>
          </form>
        )}
        {submit && (
            <div className="flex bg-gradient-to-bl from-slate-500 to-black w-full flex-wrap mt-5 mb-5">
            {resultData?.map((post) =><Cards details={post} category={category} key={post.id}/>)}
            {!resultData&&<h1>No records found...</h1>}
        </div>
        )}
      </div>
    </div>
  );
}

export default App;
