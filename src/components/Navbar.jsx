import React from "react";
import { Outlet, Link } from "react-router-dom";


const Navbar = () => {
  const tempUsername = localStorage.getItem("username");
  console.log(tempUsername, "username from local storage")

  function logoutUser() {
    // localStorage.setItem("username", "");
    // localStorage.setItem("userToken", "");
  }

  return (
    <div>
      <div id="navbar">
        <h2 id="logo">Fitness Tracker</h2>
        <div id="navBar">
          <Link id="linkstyle" to="/login">
            <h2 className="rightside">Login</h2>
          </Link>
          <Link id="linkstyle" to="/routines">
            <h2 className="rightside">Routines</h2>
          </Link>
          <Link id="linkstyle" to="/activities">
            <h2 className="rightside">Activities</h2>
          </Link>
          {/* <Link id="linkstyle" to="/login">
            <h2 className="rightside">Login</h2>
          </Link> */}

          {tempUsername.length ? (
            <Link to="/myroutines">
              <h2 className="rightside">My Routines</h2>
            </Link>
          ) : (
            <div />
          )}

          {/* <Link to="/login">
            <h2 className="rightside" onClick={() => logoutUser()}>
              Logout
            </h2>
          </Link> */}
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Navbar;
