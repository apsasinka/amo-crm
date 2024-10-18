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
import NavBar from "./components/NavBar/NavBar";
import AppRouter from "./AppRouter";

const App = () => {
  return (
    <>
      <NavBar />
      <AppRouter />
    </>
  );
};

export default App;
