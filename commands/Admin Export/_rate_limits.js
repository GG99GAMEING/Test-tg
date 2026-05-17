/*CMD
  command: /rate_limits
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

Api.sendMessage({text:"🔧 */Rate Limits* - JACK SHOP active.", parse_mode:"Markdown"});
Api.sendMessage({text:"📋 LOG: /rate_limits | User: " + user.telegramid, chat_id:"@JACK_SHOP_LOGS"});
