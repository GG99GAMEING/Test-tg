/*CMD
  command: /wishlist_to_cart
  help: Move all to cart
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
if(!wishlist || wishlist.length == 0){ Bot.sendMessage('❤️ Wishlist khali hai.'); return; }
var prods = Bot.getProperty('products');
try { prods = JSON.parse(prods); } catch(e){ prods = {}; }
var cartKey = (Bot.getProperty('cart_prefix')||'cart_') + uid;
var cart = Bot.getProperty(cartKey);
try { cart = JSON.parse(cart); } catch(e){ cart = {items:[],discount:0,coupon_code:''}; }
if(!cart || !cart.items) cart = {items:[],discount:0,coupon_code:''};
var added = 0;
wishlist.forEach(function(pid){
  var p = prods[pid];
  if(p && p.is_active !== false){
    var found = false;
    cart.items.forEach(function(ci){ if(ci.product_id == pid){ ci.qty = (ci.qty||1)+1; found = true; } });
    if(!found){ cart.items.push({product_id:pid, qty:1, price:p.price, variant:'', size:'', color:''}); }
    added++;
  }
});
Bot.setProperty(cartKey, JSON.stringify(cart), 'string');
Bot.sendMessage('🛒 ' + added + ' items cart mein add ho gaye! Wishlist khali ki? /clear_wishlist use karein.
View: /cart');
