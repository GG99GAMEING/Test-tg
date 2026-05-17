/*CMD
  command: /category_products
  help: Products by category
  need_reply: true
  auto_retry_time: 
  folder: Shop
<<ANSWER
ANSWER
<<KEYBOARD
KEYBOARD
  aliases: 
CMD*/
var catId = message.trim();
var prods = Bot.getProperty('products');
try { prods = JSON.parse(prods); } catch(e){ prods = {}; }
var cats = Bot.getProperty('categories');
try { cats = JSON.parse(cats); } catch(e){ cats = {}; }
var filtered = Object.entries(prods).filter(function(e){ return e[1].category == catId && e[1].is_active !== false; });
var catName = cats[catId] ? cats[catId].name : catId;
if(filtered.length == 0){ Bot.sendMessage('📂 *' + catName + '* mein abhi koi products nahi hain.'); return; }
var text = '📂 *' + catName + '* — ' + filtered.length + ' products\n\n';
var buttons = [];
for(var i=0; i<filtered.length && i<20; i+=2){
  var row = [{title: filtered[i][1].name + ' — ₹' + filtered[i][1].price, command: '/product ' + filtered[i][0]}];
  if(filtered[i+1]) row.push({title: filtered[i+1][1].name + ' — ₹' + filtered[i+1][1].price, command: '/product ' + filtered[i+1][0]});
  buttons.push(row);
}
buttons.push([{title:'🔙 Back to Categories',command:'/shop'}]);
Bot.sendInlineKeyboard(buttons, text);
