/*CMD
  command: /withdraw_request
  help: Withdrawal request
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

var parts = message.trim().split(' ');
var amount = parseFloat(parts[0]);
var upi = parts.slice(1).join(' ') || Bot.getProperty('user_phone_' + uid) || '';
if(isNaN(amount) || amount < 100){ Bot.sendMessage('❌ Minimum ₹100 withdraw kar sakte hain.'); return; }
try { var bal = Libs.ResourcesLib.userRes('balance').value(); } catch(e){ var bal = 0; }
if(amount > bal){ Bot.sendMessage('❌ Insufficient balance. Available: ₹' + bal); return; }
try { Libs.ResourcesLib.userRes('balance').remove(amount); } catch(e){ Bot.sendMessage('❌ Withdraw fail.'); return; }
var reqId = 'WD-' + Math.floor(10000+Math.random()*90000);
var wd = {id:reqId, user_id:uid, user_name:user.first_name||'User', amount:amount, upi:upi, status:'pending', date:new Date().toISOString()};
Bot.setProperty('withdraw_' + reqId, JSON.stringify(wd), 'string');
Bot.sendMessage('💸 *Withdraw Request Submitted!*\n\n🆔 ' + reqId + '\n💰 ₹' + amount + '\n📱 UPI: ' + upi + '\n\nAdmin 24-48 hours mein process karega.', {parse_mode:'Markdown'});
var logMsg = '💸 *Withdraw Request*\n🆔 ' + reqId + '\n👤 ' + (user.first_name||'User') + ' (' + uid + ')\n💰 ₹' + amount + '\n📱 ' + upi;
Bot.sendMessage(logMsg, {chat_id: LOG, parse_mode:'Markdown'});
