/*CMD
  command: /rate_product
  help: Rate product
  need_reply: true
  auto_retry_time: 
  folder: Reviews
<<ANSWER
ANSWER
<<KEYBOARD
KEYBOARD
  aliases: 
CMD*/
var uid = String(user.telegramid);
var LOG = Bot.getProperty('log_channel') || '@JACK_SHOP_LOGS';

var parts = message.trim().split(' ');
var prodId = parts[0];
var rating = parseInt(parts[1]);
if(!prodId || isNaN(rating) || rating < 1 || rating > 5){ Bot.sendMessage('❌ Format: /rate_product PRODUCT_ID RATING(1-5)'); return; }
var prods = Bot.getProperty('products');
try { prods = JSON.parse(prods); } catch(e){ prods = {}; }
if(!prods[prodId]){ Bot.sendMessage('❌ Product nahi mila.'); return; }
Bot.sendMessage('⭐ Rating diya: ' + '⭐'.repeat(rating) + '\n\nReview text bhi likhna chahte hain? /writereview ' + prodId + ' ' + rating + ' YOUR_TEXT');
