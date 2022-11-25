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

.setDescription(`Bu Komutu Kullanmak İçin; \`ADMINISTRATOR\` Yetkisine Sahip Olmalısın!`))

let link = `[Destek Sunucusu!](https://discord.gg/efWMKWuZsM)`

let p = ayarlar.prefix

if(!args[0]) {

return message.channel.send(new Discord.MessageEmbed()                              

.setColor("#FF56FF")

.setTitle(`${client.user.username} | Seviye-Rol Komutları!`)

.setDescription(`**${link}**`)          

.setTimestamp()        

.setThumbnail(client.user.avatarURL())   

.setFooter(`${client.user.username} Seviye-Rol Sistemi!`, client.user.avatarURL())  

.addField(`Rol oluşturma:`, `\`${p}seviye-rol @etiket <seviye>\``)

.addField(`Tüm rolleri silme:`, `\`${p}seviye-rol temizle\``)

.addField(`Ayarlanan Rolleri Görmek:`, `\`${p}seviyerolleri\``)) 

}

      

      if(args[0] == 'temizle' || args[0] == "clear") {

        db.delete(`srol.${message.guild.id}`)

        db.delete(`srol2.${message.guild.id}`)

        db.delete(`srol3.${message.guild.id}`)

const embed = new Discord.MessageEmbed()
.setColor('#2a9df4')
.setTitle('Başarılı')
.setDescription(`Seviye-Rol Başarıyla Temizlendi.`)
return message.channel.send(embed)
      }

      if(isNaN(args[1])) return message.channel.send(`🚨 Seviye bir sayı olmalı!`)

      const user = message.mentions.users.first() || message.author

      const level = (args[1])
      
      const role = message.mentions.roles.first()

      db.push(`srol.${message.guild.id}`, role.id)

      db.set(`srol2.${message.guild.id}.${role.id}`, args[1])

      db.push(`srol3.${message.guild.id}.${role.id}`, args[1])

const embed = new Discord.MessageEmbed()
.setColor('#2a9df4')
.setTitle('Başarılı')
.setDescription(`<a:syes1:751896954182697051> Artık Birisi \`${level}\` Level Olunca ${role} Rolünü Vereceğim`)

message.channel.send(embed)
  

};

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: [],

  permLevel: 0

};

exports.help = {

  name: 'seviye-rol'

};