/*CMD
  command: /set_upi_id
  help: Set UPI ID
  need_reply: true
  auto_retry_time:
  folder: Admin Settings
<<ANSWER
ANSWER
<<KEYBOARD
KEYBOARD
  aliases: 
CMD*/
if(user.telegramid!=6054420463){ Api.sendMessage({text:"❌ Access Denied! Admin only."}); return; }

Api.sendMessage({text:"⚙️ *Set Upi Id*\n\nSettings management active.", parse_mode:"Markdown"});
Api.sendMessage({text:"📋 LOG: set_upi_id accessed | User: " + user.telegramid, chat_id:"@JACK_SHOP_LOGS"});
