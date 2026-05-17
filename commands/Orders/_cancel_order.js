/*CMD
  command: /cancel_order
  help: Cancel order
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
if(order.status != 'pending' && order.status != 'confirmed'){ Bot.sendMessage('❌ Sirf pending ya confirmed orders cancel ho sakte hain. Current status: ' + (order.status||'N/A')); return; }
order.status = 'cancelled'; order.cancelled_at = new Date().toISOString();
Bot.setProperty('order_' + orderId, JSON.stringify(order), 'string');
if(order.paid){
  try { Libs.ResourcesLib.userRes('balance').add(order.total || 0); } catch(e){}
  Bot.sendMessage('✅ Order #' + orderId + ' cancel kar diya gaya.\n💰 Refund: ₹' + (order.total||0) + ' wallet mein add kar diya gaya.', {parse_mode:'Markdown'});
} else {
  Bot.sendMessage('✅ Order #' + orderId + ' cancel kar diya gaya.');
}
var logMsg = '❌ *Order Cancelled*\n🆔 ' + orderId + '\n👤 ' + (user.first_name||'User') + ' (' + uid + ')\n💰 ₹' + (order.total||0);
Bot.sendMessage(logMsg, {chat_id: LOG, parse_mode:'Markdown'});
