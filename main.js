const Discord = require('discord.js');

const client = new Discord.client();

client.once('ready', () => {
    console.log('hoRNG-bot is online')
});

client.login(process.env.TOKEN);