/*CMD
  command: /order_placed
  help: Order placed confirmation
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

var orderId = Bot.getProperty('checkout_order_id_' + uid) || params || '';
if(!orderId){ Bot.sendMessage('🎉 Aapka order place ho chuka hai! /myorders se track karein.'); return; }
var order = Bot.getProperty('order_' + orderId);
try { order = JSON.parse(order); } catch(e){ order = null; }
var text = '🎉 *Order Placed Successfully!*\n\n🆔 #' + orderId + '\n';
if(order){ text += '📅 ' + new Date(order.created_at).toLocaleString('en-IN') + '\n💰 Total: ₹' + (order.total||0) + '\n📦 Status: ' + (order.status||'Pending') + '\n'; }
text += '\nTrack order: /myorders\nInvoice: /order_invoice ' + orderId;
Bot.sendMessage(text, {parse_mode:'Markdown'});
