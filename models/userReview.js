const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema(
  {
    username: {
      type: String,
      requied: true,
    },
    model_id: {
      type: String,
      requied: true,
    },
    review: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Reviews", reviewSchema);
