const { MessageEmbed } = require("discord.js");

const eventSchema = require("../../models/event");

module.exports = {
  slash: true,
  testOnly: true,
  description: "List events in the database",

  guildOnly: true,

  callback: async ({ args, interaction }) => {
    //const [event_name, event_host, user, date, description] = args;

    const events = await eventSchema.find({});
    console.log(events);

    let description = `__EVENT LIST__\n\n`;

    for (const event of events) {
      console.log(event.description);
      description += `${event.description}\n`;
    }

    const embed = new MessageEmbed()
      .setTitle(`Test Title`)

      .addField("Game", "PUBGM | CODM | NewState")
      .setDescription(description);

    //  .addField("Hosted by", event_host)
    // .addField("Event Manager & Contact", `@${interaction.user.tag}`)

    // .addField(
    //  "More Info",
    //   "To further manager your event please the dashboard"
    //)

    return interaction.reply({
      content: "You  be able to add/edit more info on the Dashboard",
      embeds: [embed],
    });
  },
};
