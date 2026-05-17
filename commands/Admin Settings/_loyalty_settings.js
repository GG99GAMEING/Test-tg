/*CMD
  command: /loyalty_settings
  help: Loyalty settings
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

Api.sendMessage({text:"⚙️ *Loyalty Settings*\n\nSettings management active.", parse_mode:"Markdown"});
Api.sendMessage({text:"📋 LOG: loyalty_settings accessed | User: " + user.telegramid, chat_id:"@JACK_SHOP_LOGS"});
