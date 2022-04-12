// We grab Schema and model from mongoose library.

const { Schema, model } = require("mongoose");

// We declare new schema.
const eventSettingSchema = new Schema({
  eventName: {
    type: String,
  },
  eventHost: {
    type: String,
  },
  hostTag: {
    type: String,
  },
});

// We export it as a mongoose model.
module.exports = model("event_settings", eventSettingSchema);
