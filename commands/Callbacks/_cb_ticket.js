/*CMD
  command: /cb_ticket
  help: Callback handler for ticket
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
Bot.sendMessage("✅ Callback: /cb_ticket processed");
Api.sendMessage({text:"📋 LOG: Callback /cb_ticket | User: " + user.telegramid + " | Data: " + data, chat_id:"@JACK_SHOP_LOGS"});
