const hangman = require('discord-hangman');

module.exports = {
    name: 'hangman',
    description: "Hangman!",
    async execute(message, args){
        await hangman.create(message.channel, 'random', { messages: {
                createNoPlayers: 'No one joined the game :(',
                
                customNotEnoughPlayers: 'Not enough players :(',
                customInitMessage: '{players} players have joined. Selecting a player to choose the word. Waiting for one of you to respond. Check your DMs!!',
                customNoMoreWords: 'We ran out of players... try again, I\'m sure you can do it better.',
            
                gatherPlayersMsg: 'Write "join" to participate in this game! You have 10 seconds.',
            
                getWordFromPlayersDm: 'You are the chosen one! Just write the word of your choice. You have 30 seconds. And remember, you can\'t participate in the game',
                timesUpDm: 'Time\'s up rip',
                timesUpMsg: 'The chosen one didn\'t answer... selecting another person.',
                wordSuccess: 'Nice word! Going back to the server.',
                invalidWord: 'Thats not a valid word. No spaces, at least 3 characters.',
                tooManyInvalidsWords: 'Sorry, too many invalid words, try again next game.',
            
                misses: 'Misses',
                won: 'You won!',
                noplayersleft: 'No Players Left',
                gameOver: 'Game over!',
                gameOverMsg: 'The word was {word}'
            }
            }
        
        )

    }
}