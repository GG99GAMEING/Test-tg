/*CMD
  command: /shop
  help: Browse shop categories
  need_reply: false
  auto_retry_time: 
  folder: Shop
<<ANSWER
ANSWER
<<KEYBOARD
KEYBOARD
  aliases: /browse
CMD*/
var uid = String(user.telegramid);
var banned = Bot.getProperty('banned_' + uid);
if(banned){ Bot.sendMessage('⛔ Aapka account ban hai.'); return; }
var maint = Bot.getProperty('maintenance');
if(maint == 'true' && uid != '6054420463'){ Bot.sendMessage('🔧 Maintenance mode on hai. Baad mein aayein.'); return; }

var cats = Bot.getProperty('categories');
try { cats = JSON.parse(cats); } catch(e){ cats = {}; }

if(Object.keys(cats).length == 0){
  Bot.sendMessage('😔 Abhi tak koi category add nahi hui hai. Admin se contact karein.');
  return;
}

var buttons = [];
var entries = Object.entries(cats).filter(function(e){ return e[1].is_active !== false; });
for(var i=0; i<entries.length; i+=2){
  var row = [{title: (entries[i][1].emoji || '📂') + ' ' + entries[i][1].name, command: '/category_products ' + entries[i][0]}];
  if(entries[i+1]) row.push({title: (entries[i+1][1].emoji || '📂') + ' ' + entries[i+1][1].name, command: '/category_products ' + entries[i+1][0]});
  buttons.push(row);
}
buttons.push([{title:'🔥 Flash Sale',command:'/flash_sale'},{title:'🏆 Best Sellers',command:'/best_sellers'}]);
buttons.push([{title:'🆕 New Arrivals',command:'/new_arrivals'},{title:'💎 Featured',command:'/featured'}]);
buttons.push([{title:'🎯 Deals',command:'/deals'},{title:'💰 Under Price',command:'/under_price'}]);
buttons.push([{title:'🔍 Search',command:'/search'},{title:'🏠 Main Menu',command:'/mainmenu'}]);

Bot.sendInlineKeyboard(buttons, '🛍️ *JACK SHOP — Categories*\n\nKaunsi category mein jaana hai? Neeche se choose karein!');
