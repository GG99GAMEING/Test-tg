/*CMD
  command: /cart
  help: View cart
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
if(!cart || !cart.items || cart.items.length == 0){
  Bot.sendMessage('🛒 *Aapki cart khali hai!*\n\nShop karna shuru karein: /shop', {parse_mode:'Markdown'});
  return;
}

var prods = Bot.getProperty('products');
try { prods = JSON.parse(prods); } catch(e){ prods = {}; }

var text = '🛒 *Aapki Shopping Cart*\n\n';
var subtotal = 0;
cart.items.forEach(function(item, i){
  var p = prods[item.product_id];
  var pname = p ? p.name : 'Unknown Product';
  var price = item.price || (p ? p.price : 0);
  var qty = item.qty || 1;
  var lineTotal = price * qty;
  subtotal += lineTotal;
  text += (i+1) + '. *' + pname + '*';
  if(item.variant){ text += ' (' + item.variant + ')'; }
  if(item.size){ text += ' [' + item.size + ']'; }
  if(item.color){ text += ' [' + item.color + ']'; }
  text += '\n   ₹' + price + ' × ' + qty + ' = *₹' + lineTotal + '*\n\n';
});

var shipping = parseFloat(Bot.getProperty('shipping_charge') || 50);
var freeAbove = parseFloat(Bot.getProperty('free_shipping_above') || 500);
if(subtotal >= freeAbove){ shipping = 0; }

var discount = cart.discount || 0;
var total = subtotal + shipping - discount;

text += '━━━━━━━━━━━━━━━\n';
text += 'Subtotal: ₹' + subtotal + '\n';
text += 'Shipping: ' + (shipping == 0 ? '*FREE* 🚚' : '₹' + shipping) + '\n';
if(discount > 0){ text += 'Coupon Discount: -₹' + discount + (cart.coupon_code ? ' (' + cart.coupon_code + ')' : '') + '\n'; }
text += '*Total: ₹' + total + '*';

var buttons = [
  [{title:'✅ Checkout',command:'/checkout'},{title:'🗑️ Clear Cart',command:'/clearcart'}],
  [{title:'🎟️ Apply Coupon',command:'/cart_apply_coupon'}]
];
if(cart.coupon_code){ buttons.push([{title:'❌ Remove Coupon',command:'/cart_remove_coupon'}]); }
buttons.push([{title:'💾 Save Cart',command:'/savecart'},{title:'🛍️ Continue Shopping',command:'/shop'}]);

Bot.sendInlineKeyboard(buttons, text);
