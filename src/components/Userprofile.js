import React from "react";

const Userprofile = () => {
  return (
    <>
      <div
        className="col-lg-3 col-md-6 d-flex align-items-stretch"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className="member">
          <div className="member-img">
            <img
              src="assets/img/team/team-1.jpg"
              className="img-fluid"
              alt=""
            />
            <div className="social">
              <a href="">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>
          <div className="member-info">
            <h4>Walter White</h4>
            <span>Chief Executive Officer</span>
            <p>
              Velit aut quia fugit et et. Dolorum ea voluptate vel tempore
              tenetur ipsa quae aut. Ipsum exercitationem iure minima enim
              corporis et voluptate.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Userprofile;
