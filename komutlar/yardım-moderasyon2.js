const db = require("croxydb");
const Discord = require('discord.js');
const fynx = require("../ayarlar.json");
exports.run = async (client, message, args) => { 
    let karaliste = db.fetch(`ckaraliste.${message.author.id}`)
 const novax = new Discord.MessageEmbed()
 .setColor("#2a9df4")
 .setDescription(`🚨 **${karaliste}** sebebiyle karalisteye alınmışsın!\nBeyaz listeye alınmak istiyorsan [BURAYA](https://discord.gg/efWMKWuZsM) gelebilirsin!`)
  if(karaliste) 
    return message.channel.send(novax)
  
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
let eklenti = new Discord.MessageEmbed()  
.setAuthor(`NovaX Moderasyon Komutları`, client.user.avatarURL())
.setThumbnail(message.author.displayAvatarURL({dynamic : true}))
.setImage('https://cdn.discordapp.com/attachments/739110191768928286/883833448131878952/standard.gif')
.setColor('#2a9df4')
.setDescription(` NovaX botumuzu eklemek için \`.botdavet\` yazabilirsiniz.`)  
.addField(`👉🏼 __Ban Log__`,` \`.ban-log\` Ban Log Kanalı Ayarlarsınız.`,true)
.addField(`👉🏼 __Ban Yetkili Rol__`,` \`.ban-yetkili-rol\` Sadece Kimler Banlayabilir?`,true)
.addField(`👉🏼 __Ban__`,` \`.ban <@üye> <sebep>\` Kişiyi Banlarsınız.`,true)
.addField(`👉🏼 __Ban Kaldır__`,` \`.unban <KişiID> <Sebep> \` Belirtiğiniz Kişinin Banını Açar.`,true)
.addField(`👉🏼 __Ban Affı__`,` \`.banaffı \` Bütün Yasaklıların Banını Açar.`,true)
.addField(`👉🏼 __Kick Log__`,` \`.kick-log\`  Kick Log Kanalı Ayarlarsınız.`,true)
.addField(`👉🏼 __Kick Yetkili Rol__`,` \`.kick-yetkili-rol\` Sadece Kimler Kick Atabilir?`,true)
.addField(`👉🏼 __Kick__`,` \`.kick <@üye> <sebep> \` Kişiyi Sunucudan Kicklersiniz.`,true)
.addField(`👉🏼 __Moderasyon3__`,` \`.moderasyon3 \` | Moderasyon Menüsünün Devamı.`,true)
.addField(`👉🏼 __Bilgilendirme__`,` \`.botdavet\` | NovaX'i Sunucunuza Davet Edersiniz\n \`.istatistik\` | Botun İstatistiklerini Gösterir `)
 message.channel.send(eklenti) 
  };
  exports.conf = {
    enabled: true,  
    guildOnly: false, 
    aliases: ["moderasyon2","ayarlar2"], 
    permLevel: 0
  };
  exports.help = {
    name: 'moderasyon2'
  }; 
  