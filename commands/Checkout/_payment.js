/*CMD
  command: /payment
  help: Payment options
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
var buttons = [
  [{title:'📱 UPI Pay — ₹' + total,command:'/pay_upi'}],
  [{title:'💳 Razorpay — ₹' + total,command:'/pay_razorpay'}],
  [{title:'📦 Cash on Delivery',command:'/pay_cod'}],
  [{title:'👛 Wallet Pay — ₹' + total,command:'/pay_wallet'}],
  [{title:'❌ Cancel',command:'/checkout_cancel'}]
];
Bot.sendInlineKeyboard(buttons, '💳 *Payment Method Choose Karein*\n\nTotal Amount: ₹' + total);
