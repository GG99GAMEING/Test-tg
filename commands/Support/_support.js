/*CMD
  command: /support
  help: Support menu
  need_reply: false
  auto_retry_time: 
  folder: Support
<<ANSWER
ANSWER
<<KEYBOARD
KEYBOARD
  aliases: 
CMD*/
var uid = String(user.telegramid);
var LOG = Bot.getProperty('log_channel') || '@JACK_SHOP_LOGS';

var text = '🎧 *Support Center*\n\nKaise help chahiye?';
var buttons = [
  [{title:'🎫 Create Ticket',command:'/createticket'},{title:'📋 My Tickets',command:'/mytickets'}],
  [{title:'❓ FAQ',command:'/faq'},{title:'📞 Contact Us',command:'/contact'}],
  [{title:'🚨 Report Problem',command:'/report'},{title:'🔙 Main Menu',command:'/mainmenu'}]
];
Bot.sendInlineKeyboard(buttons, text);
