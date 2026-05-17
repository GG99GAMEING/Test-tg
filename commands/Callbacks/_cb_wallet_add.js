/*CMD
  command: /cb_wallet_add
  help: Callback handler for wallet_add
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
Bot.sendMessage("✅ Callback: /cb_wallet_add processed");
Api.sendMessage({text:"📋 LOG: Callback /cb_wallet_add | User: " + user.telegramid + " | Data: " + data, chat_id:"@JACK_SHOP_LOGS"});
