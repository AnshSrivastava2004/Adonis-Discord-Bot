module.exports = {
    name: 'leave',
    description: "Leaves the channel.",
    async execute(message, args){
        const voiceChannel = message.member.voice.channel;

        if(!voiceChannel) return message.channel.send('You need to be in a voice channel for this command!');
        await voiceChannel.leave();        
    }
}