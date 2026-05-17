/*CMD
  command: /cart_total
  help: Cart total
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
if(!cart || !cart.items || cart.items.length == 0){ Bot.sendMessage('🛒 Cart khali hai. Total: ₹0'); return; }
var subtotal = 0;
cart.items.forEach(function(item){ subtotal += (item.price || 0) * (item.qty || 1); });
var shipping = parseFloat(Bot.getProperty('shipping_charge') || 50);
var freeAbove = parseFloat(Bot.getProperty('free_shipping_above') || 500);
if(subtotal >= freeAbove){ shipping = 0; }
var discount = cart.discount || 0;
var total = subtotal + shipping - discount;
var text = '🛒 *Cart Total Breakdown*\n\n' +
  'Items: ' + (cart.items ? cart.items.reduce(function(s,i){ return s + (i.qty||1); }, 0) : 0) + '\n' +
  'Subtotal: ₹' + subtotal + '\n' +
  'Shipping: ' + (shipping == 0 ? 'FREE' : '₹' + shipping) + '\n' +
  'Discount: ₹' + discount + '\n' +
  '━━━━━━━━━\n' +
  '*Total: ₹' + total + '*';
Bot.sendMessage(text, {parse_mode:'Markdown'});
