/*CMD
  command: /cb_size
  help: Callback handler for size
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
Bot.sendMessage("✅ Callback: /cb_size processed");
Api.sendMessage({text:"📋 LOG: Callback /cb_size | User: " + user.telegramid + " | Data: " + data, chat_id:"@JACK_SHOP_LOGS"});
