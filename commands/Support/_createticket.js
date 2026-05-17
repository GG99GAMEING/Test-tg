/*CMD
  command: /createticket
  help: Create support ticket
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

var issue = message.trim();
if(issue.length < 10){ Bot.sendMessage('❌ Please apni problem detail mein likhiye (minimum 10 characters).'); return; }
var ticketId = 'TKT-' + Math.floor(10000+Math.random()*90000);
var ticket = {
  id: ticketId, user_id: uid, user_name: user.first_name||'User',
  issue: issue, status: 'open', created_at: new Date().toISOString(),
  messages: [{from:'user', text:issue, date:new Date().toISOString()}]
};
Bot.setProperty('ticket_' + ticketId, JSON.stringify(ticket), 'string');
Bot.sendMessage('🎫 *Ticket Created!*\n\n🆔 ' + ticketId + '\n📝 ' + issue + '\n\nAdmin jald hi reply karega. Status check karein: /mytickets', {parse_mode:'Markdown'});
var logMsg = '🎫 *New Ticket*\n🆔 ' + ticketId + '\n👤 ' + (user.first_name||'User') + ' (' + uid + ')\n📝 ' + issue;
Bot.sendMessage(logMsg, {chat_id: LOG, parse_mode:'Markdown'});
