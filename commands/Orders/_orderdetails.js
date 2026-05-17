/*CMD
  command: /orderdetails
  help: Order details
  need_reply: true
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

var orderId = message.trim();
var order = Bot.getProperty('order_' + orderId);
try { order = JSON.parse(order); } catch(e){ order = null; }
if(!order){ Bot.sendMessage('❌ Order nahi mila.'); return; }
var prods = Bot.getProperty('products');
try { prods = JSON.parse(prods); } catch(e){ prods = {}; }
var statusEmoji = order.status == 'confirmed' ? '✅' : order.status == 'shipped' ? '🚚' : order.status == 'delivered' ? '📬' : order.status == 'cancelled' ? '❌' : '⏳';
var text = statusEmoji + ' *Order #' + orderId + '*\n\n' +
  '📅 Date: ' + new Date(order.created_at).toLocaleString('en-IN') + '\n' +
  '📦 Status: ' + (order.status||'pending') + '\n' +
  '💳 Payment: ' + (order.payment_method||'N/A') + ' (' + (order.paid ? 'Paid' : 'Unpaid') + ')\n\n' +
  '*Items:*\n';
(order.items||[]).forEach(function(item, i){
  var p = prods[item.product_id]; var pname = p ? p.name : 'Unknown';
  text += (i+1) + '. ' + pname + ' × ' + (item.qty||1) + ' — ₹' + ((item.price||0)*(item.qty||1)) + '\n';
});
text += '\nSubtotal: ₹' + (order.subtotal||0) + '\n' +
  'Shipping: ₹' + (order.shipping||0) + '\n' +
  'Discount: -₹' + (order.discount||0) + '\n' +
  '*Total: ₹' + (order.total||0) + '*\n\n';
if(order.address){ text += '*Address:* ' + (order.address.line1||'') + ', ' + (order.address.city||'') + ' — ' + (order.address.pincode||'') + '\n📞 ' + (order.address.phone||'N/A') + '\n'; }
if(order.tracking){ text += '\n📮 Tracking: ' + order.tracking + '\n'; }

var buttons = [];
if(order.status == 'pending' || order.status == 'confirmed'){ buttons.push([{title:'❌ Cancel Order',command:'/cancel_order ' + orderId}]); }
if(order.status == 'delivered'){ buttons.push([{title:'🔄 Return',command:'/return_order ' + orderId},{title:'🔄 Reorder',command:'/reorder ' + orderId}]); }
buttons.push([{title:'🧾 Invoice',command:'/order_invoice ' + orderId},{title:'📋 My Orders',command:'/myorders'}]);
Bot.sendInlineKeyboard(buttons, text);
