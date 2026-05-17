/*CMD
  command: /cb_track
  help: Callback handler for track
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
Bot.sendMessage("✅ Callback: /cb_track processed");
Api.sendMessage({text:"📋 LOG: Callback /cb_track | User: " + user.telegramid + " | Data: " + data, chat_id:"@JACK_SHOP_LOGS"});
