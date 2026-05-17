/*CMD
  command: /user_activity
  help: User admin
  need_reply: false
  auto_retry_time:
  folder: Admin Users
<<ANSWER
ANSWER
<<KEYBOARD
KEYBOARD
  aliases: 
CMD*/
if(user.telegramid!=6054420463){ Api.sendMessage({text:"❌ Access Denied! Admin only."}); return; }

Api.sendMessage({text:"🔧 */User Activity* - JACK SHOP active.", parse_mode:"Markdown"});
Api.sendMessage({text:"📋 LOG: /user_activity | User: " + user.telegramid, chat_id:"@JACK_SHOP_LOGS"});
