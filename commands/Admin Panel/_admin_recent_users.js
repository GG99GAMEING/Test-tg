/*CMD
  command: /admin_recent_users
  help: Recent users list
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

Api.sendMessage({text:"📊 *Admin Recent Users*\n\nAdmin feature active. Use /adminpanel for full menu.", parse_mode:"Markdown"});
Api.sendMessage({text:"📋 LOG: admin_recent_users accessed | User: " + user.telegramid, chat_id:"@JACK_SHOP_LOGS"});
