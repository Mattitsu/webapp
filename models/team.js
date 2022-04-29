// We grab Schema and model from mongoose library.

const { Schema, model } = require("mongoose");

const reqStringUniq = {
  type: String,
  required: true,
  unique: true,
};
const reqString = {
  type: String,
  required: true,
};

// We declare new schema.
const teamSchema = new Schema({
  Name: reqStringUniq,
  Manager: reqString,
  Tag: reqStringUniq,
  
});

// We export it as a mongoose model.
module.exports = model("teams", teamSchema);
