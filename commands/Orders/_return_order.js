/*CMD
  command: /return_order
  help: Initiate return
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
if(order.status != 'delivered'){ Bot.sendMessage('❌ Sirf delivered orders return ho sakte hain.'); return; }
order.status = 'return_requested'; order.return_requested_at = new Date().toISOString();
Bot.setProperty('order_' + orderId, JSON.stringify(order), 'string');
Bot.sendMessage('🔄 *Return Request Submitted*\n\n🆔 #' + orderId + '\n\nAdmin aapki return request review karega. Refund 3-5 business days mein process hoga.');
var logMsg = '🔄 *Return Request*\n🆔 ' + orderId + '\n👤 ' + (user.first_name||'User') + ' (' + uid + ')';
Bot.sendMessage(logMsg, {chat_id: LOG, parse_mode:'Markdown'});
