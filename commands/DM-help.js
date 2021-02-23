module.exports = {
  name: "help",
  aliases: [],
  permissions: [],
  description: "lists commands",
  execute(message, args, cmd, client, Discord) {
    const embed = new Discord.MessageEmbed()
      .setColor("FADF2E")
      .setTitle("Commands")
      .addFields(
        {
          name: "`attendance <TIME>`",
          value: "Checks attendance for meeting with reactions.",
        },
        { name: "`meeting <TIME>`", value: "Announces meeting time." },
        { name: "`deliver`", value: "Lists deliverables." },
        { name: "`todo`", value: "ToDo list." },
        { name: "`assign`", value: "Assign groups." }
      );
    message.channel.send(embed).catch((err) => {
      throw err;
    });
  },
};
