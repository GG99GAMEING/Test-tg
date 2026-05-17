/*CMD
  command: /product_rating
  help: Product rating
  need_reply: true
  auto_retry_time: 
  folder: Shop
<<ANSWER
ANSWER
<<KEYBOARD
KEYBOARD
  aliases: 
CMD*/
var prodId = message.trim();
var prods = Bot.getProperty('products');
try { prods = JSON.parse(prods); } catch(e){ prods = {}; }
var p = prods[prodId];
if(!p){ Bot.sendMessage('❌ Product nahi mila.'); return; }
var rating = p.rating || 0;
var count = p.review_count || 0;
var stars = '';
for(var i=1; i<=5; i++){ stars += i <= Math.round(rating) ? '⭐' : '☆'; }
Bot.sendMessage('⭐ *' + p.name + '*\n\nRating: ' + stars + ' ' + rating + '/5\nTotal Reviews: ' + count + '\n\nReviews dekhne ke liye /reviews ' + prodId, {parse_mode:'Markdown'});
