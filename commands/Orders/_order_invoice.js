/*CMD
  command: /order_invoice
  help: Order invoice
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
var shopName = Bot.getProperty('shop_name') || 'JACK SHOP';
var text = '🧾 *INVOICE*\n\n' +
  '━━━━━━━━━━━━━━━\n' +
  '🏪 ' + shopName + '\n' +
  '🆔 Invoice #' + orderId + '\n' +
  '📅 ' + new Date(order.created_at).toLocaleString('en-IN') + '\n' +
  '━━━━━━━━━━━━━━━\n\n' +
  '*Bill To:*\n' + (user.first_name||'User');
if(order.address){ text += '\n' + (order.address.line1||'') + '\n' + (order.address.city||'') + ' — ' + (order.address.pincode||''); }
text += '\n\n*Items:*\n';
(order.items||[]).forEach(function(item, i){
  var p = prods[item.product_id]; var pname = p ? p.name : 'Unknown';
  text += (i+1) + '. ' + pname + ' × ' + (item.qty||1) + ' = ₹' + ((item.price||0)*(item.qty||1)) + '\n';
});
text += '\n━━━━━━━━━━━━━━━\n' +
  'Subtotal: ₹' + (order.subtotal||0) + '\n' +
  'Shipping: ₹' + (order.shipping||0) + '\n' +
  'Discount: -₹' + (order.discount||0) + '\n' +
  '*TOTAL: ₹' + (order.total||0) + '*\n' +
  '━━━━━━━━━━━━━━━\n\n' +
  '💳 Payment: ' + (order.payment_method||'N/A') + '\n' +
  '📦 Status: ' + (order.status||'pending') + '\n\n' +
  'Thank you for shopping at ' + shopName + '! 🇮🇳';
Bot.sendMessage(text, {parse_mode:'Markdown'});
