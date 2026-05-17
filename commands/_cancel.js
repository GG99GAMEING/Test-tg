/*CMD
  command: /cancel
  help: Cancel operation
  need_reply: false
  auto_retry_time: 
  folder: 
<<ANSWER
ANSWER
<<KEYBOARD
KEYBOARD
  aliases: 
CMD*/
var uid = String(user.telegramid);
Bot.setProperty('user_state_' + uid, '', 'string');
Bot.setProperty('user_step_' + uid, '', 'string');
Bot.sendMessage('❌ Operation cancel kar diya gaya. Sab kuch waise hi hai jaise pehle tha.');
Bot.runCommand('/mainmenu');
