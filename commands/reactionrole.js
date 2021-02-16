module.exports = {
    name: 'ping',
    description: "a ping command",
    execute(message, args, Discord, client) {
        message.channel.send('pong!')
    }
}