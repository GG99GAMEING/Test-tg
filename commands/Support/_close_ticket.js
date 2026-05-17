/*CMD
  command: /close_ticket
  help: Close ticket
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

var ticketId = message.trim();
var ticket = Bot.getProperty('ticket_' + ticketId);
try { ticket = JSON.parse(ticket); } catch(e){ ticket = null; }
if(!ticket){ Bot.sendMessage('❌ Ticket nahi mila.'); return; }
ticket.status = 'closed'; ticket.closed_at = new Date().toISOString();
Bot.setProperty('ticket_' + ticketId, JSON.stringify(ticket), 'string');
Bot.sendMessage('✅ Ticket ' + ticketId + ' close kar diya gaya.');
