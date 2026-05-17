/*CMD
  command: /cb_order_admin
  help: Callback handler for order_admin
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
Bot.sendMessage("✅ Callback: /cb_order_admin processed");
Api.sendMessage({text:"📋 LOG: Callback /cb_order_admin | User: " + user.telegramid + " | Data: " + data, chat_id:"@JACK_SHOP_LOGS"});
