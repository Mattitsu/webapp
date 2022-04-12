const { MessageEmbed } = require("discord.js");
const event = require("../../models/event");

module.exports = {
  category: "Testing",
  description: "Add event to the database", // Required for slash commands

  slash: "both", // Create both a slash and legacy command
  testOnly: true, // Only register a slash command for the testing guilds

  minArgs: 3,
  expectedArgs: "<eventname> <hostname> <hosttag>",

  options: [
    {
      name: "eventname",
      description: "Name of your event",
      required: true,
      type: "STRING",
    },
    {
      name: "hostname",
      description: "Hosts Name",
      required: true,
      type: "STRING",
    },
    {
      name: "hosttag",
      description: "Hosts Discord @",
      required: true,
      type: "STRING",
    },
  ],

  callback: ({ message, interaction, args }) => {
    const [eventname, hostname, hosttag] = args;
    const name = (args[0]);
    const host = (args[1]);
    const tag = (args[2]);

    console.log(name);
    console.log(host);
    console.log(tag);

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
