const Invitation = require("../models/Invitation");

exports.getAllInvitations = async (req, res) => {
  try {
    const invitationsList = await Invitation.find().populate("sender");

    res
      .status(200)
      .send({ msg: "all the invitations", invitations: invitationsList });
  } catch (error) {
    res.status(400).send({ errors: [{ msg: "faild to get the invitations" }] });
  }
};

exports.createInvitation = async (req, res) => {
  try {
    const newInvitation = new Invitation({
      ...req.body,
    });
    await newInvitation.save();
    res
      .status(200)
      .send({ msg: "invitation created", invitation: newInvitation });
  } catch (error) {
    res
      .status(400)
      .send({ errors: [{ msg: "faild to create invitation", error }] });
  }
};

exports.deleteInvitation = async (req, res) => {
  try {
    await Invitation.deleteOne({ _id: req.params.id });
    res.status(200);
    send({ msg: "deleted" });
  } catch (error) {
    res.status(400).send({ errors: [{ msg: "faild to delete invitation" }] });
  }
};
