/*CMD
  command: /cb_cart
  help: Callback handler for cart
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
Bot.sendMessage("✅ Callback: /cb_cart processed");
Api.sendMessage({text:"📋 LOG: Callback /cb_cart | User: " + user.telegramid + " | Data: " + data, chat_id:"@JACK_SHOP_LOGS"});
