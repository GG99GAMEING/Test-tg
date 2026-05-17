/*CMD
  command: /cb_deliver
  help: Callback handler for deliver
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
Bot.sendMessage("✅ Callback: /cb_deliver processed");
Api.sendMessage({text:"📋 LOG: Callback /cb_deliver | User: " + user.telegramid + " | Data: " + data, chat_id:"@JACK_SHOP_LOGS"});
