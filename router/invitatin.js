const express = require("express");
const {
  deleteInvitation,
  createInvitation,
  getAllInvitations,
} = require("../controllers/invitation.controllers");

const router = express.Router();

/*
@method: POST
@ path:http:localhost:5000/api/invitation/
@ parameter: req.body
public
*/
router.post("/", createInvitation);

/*
@method: GET
@ path:http:localhost:5000/api/invitation/
@ parameter: 
public
*/
router.get("/", getAllInvitations);

/*
@method: DELETE
@ path:http:localhost:5000/api/invitation/:id
@ parameter: 
public
*/
router.delete("/:id", deleteInvitation);

module.exports = router;
