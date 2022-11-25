const Discord = require('discord.js');

const db = require("croxydb");

const ayarlar = require("../ayarlar.json")

exports.run = async (client, message, args) => {
  if(db.fetch(`bakim`)) {
  const bakim = new Discord.MessageEmbed()
  .setColor("#2a9df4")
.setThumbnail(message.author.displayAvatarURL({dynamic : true}))
  .setTitle('Üzgünüm Bot Bakımda')
  .addField('Bot Şuan Bakımdadır Lütfen Bekleyin.','Bot Ne Durumda Yada Botla İlgili Güncelleme Ve Duyurular İçin Destek Sunucumuza Gelmeyi Unutmayınız.')
  .addField('İşte Destek Sunucum',"[Destek Sunucusu](https://discord.gg/efWMKWuZsM)")
  .setFooter('Üzgünüm...')
  .setImage('https://lh3.googleusercontent.com/proxy/gAN4I19oqqabXd_VIiwg5or-ITh4XxJTRNJA1ot0EIHPiBpxC74Atj4wNIcFes1N3VcE8WnOk6fIN29BChqNbj4lj9dIF2jiI7MBV6U8v842LA')
if(message.author.id != "543104055564828672") return message.channel.send(bakim)

}
        	 let karaliste = db.fetch(`ckaraliste.${message.author.id}`)
 const novax = new Discord.MessageEmbed()
 .setColor("#2a9df4")
 .setDescription(`🚨 **${karaliste}** sebebiyle karalisteye alınmışsın!\nBeyaz listeye alınmak istiyorsan [BURAYA](https://discord.gg/efWMKWuZsM) gelebilirsin!`)
  if(karaliste) 
    return message.channel.send(novax)
  

if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed()

.setTitle(`Uyarı`)

.setDescription(`🚨 Bu Komutu Kullanmak İçin; \`ADMINISTRATOR\` Yetkisine Sahip Olmalısın!`))

let user = message.author;

let id = message.author.id

let guild = message.guild;

let gid = message.guild.id

let sayi = 1

let map = message.guild.members.cache.filter(mem => !mem.user.bot).array().sort((a, b) => { return ( db.fetch(`lvl_${b.user.id}_${message.guild.id}`) || 0) - ( db.fetch(`lvl_${a.user.id}_${message.guild.id}`) || 0)  }).slice(0, 5).map(member => { return `\`#${sayi++}\` <@${member.user.id}> | **__Seviye:__** \`${( db.fetch(`lvl_${member.user.id}_${message.guild.id}`))}\` **__XP:__** \`${( db.fetch(`xp_${member.user.id}_${message.guild.id}`)) || `0`}\`` })

message.channel.send(new Discord.MessageEmbed()

.setColor("#2a9df4")

.setAuthor(`${message.guild.name} Seviye İlk 5`, client.user.avatarURL())

.setDescription(map)

.setFooter(`${client.user.username} Seviye-Top Sistemi!`, client.user.avatarURL()))

};

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: [],

  permLevel: 0

};

exports.help = {

  name: 'seviye-top'

};