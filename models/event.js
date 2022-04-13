// We grab Schema and model from mongoose library.

const { Schema, model } = require("mongoose");

const reqString = {
  type: String,
  required: true,
};

// We declare new schema.
const eventSchema = new Schema({
  eventName: reqString,
  eventHost: reqString,
  manager: reqString,
  description: reqString,
  date: {
    type: String,
    required: true,
  },
});

// We export it as a mongoose model.
module.exports = model("event", eventSchema);
