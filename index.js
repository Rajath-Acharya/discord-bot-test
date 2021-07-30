const Discord = require('discord.js');
const client = new Discord.Client();
const KEY ='ODcwMzc0NDQwMzQzNjAxMTc0.YQL1XQ.WEItM4MsyVs0R9JsGMzvdL3_Jlw';
console.log(client);

client.on('message', msg => {
    if(msg.content) {
        msg.reply("Good night");
    }
});

// client.login(KEY);