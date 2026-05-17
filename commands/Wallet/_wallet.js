/*CMD
  command: /wallet
  help: Wallet menu
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
var text = '👛 *Wallet — JACK SHOP*\n\n💰 Balance: ₹' + bal + '\n\nKya karna chahte hain?';
var buttons = [
  [{title:'➕ Add Funds',command:'/addfunds'},{title:'📊 History',command:'/wallet_history'}],
  [{title:'💸 Withdraw',command:'/withdraw'},{title:'📋 Statement',command:'/wallet_statement'}],
  [{title:'🔙 Main Menu',command:'/mainmenu'}]
];
Bot.sendInlineKeyboard(buttons, text);
