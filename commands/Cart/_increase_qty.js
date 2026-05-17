/*CMD
  command: /increase_qty
  help: Increase quantity
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
var found = false;
cart.items.forEach(function(item){
  if(item.product_id == prodId){ item.qty = (item.qty || 1) + 1; found = true; }
});
if(!found){ Bot.sendMessage('❌ Product cart mein nahi mila.'); return; }
Bot.setProperty(cartKey, JSON.stringify(cart), 'string');
Bot.sendMessage('➕ Quantity badha di gayi!\nView cart: /cart');
