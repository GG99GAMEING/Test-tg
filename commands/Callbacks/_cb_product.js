/*CMD
  command: /cb_product
  help: Callback handler for product
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
Bot.sendMessage("✅ Callback: /cb_product processed");
Api.sendMessage({text:"📋 LOG: Callback /cb_product | User: " + user.telegramid + " | Data: " + data, chat_id:"@JACK_SHOP_LOGS"});
