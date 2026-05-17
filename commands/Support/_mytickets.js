/*CMD
  command: /mytickets
  help: My tickets
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

var tickets = Bot.getProperty('tickets');
try { tickets = JSON.parse(tickets); } catch(e){ tickets = {}; }
var myTickets = Object.entries(tickets).filter(function(e){ return String(e[1].user_id) == uid; });
myTickets.sort(function(a,b){ return (b[1].created_at||'').localeCompare(a[1].created_at||''); });
if(myTickets.length == 0){ Bot.sendMessage('🎫 Abhi tak koi tickets nahi hain.'); return; }
var text = '🎫 *My Tickets* (' + myTickets.length + ')\n\n';
var buttons = [];
myTickets.forEach(function(e){
  var st = e[1].status || 'open';
  text += '• ' + e[0] + ' [' + st + '] ' + ((e[1].issue||'').substring(0,30)) + '...\n';
  buttons.push([{title: e[0] + ' — ' + st, command: '/ticket_status ' + e[0]}]);
});
buttons.push([{title:'🔙 Support',command:'/support'}]);
Bot.sendInlineKeyboard(buttons, text);
