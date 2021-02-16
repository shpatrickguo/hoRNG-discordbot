module.exports = {
  name: "kick",
  permissions: ["KICK_MEMBERS"],
  description: "kicks a member",
  execute(message, args, cmd, client, Discord) {
    const member = message.mentions.users.first();
    if (member) {
      const memberTarget = message.guild.members.cache.get(member.id);
      memberTarget.kick();
      message.channel.send("User has been kicked");
    } else {
      message.channel.send("You couldn't kick the member");
    }
  },
};
