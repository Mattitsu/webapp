const { MessageEmbed } = require("discord.js");

module.exports = {
  slash: "both",
  testOnly: true,
  description: "Add an event to the database",
  minArgs: 4,
  expectedArgs: "<event_name> <event_host> <user> <date>",
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
    {
      name: "date",

      description: "Event Date",

      required: true,

      type: "STRING",
    },
  ],
  callback: ({ message, args }) => {
    const [event_name, event_host, user, date] = args;
    const embed = new MessageEmbed()
      .setTitle(event_name)
      .setDescription(`${date}`)

      .addField("Name", event_name)
      .addField("Host", event_host)
      .addField("Event Manager", user);

    if (message) {
      message.reply("", { embed });
    }

    return embed;
  },
};
