/*CMD
  command: /wallet_balance
  help: Wallet balance
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
Bot.sendMessage('👛 *Wallet Balance: ₹' + bal + '*\n\nAdd funds: /addfunds', {parse_mode:'Markdown'});
