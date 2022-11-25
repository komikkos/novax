const db = require("croxydb");
const Discord = require('discord.js');
const fynx = require("../ayarlar.json");
exports.run = async(client, message, args) => {
    let karaliste = db.fetch(`ckaraliste.${message.author.id}`)
    const novax = new Discord.MessageEmbed()
        .setColor("#2a9df4")
        .setDescription(`🚨 **${karaliste}** sebebiyle karalisteye alınmışsın!\nBeyaz listeye alınmak istiyorsan [BURAYA](https://discord.gg/efWMKWuZsM) gelebilirsin!`)
    if (karaliste)
        return message.channel.send(novax)

    if (db.fetch(`bakim`)) {
        const bakim = new Discord.MessageEmbed()
            .setColor("#2a9df4")
            .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
            .setTitle('Üzgünüm Bot Bakımda')
            .addField('Bot Şuan Bakımdadır Lütfen Bekleyin.', 'Bot Ne Durumda Yada Botla İlgili Güncelleme Ve Duyurular İçin Destek Sunucumuza Gelmeyi Unutmayınız.')
            .addField('İşte Destek Sunucum', "[Destek Sunucusu](https://discord.gg/efWMKWuZsM)")
            .setFooter('Üzgünüm...')
            .setImage('https://lh3.googleusercontent.com/proxy/gAN4I19oqqabXd_VIiwg5or-ITh4XxJTRNJA1ot0EIHPiBpxC74Atj4wNIcFes1N3VcE8WnOk6fIN29BChqNbj4lj9dIF2jiI7MBV6U8v842LA')
        if (message.author.id != "543104055564828672") return message.channel.send(bakim)

    }
    let eklenti = new Discord.MessageEmbed()
        .setAuthor(`NovaX Davet Komutları`, client.user.avatarURL())
        .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
        .setImage('https://cdn.discordapp.com/attachments/739110191768928286/883833448131878952/standard.gif')
        .setColor('#2a9df4')
        .setDescription(` NovaX botumuzu eklemek için \`.botdavet\` yazabilirsiniz.`)
        .addField(`👉🏼 __Başvurular__`, ` \`.başvuru-gidecek-kanal-ayarla\` Başvuruların Gideceği Kanal`, true)
        .addField(`👉🏼 __Başvuru Log__`, ` \`.başvuru-log-ayarla\` Bot Onaylandı / Reddedildi Log Kanalı.`, true)
        .addField(`👉🏼 __Yetkili Rol__`, ` \`.botlist-yetkili-rol-ayarla\` Botları Onaylayacak Yetkili Rol.`, true)
        .addField(`👉🏼 __Bot Reddet__`, ` \`.botreddet <BotID> <SahipID> <Sebep>\` Botu Reddedersiniz.`, true)
        .addField(`👉🏼 __Bot Onayla__`, ` \`.botonayla <BotID> <SahipID>\` Botu Onaylarsınız.`, true)
        .addField(`👉🏼 __Bilgilendirme__`, ` \`.botdavet\` | NovaX'i Sunucunuza Davet Edersiniz\n \`.istatistik\` | Botun İstatistiklerini Gösterir `)
    message.channel.send(eklenti)
};
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["moderasyon", "ayarlar"],
    permLevel: 0
};
exports.help = {
    name: 'botlist'
};