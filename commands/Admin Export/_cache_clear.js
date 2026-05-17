/*CMD
  command: /cache_clear
  help: System admin
  need_reply: false
  auto_retry_time:
  folder: Admin Export
<<ANSWER
ANSWER
<<KEYBOARD
KEYBOARD
  aliases: 
CMD*/
if(user.telegramid!=6054420463){ Api.sendMessage({text:"❌ Access Denied! Admin only."}); return; }

Api.sendMessage({text:"🔧 */Cache Clear* - JACK SHOP active.", parse_mode:"Markdown"});
Api.sendMessage({text:"📋 LOG: /cache_clear | User: " + user.telegramid, chat_id:"@JACK_SHOP_LOGS"});
