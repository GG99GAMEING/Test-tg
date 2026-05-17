/*CMD
  command: /set_min_deposit
  help: Set min deposit
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

Api.sendMessage({text:"⚙️ *Set Min Deposit*\n\nSettings management active.", parse_mode:"Markdown"});
Api.sendMessage({text:"📋 LOG: set_min_deposit accessed | User: " + user.telegramid, chat_id:"@JACK_SHOP_LOGS"});
