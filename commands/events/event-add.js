const { MessageEmbed } = require("discord.js");

module.exports = {
  slash: "both",
  testOnly: true,
  description: "Add an event to the database",
  minArgs: 3,
  expectedArgs: "<event_name> <event_host> <event_tag>",
  callback: ({ message, args }) => {
    const embed = new MessageEmbed().setTitle("Example").setDescription("pong");

    const [event_name, event_host, event_tag] = args;

    embed.addField("Name", event_name);
    embed.addField("Host", event_host);
    embed.addField("Orgniser", event_tag);

    if (message) {
      message.reply("", { embed });
    }

    return embed;
  },
};
