/*CMD
  command: /delete_address
  help: Delete address
  need_reply: false
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

Bot.setProperty('address_' + uid, '{}', 'string');
Bot.sendMessage('🗑️ Address delete kar diya gaya.\nNaya add karein: /add_address');
