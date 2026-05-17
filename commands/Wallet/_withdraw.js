/*CMD
  command: /withdraw
  help: Withdraw funds
  need_reply: false
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

try { var bal = Libs.ResourcesLib.userRes('balance').value(); } catch(e){ var bal = 0; }
var minWithdraw = parseInt(Bot.getProperty('min_withdraw')||100);
if(bal < minWithdraw){ Bot.sendMessage('❌ Minimum ₹' + minWithdraw + ' balance hona chahiye withdraw ke liye.\n\nAapka balance: ₹' + bal); return; }
Bot.setProperty('withdraw_state_' + uid, 'awaiting_amount', 'string');
Bot.sendMessage('💸 *Withdraw Funds*\n\n💰 Available: ₹' + bal + '\n\nKitna amount withdraw karna chahte hain? Amount bhejiye:', {parse_mode:'Markdown'});
