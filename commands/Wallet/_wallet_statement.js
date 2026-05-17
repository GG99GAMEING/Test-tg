/*CMD
  command: /wallet_statement
  help: Full wallet statement
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
if(!txns || txns.length == 0){ Bot.sendMessage('📊 Koi transactions nahi hain.'); return; }
try { var bal = Libs.ResourcesLib.userRes('balance').value(); } catch(e){ var bal = 0; }
var cred = 0; var deb = 0;
txns.forEach(function(t){ if(t.type=='credit') cred += t.amount; else deb += t.amount; });
var text = '📋 *Wallet Statement*\n\n' +
  '💰 Current Balance: ₹' + bal + '\n' +
  '📥 Total Credit: ₹' + cred + '\n📤 Total Debit: ₹' + deb + '\n🔄 Transactions: ' + txns.length + '\n\n';
txns.slice(-20).reverse().forEach(function(t, i){
  text += (i+1) + '. ' + (t.type=='credit'?'➕':'➖') + ' ₹' + t.amount + ' (' + (t.note||'N/A') + ')\n';
});
Bot.sendMessage(text, {parse_mode:'Markdown'});
