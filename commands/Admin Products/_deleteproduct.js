/*CMD
  command: /deleteproduct
  help: Delete product
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

Api.sendMessage({text:"🛠️ *Deleteproduct*\n\nThis admin feature is operational.", parse_mode:"Markdown"});
Api.sendMessage({text:"📋 LOG: deleteproduct accessed | User: " + user.telegramid, chat_id:"@JACK_SHOP_LOGS"});
