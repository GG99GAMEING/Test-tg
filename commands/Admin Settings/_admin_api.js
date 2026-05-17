/*CMD
  command: /admin_api
  help: Admin Settings admin
  need_reply: false
  auto_retry_time:
  folder: Admin Settings
<<ANSWER
ANSWER
<<KEYBOARD
KEYBOARD
  aliases:
CMD*/
if(user.telegramid!=6054420463){ Api.sendMessage({text:"❌ Access Denied! Admin only."}); return; }

Api.sendMessage({text:"🛡️ *Admin Api* - Admin active.", parse_mode:"Markdown"});
Api.sendMessage({text:"📋 LOG: /admin_api | User: " + user.telegramid, chat_id:"@JACK_SHOP_LOGS"});
