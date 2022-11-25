const Discord = require('discord.js');
const db = require("croxydb");

exports.run = async(cclient, message, args) => {

if(message.author.id !== "543104055564828672") return message.channel.send("⛔ Bu komutu sadece sahiplerim kullanabilir.")

let cuser = message.mentions.users.first() || cclient.users.cache.get(args[0])
if(!cuser) return message.channel.send("⛔ Bir kullanıcı belirtmelisin!")

message.channel.send("👌🏻 **"+cuser.tag+"** kullanıcısı başarıyla karalisteden çıkarıldı.")
const novax = new Discord.MessageEmbed()
.setColor("#2a9df4")
.setTimestamp()
.setDescription(`👌🏻 **${cuser.tag}** kullanıcısı karalisteden çıkarıldı.`)
  cclient.channels.cache.get("882290682419634228").send(novax)
db.delete(`ckaraliste.${cuser.id}`)

}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'beyazliste',
    description: 'Türkiyenin Saatini Gösterir',
    usage: 'gç'
  };