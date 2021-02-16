module.exports = {
    name: 'ban',
    description: "bans a member of server",
    execute(message, args) {
        if(message.member.roles.cache.has('810768729415483422')){
            const member = message.mentions.users.first();
            if(member) {
                const memberTarger = message.guild.members.cache.get(member.id)
                memberTarger.ban();
                message.channel.send("User has been banned")
            } else {
                message.channel.send('You couldn\'t ban the member')
            }
        } else {
            message.channel.send('You do not have access to this commmand.')
        }
    }
}