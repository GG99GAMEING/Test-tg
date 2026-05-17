/*CMD
  command: /under_price
  help: Products under price
  need_reply: true
  auto_retry_time: 
  folder: Shop
<<ANSWER
ANSWER
<<KEYBOARD
KEYBOARD
  aliases: 
CMD*/
var maxPrice = parseFloat(message.trim());
if(isNaN(maxPrice) || maxPrice <= 0){ Bot.sendMessage('❌ Please valid price daaliye, jaise: 500'); return; }
var prods = Bot.getProperty('products');
try { prods = JSON.parse(prods); } catch(e){ prods = {}; }
var filtered = Object.entries(prods).filter(function(e){ return e[1].is_active !== false && e[1].price <= maxPrice; });
filtered.sort(function(a,b){ return a[1].price - b[1].price; });
if(filtered.length == 0){ Bot.sendMessage('😔 ₹' + maxPrice + ' se kam koi products nahi mile.'); return; }
var text = '💰 *Products Under ₹' + maxPrice + '*\n\n';
var buttons = [];
for(var i=0; i<filtered.length && i<20; i+=2){
  var row = [{title: filtered[i][1].name + ' — ₹' + filtered[i][1].price, command: '/product ' + filtered[i][0]}];
  if(filtered[i+1]) row.push({title: filtered[i+1][1].name + ' — ₹' + filtered[i+1][1].price, command: '/product ' + filtered[i+1][0]});
  buttons.push(row);
}
buttons.push([{title:'🔙 Back',command:'/shop'}]);
Bot.sendInlineKeyboard(buttons, text);
