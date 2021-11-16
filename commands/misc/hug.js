/**
 * @file Hug command
 * @author Emma Maguire
 * @since 1.0.0
 */

module.exports = {
  name: "hug",

  /** You need to uncomment below properties if you need them. */
  //description: 'Hug a user',
  //usage: 'put usage here',
  //permissions: 'SEND_MESSAGES',
  //guildOnly: true,

  /**
   * @description Executes when the command is called by command handler.
   * @author Emma Maguire
   * @param {Object} message The Message Object of the command.
   * @param {String[]} args The Message Content of the received message seperated by spaces (' ') in an array, this excludes prefix and command/alias itself.
   */

  execute(message, args) {
    let moves = [
      "naruto runs towards",
      "skips over to",
      "sneaks up on",
      "turns into a rolly polly and rolls over to",
    ];
    var move = moves[Math.floor(Math.random() * moves.length)];
    if (args == undefined || args == "") {
      message.reply({ content: "you didn't tell me who to hug 🥺" });
    } else if (
      !args[0].includes("@") &&
      !args.includes("Me") &&
      !args.includes("me")
    ) {
      message.reply({ content: "i don't know who that is :(" });
    } else {
      if (args.includes("me") || args.includes("Me")) {
        args[0] = message.author;
        message.channel.send({ content: "*" + move + " " + args + "*" });
        setTimeout(() => {
          message.channel.send({ content: "HERE'S A HUG!!!! *hugs*" });
        }, 2000);
      } else {
        message.channel.send({ content: "*" + move + " " + args + "*" });
        setTimeout(() => {
          message.channel.send({ content: "HERE'S A HUG!!!! *hugs*" });
        }, 2000);
      }
    }
  },
};
