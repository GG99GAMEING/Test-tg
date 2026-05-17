/*CMD
  command: /cb_vip
  help: Callback handler for vip
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
Bot.sendMessage("✅ Callback: /cb_vip processed");
Api.sendMessage({text:"📋 LOG: Callback /cb_vip | User: " + user.telegramid + " | Data: " + data, chat_id:"@JACK_SHOP_LOGS"});
