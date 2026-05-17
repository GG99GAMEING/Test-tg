/*CMD
  command: /product_variants
  help: Show product variants
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
if(!p || !p.variants){ Bot.sendMessage('❌ Is product ke koi variants nahi hain.'); return; }

var text = '📋 *' + p.name + ' — Variants*\n\n';
var buttons = [];
var entries = Object.entries(p.variants);
entries.forEach(function(e){
  text += '• ' + e[0] + ': ₹' + e[1].price + ' (Stock: ' + (e[1].stock || 0) + ')\n';
  buttons.push([{title: e[0] + ' — ₹' + e[1].price, command: '/buynow_variant ' + prodId + ' ' + e[0]}]);
});
buttons.push([{title:'🔙 Back',command:'/product ' + prodId}]);
Bot.sendInlineKeyboard(buttons, text);
