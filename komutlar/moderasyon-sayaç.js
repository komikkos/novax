const Discord = require('discord.js')
const db = require('croxydb')
const ayarlar = require('../ayarlar.json')
 
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
  
  const sayacsayi = await db.fetch(`sayac_${message.guild.id}`);
  const sayackanal = message.mentions.channels.first()
  
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`**Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.**`);
        
  if(!args[0]) {
    message.channel.send(`🚫  **Bir sayı yazmalısın.**`)
    return
  }
  
  if(!sayackanal) {
   message.channel.send(`🚫  **Sayaç kanalını etiketlemelisin.**`)
  }
  
  
  if(args[0] === "sıfırla") {
    if(!sayacsayi) {
      message.channel.send(`🚫  **Ayarlanmayan şeyi sıfırlayamazsın.**`)
      return
    }
    
    db.delete(`sayac_${message.guild.id}`)
    db.delete(`sayacK_${message.guild.id}`)
    message.channel.send(`👌🏻 **Sayaç başarıyla sıfırlandı.**`)
    return
  }
  
  if(isNaN(args[0])) {
    message.channel.send(`🚫  **Bir sayı yazmalısın.**`)
    return
  }
 
        if(args[0] <= message.guild.members.size) {
                message.channel.send(`🚫  **Sunucudaki kullanıcı sayısından (${message.guild.members.size}) daha yüksek bir değer girmelisin.**`)
                return
        }
  
  db.set(`sayac_${message.guild.id}`, args[0])
  db.set(`sayacK_${message.guild.id}`, sayackanal.id)
  
  message.channel.send(`👌🏻 | **Sayaç** \`${args[0]}\`, \n👌🏻 | **Sayaç kanalı ${sayackanal} olarak ayarlandı.**`)
}
 
exports.conf = {
        enabled: true,
        guildOnly: true,
        aliases: ['sayac'],
        permLevel: 3
}
 
exports.help = {
        name: 'sayaç',
        description: 'Sayacı ayarlar.',
        usage: 'sayaç <sayı> <#kanal> / sıfırla'
}