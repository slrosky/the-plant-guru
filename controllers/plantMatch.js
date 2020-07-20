const PlantMatch = require("../models/plantMatch");

module.exports = {
  create,
  plantMatchIndex,
  show,
  deleteOne,
  update,
};

async function create(req, res) {
  req.body.user = req.user._id;
  const match = await PlantMatch.create(req.body);
  res.status(201).json(match);
}

async function plantMatchIndex(req, res) {
  PlantMatch.find({ user: req.body.user._id }, function (err, match) {
    res.json(match);
  });
}

async function show(req, res) {
  const match = await PlantMatch.findById(req.params.id);
  res.status(200).json(match);
}

async function deleteOne(req, res) {
  const deletedPlantMatch = await PlantMatch.findByIdAndRemove(req.params.id);
  res.status(200).json(deletedPlantMatch);
}

async function update(req, res) {
  const updatedPlantMatch = await PlantMatch.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json(updatedPlantMatch);
}
