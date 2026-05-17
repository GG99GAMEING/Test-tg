/*CMD
  command: /cb_address
  help: Callback handler for address
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
Bot.sendMessage("✅ Callback: /cb_address processed");
Api.sendMessage({text:"📋 LOG: Callback /cb_address | User: " + user.telegramid + " | Data: " + data, chat_id:"@JACK_SHOP_LOGS"});
