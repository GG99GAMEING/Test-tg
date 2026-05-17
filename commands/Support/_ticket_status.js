/*CMD
  command: /ticket_status
  help: Ticket status
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
var text = '🎫 *' + ticketId + '*\n\n' +
  '📅 ' + new Date(ticket.created_at).toLocaleString('en-IN') + '\n' +
  '📊 Status: ' + (ticket.status||'open') + '\n' +
  '📝 Issue: ' + (ticket.issue||'N/A') + '\n\n';
if(ticket.messages){
  ticket.messages.forEach(function(m){
    text += (m.from=='user'?'👤 You':'👨‍💼 Admin') + ': ' + m.text + '\n';
  });
}
var buttons = [[{title:'🆕 New Message',command:'/reply_ticket ' + ticketId}]];
if(ticket.status == 'open'){ buttons[0].push({title:'❌ Close',command:'/close_ticket ' + ticketId}); }
Bot.sendInlineKeyboard(buttons, text);
