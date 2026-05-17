/*CMD
  command: /product_images
  help: Show product images
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
if(!p.images || p.images.length == 0){ Bot.sendMessage('📷 Is product ki koi images nahi hain.'); return; }
Bot.sendMessage('📷 *' + p.name + '* — ' + p.images.length + ' images');
p.images.forEach(function(img){
  Bot.sendPhoto(img);
});
