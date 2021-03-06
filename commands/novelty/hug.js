/**
 * @file Hug command
 * @author Emma Maguire
 * @since 1.0.0
 */

module.exports = {
  name: "hug",

  /** You need to uncomment below properties if you need them. */
  description: 'Hug a user',
  usage: '<user>',
  //permissions: 'SEND_MESSAGES',
  guildOnly: true,

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
      "looks back at @mommy then goes too",
    ];
    var move = moves[Math.floor(Math.random() * moves.length)];
    if (args == undefined || args == "") {
      message.reply({ content: "you didn't tell me who to hug 🥺" });
    } else if (
      !args[0].includes("@") &&
      !args.includes("Me") &&
      !args.includes("me") &&
      !args.includes("mommy") && 
      !args.includes("daddy") && 
      !args.includes("Hannah")

    ) {
      message.reply({ content: "i don't know who that is :(" });
    } else {
      if (args.includes("me") || args.includes("Me")) {
        args[0] = message.author;
        message.channel.send({ content: "*" + move + " " + args + "*" });
        setTimeout(() => {
          message.channel.send({ content: "HERE'S A HUG!!!! *hugs*" });
        }, 2000);
      } 
      // custom message if "mommy" - Joseph Flores
      else if(args.includes("mommy")) {
        setTimeout(() => {
          message.channel.send({ content: "We love you mommy <3 HERE'S A HUG!!!! ヾ(≧ ▽ ≦)ゝ *hugs*" });
        }, 1000);
      }

      // custom message if "daddy" - Joseph Flores
      else if(args.includes("daddy")) {
        setTimeout(() => {
        message.channel.send({ content: "Raccoons get love too o((>ω< ))o *hugs*" });
        }, 1000);
      
      }
      // custom message if "Hannah" - Joseph Flores
      else if(args.includes("Hannah")) {
        setTimeout(() => {
        message.channel.send({ content: "(while shaking shoulders)Hannah Hannah~ Hannah- Banana~ *hugs* " });
        }, 1000);
      
      }
      
      else {
        message.channel.send({ content: "*" + move + " " + args + "*" });
        setTimeout(() => {
          message.channel.send({ content: "HERE'S A HUG!!!! *hugs*" });
        }, 2000);
      }
    }
  },
};
