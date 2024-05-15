module.exports = {
    name: 'ban',
    description: "Bans users.",
    execute(message, args){
        
        let role = message.guild.roles.cache.find(r => r.name === "Emergency");
       if(message.member.roles.cache.some(r => r.name === "Emergency")) {

        const member = message.mentions.users.first();
         if(member){
            const memberTarget = message.guild.members.cache.get(member.id);
            memberTarget.ban();
            message.channel.send(`<@${memberTarget.user.id}> has been baned.`);
        } else {
            message.channel.send('User not found.');
          }
        } else {
          message.reply('you do not have the permission to ban members.');
        }
     } 
}