/*CMD
  command: /cb_broadcast
  help: Callback handler for broadcast
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
Bot.sendMessage("✅ Callback: /cb_broadcast processed");
Api.sendMessage({text:"📋 LOG: Callback /cb_broadcast | User: " + user.telegramid + " | Data: " + data, chat_id:"@JACK_SHOP_LOGS"});
