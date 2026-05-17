/*CMD
  command: /payment_pending
  help: Payment pending status
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
if(!orderId){ Bot.sendMessage('❌ Koi pending payment nahi mili.'); return; }
var order = Bot.getProperty('order_' + orderId);
try { order = JSON.parse(order); } catch(e){ order = null; }
if(!order){ Bot.sendMessage('❌ Order nahi mila.'); return; }
var text = '⏳ *Payment Pending*\n\n🆔 #' + orderId + '\n💰 ₹' + (order.total||0) + '\n💳 Method: ' + (order.payment_method||'N/A') + '\n\nPayment complete hone ke baad, admin verify karega.';
var buttons = [[{title:'🔄 Resend Payment Link',command:'/razorpay_link'},{title:'🆘 Contact Support',command:'/support'}],[{title:'❌ Cancel Order',command:'/checkout_cancel'}]];
Bot.sendInlineKeyboard(buttons, text);
