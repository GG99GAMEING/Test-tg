/*CMD
  command: /wallet_history
  help: Wallet history
  need_reply: false
  auto_retry_time: 
  folder: Wallet
<<ANSWER
ANSWER
<<KEYBOARD
KEYBOARD
  aliases: 
CMD*/
var uid = String(user.telegramid);
var LOG = Bot.getProperty('log_channel') || '@JACK_SHOP_LOGS';

var txns = Bot.getProperty('wallet_txns_' + uid);
try { txns = JSON.parse(txns); } catch(e){ txns = []; }
if(!txns || txns.length == 0){ Bot.sendMessage('📊 Abhi tak koi wallet transactions nahi hain.'); return; }
var last10 = txns.slice(-10).reverse();
var text = '📊 *Wallet Transaction History*\n\n';
last10.forEach(function(t, i){
  text += (i+1) + '. ' + (t.type == 'credit' ? '➕' : '➖') + ' ₹' + t.amount + ' — ' + (t.note||'') + '\n   📅 ' + (t.date||'N/A') + '\n';
});
Bot.sendMessage(text, {parse_mode:'Markdown'});
