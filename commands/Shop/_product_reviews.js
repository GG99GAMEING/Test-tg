/*CMD
  command: /product_reviews
  help: Product reviews list
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
var reviews = Bot.getProperty('reviews');
try { reviews = JSON.parse(reviews); } catch(e){ reviews = {}; }
var prodReviews = Object.entries(reviews).filter(function(e){ return e[1].product_id == prodId && e[1].status == 'approved'; });
prodReviews = prodReviews.slice(-5);
if(prodReviews.length == 0){ Bot.sendMessage('⭐ Is product ka abhi tak koi review nahi hai. Pehla review likhiye: /writereview ' + prodId); return; }
var prods = Bot.getProperty('products');
try { prods = JSON.parse(prods); } catch(e){ prods = {}; }
var text = '⭐ *Reviews*\n\n';
prodReviews.forEach(function(e, i){
  text += (i+1) + '. ' + '⭐'.repeat(e[1].rating) + ' — ' + (e[1].text || 'No text') + '\n   👤 ' + (e[1].user_name || 'User') + ' • ' + (e[1].created_at || 'N/A') + '\n\n';
});
Bot.sendMessage(text, {parse_mode:'Markdown'});
