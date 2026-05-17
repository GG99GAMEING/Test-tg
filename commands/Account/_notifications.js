/*CMD
  command: /notifications
  help: Toggle notifications
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

var current = Bot.getProperty('user_notifications_' + uid) || 'true';
var nu = current == 'true' ? 'false' : 'true';
Bot.setProperty('user_notifications_' + uid, nu, 'string');
Bot.sendMessage('🔔 Notifications: ' + (nu == 'true' ? 'ON ✅' : 'OFF ❌'));
