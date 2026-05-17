/*CMD
  command: /spin_result
  help: Spin result
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

var prizes = Bot.getProperty('spin_prizes');
try { prizes = JSON.parse(prizes); } catch(e){ prizes = [0,5,10,25,50]; }
var weights = Bot.getProperty('spin_weights');
try { weights = JSON.parse(weights); } catch(e){ weights = [40,25,20,10,5]; }
// Weighted random
var totalW = weights.reduce(function(a,b){ return a+b; }, 0);
var rand = Math.random() * totalW;
var cumulative = 0;
var prize = prizes[0];
for(var i=0; i<prizes.length; i++){
  cumulative += weights[i];
  if(rand <= cumulative){ prize = prizes[i]; break; }
}
if(prize > 0){
  try { Libs.ResourcesLib.userRes('balance').add(prize); } catch(e){}
}
var txns = Bot.getProperty('wallet_txns_' + uid);
try { txns = JSON.parse(txns); } catch(e){ txns = []; }
if(!txns) txns = [];
txns.push({type: prize > 0 ? 'credit' : 'debit', amount: prize, note:'Spin Wheel', date: new Date().toISOString()});
Bot.setProperty('wallet_txns_' + uid, JSON.stringify(txns), 'string');
var msg = prize > 0 ? '🎉 *SPIN RESULT: ₹' + prize + '!*\n\nWallet mein add ho gaya!' : '😔 *SPIN RESULT: ₹0*\n\nBetter luck next time! Kal phir try karna.';
Bot.sendMessage(msg, {parse_mode:'Markdown'});
