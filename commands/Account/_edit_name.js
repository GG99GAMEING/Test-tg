/*CMD
  command: /edit_name
  help: Edit name
  need_reply: true
  auto_retry_time: 
  folder: Account
<<ANSWER
ANSWER
<<KEYBOARD
KEYBOARD
  aliases: 
CMD*/
var uid = String(user.telegramid);
var LOG = Bot.getProperty('log_channel') || '@JACK_SHOP_LOGS';

var newName = message.trim();
if(!newName || newName.length < 2){ Bot.sendMessage('❌ Valid naam daaliye.'); return; }
Bot.setProperty('user_name_' + uid, newName, 'string');
Bot.sendMessage('✅ Naam update kar diya gaya: *' + newName + '*', {parse_mode:'Markdown'});
