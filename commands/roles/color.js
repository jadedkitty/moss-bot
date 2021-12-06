/**
 * @file Pronoun command
 * @author Emma Maguire
 * @since 1.0.0
 */

module.exports = {
  name: "pronouns",
  description: "Adds/sets the pronouns role for the sender",
  args: true,

  /** You need to uncomment below properties if you need them. */
  description: 'Adds pronouns for user',
  usage: "add/remove <pronouns>",
  //permissions: 'SEND_MESSAGES',
  guildOnly: true,

  /**
   * @description Executes when the command is called by command handler.
   * @author Naman Vrati
   * @param {Object} message The Message Object of the command.
   * @param {String[]} args The Message Content of the received message seperated by spaces (' ') in an array, this excludes prefix and command/alias itself.
   */

  execute(message, args) {
    if (args[0] == "add") {
      if (args[1]) {
        var roleName = args[1].toLowerCase().toString();

        // toRole is a JS object.
        var toRole = message.guild.roles.cache.find(role => role.name === roleName);

        // start if statement if toRole exists
        if (toRole) {
          if (message.member.roles.cache.has(toRole.id)) {
            message.reply("You already have the role `" + toRole.name + "`!");
          } else {
            message.member.roles.add(toRole).catch(console.error);
            message.reply(
              "`" + toRole.name + "` has been added to your pronouns."
            );
          }
        } else {
          console.log(roleName);
          message.guild.roles
            .create({
              name: roleName,
              reason: "Added pronouns",
            })
            .catch(console.error)
            .then((role) => {
              message.member.roles.add(role);
              message.reply(
                "`" + role.name + "` has been added to your pronouns."
              );
            });
        }
      } else {
        message.reply(
          "Please specify the pronoun that you would like to set for yourself!"
        );
      }
    }
    if (args[0] == "remove") {
      console.log(args[1].toLowerCase());
      if (args[1]) {

var roleName = args[1].toLowerCase().toString();

        // toRole is a JS object.
        var toRole = message.guild.roles.cache.find(role => role.name === roleName);

        if (toRole) {
          if (message.member.roles.cache.has(toRole.id)) {
            message.member.roles.remove(toRole).catch(console.error);
            message.reply(
              "`" + toRole.name + "` has been removed from your pronouns!"
            );
          } else {
            message.reply("You don't have the role `" + toRole.name + "`!");
          }
        } else {
          message.reply("That role doesn't exist!");
        }
      }
    }
  },
};
