/*CMD
  command: /cb_cancel_order
  help: Callback handler for cancel_order
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
Bot.sendMessage("✅ Callback: /cb_cancel_order processed");
Api.sendMessage({text:"📋 LOG: Callback /cb_cancel_order | User: " + user.telegramid + " | Data: " + data, chat_id:"@JACK_SHOP_LOGS"});
