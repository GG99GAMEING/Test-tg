/*CMD
  command: /cb_coupon_admin
  help: Callback handler for coupon_admin
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
Bot.sendMessage("✅ Callback: /cb_coupon_admin processed");
Api.sendMessage({text:"📋 LOG: Callback /cb_coupon_admin | User: " + user.telegramid + " | Data: " + data, chat_id:"@JACK_SHOP_LOGS"});
