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
.addField(`👉🏼 __Ejderha__`,` \`.ejderha <yazi>\` Ejderha Logo Atar`,true)
.addField(`👉🏼 __Vip__`, `\`.vip <yazi>\` Vip Logo Atar`,true)
.addField(`👉🏼 __Alev__`,`\`.alev <yazi>\` Alev Logo Atar`,true)
.addField(`👉🏼 __Gemi__`,`\`.gemi <yazi>\` Gemi Logo Atar`,true)
.addField(`👉🏼 __Duckets__`,` \`.duckets <yazi>\` Duckets Logo Atar`,true)
.addField(`👉🏼 __Buz__`,` \`.buz <yazi>\` Buz Logo Atar`,true)
.addField(`👉🏼 __Arrow__`,` \`.arrow <yazi>\` Arrow Logo Atar`,true)
.addField(`👉🏼 __Neon__`,` \`.neon <yazi>\` Neon Logo Atar`,true)
.addField(`👉🏼 __Fx__`,` \`.fx <yazi>\` Fx Logo Atar`,true)
.addField(`👉🏼 __Mekanik__`,` \`.mekanik <yazi>\` Mekanik Logo Atar`,true)
.addField(`👉🏼 __Metal__`,` \`.metal <yazi>\` Metal Logo Atar`,true)
.addField(`👉🏼 __Punk__`,` \`.punk <yazi>\` Punk Logo Atar`,true)
.addField(`👉🏼 __Sci-fi__`,` \`.sci-fi <yazi>\`Sci-fi logo atar.`,true)
.addField(`👉🏼 __Siyah__`,` \`.siyah <yazi>\`Siyah logo atar.`,true)
.addField(`👉🏼 __Taş__`,` \`.taş <yazi>\`Taş logo atar.`,true)
.addField(`👉🏼 __Bilgilendirme__`,` \`.botdavet\` | NovaX'i Sunucunuza Davet Edersiniz\n \`.istatistik\` | Botun İstatistiklerini Gösterir `)
 message.channel.send(eklenti) 
  };
  exports.conf = {
    enabled: true,  
    guildOnly: false, 
    aliases: ["logo","ayarlar"], 
    permLevel: 0
  };
  exports.help = {
    name: 'logo'
  }; 
  