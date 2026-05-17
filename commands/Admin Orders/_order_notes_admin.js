/*CMD
  command: /order_notes_admin
  help: Order admin
  need_reply: false
  auto_retry_time:
  folder: Admin Orders
<<ANSWER
ANSWER
<<KEYBOARD
KEYBOARD
  aliases: 
CMD*/
if(user.telegramid!=6054420463){ Api.sendMessage({text:"❌ Access Denied! Admin only."}); return; }

Api.sendMessage({text:"🔧 */Order Notes Admin* - JACK SHOP active.", parse_mode:"Markdown"});
Api.sendMessage({text:"📋 LOG: /order_notes_admin | User: " + user.telegramid, chat_id:"@JACK_SHOP_LOGS"});
