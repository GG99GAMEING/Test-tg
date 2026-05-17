/*CMD
  command: /product_images_admin
  help: Manage product images
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

Api.sendMessage({text:"🛠️ *Product Images Admin*\n\nThis admin feature is operational.", parse_mode:"Markdown"});
Api.sendMessage({text:"📋 LOG: product_images_admin accessed | User: " + user.telegramid, chat_id:"@JACK_SHOP_LOGS"});
