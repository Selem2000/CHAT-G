import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, videErrors } from "../../Redux/actions/user";
import Errors from "../../Components/Errors/Error";
import { Link } from "react-router-dom";
import "./Login.css";
import { Button, TextField } from "@mui/material";

const Login = ({ history }) => {
  const [user, setUser] = useState({});
  const errors = useSelector((state) => state.userReducer.errors);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login(user, history));
  };
  useEffect(() => {
    return () => {
      dispatch(videErrors());
    };
  }, []);
  return (
    <div className="Login-bar">
      {errors.length > 0 ? errors.map((el) => <Errors error={el} />) : null}
      <h3 className="login-heading">Welcome back!</h3>
      <form className="login-form" onSubmit={handleLogin}>
        <TextField
          id="outlined-required"
          name="email"
          type="email"
          label="Email "
          variant="outlined"
          onChange={handleChange}
          required
        />

        <TextField
          id="outlined-password-input"
          label="Password"
          name="password"
          required
          onChange={handleChange}
          type="password"
          autoComplete="current-password"
        />
        <Button
          variant="contained"
          type="submit"
          style={{
            width: "18%",
            left: " 50%",
            transform: "translateX(-50%)",
            background: "#000",
          }}
        >
          Sign in
        </Button>

        <Link to="/register">
          <Button
            variant="text"
            style={{
              width: "18%",
              left: " 50%",
              transform: "translateX(-50%)",
              fontSize: "16px",
            }}
          >
            Register
          </Button>
        </Link>
      </form>
    </div>
  );
};

export default Login;
