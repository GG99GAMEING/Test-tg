/*CMD
  command: /payment_failed
  help: Payment failed
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

var orderId = Bot.getProperty('checkout_order_id_' + uid) || '';
Bot.sendMessage('❌ *Payment Failed!*\n\n' + (orderId ? 'Order #' + orderId : '') + '\n\nKripya dubara try karein: /checkout\nYa dusra payment method choose karein: /payment');
if(orderId){
  var order = Bot.getProperty('order_' + orderId);
  try { order = JSON.parse(order); } catch(e){ order = {status:'payment_failed'}; }
  order.status = 'payment_failed';
  Bot.setProperty('order_' + orderId, JSON.stringify(order), 'string');
  var logMsg = '❌ *Payment Failed*\n🆔 ' + orderId + '\n👤 ' + (user.first_name||'User') + ' (' + uid + ')';
  Bot.sendMessage(logMsg, {chat_id: LOG, parse_mode:'Markdown'});
}
