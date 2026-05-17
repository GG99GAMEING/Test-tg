/*CMD
  command: /delete_review
  help: Delete review
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
var found = false;
Object.keys(reviews).forEach(function(k){
  if(reviews[k].product_id == prodId && String(reviews[k].user_id) == uid){
    delete reviews[k]; found = true;
  }
});
if(!found){ Bot.sendMessage('❌ Aapne is product ka review nahi likha.'); return; }
Bot.setProperty('reviews', JSON.stringify(reviews), 'string');
Bot.sendMessage('🗑️ Review delete kar diya gaya.');
