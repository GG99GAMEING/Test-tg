/*CMD
  command: /pay_cod
  help: Cash on Delivery
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

var codAvailable = Bot.getProperty('cod_available');
if(codAvailable == 'false'){ Bot.sendMessage('📦 Cash on Delivery abhi available nahi hai. /payment se dusra option choose karein.'); return; }
var co = Bot.getProperty('checkout_' + uid);
try { co = JSON.parse(co); } catch(e){ co = {}; }
var total = co.total || 0;
var orderId = 'ORD-' + Math.floor(100000 + Math.random() * 900000);
co.order_id = orderId; co.payment_method = 'COD';
Bot.setProperty('checkout_' + uid, JSON.stringify(co), 'string');
Bot.runCommand('/cod_confirm');
