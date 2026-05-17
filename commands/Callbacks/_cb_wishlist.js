/*CMD
  command: /cb_wishlist
  help: Callback handler for wishlist
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
Bot.sendMessage("✅ Callback: /cb_wishlist processed");
Api.sendMessage({text:"📋 LOG: Callback /cb_wishlist | User: " + user.telegramid + " | Data: " + data, chat_id:"@JACK_SHOP_LOGS"});
