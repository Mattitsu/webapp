const { MessageEmbed } = require("discord.js");

const eventSchema = require("../../models/event");

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
  callback: async ({ args, interaction }) => {
    const [event_name, event_host, user, date, description] = args;
    const embed = new MessageEmbed()
      .setTitle(`${event_name} - Date:${date}`)
      .setDescription(`__Event Details__\nDate:${date}\n${description}`)
      .addField("Game", "PUBGM | CODM | NewState")
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

    await eventSchema.findOneAndUpdate({
      eventName: event_name,
      eventHost: event_host,
      manager: interaction.user.tag,
      description: description,
      date: date,
    }).save();
  },
};
