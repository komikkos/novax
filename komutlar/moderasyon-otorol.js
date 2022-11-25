const Discord = require('discord.js');
const db = require('croxydb')

exports.run = async(client,message, args) => {
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
  if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send('**Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin** `Rolleri Yönet`')

  if(!args[0])  return message.channel.send(new Discord.MessageEmbed()
.setColor('#2a9df4')
.setDescription('> **Otorol sistemini ne yapmak istediğini belirtmedin** <a:dnya:778787223847829504> \n> `.otorol ayarla @üye #kanal` **Otorol sistemini ayarlar.** \n> `.otorol sıfırla` **Otorol sistemini sıfırlar.**'))

  if(args[0] === "ayarla") {

    var rol = message.mentions.roles.first()   
     var rolkanal = message.mentions.channels.first()
    if(!rol) return message.channel.send(new Discord.MessageEmbed()
.setColor('#2a9df4')
.setDescription('**Bir rol etiketlemelisin** `.otorol ayarla @rol #kanal` **(Eğer rolü bulamıyorsan etiketleme izninin açık olduğundan veya komutun kullanıldığı kanalı görebildiğinden emin ol)**'))
    if(!rolkanal) return message.channel.send(new Discord.MessageEmbed().setColor('#2a9df4').setDescription('Bir kanal etiketlemelisin eğer kanalı etiketleyemiyorsan botun o kanalı gördüğünden emin ol.'))
 
    db.set(`autoRoleChannel_${message.guild.id}`, rolkanal.id)
    db.set(`autoRole_${message.guild.id}`, rol.id)
  
    return message.channel.send(new Discord.MessageEmbed()
.setColor('#2a9df4')
.setDescription('> **Otorol Sistemi Aktif edildi** 👌🏻 \n> **Sunucuya giren kişilere verilecek rol** <@&' + rol + '> \n> **Otorol mesajının gideceği kanal** <#' +rolkanal.id+ '> **Olarak ayarlandı.**'))
  }
  
  if(args[0] === "sıfırla") {
    let user = message.author
    message.channel.send('**Otorol Sistemini sıfırlamak istediğinden eminmisin eğer eminsen** :white_check_mark: **değilsen** :x: **Tepkisine bas.**').then(async m => {
      await m.react('✅').then(r => {
        let onay = (reaction, user) => reaction.emoji.name === '✅' && user.id == message.author.id;
        let onay2 = m.createReactionCollector(onay)
        onay2.on('collect', async(r)=>{
          db.delete(`autoRoleChannel_${message.guild.id}`)
          db.delete(`autoRole_${message.guild.id}`)
          m.reactions.removeAll()
          m.edit('Otorol sistemi kapatıldı.')
        })
      })
      await m.react('❌').then(r => {
         let onay = (reaction, user) => reaction.emoji.name == '❌' && user.id == message.author.id;
         let onay2 = m.createReactionCollector(onay)
         onay2.on('collect', async(r)=> {
           m.reactions.removeAll()
           m.edit('Otorol kapatma işlemi iptal edildi')
         })
      })
    })
  }

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permlevel: 0
}

exports.help = {
  name: "otorol"
}