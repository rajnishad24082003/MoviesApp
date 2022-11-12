import React from "react";
import { Link } from "react-router-dom";

const Card = ({ result }) => {
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
                return (
                  <div
                    className="col-lg-4 col-md-6"
                    key={result[index].show.id}
                  >
                    <div className={`service-box ${cardcolor[colorCount]}`}>
                      <i className="ri-discuss-line icon"></i>
                      <h3>{result[index].show.name}</h3>
                      <p>
                        Provident nihil minus qui consequatur non omnis maiores.
                        Eos accusantium minus dolores iure perferendis tempore
                        et consequatur.
                      </p>
                      <Link to="#" className="read-more">
                        <span>Read More</span>{" "}
                        <i className="bi bi-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </>
    );
  }
};

export default Card;
