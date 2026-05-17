/*CMD
  command: /restorecart
  help: Restore saved cart
  need_reply: false
  auto_retry_time: 
  folder: Cart
<<ANSWER
ANSWER
<<KEYBOARD
KEYBOARD
  aliases: 
CMD*/
var uid = String(user.telegramid);
var cartKey = (Bot.getProperty('cart_prefix') || 'cart_') + uid;
var saved = Bot.getProperty('saved_' + cartKey);
try { saved = JSON.parse(saved); } catch(e){ saved = null; }
if(!saved || !saved.items || saved.items.length == 0){ Bot.sendMessage('💾 Koi saved cart nahi hai.'); return; }
var current = Bot.getProperty(cartKey);
try { current = JSON.parse(current); } catch(e){ current = {items:[],discount:0,coupon_code:''}; }
if(!current || !current.items){ current = {items:[],discount:0,coupon_code:''}; }
// Merge: add saved items to current
saved.items.forEach(function(sitem){
  var found = false;
  current.items.forEach(function(citem){
    if(citem.product_id == sitem.product_id && citem.variant == sitem.variant){
      citem.qty = (citem.qty||1) + (sitem.qty||1);
      found = true;
    }
  });
  if(!found){ current.items.push(sitem); }
});
Bot.setProperty(cartKey, JSON.stringify(current), 'string');
Bot.sendMessage('✅ Saved cart restore kar di gayi!\nView: /cart');
