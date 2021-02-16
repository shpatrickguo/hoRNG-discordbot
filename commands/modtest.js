module.exports = {
    name: 'modtest',
    description: "tests whether user is a mod",
    execute(mesage, args, cmd, client, Discord) {
        if (message.member.roles.cache.has('810768729415483422')) {
            message.channel.send('You are a mod.')
        } else {
            message.channel.send('You do not have access to this commmand.')
        }
    }
}