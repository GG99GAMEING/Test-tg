/*CMD
  command: /myreviews
  help: My reviews
  need_reply: false
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

var reviews = Bot.getProperty('reviews');
try { reviews = JSON.parse(reviews); } catch(e){ reviews = {}; }
var myReviews = Object.entries(reviews).filter(function(e){ return String(e[1].user_id) == uid; });
myReviews.sort(function(a,b){ return (b[1].created_at||'').localeCompare(a[1].created_at||''); });
if(myReviews.length == 0){ Bot.sendMessage('⭐ Abhi tak koi reviews nahi likhe. /shop se products browse karein!'); return; }
var text = '⭐ *My Reviews* (' + myReviews.length + ')\n\n';
myReviews.forEach(function(e, i){
  text += (i+1) + '. ' + '⭐'.repeat(e[1].rating||0) + '\n   ' + (e[1].text||'') + '\n   📅 ' + (e[1].created_at||'') + '\n\n';
});
Bot.sendMessage(text, {parse_mode:'Markdown'});
