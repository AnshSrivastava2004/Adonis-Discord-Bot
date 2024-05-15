module.exports = {
    name: 'coinflip',
    description: "Flips a coin.",
    execute(message, args){       

        let rNo = Math.random();

        if(rNo < 0.5){
            message.reply("Heads.");
        } else {
            message.reply("Tails.");
        }
    }
}