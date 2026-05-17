/*CMD
  command: /edit_email
  help: Edit email
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

var email = message.trim();
if(!email || email.indexOf('@') < 0){ Bot.sendMessage('❌ Valid email daaliye.'); return; }
Bot.setProperty('user_email_' + uid, email, 'string');
Bot.sendMessage('✅ Email update kar diya gaya: ' + email);
