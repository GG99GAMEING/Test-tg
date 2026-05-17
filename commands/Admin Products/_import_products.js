/*CMD
  command: /import_products
  help: Import products
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

Api.sendMessage({text:"🛠️ *Import Products*\n\nThis admin feature is operational.", parse_mode:"Markdown"});
Api.sendMessage({text:"📋 LOG: import_products accessed | User: " + user.telegramid, chat_id:"@JACK_SHOP_LOGS"});
