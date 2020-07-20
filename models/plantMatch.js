var mongoose = require("mongoose");
var Schema = mongoose.Schema;

let matchSchema = new Schema(
  {
    name: { type: String, required: true },
    image: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("PlantMatch", matchSchema);
