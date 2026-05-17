/*CMD
  command: /checkout_cancel
  help: Cancel checkout
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

Bot.setProperty('checkout_' + uid, '{}', 'string');
Bot.setProperty('checkout_address_' + uid, '{}', 'string');
Bot.sendMessage('❌ Checkout cancel kar diya gaya.\n\nSab kuch waise hi hai — cart mein items abhi bhi hain.\nContinue shopping: /shop | View cart: /cart');
