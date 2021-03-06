module.exports = {
    name: "pollyn",
    permissions: [],
    description: "create a yes no poll",
    execute(message, args, cmd, client, Discord) {
      let args = message.content.substring(PREFIX.length).split(" ")
      switch(args[0]) {
          case "poll":
            const embed = new Discord.MessageEmbed()
            .setTitle("Poll")
            .setColor("RANDOM");

            if (!args[1]){
                message.channel.send(Embed);
                break;
            }
            let msgArgs = args.slice(1).join(" ");
            message.channel.send(msgArgs).then(messageReaction => {
                messageReaction.react("✅");
                messageReaction.react("❎");
            });
            break;
    }
  }
}
  