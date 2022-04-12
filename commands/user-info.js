module.exports = {
  category: "Testing",
  description: "Replies with user info", // Required for slash commands

  slash: "both", // Create both a slash and legacy command
  testOnly: true, // Only register a slash command for the testing guilds

  callback: ({ message, interaction }) => {
    const user = message.mentions.users.first() || message.member.user;
    const member = guild.members.cache.get(user.id);

    console.log(member);

    const embed = new MessageEmbed()
      .setAuthor(`User info for ${user.username}`, user.displayAvatarURL())
      .addFields(
        {
          name: "User tag",
          value: user.tag,
        },
        {
          name: "Is bot",
          value: user.bot,
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
          value: new Date(user.createdTimestamp).toLocaleDateString(),
        },
        {
          name: "Roles",
          value: member.roles.cache.size - 1,
        }
      );

    const reply = "Pong!";

    // message is provided only for a legacy command
    if (message) {
      message.reply({
        content: reply,
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
