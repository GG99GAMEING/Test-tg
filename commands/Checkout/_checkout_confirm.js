/*CMD
  command: /checkout_confirm
  help: Confirm order
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
var addr = Bot.getProperty('checkout_address_' + uid);
try { addr = JSON.parse(addr); } catch(e){ addr = null; }
if(!addr || !addr.line1){ Bot.sendMessage('📍 Pehle address daaliye: /checkout'); return; }
var text = '✅ *Order Confirmation*\n\n';
text += '💰 Total: ₹' + (co.total || 0) + '\n';
text += '📍 ' + addr.line1;
if(addr.city) text += ', ' + addr.city;
if(addr.state) text += ', ' + addr.state;
if(addr.pincode) text += ' — ' + addr.pincode;
text += '\n\nPayment option choose karein:';
co.stage = 'payment'; Bot.setProperty('checkout_' + uid, JSON.stringify(co), 'string');
var buttons = [
  [{title:'📱 UPI',command:'/pay_upi'},{title:'💳 Razorpay',command:'/pay_razorpay'}],
  [{title:'📦 COD',command:'/pay_cod'},{title:'👛 Wallet',command:'/pay_wallet'}],
  [{title:'❌ Cancel',command:'/checkout_cancel'}]
];
Bot.sendInlineKeyboard(buttons, text);
