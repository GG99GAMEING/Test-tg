/*CMD
  command: /admin_quick_stats
  help: Quick admin stats
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

Api.sendMessage({text:"⚙️ *Admin Quick Stats*\n\nSettings management active.", parse_mode:"Markdown"});
Api.sendMessage({text:"📋 LOG: admin_quick_stats accessed | User: " + user.telegramid, chat_id:"@JACK_SHOP_LOGS"});
