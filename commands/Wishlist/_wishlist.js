/*CMD
  command: /wishlist
  help: View wishlist
  need_reply: false
  auto_retry_time: 
  folder: Wishlist
<<ANSWER
ANSWER
<<KEYBOARD
KEYBOARD
  aliases: 
CMD*/
var uid = String(user.telegramid);
var LOG = Bot.getProperty('log_channel') || '@JACK_SHOP_LOGS';

var wishKey = (Bot.getProperty('wishlist_prefix')||'wishlist_') + uid;
var wishlist = Bot.getProperty(wishKey);
try { wishlist = JSON.parse(wishlist); } catch(e){ wishlist = []; }
if(!wishlist || wishlist.length == 0){ Bot.sendMessage('❤️ Wishlist khali hai. Products add karein: /shop'); return; }
var prods = Bot.getProperty('products');
try { prods = JSON.parse(prods); } catch(e){ prods = {}; }
var text = '❤️ *Wishlist* (' + wishlist.length + ')\n\n';
var buttons = [];
wishlist.forEach(function(pid, i){
  var p = prods[pid];
  if(p){ text += (i+1) + '. ' + p.name + ' — ₹' + p.price + '\n'; buttons.push([{title:p.name+' — ₹'+p.price,command:'/product '+pid}]); }
});
buttons.push([{title:'🛒 Add All to Cart',command:'/wishlist_to_cart'},{title:'🗑️ Clear Wishlist',command:'/clear_wishlist'}],[{title:'🔙 Main Menu',command:'/mainmenu'}]);
Bot.sendInlineKeyboard(buttons, text);
