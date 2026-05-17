/*CMD
  command: /account
  help: Account menu
  need_reply: false
  auto_retry_time: 
  folder: Account
<<ANSWER
ANSWER
<<KEYBOARD
KEYBOARD
  aliases: 
CMD*/
var uid = String(user.telegramid);
var LOG = Bot.getProperty('log_channel') || '@JACK_SHOP_LOGS';

var shopName = Bot.getProperty('shop_name') || 'JACK SHOP';
var text = '👤 *Account — ' + shopName + '*\n\n';
try { var bal = Libs.ResourcesLib.userRes('balance').value(); } catch(e){ var bal = 0; }
var points = parseInt(Bot.getProperty('user_loyalty_points_' + uid)||0);
var vip = parseInt(Bot.getProperty('user_vip_' + uid)||0);
text += '💰 Wallet: ₹' + bal + '\n⭐ Points: ' + points + '\n👑 VIP: Level ' + vip + '\n';
var buttons = [
  [{title:'👤 Profile',command:'/profile'},{title:'✏️ Edit Profile',command:'/edit_name'}],
  [{title:'📍 Addresses',command:'/myaddress'},{title:'👑 My VIP',command:'/myvip'}],
  [{title:'⭐ Loyalty Points',command:'/loyalty_points'},{title:'🔔 Notifications',command:'/notifications'}],
  [{title:'🌐 Language',command:'/change_lang'},{title:'🔙 Main Menu',command:'/mainmenu'}]
];
Bot.sendInlineKeyboard(buttons, text);
