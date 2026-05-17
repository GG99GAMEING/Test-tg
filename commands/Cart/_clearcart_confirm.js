/*CMD
  command: /clearcart_confirm
  help: Clear cart confirm
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
Bot.setProperty(cartKey, JSON.stringify({items:[], discount:0, coupon_code:''}), 'string');
Bot.sendMessage('🗑️ Cart clear kar di gayi hai!\n\nShop karna shuru karein: /shop');
