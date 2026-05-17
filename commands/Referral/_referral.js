/*CMD
  command: /referral
  help: Referral hub
  need_reply: false
  auto_retry_time: 
  folder: Referral
<<ANSWER
ANSWER
<<KEYBOARD
KEYBOARD
  aliases: 
CMD*/
var uid = String(user.telegramid);
var LOG = Bot.getProperty('log_channel') || '@JACK_SHOP_LOGS';

var refBonus = Bot.getProperty('referral_bonus') || 25;
var refUsers = Bot.getProperty('ref_users_' + uid);
try { refUsers = JSON.parse(refUsers); } catch(e){ refUsers = []; }
var count = refUsers ? refUsers.length : 0;
var earned = count * parseInt(refBonus);
var refLink = 'https://t.me/JACK_SHOP_BOT?start=' + uid;
var text = '🎁 *Referral Program*\n\n' +
  '💰 Bonus: ₹' + refBonus + ' per referral\n' +
  '👥 Total Referred: ' + count + '\n' +
  '💵 Total Earned: ₹' + earned + '\n\n' +
  '🔗 *Your Link:*\n`' + refLink + '`\n\n' +
  'Apna link share karein aur ₹' + refBonus + ' earn karein har successful referral par!';
var buttons = [
  [{title:'📋 Ref Stats',command:'/ref_stats'},{title:'🔄 Ref History',command:'/ref_history'}],
  [{title:'📤 Share Link',command:'/reflink'},{title:'🔙 Main Menu',command:'/mainmenu'}]
];
Bot.sendInlineKeyboard(buttons, text);
