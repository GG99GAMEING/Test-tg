/*CMD
  command: /verify_payment
  help: Verify payment (admin)
  need_reply: true
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

if(uid != '6054420463'){ Bot.sendMessage('⛔ Access Denied!'); return; }
var parts = message.trim().split(' ');
var orderId = parts[0]; var action = parts[1] || 'confirm';
var order = Bot.getProperty('order_' + orderId);
try { order = JSON.parse(order); } catch(e){ order = null; }
if(!order){ Bot.sendMessage('❌ Order nahi mila: ' + orderId); return; }
if(action == 'confirm'){
  order.status = 'confirmed'; order.paid = true; order.verified_at = new Date().toISOString();
  var orderUserId = order.user_id;
  var refBy = Bot.getProperty('user_referred_by_' + orderUserId);
  if(refBy){
    var pendingBonusKey = 'ref_pending_bonus_' + refBy + '_' + orderUserId;
    var pendingBonus = Bot.getProperty(pendingBonusKey);
    if(pendingBonus){ try { Libs.ResourcesLib.userRes('balance', refBy).add(parseInt(pendingBonus)); } catch(e){} Bot.setProperty(pendingBonusKey, 0, 'integer'); }
  }
  Bot.sendMessage('✅ Payment verified for #' + orderId + '!', {chat_id: orderUserId});
} else {
  order.status = 'payment_failed';
  Bot.sendMessage('❌ Payment rejected for #' + orderId + '.', {chat_id: orderUserId});
}
Bot.setProperty('order_' + orderId, JSON.stringify(order), 'string');
Bot.sendMessage('✅ Order #' + orderId + ' updated: ' + order.status);
var logMsg = '💳 *Payment ' + action + '*\n🆔 ' + orderId + '\n👤 Admin: ' + (user.first_name||'Admin');
Bot.sendMessage(logMsg, {chat_id: LOG, parse_mode:'Markdown'});
