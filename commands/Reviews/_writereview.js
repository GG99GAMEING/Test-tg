/*CMD
  command: /writereview
  help: Write review
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
var reviewText = parts.slice(2).join(' ');
if(!prodId || isNaN(rating) || rating < 1 || rating > 5){ Bot.sendMessage('❌ Format: /writereview PRODUCT_ID RATING(1-5) REVIEW_TEXT'); return; }
if(reviewText.length < 3){ Bot.sendMessage('❌ Review text likhiye (minimum 3 characters).'); return; }
var prods = Bot.getProperty('products');
try { prods = JSON.parse(prods); } catch(e){ prods = {}; }
if(!prods[prodId]){ Bot.sendMessage('❌ Product nahi mila.'); return; }
var reviewId = 'REV-' + Math.floor(10000+Math.random()*90000);
var review = {
  id: reviewId, product_id: prodId, user_id: uid,
  user_name: user.first_name||'User', rating: rating, text: reviewText,
  status: 'approved', created_at: new Date().toISOString()
};
var reviews = Bot.getProperty('reviews');
try { reviews = JSON.parse(reviews); } catch(e){ reviews = {}; }
reviews[reviewId] = review;
Bot.setProperty('reviews', JSON.stringify(reviews), 'string');
// Update product rating
var p = prods[prodId];
var oldCount = p.review_count || 0;
var oldRating = p.rating || 0;
var newCount = oldCount + 1;
p.review_count = newCount;
p.rating = Math.round(((oldRating * oldCount + rating) / newCount) * 10) / 10;
prods[prodId] = p;
Bot.setProperty('products', JSON.stringify(prods), 'string');
Bot.sendMessage('⭐ Review submit ho gaya!\n\nRating: ' + '⭐'.repeat(rating) + '\n' + reviewText + '\n\nThank you!');
