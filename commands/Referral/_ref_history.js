/*CMD
  command: /ref_history
  help: Referral history
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
if(!refUsers || refUsers.length == 0){ Bot.sendMessage('🔗 Abhi tak koi referrals nahi hain. Apna link share karein: /reflink'); return; }
var text = '🔄 *Referral History*\n\n';
refUsers.forEach(function(ruid, i){
  var rname = Bot.getProperty('user_name_' + ruid) || ruid;
  var bonus = Bot.getProperty('ref_pending_bonus_' + uid + '_' + ruid);
  var status = (!bonus || parseInt(bonus||0) <= 0) ? '✅ Confirmed' : '⏳ Pending';
  text += (i+1) + '. ' + rname + ' (' + ruid + ') — ' + status + '\n';
});
text += '\nTotal: ' + refUsers.length + ' referrals';
Bot.sendMessage(text, {parse_mode:'Markdown'});
