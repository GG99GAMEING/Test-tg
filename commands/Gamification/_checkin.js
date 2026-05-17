/*CMD
  command: /checkin
  help: Daily check-in
  need_reply: false
  auto_retry_time: 
  folder: Gamification
<<ANSWER
ANSWER
<<KEYBOARD
KEYBOARD
  aliases: 
CMD*/
var uid = String(user.telegramid);
var LOG = Bot.getProperty('log_channel') || '@JACK_SHOP_LOGS';

var lastCheckin = Bot.getProperty('checkin_last_' + uid);
var streak = parseInt(Bot.getProperty('checkin_streak_' + uid)||0);
var now = new Date();
if(lastCheckin){
  var last = new Date(lastCheckin);
  var diffHours = (now - last) / (1000 * 60 * 60);
  if(diffHours < 24){
    Bot.sendMessage('✅ Aaj already check-in kar liya hai! Streak: ' + streak + ' days\n\n⏰ Kal phir aana.');
    return;
  }
  if(diffHours > 48){ streak = 0; }
}
streak += 1;
Bot.setProperty('checkin_streak_' + uid, streak, 'integer');
Bot.setProperty('checkin_last_' + uid, now.toISOString(), 'string');
var bonus = streak >= 7 ? 10 : streak >= 3 ? 5 : 0;
if(bonus > 0){ try { Libs.ResourcesLib.userRes('balance').add(bonus); } catch(e){} }
var text = '📅 *Daily Check-in — Day ' + streak + '*\n\n';
if(bonus > 0){ text += '🎁 Streak Bonus: +₹' + bonus + ' added to wallet!\n\n'; }
text += 'Lagaatar 3 din: +₹5 bonus\n7 din: +₹10 bonus\n\nKal phir check-in karein!';
Bot.sendMessage(text, {parse_mode:'Markdown'});
