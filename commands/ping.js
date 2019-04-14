exports.run = async (client, message, args) => {
    const msg = await message.channel.send("Ping?");
    setTimeout(function() {
    msg.edit(`Pong! It took me ${Math.round(client.ping)}ms to respond`);
   }, 500);
  };
  
  exports.help = {
    name: "ping",
    category: "General",
    description: "It like... Pings. Then Pongs. And it's not Ping Pong.",
    usage: "ping"
  };