/*CMD
  command: /pay_upi
  help: Pay via UPI
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
var total = co.total || 0;
var upiId = Bot.getProperty('upi_id') || '';
var upiName = Bot.getProperty('upi_name') || 'JACK SHOP';
if(!upiId){ Bot.sendMessage('⚠️ UPI payment abhi available nahi hai. Admin UPI ID set nahi kiya hai. /payment se dusra option choose karein.'); return; }
var orderId = 'ORD-' + Math.floor(100000 + Math.random() * 900000);
var orderData = {
  order_id: orderId, user_id: uid, user_name: user.first_name || 'User',
  items: [], subtotal: co.subtotal || 0, shipping: co.shipping || 0,
  discount: co.discount || 0, total: total, payment_method: 'UPI',
  status: 'pending', created_at: new Date().toISOString()
};
var cartKey = (Bot.getProperty('cart_prefix')||'cart_') + uid;
var cart = Bot.getProperty(cartKey);
try { cart = JSON.parse(cart); } catch(e){ cart = {items:[]}; }
orderData.items = cart.items || [];
Bot.setProperty('order_' + orderId, JSON.stringify(orderData), 'string');
Bot.setProperty('checkout_order_id_' + uid, orderId, 'string');
co.order_id = orderId; Bot.setProperty('checkout_' + uid, JSON.stringify(co), 'string');

var text = '📱 *UPI Payment*\n\n' +
  '💰 Amount: ₹' + total + '\n' +
  '🆔 Order: #' + orderId + '\n\n' +
  '📱 *UPI ID:* `' + upiId + '`\n' +
  '🏪 Name: ' + upiName + '\n\n' +
  'Payment karne ke baad, screenshot @JACK_SHOP_BOT ko bhejein. Admin verify karega.\n\n' +
  'Ya niche diye gaye UPI app se directly pay karein.';
var buttons = [[{title:'✅ Payment Done',command:'/payment_pending'},{title:'❌ Cancel Order',command:'/checkout_cancel'}]];
Bot.sendInlineKeyboard(buttons, text);
var logMsg = '📱 *UPI Payment Initiated*\n👤 ' + (user.first_name||'User') + ' (' + uid + ')\n🆔 ' + orderId + '\n💰 ₹' + total;
Bot.sendMessage(logMsg, {chat_id: LOG, parse_mode:'Markdown'});
