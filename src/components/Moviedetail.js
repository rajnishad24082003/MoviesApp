import React from "react";
import "../assets/css/moviedetail.css";
import noimg from "../assets/img/pricing-free.png";
import { Rating } from "react-simple-star-rating";
function Moviedetail({ details }) {
  let star = details.rating.average / 2;
  return (
    <>
      <div className=" mainmoviedetailcont">
        <div className="firstdetailcont">
          <div className="movieimgcont">
            <h1 className="boder text-center">{details.name}</h1>
            <img src={details.image.original} alt="" />
          </div>
          <div>
            <h1 className="boder text-center">Related Episodes</h1>

            <div className="episodescontmain">
              {details._embedded.episodes.map((val, index) => {
                return (
                  <div key={val.id} className="episodescont">
                    <img
                      src={val.image === null ? noimg : val.image.medium}
                      alt=""
                    />
                    <h3 className="text-center">{`${val.name.slice(
                      0,
                      19
                    )}...`}</h3>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="seconddetailcont">
          <Rating initialValue={star}></Rating>
          <div dangerouslySetInnerHTML={{ __html: details.summary }}></div>
        </div>
      </div>
    </>
  );
}

export default Moviedetail;
