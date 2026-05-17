/*CMD
  command: /allusers
  help: All users list
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

Api.sendMessage({text:"👥 *Allusers*\n\nAdmin user management active.", parse_mode:"Markdown"});
Api.sendMessage({text:"📋 LOG: allusers accessed | User: " + user.telegramid, chat_id:"@JACK_SHOP_LOGS"});
