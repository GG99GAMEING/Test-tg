/*CMD
  command: /cb_shop
  help: Callback handler for shop
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
Bot.sendMessage("✅ Callback: /cb_shop processed");
Api.sendMessage({text:"📋 LOG: Callback /cb_shop | User: " + user.telegramid + " | Data: " + data, chat_id:"@JACK_SHOP_LOGS"});
