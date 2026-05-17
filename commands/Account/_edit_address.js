/*CMD
  command: /edit_address
  help: Edit address
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

Bot.setProperty('addr_build_' + uid, message.trim(), 'string');
Bot.setProperty('addr_step_' + uid, 'city', 'string');
Bot.sendMessage('📍 Editing address... pehle address line 1 saved. Ab city bhejiye.');
