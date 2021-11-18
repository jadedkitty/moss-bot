/**
 * @file Gay command
 * @author Emma Maguire
 * @since 1.0.0
 */

module.exports = {
  name: "gay",

  /** You need to uncomment below properties if you need them. */
  description: "Makes your avatar gayer",
  // usage: '<user>',
  //permissions: 'SEND_MESSAGES',
  // guildOnly: true,

  /**
   * @description Executes when the command is called by command handler.
   * @author Emma Maguire
   * @param {Object} message The Message Object of the command.
   * @param {String[]} args The Message Content of the received message seperated by spaces (' ') in an array, this excludes prefix and command/alias itself.
   */

  execute(message, args) {
    min = Math.ceil(1);
    max = Math.floor(100);
    var randomNumber = Math.floor(Math.random() * (max - min) + min);
    message.reply("U R NOW " + randomNumber + "% MORE GAY", {
      files: [
        "https://some-random-api.ml/canvas/gay?avatar=" +
          message.author.displayAvatarURL({ format: "png" }),
      ],
    });
  },
};
