const Post = require("../models/Post");

exports.createPost = async (req, res) => {
  try {
    const newPost = new Post({ ...req.body });
    await newPost.save();
    res.status(200).send({ msg: "post add", post: newPost });
  } catch (error) {
    res.status(400).send({ errors: [{ msg: " faild to create post" }] });
  }
};

exports.getAllPost = async (req, res) => {
  try {
    const postList = await Post.find().populate("author");

    res.status(200).send({ msg: "get all posts", posts: postList });
  } catch (error) {
    res.status(400).send({ errors: [{ msg: "faild to get all posts" }] });
  }
};

exports.getMyPost = async (req, res) => {
  try {
    const postList = await Post.find({ author: req.user._id });
    if (!postList.length) {
      return res.status(200).send({ msg: "no posts" });
    }
    res.status(200).send({ msg: "get all posts", posts: postList });
  } catch (error) {
    res.status(400).send({ errors: [{ msg: "faild to get all posts" }] });
  }
};

exports.getPost = async (req, res) => {
  try {
    const postToFind = await Post.findById(req.params.id);
    res.status(200).send({ msg: "get post ", post: postToFind });
  } catch (error) {
    res.status(400).send({ errors: [{ msg: "faild to get post" }] });
  }
};

exports.deletePost = async (req, res) => {
  try {
    await Post.deleteOne({ _id: req.params.id });
    res.status(200).send({ msg: "deleted" });
  } catch (error) {
    res.status(500).send({ errors: [{ msg: "faild to delete" }] });
  }
};

exports.updatePost = async (req, res) => {
  try {
    const result = await Post.updateOne(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    if (result.modifiedCount) {
      return res.status(200).send("updated");
    }
    res.status(200).send({ msg: "no modification" });
  } catch (error) {
    res.status(400).send({ errors: [{ msg: "faild to update" }] });
  }
};
