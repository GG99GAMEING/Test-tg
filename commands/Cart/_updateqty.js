/*CMD
  command: /updateqty
  help: Update quantity
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
var parts = message.trim().split(' ');
var prodId = parts[0];
var newQty = parseInt(parts[1]);
if(isNaN(newQty) || newQty < 1){ Bot.sendMessage('❌ Valid quantity daaliye (minimum 1). Format: product_id qty'); return; }
var cartKey = (Bot.getProperty('cart_prefix') || 'cart_') + uid;
var cart = Bot.getProperty(cartKey);
try { cart = JSON.parse(cart); } catch(e){ cart = null; }
if(!cart || !cart.items){ Bot.sendMessage('🛒 Cart khali hai.'); return; }
var found = false;
cart.items.forEach(function(item){
  if(item.product_id == prodId){ item.qty = newQty; found = true; }
});
if(!found){ Bot.sendMessage('❌ Product cart mein nahi mila.'); return; }
Bot.setProperty(cartKey, JSON.stringify(cart), 'string');
Bot.sendMessage('✅ Quantity update kar di gayi: ' + newQty + '\n\nView: /cart');
