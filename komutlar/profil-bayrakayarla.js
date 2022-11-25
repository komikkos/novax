const Discord = require("discord.js");
const db = require("croxydb");
 
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
  let bayrak = args.slice(0).join(" ");
  if (!bayrak) return message.channel.send("🚨 | **Lütfen Bayrağını Gir (EMOJİ OLSUN) :flag_tr: Gibi**");
  message.channel.send("👌🏻 | **Profil Bayrağın Başarıyla ``" + bayrak + "`` olarak ayarlandı!**");
  db.set(`pbayrak_${message.author.id}`, bayrak);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  kategori: "Profil"
};
 
exports.help = {
  name: "bayrakayarla",
  description: "",
  usage: "",
  kategori: "Profil"
};