/*CMD
  command: /order_status
  help: Order status
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
var st = order.status || 'pending';
var statuses = {pending:'⏳ Pending — Admin review karega',confirmed:'✅ Confirmed — Packing in progress',shipped:'🚚 Shipped — On the way!',delivered:'📬 Delivered — Aap tak pahunch gaya!',cancelled:'❌ Cancelled'};
var text = '📊 *Order #' + orderId + ' Status*\n\n' + (statuses[st] || st) + '\n\n' +
  '📅 ' + new Date(order.created_at).toLocaleString('en-IN') + '\n💰 Total: ₹' + (order.total||0);
Bot.sendMessage(text, {parse_mode:'Markdown'});
