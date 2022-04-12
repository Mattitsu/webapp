const { MessageEmbed } = require("discord.js");

module.exports = {
  category: "Testing",
  description: "Replies with user info", // Required for slash commands

  slash: "both", // Create both a slash and legacy command
  testOnly: true, // Only register a slash command for the testing guilds

  callback: ({ guild, message, interaction }) => {
    const user = message.mentions.users.first() || message.member.user;
    const member = guild.members.cache.get(user.id);

    if (!member) return message.reply("No Member Found");

    let rolemap = member.roles.cache
      .sort((a, b) => b.position - a.position)
      .map((r) => r)
      .join("\r\n");
    if (rolemap.length > 1024) rolemap = "To many roles to display";
    if (!rolemap) rolemap = "No roles";

    const exampleEmbed = new MessageEmbed()
      .setColor("#0099ff")
      .setTitle(`${user.username}'s User-Info`)

      .setDescription(`${user.tag} || ${user.id}`)
      .setThumbnail(`${user.displayAvatarURL()}`)
      .addFields(
        { name: "Current Server Roles", value: rolemap },

        { name: "Web Activated", value: "True/False" }
      )

      .setTimestamp()
      .setFooter({
        text: "Some footer text here",
        iconURL: "https://i.imgur.com/AfFp7pu.png",
      });
    const reply = [exampleEmbed];

    // message is provided only for a legacy command
    if (message) {
      message.reply({
        embeds: reply,
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
