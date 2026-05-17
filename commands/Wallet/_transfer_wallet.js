/*CMD
  command: /transfer_wallet
  help: Transfer to user
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
var targetUid = parts[0]; var amount = parseFloat(parts[1]);
if(!targetUid || isNaN(amount) || amount < 1){ Bot.sendMessage('❌ Format: /transfer_wallet USER_ID AMOUNT'); return; }
if(targetUid == uid){ Bot.sendMessage('❌ Khud ko transfer nahi kar sakte!'); return; }
try { var bal = Libs.ResourcesLib.userRes('balance').value(); } catch(e){ var bal = 0; }
if(amount > bal){ Bot.sendMessage('❌ Insufficient balance. Available: ₹' + bal); return; }
try { Libs.ResourcesLib.userRes('balance').remove(amount); Libs.ResourcesLib.userRes('balance', targetUid).add(amount); } catch(e){ Bot.sendMessage('❌ Transfer fail.'); return; }
Bot.sendMessage('✅ ₹' + amount + ' user ' + targetUid + ' ko transfer kar diya gaya!');
var logMsg = '💸 *Wallet Transfer*\n👤 ' + uid + ' → ' + targetUid + '\n💰 ₹' + amount;
Bot.sendMessage(logMsg, {chat_id: LOG, parse_mode:'Markdown'});
