module.exports = {
  name: "meeting",
  aliases: ["attendance"],
  permissions: [],
  description: "creates a meeting",
  execute(message, args, cmd, client, Discord) {
    let messageArgs = args.join(" ");
    const embed = new Discord.MessageEmbed()
      .setColor("2af779")
      .setTitle(`Meeting: ${messageArgs}`)
      .setThumbnail(
        "https://static.wixstatic.com/media/0ecae5_f1d5479031114df8ac2adcde1b44a3f4~mv2.png/v1/fill/w_466,h_160,al_c,q_85,usm_0.66_1.00_0.01/DAANG-01-1024x351.webp"
      )
      .setAuthor(
        "DaanMatch",
        "https://media-exp1.licdn.com/dms/image/C560BAQEYGvW8wH3CSw/company-logo_200_200/0/1605310347627?e=1621468800&v=beta&t=JdCjZ9wqvwcJ1nhgukP25Wz6heKDjLRrnXjdC6_y4LU",
        "https://www.daanmatch.org/"
      )
      .setURL(
        "https://berkeley.zoom.us/j/5741278759"
      )
      .setDescription("")
      .addFields(
        { name: "⏲️ Meeting Length", value: "1 hour", inline: true },
        //{ name: "📝 Check-in Agenda", value: "1. Organize Team structure \n 2.Look over datasets for each group \n 3. Plan workload timeline",inline: true,}
      );
    if (cmd === "meeting") {
      message.channel
        .send(embed)
        .then((msg) => {
          message.delete();
        })
        .catch((err) => {
          throw err;
        });
    } else if (cmd === "attendance") {
      embed.setFooter("React to indicate attendance!");
      message.channel
        .send(embed)
        .then((msg) => {
          msg.react("✅");
          msg.react("❎");
          message.delete();
        })
        .catch((err) => {
          throw err;
        });
    }
  },
};
