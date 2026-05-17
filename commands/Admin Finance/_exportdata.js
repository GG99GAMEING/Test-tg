/*CMD
  command: /exportdata
  help: Export data menu
  need_reply: false
  auto_retry_time:
  folder: Admin Finance
<<ANSWER
ANSWER
<<KEYBOARD
KEYBOARD
  aliases: 
CMD*/
if(user.telegramid!=6054420463){ Api.sendMessage({text:"❌ Access Denied! Admin only."}); return; }

Api.sendMessage({text:"💰 *Exportdata*\n\nFinance & export active.", parse_mode:"Markdown"});
Api.sendMessage({text:"📋 LOG: exportdata accessed | User: " + user.telegramid, chat_id:"@JACK_SHOP_LOGS"});
