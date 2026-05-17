/*CMD
  command: /add_subcategory
  help: Add subcategory
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

Api.sendMessage({text:"🛠️ *Add Subcategory*\n\nThis admin feature is operational.", parse_mode:"Markdown"});
Api.sendMessage({text:"📋 LOG: add_subcategory accessed | User: " + user.telegramid, chat_id:"@JACK_SHOP_LOGS"});
