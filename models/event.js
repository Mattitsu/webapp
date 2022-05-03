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
  eventManager: reqString,
  eventDescription: reqString,
  eventDate: {
    type: String,
    required: true,
  },

});

// We export it as a mongoose model.
module.exports = model("event", eventSchema);
