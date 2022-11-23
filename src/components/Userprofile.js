import React, { useState } from "react";
import noimg from "../assets/img/pricing-free.png";
import "../assets/css/style.css";
const Userprofile = ({ person }) => {
  let dotsbtn = () => {
    setshowhide(() => {
      return (
        <>
          {person.map((val, index) => {
            return (
              <div
                key={person[index].person.id}
                className="col-lg-3 col-md-6 d-flex align-items-stretch"
                data-aos-delay="100"
              >
                <div className="member">
                  <div className="member-img">
                    <img
                      src={
                        person[index].person.image != null
                          ? person[index].person.image.medium
                          : noimg
                      }
                      className="img-fluid"
                      alt=""
                    />
                    <div className="social">
                      <a>
                        <i className="">
                          gender :
                          {person[index].person.gender
                            ? person[index].person.gender
                            : "not mentioned"}
                        </i>
                      </a>
                      <a>
                        <i className="">
                          birthday :
                          {person[index].person.birthday
                            ? person[index].person.birthday
                            : "not mentioned"}
                        </i>
                      </a>
                      <a>
                        <i className="">
                          deathday :
                          {person[index].person.deathday
                            ? person[index].person.deathday
                            : "alive"}
                        </i>
                      </a>
                    </div>
                  </div>
                  <div className="member-info">
                    <h4>
                      {person[index].person.name
                        ? person[index].person.name
                        : "no name"}
                    </h4>
                    <span>
                      {person[index].person.country != null
                        ? person[index].person.country.name
                        : "not mentioned"}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </>
      );
    });
  };

  let [showhide, setshowhide] = useState(() => {
    if (person.length == 0) {
      return (
        <>
          <h1 className="text-center">no data available</h1>
        </>
      );
    } else {
      return (
        <>
          {person.map((val, index) => {
            if (index < 4) {
              return (
                <div
                  key={person[index].person.id}
                  className="col-lg-3 col-md-6 d-flex align-items-stretch"
                  data-aos-delay="100"
                >
                  <div className="member">
                    <div className="member-img">
                      <img
                        src={
                          person[index].person.image != null
                            ? person[index].person.image.medium
                            : noimg
                        }
                        className="img-fluid"
                        alt=""
                      />
                      <div className="social">
                        <a>
                          <i className="">
                            gender :
                            {person[index].person.gender != null
                              ? person[index].person.gender
                              : "not mentioned"}
                          </i>
                        </a>
                        <a>
                          <i className="">
                            birthday :
                            {person[index].person.birthday != null
                              ? person[index].person.birthday
                              : "not mentioned"}
                          </i>
                        </a>
                        <a>
                          <i className="">
                            deathday :
                            {person[index].person.deathday != null
                              ? person[index].person.deathday
                              : "alive"}
                          </i>
                        </a>
                      </div>
                    </div>
                    <div className="member-info">
                      <h4>
                        {person[index].person != null
                          ? person[index].person.name
                          : "no name"}
                      </h4>
                      <span>
                        {person[index].person.country != null
                          ? person[index].person.country.name
                          : "not mentioned"}
                      </span>
                    </div>
                  </div>
                </div>
              );
            } else if (index === 4) {
              return (
                <p className="showshidden" onClick={dotsbtn}>
                  <i className=" bi bi-circle-fill"></i>
                  <i className=" bi bi-circle-fill"></i>
                  <i className=" bi bi-circle-fill"></i>
                </p>
              );
            }
          })}
        </>
      );
    }
  });

  return (
    <div>
      <section id="team" className="team">
        <div className="container">
          <div className="row gy-4">
            {/* this div can be repeated down */}
            {showhide}
            {/* this div can be repeated  above*/}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Userprofile;
