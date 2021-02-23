module.exports = {
  name: "reaction_groups",
  aliases: ["assign_groups"],
  permissions: ["MANAGE_ROLES"],
  description: "react and assign role member",
  async execute(message, args, cmd, client, Discord) {
    if (message.member.roles.cache.has("813557830401523712")) {
      const channel = "8813568839538442291";
      const group1Role = message.guild.roles.cache.find(
        (role) => role.name === "CSR Team 1"
      );
      const group2Role = message.guild.roles.cache.find(
        (role) => role.name === "CSR Team 2"
      );
      const group3Role = message.guild.roles.cache.find(
        (role) => role.name === "CSR Team 3"
      );

      const group1Emoji = "1️⃣";
      const group2Emoji = "2️⃣";
      const group3Emoji = "3️⃣";

      let embed = new Discord.MessageEmbed()
        .setColor("#e42643")
        .setTitle("React to the message get group role!")
        .setDescription("Description Pending");

      let messageEmbed = await message.channel.send(embed).catch((err) => {
        throw err;
      });
      messageEmbed.react(group1Emoji);
      messageEmbed.react(group2Emoji);
      messageEmbed.react(group3Emoji);

      client.on("messageReactionAdd", async (reaction, user) => {
        if (reaction.message.partial) await reaction.message.fetch();
        if (reaction.partial) await reaction.fetch();
        if (user.bot) return;
        if (!reaction.message.guild) return;

        if (reaction.message.channel.id == channel) {
          if (reaction.emoji.name === group1Emoji) {
            await reaction.message.guild.members.cache
              .get(user.id)
              .roles.add(group1Role);
          }
        } else if (reaction.message.channel.id == channel) {
          if (reaction.emoji.name === group2Emoji) {
            await reaction.message.guild.members.cache
              .get(user.id)
              .roles.add(group2Role);
          }
        } else if (reaction.message.channel.id == channel) {
          if (reaction.emoji.name === group3Emoji) {
            await reaction.message.guild.members.cache
              .get(user.id)
              .roles.add(group3Role);
          }
        } else {
          return;
        }
      });

      client.on("messageReactionRemove", async (reaction, user) => {
        if (reaction.message.partial) await reaction.message.fetch();
        if (reaction.partial) await reaction.fetch();
        if (user.bot) return;
        if (!reaction.message.guild) return;
        if (reaction.message.channel.id == channel) {
          if (reaction.emoji.name === group1Emoji) {
            await reaction.message.guild.members.cache
              .get(user.id)
              .roles.remove(group1Role);
          }
        } else if (reaction.message.channel.id == channel) {
          if (reaction.emoji.name === group2Emoji) {
            await reaction.message.guild.members.cache
              .get(user.id)
              .roles.remove(group2Role);
          }
        } else if (reaction.message.channel.id == channel) {
          if (reaction.emoji.name === group3Emoji) {
            await reaction.message.guild.members.cache
              .get(user.id)
              .roles.remove(group3Role);
          }
        } else {
          return;
        }
      });
    } else {
      message.channel.send("You don't have permission to do that.");
    }
  },
};
