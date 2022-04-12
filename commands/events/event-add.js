const { MessageEmbed } = require("discord.js");
const event = require("../../models/event");

module.exports = {
  category: "Testing",
  description: "Add event to the database", // Required for slash commands

  slash: "both", // Create both a slash and legacy command
  testOnly: true, // Only register a slash command for the testing guilds

  callback: ({ message, interaction }) => {
    
    
    
    const reply = "Pong!";

    // message is provided only for a legacy command
    if (message) {
      message.reply({
        content: reply,
      });
      return;
    }

    // interaction is provided only for a slash command
    interaction.reply({
      content: reply,
    });

    // Alternatively we can just simply return our reply object
    // OR just a string as the content.
    // WOKCommands will handle the proper way to reply with it
    return {
      content: reply,
    };
  },
};