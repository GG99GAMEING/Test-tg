/*CMD
  command: /edit_category
  help: Edit category
  need_reply: true
  auto_retry_time:
  folder: Admin Products
<<ANSWER
ANSWER
<<KEYBOARD
KEYBOARD
  aliases: 
CMD*/
if(user.telegramid!=6054420463){ Api.sendMessage({text:"❌ Access Denied! Admin only."}); return; }

Api.sendMessage({text:"🛠️ *Edit Category*\n\nThis admin feature is operational.", parse_mode:"Markdown"});
Api.sendMessage({text:"📋 LOG: edit_category accessed | User: " + user.telegramid, chat_id:"@JACK_SHOP_LOGS"});
