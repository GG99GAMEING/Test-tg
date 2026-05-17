/*CMD
  command: /order_rating
  help: Rate order
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

var parts = message.trim().split(' ');
var orderId = parts[0]; var rating = parseInt(parts[1]);
if(!orderId || isNaN(rating) || rating < 1 || rating > 5){ Bot.sendMessage('❌ Format: /order_rating ORDER_ID RATING (1-5)'); return; }
var order = Bot.getProperty('order_' + orderId);
try { order = JSON.parse(order); } catch(e){ order = null; }
if(!order){ Bot.sendMessage('❌ Order nahi mila.'); return; }
order.rating = rating; Bot.setProperty('order_' + orderId, JSON.stringify(order), 'string');
Bot.sendMessage('⭐ Order #' + orderId + ' ko ' + rating + '/5 rating di! Thank you!');
