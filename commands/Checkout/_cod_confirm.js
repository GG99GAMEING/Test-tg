/*CMD
  command: /cod_confirm
  help: COD confirmation
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

var co = Bot.getProperty('checkout_' + uid);
try { co = JSON.parse(co); } catch(e){ co = {}; }
var orderId = co.order_id || ('ORD-' + Math.floor(100000 + Math.random() * 900000));
var cartKey = (Bot.getProperty('cart_prefix')||'cart_') + uid;
var cart = Bot.getProperty(cartKey);
try { cart = JSON.parse(cart); } catch(e){ cart = {items:[]}; }
var addr = Bot.getProperty('checkout_address_' + uid);
try { addr = JSON.parse(addr); } catch(e){ addr = null; }
var orderData = {
  order_id: orderId, user_id: uid, user_name: user.first_name || 'User',
  items: cart.items || [], subtotal: co.subtotal || 0, shipping: co.shipping || 0,
  discount: co.discount || 0, total: co.total || 0, coupon: cart.coupon_code || '',
  payment_method: 'COD', status: 'pending', created_at: new Date().toISOString(),
  address: addr, paid: false
};
Bot.setProperty('order_' + orderId, JSON.stringify(orderData), 'string');
var totalOrders = parseInt(Bot.getProperty('total_orders')||0);
Bot.setProperty('total_orders', totalOrders + 1, 'integer');
Bot.setProperty(cartKey, JSON.stringify({items:[],discount:0,coupon_code:''}), 'string');
Bot.setProperty('checkout_' + uid, '{}', 'string');
Bot.sendMessage('📦 *COD Order Confirmed!*\n\n🆔 #' + orderId + '\n💰 Total: ₹' + (co.total||0) + '\n\nDelivery par cash payment karna hai.\nTrack: /myorders', {parse_mode:'Markdown'});
var logMsg = '📦 *COD Order*\n🆔 ' + orderId + '\n👤 ' + (user.first_name||'User') + ' (' + uid + ')\n💰 ₹' + (co.total||0);
Bot.sendMessage(logMsg, {chat_id: LOG, parse_mode:'Markdown'});
