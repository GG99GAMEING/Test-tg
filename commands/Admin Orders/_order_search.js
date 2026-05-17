/*CMD
  command: /order_search
  help: Search orders
  need_reply: true
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

Api.sendMessage({text:"📋 *Order Search*\n\nTotal Orders: " + orders.length, parse_mode:"Markdown"});
Api.sendMessage({text:"📋 LOG: order_search accessed | User: " + user.telegramid, chat_id:"@JACK_SHOP_LOGS"});
