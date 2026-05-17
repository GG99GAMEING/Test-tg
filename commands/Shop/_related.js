/*CMD
  command: /related
  help: Related products
  need_reply: true
  auto_retry_time: 
  folder: Shop
<<ANSWER
ANSWER
<<KEYBOARD
KEYBOARD
  aliases: 
CMD*/
var prodId = message.trim();
var prods = Bot.getProperty('products');
try { prods = JSON.parse(prods); } catch(e){ prods = {}; }
var p = prods[prodId];
if(!p){ Bot.sendMessage('❌ Product nahi mila.'); return; }
var related = Object.entries(prods).filter(function(e){ return e[0] != prodId && e[1].category == p.category && e[1].is_active !== false; });
related = related.slice(0, 6);
if(related.length == 0){ Bot.sendMessage('🔗 Is product ke koi related products nahi mile.'); return; }
var text = '🔗 *Related Products*\n\n';
var buttons = [];
related.forEach(function(e){
  text += '• ' + e[1].name + ' — ₹' + e[1].price + '\n';
  buttons.push([{title: e[1].name + ' — ₹' + e[1].price, command: '/product ' + e[0]}]);
});
buttons.push([{title:'🔙 Back',command:'/product ' + prodId}]);
Bot.sendInlineKeyboard(buttons, text);
