/*CMD
  command: /ref_earnings
  help: Referral earnings
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

var bonus = parseInt(Bot.getProperty('referral_bonus')||25);
var refUsers = Bot.getProperty('ref_users_' + uid);
try { refUsers = JSON.parse(refUsers); } catch(e){ refUsers = []; }
// Count confirmed
var confirmed = 0;
if(refUsers){
  refUsers.forEach(function(ruid){
    var pendingKey = 'ref_pending_bonus_' + uid + '_' + ruid;
    var pb = Bot.getProperty(pendingKey);
    if(pb === null || pb === undefined || parseInt(pb||0) == 0) confirmed++;
  });
}
Bot.sendMessage('💵 *Referral Earnings*\n\nTotal Earned: ₹' + (confirmed * bonus) + '\nReferrals: ' + (refUsers ? refUsers.length : 0) + '\nBonus: ₹' + bonus + '/ref', {parse_mode:'Markdown'});
