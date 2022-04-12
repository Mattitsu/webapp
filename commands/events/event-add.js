const { MessageEmbed } = require("discord.js");
const event = require("../../models/event");

module.exports = {
  category: "Testing",
  description: "Add event to the database", // Required for slash commands

  slash: "both", // Create both a slash and legacy command
  testOnly: true, // Only register a slash command for the testing guilds

  minArgs: 3,
  expectedArgs: "<Event Title> <Host Name> <Organiser Tag>",
  
  options: [
    {
      name: 'eventName',
      description: 'Name of your event',
      required: true,
      type: 10,
    },
    {
      name: 'num2',
      description: 'The second number',
      required: true,
      type: 10,
    },
  ],

  callback: ({ message, interaction, args }) => {
    const { title, host, tag } = args;

    console.log(title);

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
