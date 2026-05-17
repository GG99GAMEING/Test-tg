/*CMD
  command: /flash_sale
  help: Flash sale items
  need_reply: false
  auto_retry_time: 
  folder: Shop
<<ANSWER
ANSWER
<<KEYBOARD
KEYBOARD
  aliases: 
CMD*/
var flash = Bot.getProperty('flash_sale');
try { flash = JSON.parse(flash); } catch(e){ flash = null; }
if(!flash || flash.active !== true){ Bot.sendMessage('🔥 Abhi koi flash sale active nahi hai. Baad mein check karein!'); return; }
var prods = Bot.getProperty('products');
try { prods = JSON.parse(prods); } catch(e){ prods = {}; }
var flashProds = flash.products || [];
if(flashProds.length == 0){ Bot.sendMessage('🔥 Flash sale mein koi products nahi hain.'); return; }
var text = '🔥 *FLASH SALE!* ⚡\n\n' + (flash.title || 'Limited Time Offer!') + '\n⏰ Ends: ' + (flash.end_time || 'Soon') + '\n\n';
var buttons = [];
flashProds.forEach(function(fpid){
  var p = prods[fpid];
  if(p && p.is_active !== false){
    text += '• ' + p.name + ' — ~~₹' + p.mrp + '~~ ₹' + p.price + '\n';
    buttons.push([{title: p.name + ' — ₹' + p.price, command: '/product ' + fpid}]);
  }
});
buttons.push([{title:'🏠 Main Menu',command:'/mainmenu'}]);
Bot.sendInlineKeyboard(buttons, text);
