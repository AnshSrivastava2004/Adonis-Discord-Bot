module.exports = {
    name: 'help',
    description: "Lists out all available commands.",
    execute(message, args) {
    
        message.channel.send({embed: {
            color: 2303786,
            title: "Commands:",
            fields: [
              { name: "Command", value: "mute/unmute\nkick\nban\npurge\n \ncalculate\nhug\nhangman\n8ball\ncoinflip\n \njoin\nplay\nleave", inline: true},
              { name: "Function", value: "Mutes/Unmutes members\nKicks members\nBans members\nDeletes specified amount of messages\n \nCalculates stuff\nHugs!\nPlay a game of hangman!\nAsk 8ball a question\nFlips a coin\n \nJoins voice channel\nPlays songs\nLeaves voice channel", inline: true}
            ]
          }
        });
    }
}