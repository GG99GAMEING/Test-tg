/*CMD
  command: /daily_reward
  help: Daily reward
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

var lastClaim = Bot.getProperty('daily_last_' + uid);
var now = new Date();
if(lastClaim){
  var last = new Date(lastClaim);
  var diffHours = (now - last) / (1000 * 60 * 60);
  if(diffHours < 24){
    var remaining = Math.ceil(24 - diffHours);
    Bot.sendMessage('🎰 Aapne already daily reward claim kar liya hai!\n\n⏰ ' + remaining + ' hours mein dubara claim kar sakte hain.');
    return;
  }
}
var min = parseInt(Bot.getProperty('daily_reward_min')||5);
var max = parseInt(Bot.getProperty('daily_reward_max')||20);
var reward = Math.floor(Math.random() * (max - min + 1)) + min;
try { Libs.ResourcesLib.userRes('balance').add(reward); } catch(e){}
Bot.setProperty('daily_last_' + uid, now.toISOString(), 'string');
// Track tx
var txns = Bot.getProperty('wallet_txns_' + uid);
try { txns = JSON.parse(txns); } catch(e){ txns = []; }
if(!txns) txns = [];
txns.push({type:'credit',amount:reward,note:'Daily Reward',date:now.toISOString()});
Bot.setProperty('wallet_txns_' + uid, JSON.stringify(txns), 'string');
Bot.sendMessage('🎰 *Daily Reward Claimed!*\n\n💰 +₹' + reward + ' added to wallet!\n\nKal phir aana — 24 hours baad naya reward milega!', {parse_mode:'Markdown'});
