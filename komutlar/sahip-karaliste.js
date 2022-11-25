const Discord = require('discord.js');
const db = require("croxydb");

exports.run = async(cclient, message, args) => {

if(message.author.id !== "543104055564828672") return message.channel.send("⛔ Bu komutu sadece sahiplerim kullanabilir.")

let cuser = message.mentions.users.first() || cclient.users.cache.get(args[0])
if(!cuser) return message.channel.send("⛔ Bir kullanıcı belirtmelisin!")
let csebep = args.slice(1).join(' ')
if(!csebep) return message.channel.send("⛔ Bir sebep belirtmelisin!")

message.channel.send("👌🏻 **"+cuser.tag+"** kullanıcısı **"+csebep+"** sebebinden başarıyla karalisteye alındı.")
const novax = new Discord.MessageEmbed()
.setColor("#2a9df4")
.setTimestamp()
.setDescription(`👌🏻 **${cuser.tag}** kullanıcısı **${csebep}** sebebinden karalisteye alındı.`)
cclient.channels.cache.get("882290682419634228").send(novax)
db.set(`ckaraliste.${cuser.id}`, csebep)

}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'karaliste',
    description: 'Türkiyenin Saatini Gösterir',
    usage: 'gç'
  };