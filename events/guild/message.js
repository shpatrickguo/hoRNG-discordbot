module.exports = (Discord, client, message) => {
  const prefix = "h!";
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content.slice(prefix.length).split(/ +/);
  const cmd = args.shift().toLowerCase();

  const command = client.comamnds.get(cmd);
  if (command) command.execute(client, message, args, Discord);
};
