/*CMD
  command: /cb_daily
  help: Callback handler for daily
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
Bot.sendMessage("✅ Callback: /cb_daily processed");
Api.sendMessage({text:"📋 LOG: Callback /cb_daily | User: " + user.telegramid + " | Data: " + data, chat_id:"@JACK_SHOP_LOGS"});
