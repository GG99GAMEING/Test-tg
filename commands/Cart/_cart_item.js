/*CMD
  command: /cart_item
  help: Cart item detail
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
var item = null;
cart.items.forEach(function(it){ if(it.product_id == prodId){ item = it; } });
if(!item){ Bot.sendMessage('❌ Ye product cart mein nahi hai.'); return; }
var prods = Bot.getProperty('products');
try { prods = JSON.parse(prods); } catch(e){ prods = {}; }
var p = prods[prodId];
var pname = p ? p.name : 'Unknown';
var text = '📋 *Cart Item Detail*\n\n' +
  'Product: ' + pname + '\n' +
  'Price: ₹' + (item.price || 0) + '\n' +
  'Quantity: ' + (item.qty || 1) + '\n' +
  'Line Total: ₹' + ((item.price || 0) * (item.qty || 1)) + '\n' +
  (item.variant ? 'Variant: ' + item.variant + '\n' : '') +
  (item.size ? 'Size: ' + item.size + '\n' : '') +
  (item.color ? 'Color: ' + item.color + '\n' : '');
Bot.sendMessage(text, {parse_mode:'Markdown'});
