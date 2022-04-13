const { MessageEmbed } = require("discord.js");

const eventSchema = require("../../models/event");

module.exports = {
  slash: "both",
  testOnly: true,
  description: "List events in the database",
  minArgs: 0,
  expectedArgs: "",
  init: (client, instance) => {
    const event = eventSchema.findAll();
  },
  callback: async ({ args, interaction }) => {
    const [event_name, event_host, user, date, description] = args;
    const embed = new MessageEmbed()
      .setTitle(`${event_host} - ${event.event_name}`)
      .addField("Game", "PUBGM | CODM | NewState")
      .setDescription(`__Event Details__\nDate:${date}\n${event.description}`)

      .addField("Hosted by", event_host)
      .addField("Event Manager & Contact", `@${interaction.user.tag}`)

      .addField(
        "More Info",
        "To further manager your event please the dashboard"
      );

    return interaction.reply({
      content: "You  be able to add/edit more info on the Dashboard",
      embeds: [embed],
    });
  },
};
