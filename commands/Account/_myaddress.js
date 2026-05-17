/*CMD
  command: /myaddress
  help: Saved addresses
  need_reply: false
  auto_retry_time: 
  folder: Account
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
if(!addr || !addr.line1){ Bot.sendMessage('📍 Koi saved address nahi hai.\nAdd karein: /add_address'); return; }
var text = '📍 *Saved Address*\n\n' + addr.line1;
if(addr.line2) text += '\n' + addr.line2;
text += '\n' + (addr.city||'') + ', ' + (addr.state||'') + ' — ' + (addr.pincode||'') + '\n📞 ' + (addr.phone||'N/A');
var buttons = [[{title:'✏️ Edit',command:'/edit_address'},{title:'🗑️ Delete',command:'/delete_address'}],[{title:'🔙 Account',command:'/account'}]];
Bot.sendInlineKeyboard(buttons, text);
