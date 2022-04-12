const { MessageEmbed } = require("discord.js");

module.exports = {
  slash: "both",
  testOnly: true,
  description: "Add an event to the database",
  minArgs: 3,
  expectedArgs: "<event_name> <event_host> <user>",
  options: [
    {
      name: "event_name", // Must be lower case

      description: "Name of the event",

      required: true,

      type: "STRING",
    },

    {
      name: "event_host", // Must be lower case

      description: "Event Host",

      required: true,

      type: "STRING",
    },
    {
      name: "user",

      description: "Event Manager Tag",

      required: true,

      type: "USER",
    },
  ],
  callback: ({ message, args }) => {
    const [event_name, event_host, user] = args;
    const embed = new MessageEmbed()
      .setTitle(event_name)
      .setDescription("pong")

      .addField("Name", event_name)
      .addField("Host", event_host)
      .addField("Event Manager", user);

    if (message) {
      message.reply("", { embed });
    }

    return embed;
  },
};
