exports.run = async (client, message, args) => { 
    message.channel.send(`https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=3163136`)
  };
  
  exports.help = {
    name: "invite",
    category: "General",
    description: "Send my awesome invite link",
    usage: "invite"
  };