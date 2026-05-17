/*CMD
  command: /pay_razorpay
  help: Pay via Razorpay
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
var razorpayKey = Bot.getProperty('razorpay_key_id') || '';
var razorpaySecret = Bot.getProperty('razorpay_key_secret') || '';
if(!razorpayKey || !razorpaySecret){ Bot.sendMessage('⚠️ Razorpay payment abhi available nahi hai. Admin keys set nahi ki hain. /payment se dusra option choose karein.'); return; }
var orderId = 'ORD-' + Math.floor(100000 + Math.random() * 900000);
co.order_id = orderId; co.payment_method = 'Razorpay';
Bot.setProperty('checkout_' + uid, JSON.stringify(co), 'string');

var text = '💳 *Razorpay Payment*\n\n' +
  '💰 Amount: ₹' + total + '\n' +
  '🆔 Order: #' + orderId + '\n\n' +
  '🔗 Neeche diye gaye link se payment karein. Payment complete hone ke baad order automatically confirm ho jayega.';
var buttons = [
  [{title:'💳 Pay via Razorpay',url:'https://rzp.io/l/jackshop-pay'}],
  [{title:'✅ Verify Payment',command:'/payment_pending'},{title:'❌ Cancel',command:'/checkout_cancel'}]
];
Bot.sendInlineKeyboard(buttons, text);
var logMsg = '💳 *Razorpay Payment Initiated*\n👤 ' + (user.first_name||'User') + ' (' + uid + ')\n🆔 ' + orderId + '\n💰 ₹' + total;
Bot.sendMessage(logMsg, {chat_id: LOG, parse_mode:'Markdown'});
