/*CMD
  command: /search_history
  help: Search history
  need_reply: false
  auto_retry_time: 
  folder: Search
<<ANSWER
ANSWER
<<KEYBOARD
KEYBOARD
  aliases: 
CMD*/
var uid = String(user.telegramid);
var LOG = Bot.getProperty('log_channel') || '@JACK_SHOP_LOGS';

var history = Bot.getProperty('search_history_' + uid);
try { history = JSON.parse(history); } catch(e){ history = []; }
if(!history || history.length == 0){ Bot.sendMessage('🔍 Abhi tak koi searches nahi hain.'); return; }
var text = '🔍 *Search History*\n\n';
history.forEach(function(h, i){ text += (i+1) + '. ' + h + '\n'; });
Bot.sendMessage(text, {parse_mode:'Markdown'});
