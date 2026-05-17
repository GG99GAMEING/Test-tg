/*CMD
  command: /contact
  help: Contact info
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

Bot.sendMessage('📞 *Contact Us*\n\n' +
  '👨‍💼 Admin: @JACK_SHOP_BOT\n' +
  '📧 Email: support@jackshop.in\n' +
  '🕐 Hours: 10 AM — 8 PM IST (Mon-Sat)\n' +
  '📢 Channel: @JACK_SHOP_LOGS\n\n' +
  'Urgent issue? /createticket se ticket create karein.', {parse_mode:'Markdown'});
