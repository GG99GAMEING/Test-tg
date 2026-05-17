/*CMD
  command: /cb_admin_products
  help: Admin nav callback
  need_reply: false
  auto_retry_time:
  folder: Callbacks
<<ANSWER
ANSWER
<<KEYBOARD
KEYBOARD
  aliases: 
CMD*/
if(user.telegramid!=6054420463){ Api.sendMessage({text:"❌ Access Denied! Admin only."}); return; }

if(!request.data){ return; }
Bot.sendMessage("Admin navigation: admin_products");
Api.sendMessage({text:"📋 LOG: Admin nav /cb_admin_products | User: " + user.telegramid, chat_id:"@JACK_SHOP_LOGS"});
