/*CMD
  command: /cb_ship
  help: Callback handler for ship
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
Bot.sendMessage("✅ Callback: /cb_ship processed");
Api.sendMessage({text:"📋 LOG: Callback /cb_ship | User: " + user.telegramid + " | Data: " + data, chat_id:"@JACK_SHOP_LOGS"});
