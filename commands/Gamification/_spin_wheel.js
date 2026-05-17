/*CMD
  command: /spin_wheel
  help: Spin wheel
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

var lastSpin = Bot.getProperty('spin_last_' + uid);
var now = new Date();
if(lastSpin){
  var last = new Date(lastSpin);
  var diffHours = (now - last) / (1000 * 60 * 60);
  if(diffHours < 24){
    var remaining = Math.ceil(24 - diffHours);
    Bot.sendMessage('🎡 Aap aaj already spin kar chuke hain!\n\n⏰ ' + remaining + ' hours baad dubara spin kar sakte hain.');
    return;
  }
}
Bot.setProperty('spin_last_' + uid, now.toISOString(), 'string');
Bot.runCommand('/spin_result');
