/*CMD
  command: /best_sellers
  help: Best selling products
  need_reply: false
  auto_retry_time: 
  folder: Shop
<<ANSWER
ANSWER
<<KEYBOARD
KEYBOARD
  aliases: 
CMD*/
var prods = Bot.getProperty('products');
try { prods = JSON.parse(prods); } catch(e){ prods = {}; }
var sorted = Object.entries(prods).filter(function(e){ return e[1].is_active !== false; });
sorted.sort(function(a,b){ return (b[1].order_count || 0) - (a[1].order_count || 0); });
var top10 = sorted.slice(0, 10);
if(top10.length == 0){ Bot.sendMessage('🏆 Abhi koi best sellers nahi hain.'); return; }
var text = '🏆 *Best Sellers*\n\n';
var buttons = [];
top10.forEach(function(e){
  text += '• ' + e[1].name + ' — ₹' + e[1].price + ' (' + (e[1].order_count || 0) + ' sold)\n';
  buttons.push([{title: e[1].name + ' — ₹' + e[1].price, command: '/product ' + e[0]}]);
});
buttons.push([{title:'🏠 Main Menu',command:'/mainmenu'}]);
Bot.sendInlineKeyboard(buttons, text);
