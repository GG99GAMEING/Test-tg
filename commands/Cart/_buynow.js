/*CMD
  command: /buynow
  help: Buy now
  need_reply: true
  auto_retry_time: 
  folder: Cart
<<ANSWER
ANSWER
<<KEYBOARD
KEYBOARD
  aliases: 
CMD*/
var uid = String(user.telegramid);
var prodId = message.trim();
var prods = Bot.getProperty('products');
try { prods = JSON.parse(prods); } catch(e){ prods = {}; }
var p = prods[prodId];
if(!p || p.is_active === false){ Bot.sendMessage('❌ Product unavailable.'); return; }
// Create a single-item cart and go to checkout
var cartKey = (Bot.getProperty('cart_prefix') || 'cart_') + uid;
Bot.setProperty(cartKey, JSON.stringify({items:[{product_id:prodId, qty:1, price:p.price, variant:'', size:'', color:''}], discount:0, coupon_code:''}), 'string');
Bot.sendMessage('⚡ *' + p.name + '* ke saath direct checkout!\n\nPrice: ₹' + p.price + '\n\nAage badhne ke liye: /checkout', {parse_mode:'Markdown'});
