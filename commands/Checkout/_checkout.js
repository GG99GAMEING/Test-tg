/*CMD
  command: /checkout
  help: Start checkout
  need_reply: false
  auto_retry_time: 
  folder: Checkout
<<ANSWER
ANSWER
<<KEYBOARD
KEYBOARD
  aliases: 
CMD*/
var uid = String(user.telegramid);
var LOG = Bot.getProperty('log_channel') || '@JACK_SHOP_LOGS';

var cartKey = (Bot.getProperty('cart_prefix')||'cart_') + uid;
var cart = Bot.getProperty(cartKey);
try { cart = JSON.parse(cart); } catch(e){ cart = null; }
if(!cart || !cart.items || cart.items.length == 0){ Bot.sendMessage('🛒 Pehle cart mein items add karein: /shop'); return; }
var prods = Bot.getProperty('products');
try { prods = JSON.parse(prods); } catch(e){ prods = {}; }
var text = '📋 *Order Summary*\n\n';
var subtotal = 0;
cart.items.forEach(function(item, i){
  var p = prods[item.product_id]; var pname = p ? p.name : 'Unknown';
  var qty = item.qty || 1; var line = (item.price||0)*qty; subtotal += line;
  text += (i+1) + '. ' + pname + '\n   ₹' + item.price + ' × ' + qty + ' = ₹' + line + '\n';
});
var shipping = parseFloat(Bot.getProperty('shipping_charge')||50);
if(subtotal >= parseFloat(Bot.getProperty('free_shipping_above')||500)){ shipping = 0; }
var disc = cart.discount || 0; var total = subtotal + shipping - disc;
text += '\nSubtotal: ₹' + subtotal + '\nShipping: ' + (shipping==0?'FREE':'₹'+shipping) + '\nDiscount: -₹' + disc + '\n*Total: ₹' + total + '*';
Bot.setProperty('checkout_' + uid, JSON.stringify({subtotal:subtotal,shipping:shipping,discount:disc,total:total,stage:'address'}), 'string');
var addr = Bot.getProperty('address_' + uid);
var addrSaved = addr && addr != '' && addr != '{}' && addr != 'null';
var buttons = [[{title:'📍 Use Saved Address',command:'/checkout_address'},{title:'📝 New Address',command:'/checkout_new_address'}],[{title:'❌ Cancel',command:'/checkout_cancel'}]];
Bot.sendInlineKeyboard(buttons, text);
