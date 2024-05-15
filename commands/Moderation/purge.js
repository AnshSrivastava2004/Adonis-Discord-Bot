module.exports = {
    name: 'purge',
    description: "Deletes messages.",
    async execute(message, args) {
        let role = message.guild.roles.cache.find(r => r.name === "Emergency");
        if(message.member.roles.cache.some(r => r.name === "Emergency")) {

        if (!args[0]) return message.reply("please enter the amount of messages to clear.");
        if(isNaN(args[0])) return message.reply("please type a real number.");
 
        if(args[0] > 100) return message.reply("you can't remove more than 100 messages.");        
        if(args[0] < 1) return message.reply("you have to delete at least one message.");
 
        await message.channel.messages.fetch({ limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages)
    });
   } else {
       message.reply("you do not have permission to delete messages.");
   }
 }
}  