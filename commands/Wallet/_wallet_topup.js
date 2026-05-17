/*CMD
  command: /wallet_topup
  help: Wallet topup
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

var amount = parseFloat(message.trim().split(' ')[0]) || parseFloat(Bot.getProperty('addfunds_' + uid)) || 0;
if(amount < 10){ Bot.sendMessage('❌ Invalid amount.'); return; }
Bot.setProperty('addfunds_' + uid, amount, 'float');
var upiId = Bot.getProperty('upi_id') || '';
var text = '💰 *Wallet Topup — ₹' + amount + '*\n\n';
if(upiId){ text += '📱 UPI ID: `' + upiId + '`\nNaam: ' + (Bot.getProperty('upi_name')||'JACK SHOP') + '\n\n'; }
text += 'Payment ke baad admin verify karega aur balance add ho jayega.\n\nTransaction ID ya screenshot bhejein verify karwane ke liye.';
Bot.sendMessage(text, {parse_mode:'Markdown'});
var logMsg = '💰 *Wallet Topup Initiated*\n👤 ' + (user.first_name||'User') + ' (' + uid + ')\n💰 ₹' + amount;
Bot.sendMessage(logMsg, {chat_id: LOG, parse_mode:'Markdown'});
