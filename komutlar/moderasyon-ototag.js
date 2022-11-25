const Discord = require('discord.js');
const db = require('croxydb')
const ayarlar = require('../ayarlar.json'),
      prefix = ayarlar.prefix
exports.run = async(client, message, args) =>{
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
  
if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(':no_entry: Ototagı ayarlamak için `Yönetici` yetkisine sahip olman gerek.')  
let frenzy_ibrahim = await db.fetch(`Frenzy?Code?Ototag_${message.guild.id}`) || await db.fetch(`Frenzy?Code?OtotagKanal_${message.guild.id}`)
if(frenzy_ibrahim) return message.reply(`:x: Bu sistem zaten aktif durumda. Kapatmak için **${prefix}ototag-kapat**`)
let frenzy_kanal = message.mentions.channels.first()
let frenzy_tag = args.slice(1).join(' ')
if(!frenzy_kanal || !frenzy_tag) return message.reply(`**Ototag sistemini ayarlamak için **kanal ve tag** belirtmelisin.**`)
  
db.set(`Frenzy?Code?Ototag_${message.guild.id}`,frenzy_tag) 
db.set(`Frenzy?Code?OtotagKanal_${message.guild.id}`,frenzy_kanal.id)
message.channel.send(`👌🏻 | **Ototag aktif edildi!**\n👌🏻 | **Yeni gelen kullanıcılara **${frenzy_tag}** vereceğim.**`)
};  
exports.conf = {
  enabled: false, 
  guildOnly: false, 
  aliases: ['ototagayarla'],
  permLevel: 3 
};
exports.help = {
  name: 'ototag',
  description: 'Ototag Sistemi - Frenzy Code',
  usage: 'ototag kanal tag'
};
