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
    const fetch = require("node-fetch");
    fetch("https://some-random-api.ml/canvas/gay?avatar="+ message.author.displayAvatarURL({format: 'png'}))
      .then((res) => {
        console.log(res);
        var randomNumber = Math.random() * (100 - 1) + 1;
        message.channel.send("U R NOW " + randomNumber + "% MORE GAY", {files: [res]});
      });
  },
};
