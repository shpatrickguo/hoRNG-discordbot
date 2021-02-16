module.exports = {
    name: 'ping',
    description: "a ping command",
    execute(client, message, args) {
        message.channel.send('pong!')
    }
}