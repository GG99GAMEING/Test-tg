/*CMD
  command: /upi_qr
  help: UPI QR instructions
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

var upiId = Bot.getProperty('upi_id') || '';
var upiName = Bot.getProperty('upi_name') || 'JACK SHOP';
if(!upiId){ Bot.sendMessage('⚠️ UPI ID set nahi hai.'); return; }
Bot.sendMessage('📱 *UPI Payment Instructions*\n\n1️⃣ Apna UPI app (GPay/PhonePe/Paytm) kholen\n2️⃣ UPI ID: `' + upiId + '`\n3️⃣ Naam: ' + upiName + '\n4️⃣ Amount check karein aur pay karein\n5️⃣ Screenshot admin ko bhejein\n\nPayment verify hone mein 5-10 minute lag sakte hain.', {parse_mode:'Markdown'});
