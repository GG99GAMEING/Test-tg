/*CMD
  command: /deliver_order
  help: Deliver order
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

Api.sendMessage({text:"📋 *Deliver Order*\n\nTotal Orders: " + orders.length, parse_mode:"Markdown"});
Api.sendMessage({text:"📋 LOG: deliver_order accessed | User: " + user.telegramid, chat_id:"@JACK_SHOP_LOGS"});
