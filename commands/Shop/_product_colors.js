/*CMD
  command: /product_colors
  help: Show product colors
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
if(!p || !p.colors || p.colors.length == 0){ Bot.sendMessage('❌ Is product ke koi color options nahi hain.'); return; }
var text = '🎨 *Available Colors for ' + p.name + '*\n\n';
p.colors.forEach(function(c){ text += '• ' + c + '\n'; });
text += '\nAdd to cart karte waqt color specify karein.';
Bot.sendMessage(text, {parse_mode:'Markdown'});
