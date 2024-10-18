// import { useState, useEffect } from "react";
// import "./App.css";
// import Users from "./users/Users";

// function App() {
//   const [data, setData] = useState(null);
//   const [toggle, setToggle] = useState(false);
//   const [value, setValue] = useState("");

//   const handleToggle = () => {
//     setToggle((prev) => !prev);
//   };

//   useEffect(() => {
//     setTimeout(() => setData({}), 0);
//   }, []);

//   return (
//     <div className="app">
//       <h1 data-testid="input-value">{value}</h1>
//       {toggle && <div data-testid="toggle-elem">toggle</div>}
//       {data && <div style={{ color: "red" }}>Data</div>}
//       <button onClick={handleToggle} data-testid="toggle-btn">
//         Hy
//       </button>
//       <input
//         onChange={(e) => setValue(e.target.value)}
//         placeholder="write text..."
//       />
//       <Users />
//     </div>
//   );
// }

import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import MainPage from "./pages/MainPage";
import AboutPage from "./pages/AboutPage";
import ErrorPage from "./pages/ErrorPage";
import Users from "./users/Users";
import UserDetailPage from "./pages/UserDetailPage";

const App = () => {
  return (
    <>
      <Link data-testid="main-link" to="/" style={{ margin: "3em" }}>
        main
      </Link>
      <Link data-testid="about-link" to="/about">
        about
      </Link>
      <Link data-testid="users-link" to="/users">
        Users
      </Link>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/users" element={<Users />} />
        <Route path="/user/:id" element={<UserDetailPage />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </>
  );
};

export default App;
