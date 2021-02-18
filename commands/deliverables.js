module.exports = {
  name: "deliverables",
  aliases: ["needs"],
  permissions: [],
  description: "lists deliverables",
  execute(message, args, cmd, client, Discord) {
    const embed = new Discord.MessageEmbed()
      .setColor("2af779")
      .setTitle(`Deliverables`)
      .setThumbnail(
        "https://static.wixstatic.com/media/0ecae5_f1d5479031114df8ac2adcde1b44a3f4~mv2.png/v1/fill/w_466,h_160,al_c,q_85,usm_0.66_1.00_0.01/DAANG-01-1024x351.webp"
      )
      .setAuthor(
        "DaanMatch",
        "https://media-exp1.licdn.com/dms/image/C560BAQEYGvW8wH3CSw/company-logo_200_200/0/1605310347627?e=1621468800&v=beta&t=JdCjZ9wqvwcJ1nhgukP25Wz6heKDjLRrnXjdC6_y4LU",
        "https://www.daanmatch.org/"
      )
      .addFields(
        {
          name: "Corporates and NGOs mapped",
          value:
            "1️. All corporations, corporations under CSR, compliant corporations \n 2️. Pan India NGOs, NGOs funded by CSR \n",
          inline: false
        },
        {
          name: "Submit data request to Gov of India",
          value: "1️. Gov of India \n 2️. State Ministries \n",
          inline: false
        },
        {
          name: "EDA on corporate social responsibility https://csr.gov.in/",
          value:
            "What else can you infer when joined with SDG/economic info \n",
          inline: false
        },
        {
          name: "Mapping of corporations",
          value: "How are  they situated based on NGOs? \n",
          inline: false
        }
      );
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
