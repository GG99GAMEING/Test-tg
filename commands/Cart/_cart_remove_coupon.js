/*CMD
  command: /cart_remove_coupon
  help: Remove coupon from cart
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
var cart = Bot.getProperty(cartKey);
try { cart = JSON.parse(cart); } catch(e){ cart = null; }
if(!cart || !cart.coupon_code){ Bot.sendMessage('🎟️ Cart mein koi coupon applied nahi hai.'); return; }
var code = cart.coupon_code;
cart.discount = 0;
cart.coupon_code = '';
Bot.setProperty(cartKey, JSON.stringify(cart), 'string');
Bot.sendMessage('❌ Coupon *' + code + '* remove kar diya gaya.\n\nView: /cart', {parse_mode:'Markdown'});
