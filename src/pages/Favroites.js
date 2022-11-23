import React, { useState, useEffect } from "react";
import Loading from "../components/Loading";
import { apiget } from "../misc/config";
import { useShows } from "../misc/custom-hooks";
import Cardfav from "../components/Cardfav";
function Favroites() {
  let [starred] = useShows();
  let [isLoading, setIsLoading] = useState(true);
  let [carddata, setcarddata] = useState(null);
  useEffect(() => {
    if (starred && starred.length > 0) {
      const allpropises = starred.map((showId) => apiget(`/shows/${showId}`));
      Promise.all(allpropises)
        .then((result) => {
          setIsLoading(false);
          setcarddata(result);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [starred]);
  if (isLoading) {
    return (
      <div>
        <Loading></Loading>
      </div>
    );
  } else {
    return (
      <>
        <Cardfav result={carddata}></Cardfav>
      </>
    );
  }
}

export default Favroites;
