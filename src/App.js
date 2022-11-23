import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Notfound from "./pages/Notfound";
import Shows from "./pages/Shows";
import People from "./pages/People";
import Favroites from "./pages/Favroites";
function App() {
  return (
    <div>
      <Routes>
        <Route exact={true} path="/" element={<Home></Home>}></Route>
        {/*exact is use so that the path is fixed and will be changed to that path only when / is there*/}
        <Route exact={true} path="/show/:id" element={<Shows></Shows>}></Route>
        <Route
          exact={true}
          path="/people/:id"
          element={<People></People>}
        ></Route>
        <Route path="*" element={<Notfound />}></Route>
        <Route exact={true} path="/fav" element={<Favroites />}></Route>
      </Routes>
    </div>
  );
}

export default App;
