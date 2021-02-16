module.exports = {
    name: 'ping',
    description: "a ping command",
    execute(mesage, args, cmd, client, Discord) {
        message.channel.send('pong!')
    }
}