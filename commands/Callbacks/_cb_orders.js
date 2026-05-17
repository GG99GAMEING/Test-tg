/*CMD
  command: /cb_orders
  help: Callback handler for orders
  need_reply: false
  auto_retry_time:
  folder: Callbacks
<<ANSWER
ANSWER
<<KEYBOARD
KEYBOARD
  aliases: 
CMD*/

if(!request.data){ return; }
var data = request.data;
Bot.sendMessage("✅ Callback: /cb_orders processed");
Api.sendMessage({text:"📋 LOG: Callback /cb_orders | User: " + user.telegramid + " | Data: " + data, chat_id:"@JACK_SHOP_LOGS"});
