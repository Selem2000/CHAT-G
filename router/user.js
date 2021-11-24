const express = require("express");
const {
  Register,
  Login,
  getAllUsers,
  getUserByID,
  deleteUser,
  getUsersByName,
  updateUser,
} = require("../controllers/user.controllers");
const { roleAuth } = require("../middleware/auth");
const isAuth = require("../middleware/isAuth");
const {
  validation,
  registerValidate,
  loginValidate,
} = require("../middleware/validateUser");

const router = express.Router();

/*
@method: POST
@ path:http:localhost:5000/api/user/register
@ parameter: req.body  
public
*/
router.post("/register", registerValidate(), validation, Register);

/*
@method: POST
@ path:http:localhost:5000/api/user/login
@ parameter: req.body  
public
*/
router.post("/login", loginValidate(), validation, Login);

/*
@method: GET
@ path:http:localhost:5000/api/user/current
@ parameter: req.headers  
public
*/
router.get("/current", isAuth, (req, res) => {
  res.send({ msg: "authorized", user: req.user });
});

/*
@method: GET
@ path:http:localhost:5000/api/user/
@ parameter
public
*/
router.get("/", getAllUsers);

/*
@method: GET
@ path:http:localhost:5000/api/user/:id
@ parameter
public
*/
router.get("/:id", getUserByID);

/*
@method: GET !!! check first
@ path:http:localhost:5000/api/user/:id
@ parameter
public
*/
router.get("/serach/:name", getUsersByName);

/*
@method: DELETE
@ path:http:localhost:5000/api/user/:id
@ parameter
public
*/
router.delete("/:id", roleAuth("admin"), deleteUser);

/*
@method: PUT
@ path:http:localhost:5000/api/post/:id
@ parameter: body 
public
*/
router.put("/:id", updateUser);
// default export
module.exports = router;
