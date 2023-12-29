import React from "react";
import { useState } from "react";
import "./Search.css";

import foodArray from "./foodArray";

function Search() {
  const [searchFood, setsearchFood] = useState([]);
  const [food, setfood] = useState("");

  const clickHandle = () => {
    if (food) {
      let abc = foodArray.filter((e) => {
        return e.includes(food);
      });
      setsearchFood(abc);
    } else {
      setsearchFood([]);
    }
  };

  const handleFood = (e) => {
    setfood(e.target.value);

  };
  return (
    <>
      <div className="center d-flex flex-column align-items-center">
        <input type="text" alt="" className="input" onChange={handleFood} />
        <button className="btn btn-success m-1" onClick={clickHandle}>
          Search
        </button>
      </div>

      <div className="d-flex justify-content-around">
        <div className="menu ">
          <h3 style={{ width: "15vw" }} className="center">
            Menu
          </h3>
          <ol className="center">
            {foodArray.map((item, i) => {
              return (
                <div key={i} className="list-item">
                  <li>{item}</li>
                </div>
              );
            })}
          </ol>
        </div>

        <div className="menu">
          <h3 style={{ width: "15vw" }} className="center">
            Latest Search
          </h3>
          <ol  className="center">
            {searchFood.map((item, i) => {
              return (
                <div key={i} className="list-item">
                  <li>{item}</li>
                </div>
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
}

export default Search;
