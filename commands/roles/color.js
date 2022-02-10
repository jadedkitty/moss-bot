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
  adminOnly: false,

  /**
   * @description Executes when the command is called by command handler.
   * @author Emma Maguire
   * @param {Object} message The Message Object of the command.
   * @param {String[]} args The Message Content of the received message seperated by spaces (' ') in an array, this excludes prefix and command/alias itself.
   */

  execute(message, args) {
    var hexColor = args[0].toUpperCase();
    var colorNames = namer(hexColor).ntc;
    var colorName = colorNames[0].name;
    var toRole = message.guild.roles.cache.find(
      (role) => role.name === "Color-" + colorName
      // #259f1f
    );
    if (reg.test(args[0]) == true) {
      if (toRole) {
        if (message.member.roles.cache.has(toRole.id)) {
          message.reply("You are already " + toRole.name + "!");
        } else {
          message.member.roles.add(toRole).catch(console.error);
          message.reply("You are now " + toRole.name + "!");
        }
      } else {
        console.log(colorName);
        message.guild.roles
          .create({
            name: "Color-" + colorName,
            color: args[0],
            reason: "Added color",
          })
          .catch(console.error)
          .then((role) => {
            message.member.roles.add(role);
            message.reply("You are now " + role.name + "!");
          });
      }
    } else if (args[0] != "none") {
      message.reply(args[0] + " is not a valid color");
    }
    // else if ((args[0] = "none")) {
    //   if (toRole) {
    //     if (message.member.roles.cache.has(toRole.id)) {
    //       message.member.roles.remove(toRole).catch(console.error);
    //       message.reply(
    //         "`" + toRole.name + "` has been removed from your pronouns!"
    //       );
    //     } else {
    //       message.reply("You don't have the role `" + toRole.name + "`!");
    //     }
    //   } else {
    //     message.reply("That role doesn't exist!");
    //   }
    // }
  },
};
