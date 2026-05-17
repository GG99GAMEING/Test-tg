/*CMD
  command: /ref_stats
  help: Referral stats
  need_reply: false
  auto_retry_time: 
  folder: Referral
<<ANSWER
ANSWER
<<KEYBOARD
KEYBOARD
  aliases: 
CMD*/
var uid = String(user.telegramid);
var LOG = Bot.getProperty('log_channel') || '@JACK_SHOP_LOGS';

var refUsers = Bot.getProperty('ref_users_' + uid);
try { refUsers = JSON.parse(refUsers); } catch(e){ refUsers = []; }
var count = refUsers ? refUsers.length : 0;
var bonus = parseInt(Bot.getProperty('referral_bonus')||25);
// Count confirmed referrals (users who placed orders)
var confirmed = 0;
if(refUsers){
  refUsers.forEach(function(ruid){
    var orders = Bot.getProperty('orders');
    try { orders = JSON.parse(orders); } catch(e){ orders = {}; }
    var hasOrder = Object.values(orders).some(function(o){ return String(o.user_id) == String(ruid); });
    if(hasOrder) confirmed++;
  });
}
Bot.sendMessage('📊 *Referral Stats*\n\n👥 Total: ' + count + '\n✅ Confirmed (orders placed): ' + confirmed + '\n⏳ Pending: ' + (count - confirmed) + '\n💰 Bonus per referral: ₹' + bonus, {parse_mode:'Markdown'});
