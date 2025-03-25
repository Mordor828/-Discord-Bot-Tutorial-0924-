require('dotenv').config();
const {
  Client,
  GatewayIntenBits,
  Embedbuilder,
  PermissionsBitField,
  Permissions,
  GatewayIntentBits,
} = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.Guilds,
  ],
});


client.on("ready", (x) => {
  console.log('Bot is ready!');
  client.user.setActivity("🎮Diablo IV");
});

client.login(process.env.TOKEN);



