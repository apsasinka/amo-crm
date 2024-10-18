import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
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
    </>
  );
};

export default NavBar;
