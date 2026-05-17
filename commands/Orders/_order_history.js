/*CMD
  command: /order_history
  help: Full order history
  need_reply: false
  auto_retry_time: 
  folder: Orders
<<ANSWER
ANSWER
<<KEYBOARD
KEYBOARD
  aliases: 
CMD*/
var uid = String(user.telegramid);
var LOG = Bot.getProperty('log_channel') || '@JACK_SHOP_LOGS';

var orders = Bot.getProperty('orders');
try { orders = JSON.parse(orders); } catch(e){ orders = {}; }
var userOrders = Object.entries(orders).filter(function(e){ return String(e[1].user_id) == uid; });
userOrders.sort(function(a,b){ return (b[1].created_at||'').localeCompare(a[1].created_at||''); });
if(userOrders.length == 0){ Bot.sendMessage('📦 Abhi tak koi order nahi hai.'); return; }
var text = '📋 *Full Order History* (' + userOrders.length + ')\n\n';
userOrders.forEach(function(e){
  text += '• #' + e[0] + ' — ₹' + (e[1].total||0) + ' [' + (e[1].status||'pending') + '] ' + new Date(e[1].created_at).toLocaleDateString('en-IN') + '\n';
});
Bot.sendMessage(text, {parse_mode:'Markdown'});
