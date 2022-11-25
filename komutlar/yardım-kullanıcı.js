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
.setAuthor(`NovaX Kullanıcı Komutları`, client.user.avatarURL())
.setThumbnail(message.author.displayAvatarURL({dynamic : true}))
.setImage('https://cdn.discordapp.com/attachments/739110191768928286/883833501277900820/standard.gif')
.setColor('#2a9df4')
.setDescription(` NovaX botumuzu eklemek için \`.botdavet\` yazabilirsiniz.`)  
.addField(`👉🏼 __Profil Resmi__`,` \`.pp\` Avatarınızı Atar`,true)
.addField(`👉🏼 __Tavsiye__`,` \`.tavsiye\` Biz Yapımcılara Tavsiye Verirsiniz.`,true)
.addField(`👉🏼 __Bug Bildir__`,` \`.bug-bildir\` Botta Bug Varsa Biz Yapımcılara İletir.`,true)
.addField(`👉🏼 __Düello__`,` \`.düello <@üye>\` Düello Yaparsınız.`,true)
.addField(`👉🏼 __Mesaj Sayacı__`,` \`.mesaj-sayar\` Toplam Mesaj Sayınızı Gösterir.`,true)
.addField(`👉🏼 __Resim Sayacı__`,` \`.resim-sayar\` Toplam Resim Sayınızı Gösterir.`,true)
.addField(`👉🏼 __Küfür Sayacı__`,` \`.küfür-sayar\` Toplam Küfür Sayınızı Gösterir.`,true)
.addField(`👉🏼 __Reklam Sayacı__`,` \`.reklam-sayar\` Toplam Reklam Sayınızı Gösterir.`,true)
.addField(`👉🏼 __Kullanıcı Bilgi__`,` \`.kullanıcı-bilgi <@üye>\` Kullanıcı'nın Bilgilerini Gösterir.`,true)
.addField(`👉🏼 __Sunucu Bilgi__`,` \`.sunucu-bilgi\` Sunucu'nun Bilgilerini Gösterir.`,true)
.addField(`👉🏼 __Bilgilendirme__`,` \`.botdavet\` | NovaX'i Sunucunuza Davet Edersiniz\n \`.istatistik\` | Botun İstatistiklerini Gösterir `)
 message.channel.send(eklenti) 
  };
  exports.conf = {
    enabled: true,  
    guildOnly: false, 
    aliases: ["moderasyon","ayarlar"], 
    permLevel: 0
  };
  exports.help = {
    name: 'kullanıcı'
  }; 
  