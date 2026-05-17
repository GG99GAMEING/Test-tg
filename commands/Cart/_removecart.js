/*CMD
  command: /removecart
  help: Remove from cart
  need_reply: true
  auto_retry_time: 
  folder: Cart
<<ANSWER
ANSWER
<<KEYBOARD
KEYBOARD
  aliases: 
CMD*/
var uid = String(user.telegramid);
var prodId = message.trim();
var cartKey = (Bot.getProperty('cart_prefix') || 'cart_') + uid;
var cart = Bot.getProperty(cartKey);
try { cart = JSON.parse(cart); } catch(e){ cart = null; }
if(!cart || !cart.items){ Bot.sendMessage('🛒 Cart khali hai.'); return; }
var before = cart.items.length;
cart.items = cart.items.filter(function(item){ return item.product_id != prodId; });
if(cart.items.length == before){ Bot.sendMessage('❌ Ye product cart mein nahi tha.'); return; }
Bot.setProperty(cartKey, JSON.stringify(cart), 'string');
Bot.sendMessage('🗑️ Product cart se remove kar diya gaya.\n\nView cart: /cart');
