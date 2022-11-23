import { type } from "@testing-library/user-event/dist/type";
import React, { useEffect, useReducer, useState } from "react";
import { useParams } from "react-router";
import { apiget } from "../misc/config";
import Loading from "../components/Loading";
import Moviedetail from "../components/Moviedetail";
import Userprofile from "../components/Userprofile";
import { Link } from "react-router-dom";
const Shows = () => {
  const { id } = useParams();

  let initialstate = {
    show: null,
    isLoading: true,
    error: null,
  };
  let reducer = (prevState, action) => {
    switch (action.type) {
      case "FETCH_SUCCESS": {
        return {
          isLoading: false,
          show: action.show,
          error: null,
        };
      }
      case "FETCH_FAILED": {
        return { ...prevState, isLoading: false, error: action.error };
      }
      default:
        return prevState;
    }
  };

  let [{ show, isLoading, error }, dispatch] = useReducer(
    reducer,
    initialstate
  );
  // let [show, setShow] = useState(null);
  // let [isLoading, setIsLoading] = useState(true);
  // let [iserror, setIsError] = useState(null);
  useEffect(() => {
    let isMounted = true;
    apiget(`/shows/${id}?embed[]=episodes&embed[]=cast&embed[]=seasons`)
      .then((res) => {
        if (isMounted) {
          dispatch({ type: "FETCH_SUCCESS", show: res });
          //   setShow(res);
          // setIsLoading(false);
        }
      })
      .catch((err) => {
        if (isMounted) {
          dispatch({ type: "FETCH_FAILED", error: err.message });
          //   setIsError(err.message);
          // setIsLoading(false);
        }
      });
  }, [id]);
  //id is put just to avoid warning any number will work , we just want is to run only once

  if (isLoading) {
    return (
      <>
        <Loading></Loading>
      </>
    );
  } else {
    return (
      <>
        <Moviedetail details={show}></Moviedetail>
        <div className="userprofile">
          <h1 className="text-center">Casts</h1>
          <hr />
          <Userprofile person={show._embedded.cast}></Userprofile>
        </div>
        <div>
          <Link className="btn" to={"/"}>
            back
          </Link>
          {console.log(localStorage)}
        </div>
      </>
    );
  }
};

export default Shows;
