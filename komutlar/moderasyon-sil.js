const Discord = require("discord.js");
const db = require('croxydb')
const Util = require("../util/Util.js");

module.exports.run = async (bot, message, args) => {
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
  //

  if (!message.member.hasPermission("MANAGE_MESSAGES"))
    return message.channel.send(
      "⛔ **Bu komutu kullanmak için Mesajları Yönet yetkisine sahip olmalısın.**"
    );
  if (!args[0])
    return message.reply(
      "⛔ **En Az** `1 - 100` **Arasında Bir Tam Sayı Değeri Girmelisiniz.**"
    );
  message.channel.bulkDelete(args[0]).then(() => {
   const tamamdır = new Discord.MessageEmbed()
  .setColor("#2a9df4")    
   .setThumbnail('https://cdn.discordapp.com/attachments/767544528537649193/774057334862512128/Geri-Donusum-Sembolleri-90859.gif')
  .setTitle('BAŞARILI')
  .addField(`\`${message.author.username}\`  👌🏻  Başarıyla **${args[0]}** Mesajı Sildim`,`NovaX İyi Muhabbetler Diler...`)
 message.channel.send(tamamdır)
    message.react('👍')
   
   });
};

module.exports.help = {
  name: "sil"
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "sil",
  description: "",
  usage: ""
}; 
