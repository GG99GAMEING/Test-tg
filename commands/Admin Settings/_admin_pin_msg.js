/*CMD
  command: /admin_pin_msg
  help: Pin admin message
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

Api.sendMessage({text:"⚙️ *Admin Pin Msg*\n\nSettings management active.", parse_mode:"Markdown"});
Api.sendMessage({text:"📋 LOG: admin_pin_msg accessed | User: " + user.telegramid, chat_id:"@JACK_SHOP_LOGS"});
