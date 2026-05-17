/*CMD
  command: /stats
  help: Bot statistics overview
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

Api.sendMessage({text:"📊 *Stats*\n\nAdmin feature active. Use /adminpanel for full menu.", parse_mode:"Markdown"});
Api.sendMessage({text:"📋 LOG: stats accessed | User: " + user.telegramid, chat_id:"@JACK_SHOP_LOGS"});
