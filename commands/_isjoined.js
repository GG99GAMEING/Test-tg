/*CMD
  command: /isjoined
  help: Check channel join
  need_reply: false
  auto_retry_time: 
  folder: 
<<ANSWER
ANSWER
<<KEYBOARD
KEYBOARD
  aliases: 
CMD*/
var channel = Bot.getProperty('required_channel');
if(channel && channel != ''){
  var chatMember = Bot.getChatMember(channel, user.telegramid);
  if(!chatMember || chatMember.status == 'left' || chatMember.status == 'kicked'){
    var buttons = [[{title:'📢 Join Channel',url:'https://t.me/' + channel.replace('@','')}]];
    Bot.sendInlineKeyboard(buttons, '⚠️ *Pehle channel join karein!*\n\nBot use karne ke liye aapko humara channel join karna hoga. Join karne ke baad /isjoined dobara try karein.');
    return;
  }
}
Bot.sendMessage('✅ Channel join verified! Ab aap shop use kar sakte hain.');
Bot.runCommand('/mainmenu');
