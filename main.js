const Discord = require('discord.js');
const BOT_TOKEN = require('./config.js');
const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({ 
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildPresences
    ],
});

const prefix = '--';

const fs = require('fs');
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {       
    console.log('Online! :D');
    client.user.setActivity({
        name: "--help",
        type: Discord.ActivityType.Watching
    });
});

client.on('message' , message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'pfp'){
        client.commands.get('pfp').execute(message, args);
    } else if(command === 'kick'){
        client.commands.get('kick').execute(message, args);
    } else if(command === 'ban'){
        client.commands.get('ban').execute(message, args);
    } else if(command === 'help'){
        client.commands.get('help').execute(message,args);
    } else if(command === 'mute'){
        client.commands.get('mute').execute(message,args);
    } else if(command === 'unmute'){
        client.commands.get('unmute').execute(message,args);
    }  else if(command === 'purge'){
        client.commands.get('purge').execute(message,args);
    }  else if(command === 'calculate'){
        client.commands.get('calculate').execute(client,message,args);
    }  else if(command === 'play'){
        client.commands.get('play').execute(message,args);
    }  else if(command === 'leave'){
        client.commands.get('leave').execute(message,args);
    }  else if(command === 'join'){
        client.commands.get('join').execute(message,args);
    }  else if(command === 'hug'){
        client.commands.get('hug').execute(message,args);
    }  else if(command === '8ball'){
        client.commands.get('8ball').execute(message,args);
    }  else if(command === 'coinflip'){
        client.commands.get('coinflip').execute(message,args);
    }  else if(command === 'img'){
        client.commands.get('img').execute(client,message,args);
    }  else if(command === 'hangman'){
        client.commands.get('hangman').execute(message,args);
    }       
})

client.login(BOT_TOKEN);
