/*CMD
  command: /user_stats
  help: User statistics
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

Api.sendMessage({text:"👥 *User Stats*\n\nAdmin user management active.", parse_mode:"Markdown"});
Api.sendMessage({text:"📋 LOG: user_stats accessed | User: " + user.telegramid, chat_id:"@JACK_SHOP_LOGS"});
