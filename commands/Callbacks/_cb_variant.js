/*CMD
  command: /cb_variant
  help: Callback handler for variant
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
Bot.sendMessage("✅ Callback: /cb_variant processed");
Api.sendMessage({text:"📋 LOG: Callback /cb_variant | User: " + user.telegramid + " | Data: " + data, chat_id:"@JACK_SHOP_LOGS"});
