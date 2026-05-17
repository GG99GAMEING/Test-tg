/*CMD
  command: /cb_removecart
  help: Callback handler for removecart
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
Bot.sendMessage("✅ Callback: /cb_removecart processed");
Api.sendMessage({text:"📋 LOG: Callback /cb_removecart | User: " + user.telegramid + " | Data: " + data, chat_id:"@JACK_SHOP_LOGS"});
