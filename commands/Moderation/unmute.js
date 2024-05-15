module.exports = {
    name: 'unmute',
    description: "Unmutes users.",
    execute(message, args){
    
    let role = message.guild.roles.cache.find(r => r.name === "Emergency");
    if(message.member.roles.cache.some(r => r.name === "Emergency")) {
        const target = message.mentions.users.first();
        if(target){
            let mainRole = message.guild.roles.cache.find(role => role.name === 'Member');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');
            let memberTarget = message.guild.members.cache.get(target.id);

            memberTarget.roles.remove(muteRole.id);
           // memberTarget.roles.add(mainRole.id);
            message.channel.send(`<@${memberTarget.user.id}> has been unmuted.`);
        } else {
            message.channel.send("User not found.");
        }
    } else {
        message.reply('you do not have the permission to unmute members.');
    }
  }
}