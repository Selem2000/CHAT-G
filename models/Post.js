const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const postSchema = new Schema({
  title: String,
  contents: { type: String, required: true },
  author: {
    type: Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  likes: Array,
});

module.exports = Post = model("post", postSchema);
