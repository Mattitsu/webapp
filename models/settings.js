// We grab Schema and model from mongoose library.

const { Schema, model } = require("mongoose");

// We declare new schema.
const guildSettingSchema = new Schema({
  guildID: {
    type: String,
  },
  prefix: {
    type: String,
    default: process.env.prefix,
  },
});

// We export it as a mongoose model.
module.exports = model("guild_settings", guildSettingSchema);
