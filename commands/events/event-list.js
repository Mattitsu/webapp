const { MessageEmbed } = require("discord.js");

const eventSchema = require("../../models/event");

module.exports = {
  slash: true,
  testOnly: true,
  description: "List events in the database",

  guildOnly: true,
  options: [
    {
      type: "SUB_COMMAND",
      name: "add",
      description: "Adds an event to the database",
      options: [
        {
          name: "event name",
          type: "STRING",
          description: "Please enter an Event Name",
          required: true,
        },
        {
          name: "event date",
          type: "STRING",
          description: "Please enter an Event date",
          required: true,
        },
        {
          name: "event host",
          type: "STRING",
          description: "Please enter an Event Host Name",
          required: true,
        },
        {
          name: "event manager",
          type: "USER",
          description: "Please tag the event manager",
          required: true,
        },
      ],
      type: "SUB_COMMAND",
      name: "remove",
      description: "Remove an event from the database",
      options: [
        {
          name: "event name",
          type: "STRING",
          description: "Please enter an Event Name",
          required: true,
        },
      ],
      type: "SUB_COMMAND",
      name: "list",
      description: "List event in the database",
      options: [
        {
          name: "event name",
          type: "STRING",
          description: "Please enter an Event Name",
          required: true,
        },
      ],
    },
  ],

  callback: async ({ member, args, interaction }) => {
    //const [event_name, event_host, user, date, description] = args;
    
    const subCommand = interaction.options.getSubcommand()
    
    const user = interaction.options.getUser('user')

    const eventslist = eventSchema.find();
    console.log(eventslist);

    for (const e in eventslist) {
      console.log(e.description);
    }

    const embed = new MessageEmbed()
      .setTitle(`Test Title`)

      .addField("Game", "PUBGM | CODM | NewState")
      .setDescription(e.description);

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
