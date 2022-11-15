// import logo from './logo.svg';
import "./App.css";
import Header from "./Header/header";
import { useState } from "react";
import Inputs from "./inputs/inputs";
import Results from "./result/result";
import axios from "axios";

function App() {
  const [category, setCategory] = useState("");
  const [input, setInput] = useState("");
  const [resultData, setResultData] = useState([]);

  const placeholder =
    category === "people" ? "Search by Actors Name" : "Search by Shows Name";

  const changeInput = (e) => {
    setInput(e.target.value);
  };

  const fetchData = async (e) => {
    e.preventDefault();
    const url = `https://api.tvmaze.com/search/${category}?q=${input}`;
    const response = await axios.get(url);
    console.log(response.data);
    setResultData(response.data);
  };

  // <Results details={post.show} />
  // const getResultPosts = () => {
  //   // resultData.map((post) => console.log(post) );
  //   console.log(resultData)
  // };

  return (
    <div className="h-screen flex justify-center">
      <div className="w-3/4 flex flex-col items-center">
        <Header />
        <div className="w-full bg-red-400 flex p-5 items-center">
          <div className="w-40">
            <input
              type="radio"
              name="actors-shows"
              id="actors"
              className=" w-5 h-5 mr-3 cursor-pointer"
              group="movie"
              onClick={(e) => setCategory("people")}
            />
            <label
              htmlFor="actors"
              className="text-xl font-medium cursor-pointer"
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
              onClick={(e) => setCategory("shows")}
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
          <form className="flex mt-3" onSubmit={fetchData}>
            <Inputs
              placeholder={placeholder}
              onChange={changeInput}
              value={input}
            />
            <button
              className="bg-blue-600 ml-3 p-2 cursor-pointer text-white font-bold rounded-md"
            >
              Submit
            </button>
          </form>
        )}
        {category && (
          <div className="flex bg-yellow-100 w-full flex-wrap mt-5">
            {resultData.map((post) => {
              console.log(post);
              if (category === "actors") {
                return <Results key={post.id} details={post?.person} />;
              } else if (category === "shows") {
                return <Results key={post.id} details={post?.show} />;
              }
            })}
          </div>
        )}
        {/* {resultData.map((post) => (
          <Results key={post.id} details={post} />
        ))} */}
      </div>
    </div>
  );
}

export default App;
