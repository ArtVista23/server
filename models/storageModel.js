const mongoose = require("mongoose");

const storageSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  info: {
    type: String,
    required: true,
  },
  filename: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String,
    required: true,
  },
});

const Paintings = mongoose.model("Paintings", storageSchema);
const Sculptures = mongoose.model("Sculptures", storageSchema);
const Artifacts = mongoose.model("Artifacts", storageSchema);
const Monuments = mongoose.model("Monuments", storageSchema);

module.exports = { Paintings, Sculptures, Artifacts, Monuments };
