/*CMD
  command: /clear_search
  help: Clear search history
  need_reply: false
  auto_retry_time: 
  folder: Search
<<ANSWER
ANSWER
<<KEYBOARD
KEYBOARD
  aliases: 
CMD*/
var uid = String(user.telegramid);
var LOG = Bot.getProperty('log_channel') || '@JACK_SHOP_LOGS';

Bot.setProperty('search_history_' + uid, '[]', 'string');
Bot.sendMessage('🗑️ Search history clear!');
