/*CMD
  command: /checkout_address
  help: Use saved address
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

var addr = Bot.getProperty('address_' + uid);
try { addr = JSON.parse(addr); } catch(e){ addr = null; }
if(!addr || !addr.line1){ Bot.sendMessage('📍 Koi saved address nahi hai. New address daaliye: /checkout_new_address'); return; }
var text = '📍 *Saved Address*\n\n' + addr.line1;
if(addr.line2) text += '\n' + addr.line2;
text += '\n' + (addr.city||'') + ', ' + (addr.state||'') + ' — ' + (addr.pincode||'');
if(addr.phone) text += '\n📞 ' + addr.phone;
Bot.setProperty('checkout_address_' + uid, JSON.stringify(addr), 'string');
var co = Bot.getProperty('checkout_' + uid);
try { co = JSON.parse(co); } catch(e){ co = {}; }
co.stage = 'payment'; Bot.setProperty('checkout_' + uid, JSON.stringify(co), 'string');
var buttons = [[{title:'✅ Use This',command:'/checkout_confirm'},{title:'📝 Enter New',command:'/checkout_new_address'},{title:'❌ Cancel',command:'/checkout_cancel'}]];
Bot.sendInlineKeyboard(buttons, text);
