/*CMD
  command: /_send_log
  help: Send log to channel
  need_reply: false
  auto_retry_time:
  folder: Utils
<<ANSWER
ANSWER
<<KEYBOARD
KEYBOARD
  aliases: 
CMD*/

var logMsg = options || "Log event";
Api.sendMessage({text:"📋 " + logMsg + " | User: " + user.telegramid + " | Time: " + new Date().toISOString(), chat_id:"@JACK_SHOP_LOGS"});
