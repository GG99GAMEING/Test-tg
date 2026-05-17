/*CMD
  command: /cb_payment
  help: Callback handler for payment
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
Bot.sendMessage("✅ Callback: /cb_payment processed");
Api.sendMessage({text:"📋 LOG: Callback /cb_payment | User: " + user.telegramid + " | Data: " + data, chat_id:"@JACK_SHOP_LOGS"});
