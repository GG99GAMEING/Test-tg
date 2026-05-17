/*CMD
  command: /edit_phone
  help: Edit phone
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

var phone = message.trim();
if(!phone || phone.length < 10){ Bot.sendMessage('❌ Valid phone number daaliye (min 10 digits).'); return; }
Bot.setProperty('user_phone_' + uid, phone, 'string');
Bot.sendMessage('✅ Phone number update kar diya gaya: ' + phone);
