module.exports = {
  name: "help",
  aliases: ["h", "commands"],
  permissions: [],
  description: "lists commands",
  execute(message, args, cmd, client, Discord) {
    const embed = new Discord.MessageEmbed()
      .setColor("FADF2E")
      .setTitle("Commands")
      .addFields(
        { name: "`play URL/KEYWORDs`", value: "plays a video from youtube" },
        { name: "`skip`", value: "skips current video" },
        { name: "`stop`", value: "stops playing audio" },
        { name: "`rules`", value: "server rules" },
        { name: "`ping`", value: "Latency check" },
        { name: "`weather LOCATION`", value: "current weather at location" },
        { name: "`avatar`", value: "returns profile pic" },
        { name: "`moo`", value: "Our anthem" },
        { name: "`clear`", value: "clears commands" }
      )
      .setFooter("Make sure to check the rules channel");

    message.channel.send(embed).catch((err) => {
      throw err;
    });
  },
};
