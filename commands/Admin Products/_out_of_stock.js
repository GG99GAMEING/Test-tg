/*CMD
  command: /out_of_stock
  help: Out of stock items
  need_reply: false
  auto_retry_time:
  folder: Admin Products
<<ANSWER
ANSWER
<<KEYBOARD
KEYBOARD
  aliases: 
CMD*/
if(user.telegramid!=6054420463){ Api.sendMessage({text:"❌ Access Denied! Admin only."}); return; }

Api.sendMessage({text:"🛠️ *Out Of Stock*\n\nThis admin feature is operational.", parse_mode:"Markdown"});
Api.sendMessage({text:"📋 LOG: out_of_stock accessed | User: " + user.telegramid, chat_id:"@JACK_SHOP_LOGS"});
