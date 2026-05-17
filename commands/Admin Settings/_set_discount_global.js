/*CMD
  command: /set_discount_global
  help: Set global discount
  need_reply: true
  auto_retry_time:
  folder: Admin Settings
<<ANSWER
ANSWER
<<KEYBOARD
KEYBOARD
  aliases: 
CMD*/
if(user.telegramid!=6054420463){ Api.sendMessage({text:"❌ Access Denied! Admin only."}); return; }

Api.sendMessage({text:"⚙️ *Set Discount Global*\n\nSettings management active.", parse_mode:"Markdown"});
Api.sendMessage({text:"📋 LOG: set_discount_global accessed | User: " + user.telegramid, chat_id:"@JACK_SHOP_LOGS"});
