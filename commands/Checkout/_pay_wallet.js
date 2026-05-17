/*CMD
  command: /pay_wallet
  help: Pay via wallet
  need_reply: false
  auto_retry_time: 
  folder: Checkout
<<ANSWER
ANSWER
<<KEYBOARD
KEYBOARD
  aliases: 
CMD*/
var uid = String(user.telegramid);
var LOG = Bot.getProperty('log_channel') || '@JACK_SHOP_LOGS';

var walletEnabled = Bot.getProperty('wallet_enabled');
if(walletEnabled == 'false'){ Bot.sendMessage('👛 Wallet payment abhi available nahi hai.'); return; }
var co = Bot.getProperty('checkout_' + uid);
try { co = JSON.parse(co); } catch(e){ co = {}; }
var total = co.total || 0;
try { var balance = Libs.ResourcesLib.userRes('balance').value(); } catch(e){ var balance = 0; }
if(balance < total){ Bot.sendMessage('❌ Wallet mein enough balance nahi hai!\n\n💰 Wallet Balance: ₹' + balance + '\n🛒 Order Total: ₹' + total + '\n\nFunds add karein: /addfunds'); return; }
try { Libs.ResourcesLib.userRes('balance').remove(total); } catch(e){ Bot.sendMessage('❌ Payment fail ho gaya. Try again.'); return; }
var orderId = 'ORD-' + Math.floor(100000 + Math.random() * 900000);
Bot.runCommand('/payment_success ' + orderId);
