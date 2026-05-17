/*CMD
  command: /myvip
  help: VIP level
  need_reply: false
  auto_retry_time: 
  folder: Account
<<ANSWER
ANSWER
<<KEYBOARD
KEYBOARD
  aliases: 
CMD*/
var uid = String(user.telegramid);
var LOG = Bot.getProperty('log_channel') || '@JACK_SHOP_LOGS';

var spent = parseFloat(Bot.getProperty('user_total_spent_' + uid)||0);
var currentVip = parseInt(Bot.getProperty('user_vip_' + uid)||0);
var vipLevels = Bot.getProperty('vip_levels');
try { vipLevels = JSON.parse(vipLevels); } catch(e){ vipLevels = [1000,5000,10000,25000,50000]; }
var nextThreshold = currentVip < vipLevels.length ? vipLevels[currentVip] : null;
var progress = nextThreshold ? Math.round(spent / nextThreshold * 100) : 100;
var text = '👑 *VIP Level: ' + currentVip + '*\n\n' +
  '💰 Total Spent: ₹' + spent + '\n';
if(nextThreshold){ text += '📊 Next Level Progress: ' + Math.min(progress,100) + '%\n🎯 Need ₹' + (nextThreshold - spent) + ' more for Level ' + (currentVip+1); }
else { text += '🏆 Maximum level reached!'; }
Bot.sendMessage(text, {parse_mode:'Markdown'});
