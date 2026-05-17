/*CMD
  command: /cart_apply_coupon
  help: Apply coupon to cart
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
var code = message.trim().toUpperCase();
var coupons = Bot.getProperty('coupons');
try { coupons = JSON.parse(coupons); } catch(e){ coupons = {}; }
var coupon = coupons[code];
if(!coupon || coupon.is_active !== true){ Bot.sendMessage('❌ Invalid ya expired coupon code.'); return; }
// Check expiry
if(coupon.expiry){ var exp = new Date(coupon.expiry); if(new Date() > exp){ Bot.sendMessage('❌ Coupon expire ho chuka hai.'); return; } }
// Check min cart value
var cartKey = (Bot.getProperty('cart_prefix') || 'cart_') + uid;
var cart = Bot.getProperty(cartKey);
try { cart = JSON.parse(cart); } catch(e){ cart = null; }
if(!cart || !cart.items || cart.items.length == 0){ Bot.sendMessage('🛒 Cart khali hai.'); return; }
var subtotal = 0;
cart.items.forEach(function(item){ subtotal += (item.price||0)*(item.qty||1); });
if(coupon.min_cart && subtotal < coupon.min_cart){ Bot.sendMessage('❌ Minimum cart value ₹' + coupon.min_cart + ' honi chahiye.'); return; }
var discount = coupon.type == 'percent' ? Math.round(subtotal * coupon.value / 100) : coupon.value;
if(coupon.max_discount && discount > coupon.max_discount){ discount = coupon.max_discount; }
cart.discount = discount;
cart.coupon_code = code;
Bot.setProperty(cartKey, JSON.stringify(cart), 'string');
Bot.sendMessage('🎟️ Coupon *' + code + '* applied!\nDiscount: -₹' + discount + '\n\nView: /cart', {parse_mode:'Markdown'});
