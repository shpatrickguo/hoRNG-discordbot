require('dotenv').config();
const Discord = require('discord.js');

const client = new Discord.Client();

client.once('ready', () => {
    console.log('hoRNG-bot is online')
});

client.login(process.env.TOKENJS);