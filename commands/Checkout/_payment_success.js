/*CMD
  command: /payment_success
  help: Payment success handler
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

var orderId = (params && params != '') ? params : Bot.getProperty('checkout_order_id_' + uid);
if(!orderId){ orderId = message ? message.trim() : ''; }
var co = Bot.getProperty('checkout_' + uid);
try { co = JSON.parse(co); } catch(e){ co = {}; }
var cartKey = (Bot.getProperty('cart_prefix')||'cart_') + uid;
var cart = Bot.getProperty(cartKey);
try { cart = JSON.parse(cart); } catch(e){ cart = {items:[]}; }
var addr = Bot.getProperty('checkout_address_' + uid);
try { addr = JSON.parse(addr); } catch(e){ addr = null; }
var orderData = {
  order_id: orderId, user_id: uid, user_name: user.first_name || 'User',
  items: cart.items || [], subtotal: co.subtotal || 0, shipping: co.shipping || 0,
  discount: co.discount || 0, total: co.total || 0, coupon: cart.coupon_code || '',
  payment_method: co.payment_method || 'Wallet', status: 'confirmed',
  created_at: new Date().toISOString(), address: addr, paid: true
};
Bot.setProperty('order_' + orderId, JSON.stringify(orderData), 'string');
var totalOrders = parseInt(Bot.getProperty('total_orders')||0);
Bot.setProperty('total_orders', totalOrders + 1, 'integer');
var totalRev = parseFloat(Bot.getProperty('total_revenue')||0);
Bot.setProperty('total_revenue', totalRev + (co.total||0), 'float');
Bot.setProperty(cartKey, JSON.stringify({items:[],discount:0,coupon_code:''}), 'string');
Bot.setProperty('checkout_' + uid, '{}', 'string');

// Loyalty points
var loyaltyRate = parseInt(Bot.getProperty('loyalty_rate')||100);
var pointsEarned = Math.floor((co.total||0) / loyaltyRate);
var currentPoints = parseInt(Bot.getProperty('user_loyalty_points_' + uid)||0);
Bot.setProperty('user_loyalty_points_' + uid, currentPoints + pointsEarned, 'integer');

// Total spent
var totalSpent = parseFloat(Bot.getProperty('user_total_spent_' + uid)||0);
Bot.setProperty('user_total_spent_' + uid, totalSpent + (co.total||0), 'float');

// VIP check
var vipLevels = Bot.getProperty('vip_levels');
try { vipLevels = JSON.parse(vipLevels); } catch(e){ vipLevels = [1000,5000,10000,25000,50000]; }
var newTotal = totalSpent + (co.total||0);
var newVip = 0;
for(var i=vipLevels.length-1; i>=0; i--){ if(newTotal >= vipLevels[i]){ newVip = i+1; break; } }
Bot.setProperty('user_vip_' + uid, newVip, 'integer');

var text = '🎉 *Order Confirmed!*\n\n🆔 #' + orderId + '\n💰 Total: ₹' + (co.total||0) + '\n💳 Payment: ' + (co.payment_method||'Wallet') + '\n⭐ Loyalty Points Earned: ' + pointsEarned;
if(newVip > 0){ text += '\n👑 VIP Level: ' + newVip; }
text += '\n\nOrders track karne ke liye: /myorders';
Bot.sendMessage(text, {parse_mode:'Markdown'});

var logMsg = '✅ *Order Confirmed!*\n🆔 ' + orderId + '\n👤 ' + (user.first_name||'User') + ' (' + uid + ')\n💰 ₹' + (co.total||0) + '\n💳 ' + (co.payment_method||'Wallet') + '\n📍 ' + (addr ? (addr.line1||'') + ', ' + (addr.city||'') : 'N/A');
Bot.sendMessage(logMsg, {chat_id: LOG, parse_mode:'Markdown'});
