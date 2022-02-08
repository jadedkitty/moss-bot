/**
 * @file Ready Event File.
 * @author Emma Maguire
 * @since 1.0.1
 */

module.exports = {
	name: "ready",
	once: true,

	/**
	 * @description Executes the block of code when client is ready (bot initialization)
	 * @param {Object} client Main Application Client
	 */
	execute(client) {
		console.log(`Ready! Logged in as ${client.user.tag}`);
    	client.user.setActivity('!help and !pronouns', { type: 'PLAYING' })
	},
};
