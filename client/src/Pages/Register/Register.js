import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register, videErrors } from "../../Redux/actions/user";
import Errors from "../../Components/Errors/Error";
import "./Register.css";
import {
  Button,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { styled } from "@mui/system";

const Register = ({ history }) => {
  const [user, setUser] = useState({});
  const errors = useSelector((state) => state.userReducer.errors);

  const dispatch = useDispatch();

  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(register(user, history));
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    return () => {
      dispatch(videErrors());
    };
  }, []);

  return (
    <div className="register-bar">
      {errors.length > 0 ? errors.map((el) => <Errors error={el} />) : null}
      <h3 className="register-heading">Create an account!</h3>
      <form className="form-register" onSubmit={(e) => handleRegister(e)}>
        <TextField
          id="outlined-required"
          name="firstName"
          label="First Name"
          variant="outlined"
          onChange={handleChange}
          required
        />

        <TextField
          id="outlined-required"
          name="lastName"
          label="Last Name"
          variant="outlined"
          onChange={handleChange}
          required
        />

        <FormLabel component="legend">Gender</FormLabel>
        <RadioGroup
          aria-label="gender"
          defaultValue="female"
          name="sexe"
          onChange={handleChange}
        >
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
        </RadioGroup>
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
          onClick={handleRegister}
          style={{
            width: "18%",
            left: " 50%",
            transform: "translateX(-50%)",
            background: "#000",
          }}
        >
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default Register;
