import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { apiget } from "../misc/config";
const Shows = () => {
  const { id } = useParams();
  let [show, setShow] = useState(null);
  let [isLoading, setIsLoading] = useState(true);
  let [iserror, setIsError] = useState(null);
  useEffect(() => {
    apiget(`/shows/${id}?embed[]=episodes&embed[]=cast&embed[]=seasons`)
      .then((res) => {
        setShow(res);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsError(err.message);
        setIsLoading(false);
      });
  }, [id]);
  //id is put just to avoid warning any number will work , we just want is to run only once

  console.log(show);
  if (isLoading) {
    return (
      <>
        <h1>Loading....</h1>
      </>
    );
  } else {
    return <>shows</>;
  }
};

export default Shows;
