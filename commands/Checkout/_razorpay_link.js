/*CMD
  command: /razorpay_link
  help: Razorpay payment link
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

Bot.sendMessage('💳 *Razorpay Payment Link*\n\n🔗 https://rzp.io/l/jackshop-pay\n\nPayment complete hone ke baad, order automatically confirm ho jayega. Agar problem ho to /support se contact karein.', {parse_mode:'Markdown'});
