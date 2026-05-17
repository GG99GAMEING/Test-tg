/*CMD
  command: /search
  help: Search products
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
if(query.length < 2){ Bot.sendMessage('🔍 Kam se kam 2 characters search karein.'); return; }
var prods = Bot.getProperty('products');
try { prods = JSON.parse(prods); } catch(e){ prods = {}; }
var results = Object.entries(prods).filter(function(e){
  var p = e[1];
  if(p.is_active === false) return false;
  var haystack = (p.name||'') + ' ' + (p.description||'') + ' ' + (p.brand||'') + ' ' + (p.tags||[]).join(' ');
  return haystack.toLowerCase().indexOf(query) >= 0;
});
// Save search
var history = Bot.getProperty('search_history_' + uid);
try { history = JSON.parse(history); } catch(e){ history = []; }
if(!history) history = [];
history.unshift(query);
if(history.length > 5) history = history.slice(0,5);
Bot.setProperty('search_history_' + uid, JSON.stringify(history), 'string');

if(results.length == 0){ Bot.sendMessage('🔍 *"' + query + '"* ke liye koi results nahi mile.', {parse_mode:'Markdown'}); return; }
var text = '🔍 *Search Results: "' + query + '"*\n\n' + results.length + ' products found\n\n';
var buttons = [];
for(var i=0; i<Math.min(results.length, 20); i+=2){
  var row = [{title: results[i][1].name + ' — ₹' + results[i][1].price, command: '/product ' + results[i][0]}];
  if(results[i+1]) row.push({title: results[i+1][1].name + ' — ₹' + results[i+1][1].price, command: '/product ' + results[i+1][0]});
  buttons.push(row);
}
buttons.push([{title:'🔙 Shop',command:'/shop'}]);
Bot.sendInlineKeyboard(buttons, text);
