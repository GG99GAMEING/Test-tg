/*CMD
  command: /addfunds
  help: Add funds
  need_reply: true
  auto_retry_time: 
  folder: Wallet
<<ANSWER
ANSWER
<<KEYBOARD
KEYBOARD
  aliases: 
CMD*/
var uid = String(user.telegramid);
var LOG = Bot.getProperty('log_channel') || '@JACK_SHOP_LOGS';

var amount = parseFloat(message.trim());
if(isNaN(amount) || amount < 10){ Bot.sendMessage('❌ Minimum ₹10 add karna hoga. Valid amount daaliye.'); return; }
Bot.setProperty('addfunds_' + uid, amount, 'float');
var buttons = [
  [{title:'📱 Pay via UPI',command:'/wallet_topup ' + amount}],
  [{title:'💳 Pay via Razorpay',command:'/wallet_topup ' + amount}],
  [{title:'❌ Cancel',command:'/wallet'}]
];
Bot.sendInlineKeyboard(buttons, '💰 *Add ₹' + amount + ' to Wallet*\n\nPayment method choose karein:');
