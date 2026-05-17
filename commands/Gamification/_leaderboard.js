/*CMD
  command: /leaderboard
  help: Leaderboard
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

var usersData = Bot.getProperty('users');
try { usersData = JSON.parse(usersData); } catch(e){ usersData = {}; }
var sorted = Object.entries(usersData).sort(function(a,b){ return (b[1].total_spent||0) - (a[1].total_spent||0); });
var top10 = sorted.slice(0, 10);
if(top10.length == 0){ Bot.sendMessage('🏆 Abhi tak koi entries nahi hain!'); return; }
var text = '🏆 *Top Spenders*\n\n';
top10.forEach(function(e, i){
  var medal = i==0?'🥇':i==1?'🥈':i==2?'🥉':(i+1)+'.';
  text += medal + ' ' + (e[1].name||'User') + ' — ₹' + (e[1].total_spent||0) + '\n';
});
Bot.sendMessage(text, {parse_mode:'Markdown'});
