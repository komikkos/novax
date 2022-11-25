const Discord = require('discord.js');

const db = require("croxydb");

const ayarlar = require("../ayarlar.json")

exports.run = async (client, msg, args) => {
  if(db.fetch(`bakim`)) {
  const bakim = new Discord.MessageEmbed()
  .setColor("#2a9df4")
.setThumbnail(msg.author.displayAvatarURL({dynamic : true}))
  .setTitle('Üzgünüm Bot Bakımda')
  .addField('Bot Şuan Bakımdadır Lütfen Bekleyin.','Bot Ne Durumda Yada Botla İlgili Güncelleme Ve Duyurular İçin Destek Sunucumuza Gelmeyi Unutmayınız.')
  .addField('İşte Destek Sunucum',"[Destek Sunucusu](https://discord.gg/efWMKWuZsM)")
  .setFooter('Üzgünüm...')
  .setImage('https://lh3.googleusercontent.com/proxy/gAN4I19oqqabXd_VIiwg5or-ITh4XxJTRNJA1ot0EIHPiBpxC74Atj4wNIcFes1N3VcE8WnOk6fIN29BChqNbj4lj9dIF2jiI7MBV6U8v842LA')
if(msg.author.id != "543104055564828672") return msg.channel.send(bakim)

}
        	 let karaliste = db.fetch(`ckaraliste.${msg.author.id}`)
 const novax = new Discord.MessageEmbed()
 .setColor("#2a9df4")
 .setDescription(`🚨 **${karaliste}** sebebiyle karalisteye alınmışsın!\nBeyaz listeye alınmak istiyorsan [BURAYA](https://discord.gg/efWMKWuZsM) gelebilirsin!`)
  if(karaliste) 
    return msg.channel.send(novax)

  if(!msg.member.hasPermission("ADMINISTRATOR")) return msg.channel.send(new Discord.MessageEmbed()

.setTitle(`Uyarı`)

.setDescription(`🚨 Bu Komutu Kullanmak İçin; \`ADMINISTRATOR\` Yetkisine Sahip Olmalısın!`))

  

  

  if(args[0] == "sıfırla" || args[0] == "reset") {

    db.set(`seviyesınır${msg.guild.id}`, 250)

    return msg.channel.send(`👌🏻 Seviye-Sınır Başarıyla Sıfırlandı! Varsayılan: \`500\``)

 }

  let sayı = args[0]

  if(!sayı) return msg.channel.send(`🚨 Seviye bir sayı olmalı!`)

  if(sayı < 100) return msg.channel.send(`🚨 En Az 100'e Kadar Bir Sayı Girebilirsiniz!`)

  if(sayı > 500) return msg.channel.send(`🚨 En Fazla 500'e Kadar Bir Sayı Girebilirsiniz!`)

  db.set(`seviyesınır${msg.guild.id}`, args[0])

  return msg.channel.send("👌🏻 Başarıyla Seviye Sınırını \`" + args[0] + "\` Olarak Ayarladınız!")

};

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: [],

  permLevel: 0

};

exports.help = {

  name: 'seviye-sınır'

}