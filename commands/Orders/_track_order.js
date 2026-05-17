/*CMD
  command: /track_order
  help: Track order
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
if(!order.tracking){ Bot.sendMessage('📮 #' + orderId + ' ka abhi tak tracking number assign nahi hua hai. Order shipped hone ke baad tracking milega.'); return; }
Bot.sendMessage('📮 *Tracking — #' + orderId + '*\n\n🔢 AWB: ' + order.tracking + '\n\nTracking URL: ' + (order.tracking_url || 'N/A') + '\n📦 Status: ' + (order.status||'pending'), {parse_mode:'Markdown'});
