import React, { useState } from "react";
import { Link } from "react-router-dom";
import noimg from "../assets/img/pricing-free.png";
import { useShows } from "../misc/custom-hooks";

const Card = ({ result, radiooption }) => {
  let [starredshows, dispatchstarredshows] = useShows();
  let [starchecker, setstarchecker] = useState(`add to Favroites`);
  console.log(starredshows);
  if (result.length === 0) {
    return (
      <>
        <div className="container">
          <h2 className="text-center">....No results found</h2>
        </div>
      </>
    );
  } else {
    let cardcolor = ["blue", "orange", "green", "red", "purple", "pink"];
    let colorCount = -1;
    return (
      <>
        <section id="services" className="services">
          <div className="container">
            <div className="row gy-4">
              {result.map((val, index) => {
                if (colorCount === 5) {
                  colorCount = -1;
                }
                colorCount++;
                if (result[index].show) {
                  if (result[index].show.image == null) {
                    result[index].show.image = noimg;
                  }
                  let isStarred = starredshows.includes(result[index].show.id);
                  let starme = () => {
                    if (isStarred) {
                      dispatchstarredshows({
                        type: "REMOVE",
                        showId: result[index].show.id,
                      });
                    } else {
                      dispatchstarredshows({
                        type: "ADD",
                        showId: result[index].show.id,
                      });
                    }
                  };
                  return (
                    <div
                      className="col-lg-4 col-md-6"
                      key={result[index].show.id}
                    >
                      <div className={`service-box ${cardcolor[colorCount]}`}>
                        <img
                          src={
                            result[index].show.image.medium ||
                            result[index].show.image
                          }
                          alt=""
                        />
                        <h3>{result[index].show.name}</h3>
                        <p>
                          {" "}
                          {result[index].show.summary
                            ? `${result[index].show.summary
                                .split(" ")
                                .slice(0, 20)
                                .join(" ")
                                .replace(/<.+?>/g, "")}...`
                            : "no discription"}{" "}
                        </p>
                        <Link
                          to={`show/${result[index].show.id}`}
                          className="read-more"
                        >
                          <span>Read More</span>{" "}
                          <i className="bi bi-arrow-right"></i>
                        </Link>
                        <br />
                        <button className="btn border-dark" onClick={starme}>
                          {console.log(
                            starredshows.filter(
                              (allid) => allid === result[index].show.id
                            )
                          )}
                          {starredshows.filter(
                            (allid) => allid === result[index].show.id
                          ).length !== 0
                            ? `starred`
                            : `add to Favroites`}
                        </button>
                      </div>
                    </div>
                  );

                  //this is repeated one
                } else {
                  if (result[index].person.image == null) {
                    result[index].person.image = noimg;
                  }
                  let isStarred = starredshows.includes(result[index].show.id);
                  let starme = () => {
                    if (isStarred) {
                      dispatchstarredshows({
                        type: "REMOVE",
                        showId: result[index].show.id,
                      });
                    } else {
                      dispatchstarredshows({
                        type: "ADD",
                        showId: result[index].show.id,
                      });
                    }
                  };
                  return (
                    <div
                      className="col-lg-4 col-md-6"
                      key={result[index].person.id}
                    >
                      <div className={`service-box ${cardcolor[colorCount]}`}>
                        <img
                          src={
                            result[index].person.image.medium ||
                            result[index].person.image
                          }
                          alt=""
                        />
                        <h3>{result[index].person.name}</h3>
                        {result[index].person.country
                          ? result[index].person.country.name
                          : `country data not available`}
                        <Link
                          to={`/people/${result[index].person.id}`}
                          className="read-more"
                        >
                          <span>Read More</span>{" "}
                          <i className="bi bi-arrow-right"></i>
                        </Link>
                        <br />
                        <button className="btn border-dark" onClick={starme}>
                          {starredshows.filter(
                            (allid) => allid === result[index].show.id
                          ).length !== 0
                            ? `starred`
                            : `add to Favroites`}
                          {}
                        </button>
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </section>
      </>
    );
  }
};

export default Card;
