/**
 * @file Color roles command
 * @author Emma Maguire
 * @since 1.0.0
 */

var namer = require("color-namer");
var reg = /^#([0-9a-f]{3}){1,2}$/i;

module.exports = {
  name: "color",
  description: "Adds/sets a color role for the sender",
  args: true,

  /** You need to uncomment below properties if you need them. */
  usage: "<#AABBCC/none>",
  //permissions: 'SEND_MESSAGES',
  guildOnly: true,
  adminOnly: true,

  /**
   * @description Executes when the command is called by command handler.
   * @author Emma Maguire
   * @param {Object} message The Message Object of the command.
   * @param {String[]} args The Message Content of the received message seperated by spaces (' ') in an array, this excludes prefix and command/alias itself.
   */

  execute(message, args) {
    if (reg.test(args[0]) == true) {
      var color = args[0];
      var colorNames = namer(color).pantone;
      message.reply(colorNames[0].name + " is a valid color");
    } else {
      message.reply(args[0] + " is not a valid color");
    }
  },
};
