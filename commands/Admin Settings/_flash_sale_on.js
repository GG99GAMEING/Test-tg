/*CMD
  command: /flash_sale_on
  help: Enable flash sale
  need_reply: false
  auto_retry_time:
  folder: Admin Settings
<<ANSWER
ANSWER
<<KEYBOARD
KEYBOARD
  aliases: 
CMD*/
if(user.telegramid!=6054420463){ Api.sendMessage({text:"❌ Access Denied! Admin only."}); return; }

Api.sendMessage({text:"⚙️ *Flash Sale On*\n\nSettings management active.", parse_mode:"Markdown"});
Api.sendMessage({text:"📋 LOG: flash_sale_on accessed | User: " + user.telegramid, chat_id:"@JACK_SHOP_LOGS"});
