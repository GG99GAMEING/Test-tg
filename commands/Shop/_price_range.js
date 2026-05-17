/*CMD
  command: /price_range
  help: Products in price range
  need_reply: true
  auto_retry_time: 
  folder: Shop
<<ANSWER
ANSWER
<<KEYBOARD
KEYBOARD
  aliases: 
CMD*/
var parts = message.trim().split('-');
if(parts.length < 2){ Bot.sendMessage('❌ Format: min-max jaise 100-500'); return; }
var minP = parseFloat(parts[0]);
var maxP = parseFloat(parts[1]);
if(isNaN(minP) || isNaN(maxP) || minP >= maxP){ Bot.sendMessage('❌ Valid range daaliye. Example: 100-500'); return; }
var prods = Bot.getProperty('products');
try { prods = JSON.parse(prods); } catch(e){ prods = {}; }
var filtered = Object.entries(prods).filter(function(e){ return e[1].is_active !== false && e[1].price >= minP && e[1].price <= maxP; });
if(filtered.length == 0){ Bot.sendMessage('😔 ₹' + minP + ' se ₹' + maxP + ' range mein koi products nahi mile.'); return; }
var text = '💰 *Products ₹' + minP + ' — ₹' + maxP + '*\n\n';
var buttons = [];
for(var i=0; i<filtered.length && i<20; i+=2){
  var row = [{title: filtered[i][1].name + ' — ₹' + filtered[i][1].price, command: '/product ' + filtered[i][0]}];
  if(filtered[i+1]) row.push({title: filtered[i+1][1].name + ' — ₹' + filtered[i+1][1].price, command: '/product ' + filtered[i+1][0]});
  buttons.push(row);
}
buttons.push([{title:'🔙 Back',command:'/shop'}]);
Bot.sendInlineKeyboard(buttons, text);
