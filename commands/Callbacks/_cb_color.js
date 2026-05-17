/*CMD
  command: /cb_color
  help: Callback handler for color
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
Bot.sendMessage("✅ Callback: /cb_color processed");
Api.sendMessage({text:"📋 LOG: Callback /cb_color | User: " + user.telegramid + " | Data: " + data, chat_id:"@JACK_SHOP_LOGS"});
