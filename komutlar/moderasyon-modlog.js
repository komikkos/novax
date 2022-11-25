const Discord = require('discord.js')
const db = require('croxydb')

exports.run = async(client, message, args) => {
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
   
if (!message.member.hasPermission("ADMINISTRATOR")) 
return message.channel.send(`Bu Komutu Kullanabilmek İçin "\`Yönetici\`" Yetkisine Sahip Olmalısın.`);

let logk = message.mentions.channels.first();
let logkanal = await db.fetch(`codeminglog_${message.guild.id}`)
  
if (args[0] === "sıfırla" || args[0] === "kapat") {
  
if(!logkanal) return message.channel.send(new Discord.MessageEmbed()
                                               
.setDescription(`Mod-Log kanalı zaten ayarlı değil!`)
.setColor("RED"));
    
db.delete(`codeminglog_${message.guild.id}`)
  
message.channel.send(new Discord.MessageEmbed()
                          
.setDescription(`Mod-Log Kanalı başarıyla sıfırlandı.`)
.setColor("GREEN"));

return
}
  
if (!logk) return message.channel.send(new Discord.MessageEmbed()
.setDescription(`Mod-Log kanalı belirt!`)
.setColor("RED"));
 

db.set(`codeminglog_${message.guild.id}`, logk.id)

message.channel.send(new Discord.MessageEmbed()
.setDescription(`Mod-Log kanalı başarıyla ${logk} olarak ayarlandı.`)
.setColor("GREEN"));

console.log(`Mod-log komutu ${message.author.username} Tarafından kullanıldı`)
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['mod-log'],
    permLevel: 0 
};

exports.help = {
    name: 'modlog'
};