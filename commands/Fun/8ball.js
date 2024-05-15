module.exports = {
    name: '8ball',
    description: "Consults the 8ball.",
    execute(message, args){
 
        if (!args[0]) return message.reply("Please ask a question.");        

        let rNo = Math.random() * 4 + 1;

        switch(rNo) {
            case 1:
                message.reply("Absolutely.");
                break;
            case 2:
                message.reply("Most likely.");
                break;
            case 3:
                message.reply("Ask again later.");
                break;
            case 4:
                message.reply("Probably not.");
                break;
            case 5:
                message.reply("Absolutely not.");
        }
    }
}