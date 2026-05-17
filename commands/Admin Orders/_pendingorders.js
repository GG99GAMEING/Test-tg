/*CMD
  command: /pendingorders
  help: Pending orders
  need_reply: false
  auto_retry_time:
  folder: Admin Orders
<<ANSWER
ANSWER
<<KEYBOARD
KEYBOARD
  aliases: 
CMD*/
if(user.telegramid!=6054420463){ Api.sendMessage({text:"❌ Access Denied! Admin only."}); return; }

var orders = Bot.getProperty("orders") ? JSON.parse(Bot.getProperty("orders")) : [];

Api.sendMessage({text:"📋 *Pendingorders*\n\nTotal Orders: " + orders.length, parse_mode:"Markdown"});
Api.sendMessage({text:"📋 LOG: pendingorders accessed | User: " + user.telegramid, chat_id:"@JACK_SHOP_LOGS"});
