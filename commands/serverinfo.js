const Discord = require('discord.js');
exports.run = async(client, message, args) => { // eslint-disable-line no-unused-vars
  const embed = new Discord.RichEmbed()
  .setAuthor(`Pixl`, client.user.avatarURL)
  .setDescription(`Serverinfo`)
  .setColor(0x16ff00)
  .addField(`Server Name`, `${message.guild.name}`, true )
  .addField(`Created At`, `${message.guild.createdAt}`, true )
  .addField(`Users`, `${message.guild.memberCount}`, true )
  .addField(`Joined At`, `${message.member.joinedAt}`, true )
  .setFooter('Designed and Programed by Swingin30, Alee, TechLion and JPlexer Copyright 2019, Licensed with GPL-3.0');
  await message.channel.send({ embed });
};

exports.help = {
  name: "serverinfo",
  category: "System",
  description: "Gives some useful server infos",
  usage: "serverinfo"
};