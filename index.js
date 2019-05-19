const Discord = require('discord.js');
const fs = require('fs')
const client = new Discord.Client(); 
let prefix = ":"


const warns = JSON.parse(fs.readFileSync('./warns.json'))

client.login('NTc5MzIzNjUwNjY3MzE1MjMz.XOCD1Q.-n8nQHimjPigDCcyBOrAqhlJISw');






client.on('message', message =>{
    if(message.content === "Fly?"){
        message.channel.sendMessage('Bonjours , je suis Fly ,   je  suis actuellement en cours de développement si vous rencontrer des problème merci de me le dire :smile: Pour avoir le site avec les commandes , marquer Flycommande? ce bot a été crée par https://www.youtube.com/channel/UCLD7cjjmLNQJeojPTIoRcOg/featured');
        console.log('');
    } 
});

client.login('NTc5MzIzNjUwNjY3MzE1MjMz.XOCD1Q.-n8nQHimjPigDCcyBOrAqhlJISw');

client.on('message', message =>{
    if(message.content === "Flyinfo?"){
        message.channel.sendMessage('Ce bots a été crée le 18/05/19 , chaîne YouTube https://www.youtube.com/channel/UCLD7cjjmLNQJeojPTIoRcOg/featured Si vous rencontrer des problème ou vous souhaitez que je rajoute des mot au quelle Fly repond , hésiter pas a me marquer un commentaire.');
        console.log('1');
    } 
});

client.on('message', message =>{
    if(message.content === "Flycommande?"){
        message.channel.sendMessage('https://sites.google.com/view/flybot/accueil');
        console.log('');
    } 
});

client.on('message', message =>{
    if(message.content === "Bonjour"){
        message.reply('Bonjours');
        console.log('1');
    } 
});

client.on('message', message =>{
    if(message.content === "Ta gueule"){
        message.reply('Attention ! Surveillez votre language et lisez les règles ');
        console.log('1');
    } 
});

client.on('message', message =>{
    if(message.content === "Ca va fly"){
        message.reply('Tranquille je suis devant mon ordi oklm');
        console.log('1');
    } 
});

 /*kick*/
 client.on('message',message =>{
     if(!message.guild) return
     let args = message.content.trim().split(/ +/g)
     if (args[0].toLocaleLowerCase() === prefix + 'kick'){
         if (!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send("vous n'avez pas la permission d'utilisez cette commande")
         let member = message.mentions.members.first()
         if (!member) return message.channel.send("veuillez mentionner un utilisateur :x:")
         if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.owner.id) return message.channel.send("vous ne pouvez pas kick cet utilisateur")
         if (!member.kickable) return message.channel.send("je ne peut pas exclure cet utilisateur :sunglasses:")
         member.kick()
         message.channel.send(member.user.username + 'à été exclu :white_check_mark:')  
     }
});

        
/*Ban*/
client.on('message',message =>{
    if(!message.guild) return
    let args = message.content.trim().split(/ +/g)
    if (args[0].toLocaleLowerCase() === prefix + 'ban'){
        if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send("vous n'avez pas la permission d'utilisez cette commande")
        let member = message.mentions.members.first()
        if (!member) return message.channel.send("veuillez mentionner un utilisateur :x:")
        if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.owner.id) return message.channel.send("vous ne pouvez pas bannir cet utilisateur")
        if (!member.bannable) return message.channel.send("je ne peut pas Bannir cet utilisateur :sunglasses:")
        message.guild.ban(member, {days: 7})
        message.channel.send(member.user.username + 'à été banni :white_check_mark:')  
    }
});


client.on("message", function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + "warn") {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande")
        let member = message.mentions.members.first()
        if (!member) return message.channel.send("Veuillez mentionner un membre")
        if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.ownerID) return message.channel.send("Vous ne pouvez pas warn ce membre")
        let reason = args.slice(2).join(' ')
        if (!reason) return message.channel.send("Veuillez indiquer une raison")
        if (!warns[member.id]) {
            warns[member.id] = []
        }
        warns[member.id].unshift({
            reason: reason,
            date: Date.now(),
            mod: message.author.id
        })
        fs.writeFileSync('./warns.json', JSON.stringify(warns))
        message.channel.send(member + " a été warn pour " + reason + " :white_check_mark:")
    }
 
    if (args[0].toLowerCase() === prefix + "infractions") {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande")
        let member = message.mentions.members.first()
        if (!member) return message.channel.send("Veuillez mentionner un membre")
        let embed = new Discord.RichEmbed()
            .setAuthor(member.user.username, member.user.displayAvatarURL)
            .addField('10 derniers warns', ((warns[member.id] && warns[member.id].length) ? warns[member.id].slice(0, 10).map(e => e.reason) : "Ce membre n'a aucun warns"))
            .setTimestamp()
        message.channel.send(embed)
    }
})

client.on('message', message =>{
    if(message.content === "connard"){
        message.reply('Attention ! Surveillez votre language et lisez les règles');
        console.log('1');
    } 
});

client.on('message', message =>{
    if(message.content === "batard"){
        message.reply('Attention ! Surveillez votre language et lisez les règles');
        console.log('1');
    } 
});

client.on('message', message =>{
    if(message.content === "pd"){
        message.reply('Attention ! Surveillez votre language et lisez les règles');
        console.log('1');
    } 
});

client.on('message', message =>{
    if(message.content === "fdp"){
        message.reply('Attention ! Surveillez votre language et lisez les règles');
        console.log('1');
    } 
});

client.on('message', message =>{
    if(message.content === "fils de pute"){
        message.reply('Attention ! Surveillez votre language et lisez les règles');
        console.log('1');
    } 
});