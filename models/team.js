// We grab Schema and model from mongoose library.

const { Schema, model } = require("mongoose");

const reqString = {
  type: String,
  required: true,
};

// We declare new schema.
const teamSchema = new Schema({
  Name: reqString,
  Manager: reqString,
  Tag: reqString,
  
});

// We export it as a mongoose model.
module.exports = model("teams", teamSchema);
