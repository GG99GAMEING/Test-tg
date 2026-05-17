/*CMD
  command: /clear_wishlist
  help: Clear wishlist
  need_reply: false
  auto_retry_time: 
  folder: Wishlist
<<ANSWER
ANSWER
<<KEYBOARD
KEYBOARD
  aliases: 
CMD*/
var uid = String(user.telegramid);
var LOG = Bot.getProperty('log_channel') || '@JACK_SHOP_LOGS';

var wishKey = (Bot.getProperty('wishlist_prefix')||'wishlist_') + uid;
Bot.setProperty(wishKey, '[]', 'string');
Bot.sendMessage('🗑️ Wishlist clear!');
