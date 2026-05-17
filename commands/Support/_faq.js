/*CMD
  command: /faq
  help: FAQ
  need_reply: false
  auto_retry_time: 
  folder: Support
<<ANSWER
ANSWER
<<KEYBOARD
KEYBOARD
  aliases: 
CMD*/
var uid = String(user.telegramid);
var LOG = Bot.getProperty('log_channel') || '@JACK_SHOP_LOGS';

var text = '❓ *Frequently Asked Questions*\n\n' +
  '1️⃣ *Order kab tak deliver hoga?*\n   Usually 3-7 business days. Tracking /track_order se check karein.\n\n' +
  '2️⃣ *Payment kaise karein?*\n   UPI, Razorpay, COD ya Wallet se. /payment par jaayein.\n\n' +
  '3️⃣ *Refund kitne din mein aata hai?*\n   3-5 business days. Wallet ya original payment method mein.\n\n' +
  '4️⃣ *Order cancel kaise karein?*\n   /cancel_order ORDER_ID use karein (sirf pending orders).\n\n' +
  '5️⃣ *Wallet mein paise kaise add karein?*\n   /addfunds use karein. Minimum ₹10.\n\n' +
  '6️⃣ *Referral bonus kab milta hai?*\n   Jab referred user apna pehla order place karta hai.\n\n' +
  'Aur help chahiye? /createticket se ticket create karein.';
Bot.sendMessage(text, {parse_mode:'Markdown'});
