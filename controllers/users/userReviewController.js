const Reviews = require("../../models/userReview");
const User = require("../../models/userModel");

const addReview = async (req, res) => {
  const { user_id, model_id, review } = req.body;
  try {
    const user = await User.findById(user_id);
    if (user) {
      await Reviews.create({ username: user.fullname, model_id, review });
    }
    res.status(201).json({ message: "Review added successfully." });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Something went wrong." });
  }
};

const getReviews = async (req, res) => {
  const model_id = req.query.model_id;
  try {
    const reviews = await Reviews.find({ model_id: model_id });
    res.status(200).json(reviews);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Something went wrong." });
  }
};

module.exports = { addReview, getReviews };
