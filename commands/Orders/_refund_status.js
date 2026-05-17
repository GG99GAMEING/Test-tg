/*CMD
  command: /refund_status
  help: Refund status
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
if(!order){ Bot.sendMessage('❌ Order nahi mila.'); return; }
var refunded = order.refunded || false;
var status = refunded ? '✅ Refund Complete! Amount: ₹' + (order.total||0) : '⏳ Refund Processing...';
Bot.sendMessage('💰 *Refund Status — #' + orderId + '*\n\n' + status + '\n\nOrder Total: ₹' + (order.total||0), {parse_mode:'Markdown'});
