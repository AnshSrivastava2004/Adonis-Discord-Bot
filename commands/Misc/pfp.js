const { DiscordAPIError } = require("discord.js");

module.exports = {
    name: 'pfp',
    description: "Sends pfp of members.",
    execute(message, args){

      const target = message.mentions.users.first();

      message.channel.send({embed: {
        color: 15277667,
        title: `${target.username}`,
        image: {
            url: `${target.avatarURL}`,
        }
      }
    });

    }
}
