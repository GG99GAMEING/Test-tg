/*CMD
  command: /removewishlist
  help: Remove from wishlist
  need_reply: true
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

var prodId = message.trim();
var wishKey = (Bot.getProperty('wishlist_prefix')||'wishlist_') + uid;
var wishlist = Bot.getProperty(wishKey);
try { wishlist = JSON.parse(wishlist); } catch(e){ wishlist = []; }
if(!wishlist){ wishlist = []; }
wishlist = wishlist.filter(function(p){ return p != prodId; });
Bot.setProperty(wishKey, JSON.stringify(wishlist), 'string');
Bot.sendMessage('💔 Product wishlist se remove kar diya gaya.');
