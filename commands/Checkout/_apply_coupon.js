/*CMD
  command: /apply_coupon
  help: Apply coupon at checkout
  need_reply: true
  auto_retry_time: 
  folder: Checkout
<<ANSWER
ANSWER
<<KEYBOARD
KEYBOARD
  aliases: 
CMD*/
var uid = String(user.telegramid);
var LOG = Bot.getProperty('log_channel') || '@JACK_SHOP_LOGS';

var code = message.trim().toUpperCase();
var coupons = Bot.getProperty('coupons');
try { coupons = JSON.parse(coupons); } catch(e){ coupons = {}; }
var coupon = coupons[code];
if(!coupon || coupon.is_active !== true){ Bot.sendMessage('❌ Invalid coupon code.'); return; }
if(coupon.expiry){ if(new Date() > new Date(coupon.expiry)){ Bot.sendMessage('❌ Coupon expire ho chuka hai.'); return; } }
var co = Bot.getProperty('checkout_' + uid);
try { co = JSON.parse(co); } catch(e){ co = {}; }
var subtotal = co.subtotal || 0;
if(coupon.min_cart && subtotal < coupon.min_cart){ Bot.sendMessage('❌ Minimum ₹' + coupon.min_cart + ' ka order hona chahiye.'); return; }
var discount = coupon.type == 'percent' ? Math.round(subtotal * coupon.value / 100) : coupon.value;
if(coupon.max_discount && discount > coupon.max_discount){ discount = coupon.max_discount; }
co.discount = discount; co.coupon = code; co.total = (co.subtotal||0) + (co.shipping||0) - discount;
Bot.setProperty('checkout_' + uid, JSON.stringify(co), 'string');
Bot.sendMessage('🎟️ Coupon *' + code + '* applied!\nDiscount: -₹' + discount + '\nNew Total: ₹' + co.total, {parse_mode:'Markdown'});
