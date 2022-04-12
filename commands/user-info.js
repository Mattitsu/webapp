const { MessageEmbed } = require("discord.js");

module.exports = {
  category: "Testing",
  description: "Replies with user info", // Required for slash commands

  slash: "both", // Create both a slash and legacy command
  testOnly: true, // Only register a slash command for the testing guilds

  callback: ({ guild, message, interaction }) => {
    const user = message.mentions.users.first() || message.member.user;
    const member = guild.members.cache.get(user.id);

    const exampleEmbed = new MessageEmbed()
      .setColor("#0099ff")
      .setTitle(`${user.username}'s User-Info`)

      .setDescription(`${user.tag} || ${user.id}`)
      .setThumbnail(`${user.displayAvatarURL()}`)
    .addFields(
        { name: "Current Server Roles", value: "\u200b" },
       
        { name: "Inline field title", value: "Some value here", inline: true },
        { name: "Role Count", value: `${member.roles.cache.size - 1}`, inline: true }
      )
      .addFields(
        { name: "Regular field title", value: "Some value here" },
        { name: "\u200B", value: "\u200B" },
        { name: "Inline field title", value: "Some value here", inline: true },
        { name: "Role Count", value: `${member.roles.cache.size - 1}`, inline: true }
      )
      .addField("Inline field title", "Some value here", true)
      .setImage("https://i.imgur.com/AfFp7pu.png")
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
