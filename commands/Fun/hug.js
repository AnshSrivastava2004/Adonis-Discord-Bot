const { DiscordAPIError } = require("discord.js");
const { random } = require("mathjs");

//pink -> 15277667

module.exports = {
    name: 'hug',
    description: "Hugs! :D",
    execute(message, args){

      const target = message.mentions.users.first();
        if (!args[0]) return message.reply("You can't hug the void :("); 
        if (target == message.author) return message.channel.send({embed: {
          color: 2303786,
          title: " ",
          fields: [
            { name:`Self hug!`, value: "** **", inline: false}
          ],
          image: {
            url: 'https://c.tenor.com/XEEmDlNSmEcAAAAM/spongebob-love.gif',
          } 
        }
      });

        let rNo = Math.floor(Math.random() * 10 + 1);
        // let gifEmbed = new Discord.MessageEmbed()
        // .setColor('15277667')       
        // .setDescription(`${target.username}, you got a hug from ${message.author.username}!`)

      if(target){  
        if(rNo == 1){
          message.channel.send({embed: {
            color: 2303786,
            title: " ",
            fields: [
              { name:`${target.username}, you got a hug from ${message.author.username}!`, value: "** **", inline: false}
            ],
            image: {
              url: 'https://c.tenor.com/tEJ0EhvOE5QAAAAM/peach-cat-hug.gif',
            } 
          }
        });
        } else if(rNo == 2){
          message.channel.send({embed: {
            color: 2303786,
            title: " ",
            fields: [
              { name:`${target.username}, you got a hug from ${message.author.username}!`, value: "** **", inline: false}
            ],
            image: {
              url: 'https://c.tenor.com/5iyMxIjFxhcAAAAM/hug-k-on.gif',
            } 
          }
        });
        } else if(rNo == 3){
          message.channel.send({embed: {
            color: 2303786,
            title: " ",
            fields: [
              { name:`${target.username}, you got a hug from ${message.author.username}!`, value: "** **", inline: false}
            ],
            image: {
              url: 'https://c.tenor.com/z2QaiBZCLCQAAAAM/hug-anime.gif',
            } 
          }
        });
       } else if(rNo == 4){
        message.channel.send({embed: {
          color: 2303786,
          title: " ",
          fields: [
            { name:`${target.username}, you got a hug from ${message.author.username}!`, value: "** **", inline: false}
          ],
          image: {
            url: 'https://c.tenor.com/9e1aE_xBLCsAAAAM/anime-hug.gif',
          } 
        }
      });
      } else if(rNo == 5){
        message.channel.send({embed: {
          color: 2303786,
          title: " ",
          fields: [
            { name:`${target.username}, you got a hug from ${message.author.username}!`, value: "** **", inline: false}
          ],
          image: {
            url: 'https://c.tenor.com/X5nBTYuoKpoAAAAM/anime-cheeks.gif',
          } 
        }
      });  
      } else if(rNo == 6){
        message.channel.send({embed: {
          color: 2303786,
          title: " ",
          fields: [
            { name:`${target.username}, you got a hug from ${message.author.username}!`, value: "** **", inline: false}
          ],
          image: {
            url: 'https://c.tenor.com/nHkiUCkS04gAAAAM/anime-hug-hearts.gif',
          } 
        }
      });
     } else if(rNo == 7){
      message.channel.send({embed: {
        color: 2303786,
        title: " ",
        fields: [
          { name:`${target.username}, you got a hug from ${message.author.username}!`, value: "** **", inline: false}
        ],
        image: {
          url: 'https://c.tenor.com/pcULC09CfkgAAAAM/hug-anime.gif',
        } 
      }
    });
   } else if(rNo == 8){
    message.channel.send({embed: {
      color: 2303786,
      title: " ",
      fields: [
        { name:`${target.username}, you got a hug from ${message.author.username}!`, value: "** **", inline: false}
      ],
      image: {
        url: 'https://c.tenor.com/WgvpDBxRCewAAAAM/naruto-himawari.gif',
      } 
    }
  });
 } else if(rNo == 9){
  message.channel.send({embed: {
    color: 2303786,
    title: " ",
    fields: [
      { name:`${target.username}, you got a hug from ${message.author.username}!`, value: "** **", inline: false}
    ],
    image: {
      url: 'https://c.tenor.com/Rw817JsaKRsAAAAM/boo-hug.gif',
    } 
  }
});
} else if(rNo == 10){
  message.channel.send({embed: {
    color: 2303786,
    title: " ",
    fields: [
      { name:`${target.username}, you got a hug from ${message.author.username}!`, value: "** **", inline: false}
    ],
    image: {
      url: 'https://c.tenor.com/ehEjYwLbVyAAAAAM/dog-hug.gif',
    } 
  }
});
} 
  }       
  }
}