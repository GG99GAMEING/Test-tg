/*CMD
  command: /report
  help: Report problem
  need_reply: true
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

var report = message.trim();
if(report.length < 10){ Bot.sendMessage('❌ Please detail mein problem likhiye.'); return; }
Bot.sendMessage('🚨 *Report Submitted!*\n\nAdmin jald hi action lega. Thank you for helping improve JACK SHOP!', {parse_mode:'Markdown'});
var logMsg = '🚨 *User Report*\n👤 ' + (user.first_name||'User') + ' (' + uid + ')\n📝 ' + report;
Bot.sendMessage(logMsg, {chat_id: LOG, parse_mode:'Markdown'});
