/**
 * @file Color roles command
 * @author Emma Maguire
 * @since 1.0.0
 */

var namer = require("color-namer");
var reg = /^#([0-9a-f]{3}){1,2}$/i;

module.exports = {
  name: "color",
  description: "Sets or removes color roles for the sender",
  args: true,

  /** You need to uncomment below properties if you need them. */
  usage: "<#AABBCC> or remove",
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
    if (reg.test(args[0]) == true) {
      var hexColor = args[0].toUpperCase();
      var colorNames = namer(hexColor).ntc;
      var colorName = colorNames[0].name;
      var toRole = message.guild.roles.cache.find(
        (role) => role.name === "Color-" + colorName
      );
      if (toRole) {
        if (message.member.roles.cache.has(toRole.id)) {
          message.reply("You are already " + toRole.name + "!");
        } else {
          clearColors(message, "new");
          message.member.roles.add(toRole).catch(console.error);
          message.reply("You are now `" + colorName + "`!");
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
            clearColors(message, "new");
            message.member.roles.add(role);
            message.reply("You are now `" + colorName + "`!");
          });
      }
    } else if (args[0] !== "remove") {
      message.reply(args[0] + " is not a valid color");
    } else if (args[0] == "remove") {
      clearColors(message, "remove");
    }
  },
};

function clearColors(message, src) {
  var toRole = message.member.roles.cache
    .filter((roles) => roles.name.includes("Color-"))
    .map((role) => role.name);
  toRole.forEach(function (item) {
    var colorRole = message.guild.roles.cache.find(
      (role) => role.name === item
    );
    message.member.roles.remove(colorRole).catch(console.error);
    if (src === "remove") {
      message.reply("You are no longer `" + colorRole.name + "`!");
    }
  });
}
