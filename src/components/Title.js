import React from "react";
const Title = ({ title, subtitle, searchRes, children }) => {
  return (
    <>
      <div className="container text-center" style={{ marginTop: "6rem" }}>
        <h1 className="">{title}</h1>
        <h3>{subtitle}</h3>
        {children}
      </div>
      <div className="border border-dark">{searchRes}</div>
    </>
  );
};

export default Title;
