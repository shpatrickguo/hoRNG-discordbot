require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client({partials:["MESSAGE", "CHANNEL", "REACTION"]});

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_hanlder', 'event_handler'].forEach(handler =>{
    require(`./handlers${handler}`)(client, Discord);
})

client.login(process.env.TOKEN);
