/*CMD
  command: /product_sizes
  help: Show product sizes
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
if(!p || !p.sizes || p.sizes.length == 0){ Bot.sendMessage('❌ Is product ke koi size options nahi hain.'); return; }
var text = '📏 *Available Sizes for ' + p.name + '*\n\n';
p.sizes.forEach(function(s){ text += '• ' + s + '\n'; });
text += '\nAdd to cart karte waqt size specify karein.';
Bot.sendMessage(text, {parse_mode:'Markdown'});
