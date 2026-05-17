/*CMD
  command: /featured
  help: Featured products
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
var featured = Object.entries(prods).filter(function(e){ return e[1].is_featured === true && e[1].is_active !== false; });
if(featured.length == 0){ Bot.sendMessage('🌟 Abhi koi featured products nahi hain.'); return; }
var text = '🌟 *Featured Products*\n\n';
var buttons = [];
for(var i=0; i<featured.length; i+=2){
  var row = [{title: featured[i][1].name + ' — ₹' + featured[i][1].price, command: '/product ' + featured[i][0]}];
  if(featured[i+1]) row.push({title: featured[i+1][1].name + ' — ₹' + featured[i+1][1].price, command: '/product ' + featured[i+1][0]});
  buttons.push(row);
}
buttons.push([{title:'🏠 Main Menu',command:'/mainmenu'}]);
Bot.sendInlineKeyboard(buttons, text);
