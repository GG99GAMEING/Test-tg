/*CMD
  command: /myorders
  help: My orders
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
if(userOrders.length == 0){ Bot.sendMessage('📦 Abhi tak koi order nahi hai.\n\nShop karna shuru karein: /shop'); return; }
var text = '📦 *My Orders* (' + userOrders.length + ')\n\n';
var show = userOrders.slice(0, 10);
var buttons = [];
show.forEach(function(e){
  var st = e[1].status || 'pending';
  var emoji = st == 'confirmed' ? '✅' : st == 'shipped' ? '🚚' : st == 'delivered' ? '📬' : st == 'cancelled' ? '❌' : '⏳';
  text += emoji + ' #' + e[0] + ' — ₹' + (e[1].total||0) + ' (' + st + ')\n';
  buttons.push([{title: emoji + ' #' + e[0] + ' — ₹' + (e[1].total||0), command: '/orderdetails ' + e[0]}]);
});
if(userOrders.length > 10){ text += '\n...aur ' + (userOrders.length - 10) + ' orders. /orderhistory se sab dekhein.'; }
buttons.push([{title:'📋 Full History',command:'/orderhistory'},{title:'🏠 Main Menu',command:'/mainmenu'}]);
Bot.sendInlineKeyboard(buttons, text);
