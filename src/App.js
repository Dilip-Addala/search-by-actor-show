// import logo from './logo.svg';
import "./App.css";
import Header from "./Header/header";
import { useState } from "react";
import Inputs from "./inputs/inputs";
import Cards from "./Cards/cards";
import axios from "axios";
import RadioButtons from "./radioButtons/radioButtons";

function App() {
  const [category, setCategory] = useState("");
  const [input, setInput] = useState("");
  const [resultData, setResultData] = useState([]);
  const [submit, setSubmit] = useState(false);

  const placeholder =
    category === "people" ? "Search by Actors Name" : "Search by Shows Name";

  const fetchData = async (event) => {
    event.preventDefault();
    if (input !== "") {
      const url = `https://api.tvmaze.com/search/${category}?q=${input}`;
      const response = await axios.get(url);
      setResultData(response.data);
      setSubmit(true);
    }
  };
  
  const changeType = (e) => {
    const id = e.target.id === "Actors" ? "people" : "shows";
    setCategory(id);
    setSubmit(false);
    setInput("");
  };

  return (
    <div className="h-screen flex justify-center">
      <div className="md:w-full lg:w-full xl:w-10/12 w-full flex flex-col items-center">
        <Header />
        <div className="w-full bg-slate-200 flex md:justify-start justify-betweens p-5 items-center">
          <RadioButtons id="Actors" changeType={changeType} />
          <RadioButtons id="Shows" changeType={changeType} />
        </div>
        {category && (
          <form
            className="flex justify-center bg-slate-200 w-full "
            onSubmit={fetchData}
          >
            <Inputs
              placeholder={placeholder}
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              classStyle="placeholder-indigo-500 hover:bg-yellow-100 hover:placeholder-blue-600 border-2 border-slate-700 outline-none md:h-10 h-9 p-2 md:w-80 w-30 text-md"
            />
            <button className="bg-blue-600 ml-3 md:h-10 h-9 p-1.5 md:p-2 cursor-pointer text-white font-bold rounded-md mb-3 ">
              Submit
            </button>
          </form>
        )}
        {submit && (
          <div className="flex w-full flex-wrap flex-evenly mt-8 mb-10 pt-5 pb-20 overflow-scroll lg:pl-20 xl:pl-30">
            {resultData?.map((post, index) => (
              <Cards details={post} category={category} key={index} />
            ))}
          </div>
        )}
        {/* {flag && <h1 className="text-3xl mt-5 font-semibold">No records...</h1>} */}
      </div>
    </div>
  );
}

export default App;
