/*CMD
  command: /deals
  help: Deals & discounts
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
var deals = Object.entries(prods).filter(function(e){ return e[1].is_active !== false && e[1].mrp > e[1].price; });
if(deals.length == 0){ Bot.sendMessage('🎯 Abhi koi active deals nahi hain.'); return; }
var text = '🎯 *Deals & Discounts*\n\n';
var buttons = [];
for(var i=0; i<deals.length && i<20; i+=2){
  var disc = Math.round((deals[i][1].mrp - deals[i][1].price) / deals[i][1].mrp * 100);
  var row = [{title: deals[i][1].name + ' ' + disc + '% OFF', command: '/product ' + deals[i][0]}];
  if(deals[i+1]){
    var disc2 = Math.round((deals[i+1][1].mrp - deals[i+1][1].price) / deals[i+1][1].mrp * 100);
    row.push({title: deals[i+1][1].name + ' ' + disc2 + '% OFF', command: '/product ' + deals[i+1][0]});
  }
  buttons.push(row);
}
buttons.push([{title:'🏠 Main Menu',command:'/mainmenu'}]);
Bot.sendInlineKeyboard(buttons, text);
