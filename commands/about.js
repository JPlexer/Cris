const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
  const embed = new Discord.RichEmbed()
    .setAuthor(`Pixl`, client.user.avatarURL)
    .setDescription(`About`)
    .setColor(0x16ff00)
    .addField(`Creator`, `JPlexer`, true )
    .addField(`Version`, `${client.config.botver}`, true )
    .addField(`Bot User`, `${client.config.branch}`, true )
    .addField(`Inspired by`, `Suzu by Swingin30 and my old Bot Mercara`, true )
    .setFooter('Designed and Programed by Swingin30, Alee, TechLion and JPlexer Copyright 2019, Licensed with GPL-3.0');
    await message.channel.send({ embed });
  };
  
  exports.help = {
    name: "about",
    category: "General",
    description: "About this Bot",
    usage: "about"
  };