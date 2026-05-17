/*CMD
  command: /cb_spin
  help: Callback handler for spin
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
Bot.sendMessage("✅ Callback: /cb_spin processed");
Api.sendMessage({text:"📋 LOG: Callback /cb_spin | User: " + user.telegramid + " | Data: " + data, chat_id:"@JACK_SHOP_LOGS"});
