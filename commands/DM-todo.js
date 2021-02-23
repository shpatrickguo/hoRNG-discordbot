module.exports = {
  name: "todo",
  aliases: [""],
  permissions: [],
  description: "To do list",
  execute(message, args, cmd, client, Discord) {
    const embed = new Discord.MessageEmbed()
      .setColor("2af779")
      .setTitle("Develop survey for NGOs/CSR")
      .setDescription(
        `We want more information and data visualizations on all corporations`
      )
      .setThumbnail(
        "https://static.wixstatic.com/media/0ecae5_f1d5479031114df8ac2adcde1b44a3f4~mv2.png/v1/fill/w_466,h_160,al_c,q_85,usm_0.66_1.00_0.01/DAANG-01-1024x351.webp"
      )
      .setAuthor(
        "DaanMatch",
        "https://media-exp1.licdn.com/dms/image/C560BAQEYGvW8wH3CSw/company-logo_200_200/0/1605310347627?e=1621468800&v=beta&t=JdCjZ9wqvwcJ1nhgukP25Wz6heKDjLRrnXjdC6_y4LU",
        "https://www.daanmatch.org/"
      )
      .addFields({
        name: "What we need answered",
        value:
          "1. Corporate information and how they do their CSR? \n 2. Identify levels of compliance by corp size (categorized by revenue?) - Esp last 2 years \n 3. Identify targets of funding by SDG \n 4. Identify any correlation between SDGs/state of the union and corp donation? \n 5. Where corps/industries are donating and where they are geographically? \n 6. How does the CSR allocation help the region or the SDGs - How could spending be improved?",
        inline: false,
      });
    message.channel
      .send(embed)
      .then((msg) => {
        message.delete();
      })
      .catch((err) => {
        throw err;
      });
  },
};
