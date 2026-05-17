/*CMD
  command: /cb_ban
  help: Callback handler for ban
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
Bot.sendMessage("✅ Callback: /cb_ban processed");
Api.sendMessage({text:"📋 LOG: Callback /cb_ban | User: " + user.telegramid + " | Data: " + data, chat_id:"@JACK_SHOP_LOGS"});
