/*CMD
  command: /export_products
  help: Export products
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

Api.sendMessage({text:"💰 *Export Products*\n\nFinance & export active.", parse_mode:"Markdown"});
Api.sendMessage({text:"📋 LOG: export_products accessed | User: " + user.telegramid, chat_id:"@JACK_SHOP_LOGS"});
