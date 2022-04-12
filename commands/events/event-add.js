const { MessageEmbed } = require("discord.js");

module.exports = {
  slash: "both",
  testOnly: true,
  description: "Add an event to the database",
  minArgs: 0,
  expectedArgs: "<event_name>, <event_host>,<user>,<date>,[description]",
  options: [
    {
      name: "event_name", // Must be lower case

      description: "Name of the event",

      //required: true,

      type: "STRING",
    },

    {
      name: "event_host", // Must be lower case

      description: "Event Host",

      // required: true,

      type: "STRING",
    },
    {
      name: "user",

      description: "Event Manager Tag",

      // required: true,

      type: "USER",
    },
    {
      name: "date",

      description: "Event Date",

      // required: true,

      type: "STRING",
    },
    {
      name: "description",

      description: "Event Info",

      type: "STRING",
    },
  ],
  callback: ({ message, args, interaction }) => {
    const [event_name, event_host, user, date, description] = args;
    const embed = new MessageEmbed()
      .setTitle(`${event_name} - Date:${date}`)
      .setDescription(`__Event Deatails__\n${description}`)
      .addField("Game", "PUBGM | CODM | NewState")
      .addField("Host", event_host)
      .addField("Event Manager", interaction.user.username);

    if (message) {
      message.reply("", { embed });
    }

    return embed;
  },
};
