const mOcKiNgCaSe = require('mockingcase');
exports.run = async (client, message, args) => {
    if (!args[0]) return message.channel.send(":x: What Text do you want to mock somebody with? Put it after the Command!");
    a = mOcKiNgCaSe(args);
    message.channel.send(a);
  };

  exports.help = {
    name: "mock",
    category: "General",
    description: "Converts Text to Mockingcase",
    usage: "mock [text]"
  };