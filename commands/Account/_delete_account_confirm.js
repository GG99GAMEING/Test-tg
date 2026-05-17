/*CMD
  command: /delete_account_confirm
  help: 
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

Bot.setProperty('user_registered_' + uid, false, 'boolean');
Bot.setProperty('user_name_' + uid, '', 'string');
Bot.setProperty('user_phone_' + uid, '', 'string');
Bot.setProperty('user_email_' + uid, '', 'string');
Bot.setProperty('address_' + uid, '{}', 'string');
Bot.sendMessage('👋 Account delete kar diya gaya. Aapse dobara milna achha lagega! /start se naya account bana sakte hain.');
var logMsg = '🗑️ *Account Deleted*\n👤 ' + (user.first_name||'User') + ' (' + uid + ')';
Bot.sendMessage(logMsg, {chat_id: LOG, parse_mode:'Markdown'});
