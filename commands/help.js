const Discord = require('discord.js');
const fs = require('fs');
module.exports.run = async (client, message, args) => {
  if (!args[0]) {
  const categories = [];
  const commands = Array.from(client.commands.keys());
  commands.forEach(function(x) {
    if (!categories.includes(client.commands.get(x).help.category)) {
      categories.push(client.commands.get(x).help.category);
    }
  });

  if (!message.guild.member(client.user).hasPermission('EMBED_LINKS')) return message.reply('ERROR: Cris doesn\'t have the permission to send embed links please enable them to use the full help.');
  const embed = new Discord.RichEmbed()
    .setAuthor(`Pixl Help`, client.user.avatarURL)
    .setDescription('Every command you input into Pixl requires the prefix `' + require('../config.js').prefix + '`')
    .setColor(0x16ff00)
    .setFooter('Designed and Programed by Swingin30, Alee, TechLion and JPlexer Copyright 2019, Licensed with GPL-3.0');

  categories.forEach(function(x) {
    let cat = '';
    commands.forEach(function(command) {
      if (client.commands.get(command).help.category == x) {
        cat = cat + command + '\n';
      }
    });
    embed.addField(x, cat, true);
  });

  await message.channel.send({ embed });
} else {
  let command = args[0];
  if (client.commands.has(command)) {
    command = client.commands.get(command);
    if (!message.guild.member(client.user).hasPermission('EMBED_LINKS')) return message.reply('ERROR: Cris doesn\'t have the permission to send embed links please enable them to use the full help.');
  const embed = new Discord.RichEmbed()
    .setAuthor(`Cris Help`, client.user.avatarURL)
    .setDescription('Every command you input into Cris requires the prefix `' + require('../config.js').prefix + '`')
    .setColor(0x16ff00)
    .addField(`c#${command.help.name}`, `${command.help.description}\n Usage: ${command.help.usage}`, true )
    .setFooter('Designed and Programed by Swingin30, Alee, ServerLion and JPlexer Copyright 2019, Licensed with GPL-3.0');
    await message.channel.send({ embed });
  }
}
};

  exports.help = {
    name: "help",
    category: "System",
    description: "Displays all the available commands for you.",
    usage: "help [command]"
  };