/*CMD
  command: /cb_category
  help: Callback handler for category
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
Bot.sendMessage("✅ Callback: /cb_category processed");
Api.sendMessage({text:"📋 LOG: Callback /cb_category | User: " + user.telegramid + " | Data: " + data, chat_id:"@JACK_SHOP_LOGS"});
