/*CMD
  command: /mainmenu
  help: Main menu
  need_reply: false
  auto_retry_time: 
  folder: 
<<ANSWER
ANSWER
<<KEYBOARD
KEYBOARD
  aliases: 
CMD*/
var uid = String(user.telegramid);
var banned = Bot.getProperty('banned_' + uid);
if(banned){ Bot.sendMessage('⛔ Aapka account ban hai.'); return; }
var shopName = Bot.getProperty('shop_name') || 'JACK SHOP';
var buttons = [
  [{title:'🛍️ Shop',command:'/shop'},{title:'🛒 Cart',command:'/cart'}],
  [{title:'📦 Orders',command:'/myorders'},{title:'👛 Wallet',command:'/wallet'}],
  [{title:'👤 Account',command:'/account'},{title:'🔍 Search',command:'/search'}],
  [{title:'❤️ Wishlist',command:'/wishlist'},{title:'🎁 Referral',command:'/referral'}],
  [{title:'🎰 Daily Reward',command:'/daily_reward'},{title:'🆘 Support',command:'/support'}]
];
if(uid == '6054420463'){ buttons.push([{title:'⚙️ Admin Panel',command:'/admin'}]); }
Bot.sendInlineKeyboard(buttons, '🏠 *Main Menu*\n\n' + shopName + ' - Aapki pehli pasand! 🇮🇳');
