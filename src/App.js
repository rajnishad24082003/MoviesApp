import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Notfound from "./pages/Notfound";
function App() {
  return (
    <div>
      <Routes>
        <Route exact={true} path="/" element={<Home></Home>}></Route>
        {/*exact is use so that the path is fixed and will be changed to that path only when / is there*/}
        <Route path="*" element={<Notfound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
