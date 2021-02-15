module.exports = {
    name: 'moo',
    description: "sends our anthem song!",
    execute(message, args){
        message.channel.send('https://www.youtube.com/watch?v=JohcbfO0OjA&ab_channel=meppictures')
    }
}