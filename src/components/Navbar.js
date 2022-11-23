import React from "react";
import { Link } from "react-router-dom";
import { useState, useReducer } from "react";
import { apiget } from "../misc/config";
import Card from "./Card";
import Title from "./Title";
import "../assets/css/radio.scss";

const Navbar = () => {
  let [input, setinput] = useState("");

  let [searchRes, setsearchRes] = useState(null);
  let [radioopt, setradioopt] = useState("shows");
  let oninputchange = (event) => {
    console.log(event.target.value);
    setinput(event.target.value);
  };

  let btnclkfun = async (e) => {
    try {
      apiget(`/search/${radioopt}?q=${input}`).then((resultRes) => {
        setsearchRes(() => {
          return (
            <>
              <Card result={resultRes} radiooption={radioopt}></Card>
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

  let [iconbtn, seticonbtn] = useState("list");
  let [toggleView, settoggleView] = useState("mobile-nav-toggle");
  let [toggleView2, settoggleview2] = useState("");
  let resonsivenav = () => {
    if (iconbtn === "list") {
      seticonbtn("x");
    } else {
      seticonbtn("list");
    }
    if (toggleView === "mobile-nav-toggle") {
      settoggleView("navbar-mobile");
    } else {
      settoggleView("mobile-nav-toggle");
    }
    if (toggleView2 === "") {
      settoggleview2("navbar-mobile");
    } else {
      settoggleview2("");
    }
  };

  let radiofunhandle = (e) => {
    setradioopt(e.target.value);
  };
  return (
    <div>
      <header id="header" className="header fixed-top">
        <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
          <Link to="/" className="logo d-flex align-items-center">
            <span>Movies Home</span>
          </Link>

          <nav id="navbar" className={`navbar ${toggleView2}`}>
            <ul style={{ width: "fit-content" }}>
              <li>
                <Link className="nav-link scrollto active" to="/">
                  Home
                </Link>
              </li>
              <li className="dropdown mx-4">
                <Link to="#">
                  <span>More</span> <i className="bi bi-chevron-down"></i>
                </Link>
                <ul>
                  <li>
                    <Link to="#">Favroites</Link>
                  </li>
                </ul>
              </li>

              <li>
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
              </li>
            </ul>
            <i
              className={`bi bi-${iconbtn} mobile-nav-toggle`}
              onClick={resonsivenav}
            ></i>
          </nav>
        </div>
      </header>

      <Title
        title="Box office"
        subtitle="Awesome movies home"
        searchRes={searchRes}
      >
        <div className="container ">
          <ul className="list ">
            <li className="list__item" onClick={radiofunhandle}>
              <input
                type="radio"
                className="radio-btn"
                name="searchopt"
                id="a-opt"
                value={"shows"}
              />
              <label htmlFor="a-opt" className="label">
                shows
              </label>
            </li>

            <li className="list__item" onClick={radiofunhandle}>
              <input
                type="radio"
                className="radio-btn"
                name="searchopt"
                id="b-opt"
                value={"people"}
              />
              <label htmlFor="b-opt" className="label">
                Actors
              </label>
            </li>
          </ul>
        </div>
      </Title>
    </div>
  );
};

export default Navbar;
