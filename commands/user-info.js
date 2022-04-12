const { MessageEmbed } = require("discord.js");

module.exports = {
  category: "Testing",
  description: "Replies with user info", // Required for slash commands

  slash: "both", // Create both a slash and legacy command
  testOnly: true, // Only register a slash command for the testing guilds

  callback: ({ guild, message, interaction }) => {
    const user = message.mentions.users.first() || message.member.user;
    const member = guild.members.cache.get(user.id);

    const exampleEmbed = {
      color: 0x0099ff,
      title: "User Information",
      url: "https://discord.js.org",
      author: {
        name: `${user.username}`,
        icon_url: `user.displayAvatarURL()`,
        url: "https://discord.js.org",
      },
      description: "Some description here",
      thumbnail: {
        url: "https://i.imgur.com/AfFp7pu.png",
      },
      fields: [
        {
          name: "User tag",
          value: user.tag || "None",
        },
        {
          name: "Is bot",
          value: user.bot || "None",
        },
        {
          name: "Nickname",
          value: member.nickname || "None",
        },
        {
          name: "Joined Server",
          value: new Date(member.joinedTimestamp).toLocaleDateString(),
        },
        {
          name: "Joined Discord",
          value: new Date(user.createdTimestamp).toLocaleDateString() || "None",
        },
        {
          name: "Roles",
          value: member.roles.cache.size - 1 || "None",
        },
      ],

      timestamp: new Date() || "None",
    };

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
