/*CMD
  command: /remove_coupon
  help: Remove checkout coupon
  need_reply: false
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

var co = Bot.getProperty('checkout_' + uid);
try { co = JSON.parse(co); } catch(e){ co = {}; }
if(!co.coupon){ Bot.sendMessage('🎟️ Koi coupon applied nahi hai.'); return; }
var code = co.coupon;
co.discount = 0; co.coupon = ''; co.total = (co.subtotal||0) + (co.shipping||0);
Bot.setProperty('checkout_' + uid, JSON.stringify(co), 'string');
Bot.sendMessage('❌ Coupon *' + code + '* remove kar diya gaya.\nTotal: ₹' + co.total, {parse_mode:'Markdown'});
