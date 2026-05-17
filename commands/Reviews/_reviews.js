/*CMD
  command: /reviews
  help: View product reviews
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

var prodId = message.trim();
var reviews = Bot.getProperty('reviews');
try { reviews = JSON.parse(reviews); } catch(e){ reviews = {}; }
var prodReviews = Object.entries(reviews).filter(function(e){ return e[1].product_id == prodId && e[1].status == 'approved'; });
prodReviews.sort(function(a,b){ return (b[1].created_at||'').localeCompare(a[1].created_at||''); });
var prods = Bot.getProperty('products');
try { prods = JSON.parse(prods); } catch(e){ prods = {}; }
var p = prods[prodId];
var pname = p ? p.name : prodId;
if(prodReviews.length == 0){
  var buttons = [[{title:'✍️ Write Review',command:'/writereview ' + prodId},{title:'🔙 Shop',command:'/shop'}]];
  Bot.sendInlineKeyboard(buttons, '⭐ *' + pname + '* — No reviews yet.\n\nPehla review aap likhiye!');
  return;
}
var text = '⭐ *Reviews for ' + pname + '* (' + prodReviews.length + ')\n\n';
prodReviews.slice(0,10).forEach(function(e, i){
  text += '⭐'.repeat(e[1].rating||0) + ' — ' + (e[1].text||'No text') + '\n   👤 ' + (e[1].user_name||'User') + ' • ' + (e[1].created_at||'') + '\n\n';
});
var buttons = [[{title:'✍️ Write Review',command:'/writereview ' + prodId},{title:'🔙 Shop',command:'/shop'}]];
Bot.sendInlineKeyboard(buttons, text);
