/*CMD
  command: /savecart
  help: Save cart for later
  need_reply: false
  auto_retry_time: 
  folder: Cart
<<ANSWER
ANSWER
<<KEYBOARD
KEYBOARD
  aliases: 
CMD*/
var uid = String(user.telegramid);
var cartKey = (Bot.getProperty('cart_prefix') || 'cart_') + uid;
var cart = Bot.getProperty(cartKey);
try { cart = JSON.parse(cart); } catch(e){ cart = null; }
if(!cart || !cart.items || cart.items.length == 0){ Bot.sendMessage('🛒 Save karne ke liye cart khali hai.'); return; }
Bot.setProperty('saved_' + cartKey, JSON.stringify(cart), 'string');
Bot.sendMessage('💾 Cart save kar di gayi! Baad mein /savedcart se restore kar sakte hain.');
