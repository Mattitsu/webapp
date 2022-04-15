/*
  > Index.Js is the entry point of our application.
*/

/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow-restricted-names */

// We import the modules.
require("dotenv").config();
//  const config = require("./config");
const mongoose = require("mongoose");
const GuildSettings = require("./models/settings");
const Dashboard = require("./dashboard/dashboard");
const DiscordJS = require("discord.js");
const { Intents } = DiscordJS;
const WOKCommands = require("wokcommands");
const path = require("path");

const client = new DiscordJS.Client({
  // These intents are recommended for the built in help menu
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
  ],
});

// We listen for client's ready event.

client.on("ready", async () => {
  // The client object is required as the first argument.
  // The second argument is the options object.
  // All properties of this object are optional.
  console.log(__dirname);

  new WOKCommands(client, {
    // The name of the local folder for your command files
    commandsDir: path.join(__dirname, "commands"),

    // The name of the local folder for your feature files
    featuresDir: path.join(__dirname, "features"),

    // The name of the local file for your message text and translations
    // Omitting this will use the built-in message path
    messagesPath: "",

    // Allow importing of .ts files
    typeScript: false,

    // If WOKCommands warning should be shown or not, default true
    showWarns: true,

    // How many seconds to keep error messages before deleting them
    // -1 means do not delete, defaults to -1
    delErrMsgCooldown: -1,

    // What language your bot should use
    // Must be supported in your messages.json file
    defaultLangauge: "english",

    // If your commands should not be ran by a bot, default false
    ignoreBots: false,

    // If interactions should only be shown to the one user
    // Only used for when WOKCommands sends an interaction response
    // Default is true
    ephemeral: true,

    // Various options for your MongoDB database connection
    dbOptions: {
      // These are the default options
      keepAlive: true,
    },

    // What server/guild IDs are used for testing only commands & features
    // Can be a single string if there is only 1 ID
    testServers: ["717307352134582312", "ID2", "ID3"],

    // User your own ID
    // If you only have 1 ID then you can pass in a string instead
    botOwners: ["401711350268559362", "ID2"],

    // What built-in commands should be disabled.
    // Note that you can overwrite a command as well by using
    // the same name as the command file name.
    disabledDefaultCommands: [
      // 'help',
      // 'command',
      // 'language',
      // 'prefix',
      // 'requiredrole',
      // 'channelonly'
    ],

    // When connecting to a Mongo database.
    // For more infomration view the "DATABASES" section
    // of this documentation.
    mongoUri: process.env.mongodbUrl,

    // Provides additional debug logging
    debug: false,
  });

  // Here are some additional methods that you can chain
  // onto the contrustor call. These will eventually be
  // merged into the above object, but for now you can
  // use them:

  // The default is !
});

// Listening for error & warn events.
client.on("error", console.error);
client.on("warn", console.warn);

Dashboard(client);

// We login into the bot.
client.login(process.env.token);
