import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../Redux/actions/user";

import "./Navbar.css";
const Navbar = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  return (
    <header className="navbar">
      <Link to="/">Logo</Link>

      <nav className="navigation">
        {isAuth ? (
          <ul className="auth">
            <Link to="/">
              {" "}
              <li>Home</li>
            </Link>
            <Link to="/profile">
              {" "}
              <li>Profile</li>
            </Link>
            <Link to="/">
              {" "}
              <li onClick={() => dispatch(logout())}>LOGOUT </li>
            </Link>
          </ul>
        ) : (
          <ul className="auth">
            {" "}
            <Link to="/register">
              {" "}
              <li>Register </li>
            </Link>
            <Link to="/login">
              {" "}
              <li>LogIn </li>
            </Link>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
