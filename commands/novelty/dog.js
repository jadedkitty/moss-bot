/**
 * @file Dog command
 * @author Emma Maguire
 * @since 1.0.0
 */

module.exports = {
  name: "dog",

  /** You need to uncomment below properties if you need them. */
  description: "Get a random dog image",
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
    fetch("https://some-random-api.ml/img/dog")
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        message.channel.send(json.link);
      });
  },
};
