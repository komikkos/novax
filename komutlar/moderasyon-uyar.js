const Discord = require('discord.js')

const db = require('croxydb')

exports.run = async (client, message, args) => {


if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(`Yetkin yok.:x:`)

if(!args[0]) return message.channel.send(new Discord.MessageEmbed().setColor('#2a9df4').setTitle('🚨 Yanlış Kullanım!').setDescription('**Hatalı Komut Kullanımı Doğru Kullanımı :** \n`.uyarı ekle` \n`.uyarı sil` \n`.uyarı say`'))


if(args[0] === 'ekle') {

let kullanıcı = message.mentions.users.first()

if(!args[1]) return message.channel.send(`Bir kişiyi etiketlemelisin.`)

if(kullanıcı.id === message.author.id) return message.channel.send(`Kendini uyaramazsın.`)

let reason = args.slice(2).join(' ')

db.add(`uyarı.${message.guild.id}.${kullanıcı.id}`, +1)

const sayı = await db.fetch(`uyarı.${message.guild.id}.${kullanıcı.id}`)

if(!reason) {

await message.channel.send(new Discord.MessageEmbed()

    .setColor('#2a9df4')

    .setTitle('Başarılı')

    .setDescription(`${kullanıcı} uyarıldı. Toplam uyarıları: **${sayı}**`)
    .setFooter(`NovaX Uyarı Sistemi`))

await kullanıcı.send(new Discord.MessageEmbed()

    .setColor('#2a9df4')

    .setTitle('Hey Dikkat et')

    .setDescription(`${message.guild.name} sunucusunda uyarıldın. Toplam uyarıların: **${sayı}**`)
    .setFooter(`NovaX Uyarı Sistemi`)) 

return}

if(reason) {

await message.channel.send(new Discord.MessageEmbed()

    .setColor('#2a9df4')

    .setTitle('Başarılı')

    .setDescription(`${kullanıcı} uyarıldı. Toplam uyarıları: **${sayı}**\nSebep: ${reason}`)
    .setFooter(`NovaX Uyarı Sistemi`))

await kullanıcı.send(new Discord.MessageEmbed()

    .setColor('#2a9df4')

    .setTitle('Hey Dikkatli ol')

    .setDescription(`${message.guild.name} **sunucusunda** **\`${reason}\`** **Sebebiyle Uyarıldın.** \n**Toplam Uyarıların:** **\`${sayı}\`**`)
    .setFooter(`NovaX Uyarı Sistemi`)) 

return} }

if(args[0] === 'sil') {

let kullanıcı = message.mentions.users.first()

if(!args[1]) return message.channel.send(`Bir kişiyi etiketlemelisin.`)

if(kullanıcı.id === message.author.id) return message.channel.send(`Kendini uyaramazsın.`)

let sayı = args[2]

if(!sayı) return message.channel.send(`Silinecek uyarı sayısını yazmadın!`)

if(sayı === '0') return message.channel.send(`0 geçerli bir değer değildir.`)

const sayı2 = await db.fetch(`uyarı.${message.guild.id}.${kullanıcı.id}`)

if(sayı2 < sayı) return message.channel.send(new Discord.MessageEmbed()

    .setColor('#2a9df4')

    .setTitle('Dikkat')

    .setDescription(`${kullanıcı}'nın uyarı sayısı: **${sayı2}**.Bundan daha fazla uyarı silemessin.`)
    .setFooter(`NovaX Uyarı Sistemi`))

db.add(`uyarı.${message.guild.id}.${kullanıcı.id}`, -sayı)

const sayı3 = await db.fetch(`uyarı.${message.guild.id}.${kullanıcı.id}`)

await message.channel.send(new Discord.MessageEmbed()

    .setColor('#2a9df4')

    .setTitle('Başarılı')

    .setDescription(`${kullanıcı}'nın uyarısı silindi!\nToplam uyarı sayısı: **${sayı3 ? sayı3 : '0'}** `)
    .setFooter(`NovaX Uyarı Sistemi`))

await kullanıcı.send(new Discord.MessageEmbed()

    .setColor('#2a9df4')

    .setTitle('Hey Dikkat Et')

    .setDescription(`${message.guild.name} sunucusunda uyarın silindi bundan sonra daha dikkatli olmalısın.`)
    .setFooter(`NovaX Uyarı Sistemi`)) }

if(args[0] === 'say') {

let kullanıcı = message.mentions.users.first()

if(!args[1]) return message.channel.send(`Bir kişiyi etiketlemelisin.`)


const sayı2 = await db.fetch(`uyarı.${message.guild.id}.${kullanıcı.id}`)

if(!sayı2) return message.channel.send(new Discord.MessageEmbed()

    .setColor('#2a9df4')

    .setTitle('Bir Sorun Var')

    .setDescription(`${kullanıcı}'nın hiç uyarısı bulunamadı.`)
    .setFooter(`NovaX Uyarı Sistemi`))
  

await message.channel.send(new Discord.MessageEmbed()

    .setColor('#2a9df4')

    .setTitle('Başarılı')

    .setDescription(`${kullanıcı}:\nToplam uyarı sayısı: **${sayı2 ? sayı2 : '0'}** `))
    .setFooter(`NovaX Uyarı Sistemi`)}
    
};
exports.conf = {

enabled: true,

guildOnly: false,

aliases: [],

permLevel: 0,

}

exports.help = {

name: 'uyarı',

description: 'Uyarı sistemi',

usage: 'uyarı ekle uyarı sil uyarı say',

}