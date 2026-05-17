/*CMD
  command: /searchresults
  help: Search results (paginated)
  need_reply: true
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

var query = message.trim().toLowerCase();
var prods = Bot.getProperty('products');
try { prods = JSON.parse(prods); } catch(e){ prods = {}; }
var results = Object.entries(prods).filter(function(e){ return e[1].is_active !== false && (e[1].name||'').toLowerCase().indexOf(query) >= 0; });
if(results.length == 0){ Bot.sendMessage('🔍 No results.'); return; }
var text = '🔍 *' + query + '* — ' + results.length + ' results\n\n';
var start = 0; var page = params && params > 0 ? parseInt(params) : 0;
start = Math.min(page * 5, results.length - 1);
results.slice(start, start + 5).forEach(function(e, i){ text += (i+1) + '. ' + e[1].name + ' — ₹' + e[1].price + '\n'; });
var buttons = [];
results.slice(start, start + 5).forEach(function(e){ buttons.push([{title: e[1].name + ' — ₹' + e[1].price, command: '/product ' + e[0]}]); });
if(start + 5 < results.length){ buttons.push([{title:'➡️ Next Page',command:'/searchresults ' + query + ' ' + (page+1)}]); }
if(page > 0){ buttons.push([{title:'⬅️ Prev Page',command:'/searchresults ' + query + ' ' + (page-1)}]); }
Bot.sendInlineKeyboard(buttons, text);
