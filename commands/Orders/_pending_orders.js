/*CMD
  command: /pending_orders
  help: Pending orders
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
var pending = Object.entries(orders).filter(function(e){ return String(e[1].user_id) == uid && (e[1].status == 'pending' || e[1].status == 'confirmed'); });
if(pending.length == 0){ Bot.sendMessage('✅ Koi pending orders nahi hain!'); return; }
var text = '⏳ *Pending Orders* (' + pending.length + ')\n\n';
pending.forEach(function(e){ text += '• #' + e[0] + ' — ₹' + (e[1].total||0) + '\n'; });
Bot.sendMessage(text, {parse_mode:'Markdown'});
