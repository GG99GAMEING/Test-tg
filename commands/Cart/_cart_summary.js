/*CMD
  command: /cart_summary
  help: Cart summary
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
if(!cart || !cart.items || cart.items.length == 0){ Bot.sendMessage('🛒 Cart khali hai.'); return; }
var prods = Bot.getProperty('products');
try { prods = JSON.parse(prods); } catch(e){ prods = {}; }
var text = '📋 *Full Cart Summary*\n\n';
var subtotal = 0;
cart.items.forEach(function(item, i){
  var p = prods[item.product_id];
  text += (i+1) + '. ' + (p ? p.name : 'Unknown') + '\n   ₹' + item.price + ' × ' + (item.qty||1) + ' = ₹' + (item.price*(item.qty||1)) + '\n';
  subtotal += item.price * (item.qty||1);
});
var shipping = parseFloat(Bot.getProperty('shipping_charge')||50);
var freeAbove = parseFloat(Bot.getProperty('free_shipping_above')||500);
if(subtotal >= freeAbove){ shipping = 0; }
text += '\nSubtotal: ₹' + subtotal + '\nShipping: ₹' + shipping + '\nDiscount: -₹' + (cart.discount||0) + '\n*Total: ₹' + (subtotal+shipping-(cart.discount||0)) + '*';
Bot.sendMessage(text, {parse_mode:'Markdown'});
