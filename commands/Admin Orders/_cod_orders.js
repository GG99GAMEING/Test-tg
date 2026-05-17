/*CMD
  command: /cod_orders
  help: COD orders list
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

Api.sendMessage({text:"📋 *Cod Orders*\n\nTotal Orders: " + orders.length, parse_mode:"Markdown"});
Api.sendMessage({text:"📋 LOG: cod_orders accessed | User: " + user.telegramid, chat_id:"@JACK_SHOP_LOGS"});
