import React, { useState } from "react";
import { Link } from "react-router-dom";
import { apiget } from "../misc/config";
import Card from "./Card";
const Title = ({ title, subtitle }) => {
  let [input, setinput] = useState("");

  let [searchRes, setsearchRes] = useState(null);

  let oninputchange = (event) => {
    console.log(event.target.value);
    setinput(event.target.value);
  };

  let btnclkfun = async (e) => {
    try {
      apiget(`/search/shows?q=${input}`).then((resultRes) => {
        setsearchRes(() => {
          return (
            <>
              <Card result={resultRes}></Card>
            </>
          );
        });
      });
    } catch (error) {
      console.log(error);
    }
  };

  let enterkey = (e) => {
    console.log(e.keyCode);
    //13 for enter
    if (e.keyCode === 13) {
      btnclkfun();
    }
  };
  return (
    <>
      <div className="container text-center" style={{ marginTop: "6rem" }}>
        <h1 className="">{title}</h1>
        <h3>{subtitle}</h3>
        <nav className="d-flex justify-content-center p-3">
          <div className="p-2">
            <Link to="">home</Link>
          </div>
          <div className="p-2 ">
            <Link to="">favroites</Link>
          </div>
          <div className="p-2 border border-dark rounded-5">
            <input
              className="border border-0 p-0 ms-2 mx-2"
              type="text"
              style={{ outline: "none" }}
              onChange={oninputchange}
              onKeyDown={enterkey}
              value={input}
            />
            <button
              className="border border-0 bg-transparent"
              onClick={btnclkfun}
            >
              <i className="bi bi-search fs-6"></i>
            </button>
          </div>
        </nav>
      </div>

      {searchRes}
    </>
  );
};

export default Title;
