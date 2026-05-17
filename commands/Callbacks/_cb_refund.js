/*CMD
  command: /cb_refund
  help: Callback handler for refund
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
Bot.sendMessage("✅ Callback: /cb_refund processed");
Api.sendMessage({text:"📋 LOG: Callback /cb_refund | User: " + user.telegramid + " | Data: " + data, chat_id:"@JACK_SHOP_LOGS"});
