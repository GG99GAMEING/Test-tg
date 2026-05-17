/*CMD
  command: /search_by_brand
  help: Search by brand
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

var brand = message.trim().toLowerCase();
var prods = Bot.getProperty('products');
try { prods = JSON.parse(prods); } catch(e){ prods = {}; }
var results = Object.entries(prods).filter(function(e){ return e[1].is_active !== false && (e[1].brand||'').toLowerCase().indexOf(brand) >= 0; });
if(results.length == 0){ Bot.sendMessage('🏷️ Brand "' + brand + '" ke products nahi mile.'); return; }
var text = '🏷️ *' + brand.toUpperCase() + '* — ' + results.length + ' products\n\n';
var buttons = [];
results.slice(0,10).forEach(function(e){ text += '• ' + e[1].name + ' — ₹' + e[1].price + '\n'; buttons.push([{title:e[1].name+' — ₹'+e[1].price,command:'/product '+e[0]}]); });
buttons.push([{title:'🔙 Shop',command:'/shop'}]);
Bot.sendInlineKeyboard(buttons, text);
