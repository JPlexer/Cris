module.exports.run = async (client, msg) => {
    const Discord = require('discord.js');
    let user = msg.mentions.users.first();
      if (user) {
        const member = msg.guild.member(user);
        if (member) {
          const embed = new Discord.RichEmbed()
          .setAuthor(`Cris`, client.user.avatarURL)
          .setDescription(`Profile Picture`)
          .setColor(0x16ff00)
          .setImage(user.avatarURL)
          .setFooter('Designed and Programed by Swingin30, Alee, TechLion and JPlexer Copyright 2019, Licensed with GPL-3.0');
          await msg.channel.send({ embed });
       }
    }else{
        const embed = new Discord.RichEmbed()
        .setAuthor(`Cris`, client.user.avatarURL)
        .setDescription(`Profile Picture`)
        .setColor(0x16ff00)
        .setImage(msg.author.avatarURL)
        .setFooter('Designed and Programed by Swingin30, Alee, TechLion and JPlexer Copyright 2019, Licensed with GPL-3.0');
        await msg.channel.send({ embed });     
    }
};

exports.help = {
    name: "pic",
    category: "Pix",
    description: "Get the Picture of a User",
    usage: "pic"
};