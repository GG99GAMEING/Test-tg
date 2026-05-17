/*CMD
  command: /search_by_price
  help: Search by price range
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

var parts = message.trim().split(' ');
var minP = parseFloat(parts[0]); var maxP = parseFloat(parts[1]);
if(isNaN(minP) || isNaN(maxP)){ Bot.sendMessage('❌ Format: /search_by_price MIN MAX'); return; }
var prods = Bot.getProperty('products');
try { prods = JSON.parse(prods); } catch(e){ prods = {}; }
var results = Object.entries(prods).filter(function(e){ return e[1].is_active !== false && e[1].price >= minP && e[1].price <= maxP; });
results.sort(function(a,b){ return a[1].price - b[1].price; });
if(results.length == 0){ Bot.sendMessage('💰 No products in ₹' + minP + ' — ₹' + maxP); return; }
var text = '💰 *₹' + minP + ' — ₹' + maxP + '*\n' + results.length + ' products\n\n';
var buttons = [];
results.slice(0,10).forEach(function(e){ text += '• ' + e[1].name + ' — ₹' + e[1].price + '\n'; buttons.push([{title:e[1].name+' — ₹'+e[1].price,command:'/product '+e[0]}]); });
buttons.push([{title:'🔙 Shop',command:'/shop'}]);
Bot.sendInlineKeyboard(buttons, text);
