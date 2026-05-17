/*CMD
  command: /staff_add
  help: Admin Panel admin
  need_reply: false
  auto_retry_time:
  folder: Admin Panel
<<ANSWER
ANSWER
<<KEYBOARD
KEYBOARD
  aliases:
CMD*/
if(user.telegramid!=6054420463){ Api.sendMessage({text:"❌ Access Denied! Admin only."}); return; }

Api.sendMessage({text:"🛡️ *Staff Add* - Admin active.", parse_mode:"Markdown"});
Api.sendMessage({text:"📋 LOG: /staff_add | User: " + user.telegramid, chat_id:"@JACK_SHOP_LOGS"});
