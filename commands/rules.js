const { DiscordAPIError } = require("discord.js")

module.exports = {
    name: 'rules',
    description: "server rules",
    execute(message, args, Discord){
        let newEmbed = new Discord.MessageEmbed()
        .setColor('#304281')
        .setTitle('Rules')
        .setDescription('This is an embed for the server rules')
        .addFields(
            {name: "Rule 1", value: "Please be respectful, civil and welcoming."},
            {name: "Rule 2", value: "Refrain from spamming."},
            {name: "Rule 3", value: "Do not send viruses or malware."},
            {name: "Rule 4", value: "No NSFW content."},
            {name: "Rule 5", value: "Don't send unsolicited DM's or server invites."}
        )
        .setFooter('Make sure to check out the rules channel');
        message.channel.send(newEmbed)
    }
}