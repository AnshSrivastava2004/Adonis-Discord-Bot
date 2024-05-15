const math = require('mathjs');
const Discord = require('discord.js');

module.exports = {
    name: 'cc',
    description: "Calculates the number of steps in Collatz conjecture",
    execute(message, args){
        
        if(!args[0]) return message.channel.send("no arg");

        var stepCount = 0;
        var input = args[0];

        if(Number.isNaN(+input)) message.channel.send("not a number");
         else { 
            if(input % 2 === 1){
            input = 3 * input + 1; 
            stepCount = stepCount + 1;
          } else {
            input = input / 2;
            stepCount = stepCount + 1;
         }
        if(input === 1) {
            message.channel.send(stepCount);
        }
     }
    }
}