module.exports = {
    name: 'mute',
    description: "mutes a member",
    execute(message, args) {
        if (message.member.roles.cache.has('810768729415483422')) {
            const target = message.mentions.users.first();
            if (target) {
                let mainRole = message.guild.roles.cache.find(role => role.name === 'member');
                let muteRole = message.guild.roles.cache.find(role => role.name === 'mute');

                let memberTarget = message.guild.members.cache.get(target.id);
                memberTarget.roles.remove(mainRole.id);
                memberTarget.roles.add(muteRole.id);
                message.channel.send(`<@${memberTarget.user.id}> has been muted`);
            } else {
                message.channel.send('You couldn\'t mute the member')
            }
        } else {
            message.channel.send('You do not have access to this commmand.')
        }
    }
}