/*CMD
  command: /cb_wallet
  help: Callback handler for wallet
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
Bot.sendMessage("✅ Callback: /cb_wallet processed");
Api.sendMessage({text:"📋 LOG: Callback /cb_wallet | User: " + user.telegramid + " | Data: " + data, chat_id:"@JACK_SHOP_LOGS"});
