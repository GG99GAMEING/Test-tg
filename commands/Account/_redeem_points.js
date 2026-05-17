/*CMD
  command: /redeem_points
  help: Redeem points
  need_reply: true
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

var ptsToRedeem = parseInt(message.trim());
if(isNaN(ptsToRedeem) || ptsToRedeem < 10){ Bot.sendMessage('❌ Minimum 10 points redeem kar sakte hain.'); return; }
var currentPts = parseInt(Bot.getProperty('user_loyalty_points_' + uid)||0);
if(ptsToRedeem > currentPts){ Bot.sendMessage('❌ Aapke paas sirf ' + currentPts + ' points hain.'); return; }
var walletConv = parseInt(Bot.getProperty('points_to_wallet')||10);
var credit = Math.floor(ptsToRedeem / walletConv);
if(credit < 1){ Bot.sendMessage('❌ Kam se kam ' + walletConv + ' points chahiye ₹1 ke liye.'); return; }
Bot.setProperty('user_loyalty_points_' + uid, currentPts - ptsToRedeem, 'integer');
try { Libs.ResourcesLib.userRes('balance').add(credit); } catch(e){}
Bot.sendMessage('✅ ' + ptsToRedeem + ' points redeem kar diye gaye!\n💰 Wallet Credit: +₹' + credit);
