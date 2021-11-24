const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const invitationSchema = new Schema({
  receiver: String,
  sender: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
});

module.exports = invitation = model("invitation", invitationSchema);
