module.exports = {
  name: "ban",
  permissions: ["BAN_MEMBERS"],
  description: "bans a member",
  execute(message, args, cmd, client, Discord) {
    const member = message.mentions.users.first();
    if (member) {
      const memberTarget = message.guild.members.cache.get(member.id);
      memberTarget.ban();
      message.channel.send("User has been banned");
    } else {
      message.channel.send("You couldn't ban the member");
    }
  },
};
