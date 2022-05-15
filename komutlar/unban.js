const Discord = require("discord.js");
exports.run = (client, message, args) => {
  
if(!message.member.hasPermission("BAN_MEMBERS")) return message.reply("Yetkin Yok!");
 
let user = args[0]
if(!user) return message.reply("Banı kaldırılacak kişinin ID numarasını yazmalısın.")

let reason = args.slice(1).join(" ")
if (!reason) return message.reply("Ban Kaldırma Sebebini Yazmalısın")

message.guild.members.unban(user, reason)
  
const embed = new Discord.MessageEmbed()
    .setColor("BLUE")
    .addField('Birinin Yasağını Kaldırdım')
    .addField("<:oceanprofil:975421128518565968> Kullanıcı ID:", `${user}`)
    .addField("<:moderasyon:972890028709671022> Banı Kaldıran", `${message.author.username}#${message.author.discriminator}`)
    .addField("Sebep", reason)
    message.channel.send(embed)
 
}

exports.conf = {
  aliases: []
}

exports.help = {
  name: "unban"
}