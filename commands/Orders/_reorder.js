/*CMD
  command: /reorder
  help: Reorder items
  need_reply: true
  auto_retry_time: 
  folder: Orders
<<ANSWER
ANSWER
<<KEYBOARD
KEYBOARD
  aliases: 
CMD*/
var uid = String(user.telegramid);
var LOG = Bot.getProperty('log_channel') || '@JACK_SHOP_LOGS';

var orderId = message.trim();
var order = Bot.getProperty('order_' + orderId);
try { order = JSON.parse(order); } catch(e){ order = null; }
if(!order || !order.items || order.items.length == 0){ Bot.sendMessage('❌ Order nahi mila ya items nahi hain.'); return; }
var prods = Bot.getProperty('products');
try { prods = JSON.parse(prods); } catch(e){ prods = {}; }
var cartKey = (Bot.getProperty('cart_prefix')||'cart_') + uid;
var cart = {items:[], discount:0, coupon_code:''};
order.items.forEach(function(item){
  var p = prods[item.product_id];
  if(p && p.is_active !== false){
    cart.items.push({product_id: item.product_id, qty: item.qty||1, price: p.price, variant: item.variant||'', size: item.size||'', color: item.color||''});
  }
});
Bot.setProperty(cartKey, JSON.stringify(cart), 'string');
Bot.sendMessage('🔄 *Reordered!*\n\n' + cart.items.length + ' items order #' + orderId + ' se cart mein add kar diye gaye hain.\n\nView: /cart');
