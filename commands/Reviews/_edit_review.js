/*CMD
  command: /edit_review
  help: Edit review
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
var newText = parts.slice(1).join(' ');
var reviews = Bot.getProperty('reviews');
try { reviews = JSON.parse(reviews); } catch(e){ reviews = {}; }
var found = false;
Object.keys(reviews).forEach(function(k){
  if(reviews[k].product_id == prodId && String(reviews[k].user_id) == uid){
    reviews[k].text = newText; reviews[k].edited_at = new Date().toISOString();
    found = true;
  }
});
if(!found){ Bot.sendMessage('❌ Aapne is product ka review nahi likha hai.'); return; }
Bot.setProperty('reviews', JSON.stringify(reviews), 'string');
Bot.sendMessage('✏️ Review update kar diya gaya!');
