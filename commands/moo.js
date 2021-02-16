module.exports = {
    name: 'moo',
    permissions: [],
    description: "sends I am cow song",
    execute(message, args, cmd, client, Discord) {
        message.channel.send('https://www.youtube.com/watch?v=JohcbfO0OjA&ab_channel=meppictures')
    }
}