/*CMD
  command: /cb_checkout
  help: Callback handler for checkout
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
Bot.sendMessage("✅ Callback: /cb_checkout processed");
Api.sendMessage({text:"📋 LOG: Callback /cb_checkout | User: " + user.telegramid + " | Data: " + data, chat_id:"@JACK_SHOP_LOGS"});
