const express = require("express");
const {
  createPost,
  getAllPost,
  getPost,
  deletePost,
  updatePost,
  getMyPost,
} = require("../controllers/post.controllers");

const { isAuth } = require("../middleware/isAuth");

const router = express.Router();

/*
@method: POST
@ path:http:localhost:5000/api/post/:id
@ parameter: req.body
public
*/
router.post("/", createPost);

/*
@method: GET
@ path:http:localhost:5000/api/post/
@ parameter: 
public
*/
router.get("/", getAllPost);

/*
@method: GET
@ path:http:localhost:5000/api/post/
@ parameter: 
public
*/
router.get("/myposts", getMyPost);

/*
@method: GET
@ path:http:localhost:5000/api/post/:id
@ parameter: 
public
*/
router.get("/:id", getPost);

/*
@method: DELETE
@ path:http:localhost:5000/api/post/:id
@ parameter: 
public
*/
router.delete("/:id", deletePost);

/*
@method: PUT
@ path:http:localhost:5000/api/post/:id
@ parameter: body 
public
*/
router.put("/:id", updatePost);

module.exports = router;
