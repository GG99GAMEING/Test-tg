/*CMD
  command: /cart_count
  help: Cart item count
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
var count = 0;
if(cart && cart.items){ count = cart.items.reduce(function(s,i){ return s + (i.qty || 1); }, 0); }
Bot.sendMessage('🛒 *Cart Items: ' + count + '*\n\nView: /cart', {parse_mode:'Markdown'});
