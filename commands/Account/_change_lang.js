/*CMD
  command: /change_lang
  help: Change language
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

var current = Bot.getProperty('user_lang_' + uid) || 'hinglish';
var nu = current == 'hinglish' ? 'english' : 'hinglish';
Bot.setProperty('user_lang_' + uid, nu, 'string');
Bot.sendMessage('🌐 Language changed to: *' + nu + '*', {parse_mode:'Markdown'});
