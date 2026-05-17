/*CMD
  command: /addwishlist
  help: Add to wishlist
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
var prods = Bot.getProperty('products');
try { prods = JSON.parse(prods); } catch(e){ prods = {}; }
if(!prods[prodId]){ Bot.sendMessage('❌ Product nahi mila.'); return; }
var wishKey = (Bot.getProperty('wishlist_prefix')||'wishlist_') + uid;
var wishlist = Bot.getProperty(wishKey);
try { wishlist = JSON.parse(wishlist); } catch(e){ wishlist = []; }
if(!wishlist) wishlist = [];
if(wishlist.indexOf(prodId) >= 0){ Bot.sendMessage('❤️ Ye product already wishlist mein hai.'); return; }
wishlist.push(prodId);
Bot.setProperty(wishKey, JSON.stringify(wishlist), 'string');
Bot.sendMessage('❤️ *' + prods[prodId].name + '* wishlist mein add ho gaya!', {parse_mode:'Markdown'});
