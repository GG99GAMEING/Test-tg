/*CMD
  command: /delete_account
  help: Delete account
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

var buttons = [[{title:'⚠️ Yes, Delete',command:'/delete_account_confirm'},{title:'❌ Cancel',command:'/account'}]];
Bot.sendInlineKeyboard(buttons, '⚠️ *Account Delete Karein?*\n\nYe permanent action hai. Saara data delete ho jayega. Kya aap sure hain?');
