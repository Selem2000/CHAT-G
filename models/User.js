const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const ROLE = { ADMIN: "admin", CLIENT: "client" };

const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  sexe: { type: String, require: true },
  bio: { type: String, default: "" },
  email: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, default: ROLE.CLIENT },
  FriendList: [{ type: Schema.Types.ObjectId, ref: "user" }],
});

module.exports = User = model("user", userSchema);
